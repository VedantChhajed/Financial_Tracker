"use client"

import Layout from "@/components/kokonutui/layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Folder, Clock, Users, Calendar, Plus, Search, MoreHorizontal, CheckCircle2, XCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground">Manage and track your financial projects.</p>
          </div>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search projects..."
              className="w-[200px]"
              prefix={<Search className="w-4 h-4 text-gray-400" />}
            />
            <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1">
              <Plus className="w-4 h-4" />
              New Project
            </button>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: "1",
                  name: "Q2 Financial Analysis",
                  description: "Comprehensive analysis of Q2 financial performance",
                  progress: 75,
                  status: "In Progress",
                  dueDate: "May 15, 2024",
                  members: 4,
                  tasks: { completed: 15, total: 20 },
                },
                {
                  id: "2",
                  name: "Budget Planning 2025",
                  description: "Annual budget planning for the next fiscal year",
                  progress: 30,
                  status: "In Progress",
                  dueDate: "Jun 30, 2024",
                  members: 6,
                  tasks: { completed: 6, total: 18 },
                },
                {
                  id: "3",
                  name: "Investment Portfolio Review",
                  description: "Quarterly review of investment performance",
                  progress: 60,
                  status: "In Progress",
                  dueDate: "Apr 28, 2024",
                  members: 3,
                  tasks: { completed: 8, total: 12 },
                },
                {
                  id: "4",
                  name: "Tax Optimization Strategy",
                  description: "Developing strategies to optimize tax efficiency",
                  progress: 45,
                  status: "In Progress",
                  dueDate: "Jul 10, 2024",
                  members: 5,
                  tasks: { completed: 9, total: 22 },
                },
                {
                  id: "5",
                  name: "Financial Risk Assessment",
                  description: "Evaluating potential financial risks and mitigation strategies",
                  progress: 15,
                  status: "Just Started",
                  dueDate: "Aug 20, 2024",
                  members: 4,
                  tasks: { completed: 3, total: 15 },
                },
                {
                  id: "6",
                  name: "Expense Reduction Initiative",
                  description: "Identifying opportunities to reduce operational expenses",
                  progress: 90,
                  status: "Almost Done",
                  dueDate: "Apr 25, 2024",
                  members: 7,
                  tasks: { completed: 18, total: 20 },
                },
              ].map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Folder className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-medium truncate">{project.name}</h3>
                      </div>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-500 dark:text-gray-400">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <Clock className="w-4 h-4 text-gray-500 mb-1" />
                          <span className="text-xs text-gray-500">Due</span>
                          <span className="text-xs font-medium">{project.dueDate}</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <Users className="w-4 h-4 text-gray-500 mb-1" />
                          <span className="text-xs text-gray-500">Team</span>
                          <span className="text-xs font-medium">{project.members}</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-gray-500 mb-1" />
                          <span className="text-xs text-gray-500">Tasks</span>
                          <span className="text-xs font-medium">
                            {project.tasks.completed}/{project.tasks.total}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-800 p-3 bg-gray-50 dark:bg-gray-800/30">
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.status === "Almost Done"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : project.status === "Just Started"
                              ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                              : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        {project.status}
                      </span>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View Project</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: "c1",
                  name: "Q1 Financial Analysis",
                  description: "Comprehensive analysis of Q1 financial performance",
                  completedDate: "Mar 31, 2024",
                  members: 4,
                  tasks: { completed: 20, total: 20 },
                },
                {
                  id: "c2",
                  name: "Annual Audit Preparation",
                  description: "Preparation of documents for annual financial audit",
                  completedDate: "Feb 15, 2024",
                  members: 5,
                  tasks: { completed: 25, total: 25 },
                },
              ].map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-medium truncate">{project.name}</h3>
                      </div>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <Calendar className="w-4 h-4 text-gray-500 mb-1" />
                        <span className="text-xs text-gray-500">Completed</span>
                        <span className="text-xs font-medium">{project.completedDate}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <Users className="w-4 h-4 text-gray-500 mb-1" />
                        <span className="text-xs text-gray-500">Team</span>
                        <span className="text-xs font-medium">{project.members}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-gray-500 mb-1" />
                        <span className="text-xs text-gray-500">Tasks</span>
                        <span className="text-xs font-medium">
                          {project.tasks.completed}/{project.tasks.total}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-800 p-3 bg-gray-50 dark:bg-gray-800/30">
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                        Completed
                      </span>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View Report</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="archived" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: "a1",
                  name: "Legacy System Migration",
                  description: "Migration of financial data from legacy systems",
                  archivedDate: "Jan 10, 2024",
                  status: "Completed",
                  icon: CheckCircle2,
                  iconColor: "text-green-600 dark:text-green-400",
                  bgColor: "bg-green-100 dark:bg-green-900/30",
                },
                {
                  id: "a2",
                  name: "Cost Reduction Plan 2023",
                  description: "Strategic plan to reduce operational costs",
                  archivedDate: "Dec 15, 2023",
                  status: "Cancelled",
                  icon: XCircle,
                  iconColor: "text-red-600 dark:text-red-400",
                  bgColor: "bg-red-100 dark:bg-red-900/30",
                },
              ].map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] overflow-hidden opacity-80"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 ${project.bgColor} rounded-lg`}>
                          <project.icon className={`w-4 h-4 ${project.iconColor}`} />
                        </div>
                        <h3 className="font-medium truncate">{project.name}</h3>
                      </div>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-500">Archived on {project.archivedDate}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-800 p-3 bg-gray-50 dark:bg-gray-800/30">
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${project.bgColor} ${project.iconColor}`}>
                        {project.status}
                      </span>
                      <div className="flex gap-2">
                        <button className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Restore</button>
                        <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
