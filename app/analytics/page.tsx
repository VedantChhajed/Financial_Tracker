"use client"

import Layout from "@/components/kokonutui/layout"
import { Card } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, DollarSign, Users, TrendingUp, TrendingDown, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function AnalyticsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">Track your financial performance and metrics.</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1F1F23]">
              <option>Last 30 days</option>
              <option>Last quarter</option>
              <option>This year</option>
              <option>All time</option>
            </select>
            <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign, trend: "up" },
            { title: "Active Users", value: "2,345", change: "+10.3%", icon: Users, trend: "up" },
            { title: "Expenses", value: "$12,789.50", change: "-5.2%", icon: TrendingDown, trend: "down" },
            { title: "Profit Margin", value: "28.5%", change: "+2.4%", icon: TrendingUp, trend: "up" },
          ].map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0F0F12] p-6 rounded-xl border border-gray-200 dark:border-[#1F1F23] shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div
                  className={`p-2 rounded-full ${
                    stat.trend === "up"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                      : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                  }`}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <div
                className={`flex items-center mt-4 text-sm ${
                  stat.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.trend === "up" ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                <span>{stat.change} from last period</span>
              </div>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-4">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Revenue Overview</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Monthly revenue performance</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                    <span className="text-xs">This Year</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mr-1"></div>
                    <span className="text-xs">Last Year</span>
                  </div>
                </div>
              </div>
              <div className="h-80">
                <LineChart
                  data={[
                    { name: "Jan", current: 4000, previous: 3000 },
                    { name: "Feb", current: 5000, previous: 4000 },
                    { name: "Mar", current: 6000, previous: 5500 },
                    { name: "Apr", current: 8000, previous: 6500 },
                    { name: "May", current: 9000, previous: 7500 },
                    { name: "Jun", current: 10000, previous: 8500 },
                    { name: "Jul", current: 11000, previous: 9500 },
                    { name: "Aug", current: 12000, previous: 10500 },
                    { name: "Sep", current: 13000, previous: 11000 },
                    { name: "Oct", current: 14000, previous: 12000 },
                    { name: "Nov", current: 15000, previous: 13000 },
                    { name: "Dec", current: 16000, previous: 14000 },
                  ]}
                  index="name"
                  categories={["current", "previous"]}
                  colors={["blue", "gray"]}
                  valueFormatter={(value) => `$${value.toLocaleString()}`}
                  yAxisWidth={60}
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">User Growth</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Monthly active users</p>
                </div>
              </div>
              <div className="h-80">
                <BarChart
                  data={[
                    { month: "Jan", users: 1200 },
                    { month: "Feb", users: 1400 },
                    { month: "Mar", users: 1500 },
                    { month: "Apr", users: 1700 },
                    { month: "May", users: 1800 },
                    { month: "Jun", users: 2100 },
                    { month: "Jul", users: 2300 },
                    { month: "Aug", users: 2400 },
                    { month: "Sep", users: 2500 },
                    { month: "Oct", users: 2700 },
                    { month: "Nov", users: 2900 },
                    { month: "Dec", users: 3100 },
                  ]}
                  index="month"
                  categories={["users"]}
                  colors={["blue"]}
                  valueFormatter={(value) => value.toLocaleString()}
                  yAxisWidth={60}
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-4">
            <Card className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Expense Tracking</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Monthly expenses</p>
                </div>
              </div>
              <div className="h-80">
                <BarChart
                  data={[
                    { month: "Jan", expenses: 3200 },
                    { month: "Feb", expenses: 3400 },
                    { month: "Mar", expenses: 3100 },
                    { month: "Apr", expenses: 3700 },
                    { month: "May", expenses: 3500 },
                    { month: "Jun", expenses: 3900 },
                    { month: "Jul", expenses: 4100 },
                    { month: "Aug", expenses: 3800 },
                    { month: "Sep", expenses: 4200 },
                    { month: "Oct", expenses: 4000 },
                    { month: "Nov", expenses: 4300 },
                    { month: "Dec", expenses: 4500 },
                  ]}
                  index="month"
                  categories={["expenses"]}
                  colors={["red"]}
                  valueFormatter={(value) => `$${value.toLocaleString()}`}
                  yAxisWidth={60}
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="breakdown" className="space-y-4">
            <Card className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Expense Breakdown</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">By category</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-80">
                  <PieChart
                    data={[
                      { name: "Marketing", value: 35 },
                      { name: "Development", value: 25 },
                      { name: "Operations", value: 20 },
                      { name: "Sales", value: 15 },
                      { name: "Other", value: 5 },
                    ]}
                    index="name"
                    category="value"
                    valueFormatter={(value) => `${value}%`}
                    colors={["blue", "cyan", "indigo", "violet", "gray"]}
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  {[
                    { name: "Marketing", value: 35, color: "bg-blue-500" },
                    { name: "Development", value: 25, color: "bg-cyan-500" },
                    { name: "Operations", value: 20, color: "bg-indigo-500" },
                    { name: "Sales", value: 15, color: "bg-violet-500" },
                    { name: "Other", value: 5, color: "bg-gray-500" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full ${item.color} mr-2`}></div>
                        <span>{item.name}</span>
                      </div>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]"
          >
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Upcoming Financial Events
            </h2>
            <div className="space-y-3">
              {[
                { title: "Quarterly Tax Payment", date: "April 15, 2024", priority: "high" },
                { title: "Annual Budget Review", date: "May 10, 2024", priority: "medium" },
                { title: "Investor Meeting", date: "May 22, 2024", priority: "high" },
                { title: "Financial Audit", date: "June 5, 2024", priority: "medium" },
              ].map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${event.priority === "high" ? "bg-red-500" : "bg-yellow-500"}`}
                    ></div>
                    <div>
                      <h3 className="text-sm font-medium">{event.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
                    </div>
                  </div>
                  <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">Details</button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]"
          >
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Performance Metrics
            </h2>
            <div className="space-y-4">
              {[
                { name: "Revenue Growth", value: 18.2, target: 15, status: "above" },
                { name: "Customer Acquisition", value: 12.5, target: 15, status: "below" },
                { name: "Retention Rate", value: 85.3, target: 80, status: "above" },
                { name: "Average Order Value", value: 95.4, target: 100, status: "below" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{metric.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{metric.value}%</span>
                      <span className={`text-xs ${metric.status === "above" ? "text-green-500" : "text-red-500"}`}>
                        {metric.status === "above" ? "↑" : "↓"} Target: {metric.target}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${metric.status === "above" ? "bg-green-500" : "bg-blue-500"}`}
                      style={{ width: `${(metric.value / (metric.target * 1.5)) * 100}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
