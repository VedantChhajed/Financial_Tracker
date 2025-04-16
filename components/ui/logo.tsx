import { BarChart2 } from "lucide-react"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <BarChart2 className="w-5 h-5" />
      </div>
      <span className="text-lg font-semibold text-gray-900 dark:text-white">Financial Dashboard</span>
    </div>
  )
}
