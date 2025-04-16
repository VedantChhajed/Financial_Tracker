"use client"

import Layout from "@/components/kokonutui/layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  Briefcase,
  FileText,
  Mail,
  Phone,
  MapPin,
  Globe,
  Plus,
  Search,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Input } from "@/components/ui/input"

export default function OrganizationPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Organization</h1>
            <p className="text-muted-foreground">Manage your organization structure and team members.</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Add Member
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:w-1/3 flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
            >
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-bold mb-2">Acme Financial Inc.</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Established in 2010 • Financial Services</p>
              <div className="grid grid-cols-2 gap-4 w-full mb-6">
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Departments</div>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>contact@acmefinancial.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>123 Finance St, New York, NY</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span>www.acmefinancial.com</span>
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-2/3">
              <Tabs defaultValue="team" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="departments">Departments</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="team" className="space-y-4">
                  <div className="flex justify-between mb-4">
                    <Input
                      placeholder="Search team members..."
                      className="max-w-sm"
                      prefix={<Search className="w-4 h-4 text-gray-400" />}
                    />
                    <select className="px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1F1F23]">
                      <option>All Departments</option>
                      <option>Finance</option>
                      <option>Marketing</option>
                      <option>Operations</option>
                      <option>Technology</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Sarah Johnson",
                        role: "Chief Financial Officer",
                        department: "Finance",
                        email: "sarah@acmefinancial.com",
                        avatar:
                          "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
                      },
                      {
                        name: "Michael Chen",
                        role: "Financial Analyst",
                        department: "Finance",
                        email: "michael@acmefinancial.com",
                        avatar:
                          "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
                      },
                      {
                        name: "Emily Rodriguez",
                        role: "Marketing Director",
                        department: "Marketing",
                        email: "emily@acmefinancial.com",
                        avatar: "/placeholder.svg?height=80&width=80",
                      },
                      {
                        name: "David Kim",
                        role: "Operations Manager",
                        department: "Operations",
                        email: "david@acmefinancial.com",
                        avatar: "/placeholder.svg?height=80&width=80",
                      },
                    ].map((member, i) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                              {member.department}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{member.email}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="departments" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Finance",
                        members: 12,
                        lead: "Sarah Johnson",
                        icon: Briefcase,
                        color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                      },
                      {
                        name: "Marketing",
                        members: 8,
                        lead: "Emily Rodriguez",
                        icon: Users,
                        color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                      },
                      {
                        name: "Operations",
                        members: 15,
                        lead: "David Kim",
                        icon: Building2,
                        color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
                      },
                      {
                        name: "Technology",
                        members: 7,
                        lead: "Alex Patel",
                        icon: Briefcase,
                        color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
                      },
                    ].map((dept, i) => (
                      <motion.div
                        key={dept.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${dept.color}`}>
                            <dept.icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-medium">{dept.name} Department</h3>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Team Lead:</span>
                            <span>{dept.lead}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Members:</span>
                            <span>{dept.members}</span>
                          </div>
                        </div>
                        <button className="w-full mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                          View Department
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="documents" className="space-y-4">
                  <div className="flex justify-between mb-4">
                    <Input
                      placeholder="Search documents..."
                      className="max-w-sm"
                      prefix={<Search className="w-4 h-4 text-gray-400" />}
                    />
                    <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1">
                      <Plus className="w-4 h-4" />
                      Upload
                    </button>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        name: "Annual Financial Report 2023",
                        type: "PDF",
                        size: "4.2 MB",
                        updated: "Apr 10, 2024",
                        icon: FileText,
                      },
                      {
                        name: "Employee Handbook",
                        type: "DOCX",
                        size: "2.8 MB",
                        updated: "Mar 15, 2024",
                        icon: FileText,
                      },
                      {
                        name: "Q1 2024 Budget Projections",
                        type: "XLSX",
                        size: "1.5 MB",
                        updated: "Jan 05, 2024",
                        icon: FileText,
                      },
                      {
                        name: "Organization Chart",
                        type: "PDF",
                        size: "3.1 MB",
                        updated: "Feb 22, 2024",
                        icon: FileText,
                      },
                    ].map((doc, i) => (
                      <motion.div
                        key={doc.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <doc.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div>
                            <h3 className="font-medium">{doc.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                {doc.type}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Updated: {doc.updated}</span>
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
