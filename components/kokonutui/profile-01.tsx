"use client"

import type React from "react"

import { LogOut, MoveUpRight, Settings, CreditCard, FileText, User, Bell, Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useToast } from "@/components/ui/use-toast"

interface MenuItem {
  label: string
  value?: string
  href: string
  icon?: React.ReactNode
  external?: boolean
  onClick?: () => void
}

interface Profile01Props {
  name: string
  role: string
  avatar: string
  subscription?: string
}

const defaultProfile = {
  name: "Eugene An",
  role: "Financial Analyst",
  avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
  subscription: "Pro Plan",
} satisfies Required<Profile01Props>

export default function Profile01({
  name = defaultProfile.name,
  role = defaultProfile.role,
  avatar = defaultProfile.avatar,
  subscription = defaultProfile.subscription,
}: Partial<Profile01Props> = defaultProfile) {
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
      duration: 3000,
    })
  }

  const menuItems: MenuItem[] = [
    {
      label: "Subscription",
      value: subscription,
      href: "#",
      icon: <CreditCard className="w-4 h-4" />,
      external: false,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      label: "Terms & Policies",
      href: "#",
      icon: <FileText className="w-4 h-4" />,
      external: true,
    },
    {
      label: "Theme",
      value: theme === "dark" ? "Dark" : "Light",
      href: "#",
      icon: theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: <Bell className="w-4 h-4" />,
    },
    {
      label: "Account",
      href: "/account",
      icon: <User className="w-4 h-4" />,
    },
  ]

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="relative px-6 pt-12 pb-6">
          <div className="flex items-center gap-4 mb-8">
            <motion.div className="relative shrink-0" whileHover={{ scale: 1.05 }}>
              <Image
                src={avatar || "/placeholder.svg"}
                alt={name}
                width={72}
                height={72}
                className="rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{role}</p>
            </div>
          </div>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
          <div className="space-y-2">
            {menuItems.map((item) => (
              <motion.div key={item.label} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="flex items-center justify-between p-2 w-full
                      hover:bg-zinc-50 dark:hover:bg-zinc-800/50 
                      rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.label}</span>
                    </div>
                    <div className="flex items-center">
                      {item.value && (
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">{item.value}</span>
                      )}
                      {item.external && <MoveUpRight className="w-4 h-4" />}
                    </div>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-2 
                      hover:bg-zinc-50 dark:hover:bg-zinc-800/50 
                      rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.label}</span>
                    </div>
                    <div className="flex items-center">
                      {item.value && (
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">{item.value}</span>
                      )}
                      {item.external && <MoveUpRight className="w-4 h-4" />}
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}

            <motion.button
              type="button"
              whileHover={{ x: 4, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-2 
                                hover:bg-red-100 dark:hover:bg-red-900/20 
                                rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <LogOut className="w-4 h-4 text-red-500 dark:text-red-400" />
                <span className="text-sm font-medium text-red-600 dark:text-red-400">Logout</span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
