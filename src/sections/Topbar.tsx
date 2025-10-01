// import { motion } from 'framer-motion'
import {
//   Home,
//   Calendar,
//   Ticket,
//   ListChecks,
//   FileText,
//   Settings,
  Search,
  Bell,
//   Plus,
//   Download,
//   LogOut,
  User,
} from 'lucide-react'
export default function Topbar() {
  return (
    <header className="h-16 sticky top-0 z-30 px-6 flex items-center justify-between bg-white/30 dark:bg-black/30 backdrop-blur-xl border-b border-white/20 dark:border-white/10">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            placeholder="Search orders, tickets or events"
            className="w-[420px] h-10 pl-10 pr-4 rounded-xl bg-white/50 dark:bg-white/10 border border-white/20 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <Search className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 transition">
          <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right mr-2">
            <div className="text-sm font-medium">Admin</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">admin@company.com</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow-md text-white">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  )
}
