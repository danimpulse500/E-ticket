import { motion } from 'framer-motion'
import {

  Plus,
  Download,

} from 'lucide-react'
import Sidebar from "../sections/Sidebar"
import Topbar from "../sections/Topbar"


type Stat = {
  id: string
  title: string
  value: string
  subtitle?: string
  gradient: string
}

const stats: Stat[] = [
  { id: 's1', title: 'Tickets Sold', value: '2,418', subtitle: 'Today', gradient: 'from-blue-500 to-purple-500' },
  { id: 's2', title: 'Revenue', value: '₦1,234,500', subtitle: 'This month', gradient: 'from-emerald-500 to-teal-400' },
  { id: 's3', title: 'Upcoming', value: '3 Events', subtitle: 'Next 7 days', gradient: 'from-indigo-500 to-pink-500' },
]

const recentOrders = [
  { id: 'o1', event: 'Lagos → Abuja', buyer: 'Ifeoma I.', status: 'Paid', amount: '₦12,000' },
  { id: 'o2', event: 'Concert — The Wave', buyer: 'Tunde A.', status: 'Paid', amount: '₦5,000' },
  { id: 'o3', event: 'Tech Conf 2025', buyer: 'Maria K.', status: 'Pending', amount: '₦25,000' },
]

function StatCard({ stat }: { stat: Stat }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 shadow-lg flex-1">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{stat.title}</div>
          <div className="mt-2 text-2xl font-semibold">{stat.value}</div>
          {stat.subtitle && <div className="text-sm text-gray-400 mt-1">{stat.subtitle}</div>}
        </div>
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white font-semibold shadow-md`}>
          <span className="text-sm">{stat.value.split(' ')[0]}</span>
        </div>
      </div>
    </motion.div>
  )
}

function QuickActions() {
  return (
    <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 shadow-lg">
      <h4 className="font-medium mb-3">Quick Actions</h4>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow hover:scale-[1.01] transition-transform flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Event
        </button>
        <button className="px-4 py-2 rounded-xl border border-white/20 dark:border-white/5 bg-white/20 dark:bg-white/5 flex items-center gap-2 hover:bg-white/30">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>
    </div>
  )
}

function OrdersTable() {
  return (
    <div className="rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 overflow-hidden shadow-lg">
      <table className="min-w-full table-auto">
        <thead className="text-left text-xs text-gray-500 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Event</th>
            <th className="px-6 py-3">Buyer</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((r) => (
            <tr key={r.id} className="border-t border-white/20 dark:border-white/10">
              <td className="px-6 py-4">{r.event}</td>
              <td className="px-6 py-4">{r.buyer}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  r.status === 'Paid'
                    ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                    : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                }`}>
                  {r.status}
                </span>
              </td>
              <td className="px-6 py-4">{r.amount}</td>
              <td className="px-6 py-4">
                <button className="px-3 py-1 rounded-lg border border-white/20 dark:border-white/10 text-sm hover:bg-white/20">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Sidebar />

      <div className="ml-72">
        <Topbar />

        <main className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-5">
            {stats.map((s) => (
              <StatCard key={s.id} stat={s} />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recent Orders</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">Showing last 7 orders</div>
              </div>
              <OrdersTable />
            </div>

            <div>
              <QuickActions />

              <div className="mt-5 p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 shadow-lg">
                <h4 className="font-medium">Activity</h4>
                <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Order <strong>#o2</strong> was paid by Tunde A.</li>
                  <li>Event <strong>Tech Conf 2025</strong> created.</li>
                  <li>3 tickets marked used today.</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
