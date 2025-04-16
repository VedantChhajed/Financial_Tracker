"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Bell, ChevronRight, Search } from "lucide-react"
import Profile01 from "./profile-01"
import Link from "next/link"
import { ThemeToggle } from "../theme-toggle"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function TopNav() {
  const pathname = usePathname()
  const [notifications, setNotifications] = useState(3)
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean)

    return [
      { label: "Financial Dashboard", href: "/dashboard" },
      ...paths.slice(0).map((path, i) => {
        return {
          label: path.charAt(0).toUpperCase() + path.slice(1),
          href: `/${paths.slice(0, i + 1).join("/")}`,
        }
      }),
    ]
  }

  const breadcrumbs = generateBreadcrumbs()

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications)
    if (notifications > 0) {
      setNotifications(0)
    }
  }

  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <div className="font-medium text-sm hidden sm:flex items-center space-x-1 truncate max-w-[300px]">
        {breadcrumbs.map((item, index) => (
          <div key={item.label} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 mx-1" />}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-100">{item.label}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
        <motion.button
          type="button"
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors relative"
          onClick={handleNotificationClick}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
          {notifications > 0 && (
            <motion.span
              className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {notifications}
            </motion.span>
          )}
        </motion.button>

        <motion.button
          type="button"
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
          onClick={() => setSearchOpen(!searchOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
        </motion.button>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
                alt="User avatar"
                width={28}
                height={28}
                className="rounded-full ring-2 ring-gray-200 dark:ring-[#2B2B30] sm:w-8 sm:h-8 cursor-pointer"
              />
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
          >
            <Profile01 avatar="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 dark:bg-black/50 z-50 flex items-start justify-center pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="w-full max-w-xl mx-4 bg-white dark:bg-[#1F1F23] rounded-lg shadow-xl overflow-hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <Input type="search" placeholder="Search..." className="w-full" autoFocus />
              </div>
              <div className="border-t border-gray-200 dark:border-[#2B2B30] p-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">Recent searches</div>
                <div className="mt-2 space-y-1">
                  {["Financial reports", "Q3 analytics", "Project timeline"].map((item) => (
                    <div
                      key={item}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-[#2B2B30] rounded-md cursor-pointer text-sm flex items-center"
                    >
                      <Search className="h-3.5 w-3.5 mr-2 text-gray-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            className="fixed right-0 top-16 mt-1 mr-4 w-80 bg-white dark:bg-[#1F1F23] rounded-lg shadow-xl z-50 border border-gray-200 dark:border-[#2B2B30]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 border-b border-gray-200 dark:border-[#2B2B30] flex justify-between items-center">
              <h3 className="font-medium">Notifications</h3>
              <button className="text-xs text-blue-600 dark:text-blue-400">Mark all as read</button>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {[
                { title: "New comment on your post", time: "2 minutes ago", read: false },
                { title: "Your report is ready to download", time: "1 hour ago", read: false },
                { title: "Meeting scheduled for tomorrow", time: "3 hours ago", read: false },
                { title: "Payment received from client", time: "Yesterday", read: true },
                { title: "New feature available", time: "2 days ago", read: true },
              ].map((notification, i) => (
                <motion.div
                  key={i}
                  className={`p-3 border-b border-gray-100 dark:border-[#2B2B30] hover:bg-gray-50 dark:hover:bg-[#2B2B30] cursor-pointer ${
                    !notification.read ? "bg-blue-50 dark:bg-blue-900/10" : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="text-sm font-medium">{notification.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</div>
                </motion.div>
              ))}
            </div>
            <div className="p-3 text-center">
              <Link
                href="/notifications"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                onClick={() => setShowNotifications(false)}
              >
                View all notifications
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
