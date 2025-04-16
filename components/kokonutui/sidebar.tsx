"use client"

import type React from "react"

import {
  BarChart2,
  Receipt,
  Building2,
  CreditCard,
  Folder,
  Wallet,
  Users2,
  Shield,
  MessagesSquare,
  Video,
  Settings,
  HelpCircle,
  Menu,
  Home,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "../ui/logo"
import { motion } from "framer-motion"

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  function handleNavigation() {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    {
      section: "Overview",
      items: [
        { href: "/dashboard", icon: Home, label: "Dashboard" },
        { href: "/analytics", icon: BarChart2, label: "Analytics" },
        { href: "/organization", icon: Building2, label: "Organization" },
        { href: "/projects", icon: Folder, label: "Projects" },
      ],
    },
    {
      section: "Finance",
      items: [
        { href: "/transactions", icon: Wallet, label: "Transactions" },
        { href: "/invoices", icon: Receipt, label: "Invoices" },
        { href: "/payments", icon: CreditCard, label: "Payments" },
      ],
    },
    {
      section: "Team",
      items: [
        { href: "/members", icon: Users2, label: "Members" },
        { href: "/permissions", icon: Shield, label: "Permissions" },
        { href: "/chat", icon: MessagesSquare, label: "Chat" },
        { href: "/meetings", icon: Video, label: "Meetings" },
      ],
    },
  ]

  function NavItem({
    href,
    icon: Icon,
    children,
    isActive,
  }: {
    href: string
    icon: any
    children: React.ReactNode
    isActive: boolean
  }) {
    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className={`flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200 relative ${
          isActive
            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium"
            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
        }`}
      >
        <Icon className={`h-4 w-4 mr-3 flex-shrink-0 ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`} />
        {children}
        {isActive && (
          <motion.div
            layoutId="activeNavIndicator"
            className="absolute left-0 w-1 h-full bg-blue-600 dark:bg-blue-400 rounded-r-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Link>
    )
  }

  return (
    <>
      <motion.button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </motion.button>

      <motion.nav
        className={`
          fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        initial={false}
      >
        <div className="h-full flex flex-col">
          <Link
            href="/dashboard"
            className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]"
          >
            <Logo />
          </Link>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              {navItems.map((section) => (
                <div key={section.section}>
                  <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {section.section}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <NavItem key={item.label} href={item.href} icon={item.icon} isActive={pathname === item.href}>
                        {item.label}
                      </NavItem>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="space-y-1">
              <NavItem href="/settings" icon={Settings} isActive={pathname === "/settings"}>
                Settings
              </NavItem>
              <NavItem href="/help" icon={HelpCircle} isActive={pathname === "/help"}>
                Help
              </NavItem>
            </div>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  )
}
