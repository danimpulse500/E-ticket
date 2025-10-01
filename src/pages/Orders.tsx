import Sidebar from "../sections/Sidebar"
import Topbar from "../sections/Topbar"

export default function Orders() {
  const orders = [
    { id: 'o1', event: 'Lagos → Abuja', buyer: 'Ifeoma I.', status: 'Paid', amount: '₦12,000', date: '2025-09-20' },
    { id: 'o2', event: 'Concert — The Wave', buyer: 'Tunde A.', status: 'Paid', amount: '₦5,000', date: '2025-09-18' },
    { id: 'o3', event: 'Tech Conf 2025', buyer: 'Maria K.', status: 'Pending', amount: '₦25,000', date: '2025-09-17' },
    { id: 'o4', event: 'Enugu → Lagos', buyer: 'Bola T.', status: 'Paid', amount: '₦15,500', date: '2025-09-15' },
    { id: 'o5', event: 'Art Festival', buyer: 'Samuel D.', status: 'Cancelled', amount: '₦8,000', date: '2025-09-12' },
  ]

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-72 flex flex-col min-h-screen">
        <Topbar />

        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Orders</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage and track all customer orders.
            </p>
          </div>

          {/* Orders Table */}
          <div className="rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 overflow-hidden shadow-lg">
            <table className="min-w-full table-auto">
              <thead className="text-left text-xs text-gray-500 dark:text-gray-400 bg-white/30 dark:bg-black/30">
                <tr>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Event</th>
                  <th className="px-6 py-3">Buyer</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-white/20 dark:border-white/10">
                    <td className="px-6 py-4 font-medium">{order.id}</td>
                    <td className="px-6 py-4">{order.event}</td>
                    <td className="px-6 py-4">{order.buyer}</td>
                    <td className="px-6 py-4">{order.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Paid'
                            ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                            : order.status === 'Pending'
                            ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                            : 'bg-red-500/20 text-red-600 dark:text-red-400'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{order.amount}</td>
                    <td className="px-6 py-4">
                      <button className="px-3 py-1 rounded-lg border border-white/20 dark:border-white/10 text-sm hover:bg-white/20">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-white/20 dark:border-white/10">
          © {new Date().getFullYear()} E-Ticket Co. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
