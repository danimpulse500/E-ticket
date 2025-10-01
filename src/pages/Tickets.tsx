import Sidebar from "../sections/Sidebar"
import Topbar from "../sections/Topbar"
import { Ticket, User, Calendar, CheckCircle2, XCircle } from "lucide-react"

export default function Tickets() {
  const tickets = [
    { id: "t1", event: "Tech Conference 2025", holder: "John Doe", type: "VIP", status: "Valid", date: "2025-09-20" },
    { id: "t2", event: "Concert — The Wave", holder: "Aisha Bello", type: "Regular", status: "Used", date: "2025-09-18" },
    { id: "t3", event: "Startup Pitch Night", holder: "David Mark", type: "VIP", status: "Valid", date: "2025-09-15" },
    { id: "t4", event: "Art Festival", holder: "Sola K.", type: "Regular", status: "Cancelled", date: "2025-09-12" },
  ]

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 flex flex-col min-h-screen">
        <Topbar />

        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Ticket className="w-5 h-5" /> Tickets
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage and validate all issued tickets.
            </p>
          </div>

          {/* Tickets Table */}
          <div className="rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 overflow-hidden shadow-lg">
            <table className="min-w-full table-auto">
              <thead className="text-left text-xs text-gray-500 dark:text-gray-400 bg-white/30 dark:bg-black/30">
                <tr>
                  <th className="px-6 py-3">Ticket ID</th>
                  <th className="px-6 py-3">Event</th>
                  <th className="px-6 py-3">Holder</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="border-t border-white/20 dark:border-white/10">
                    <td className="px-6 py-4 font-medium">{ticket.id}</td>
                    <td className="px-6 py-4">{ticket.event}</td>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" /> {ticket.holder}
                    </td>
                    <td className="px-6 py-4">{ticket.type}</td>
                    <td className="px-6 py-4">{ticket.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                          ticket.status === "Valid"
                            ? "bg-green-500/20 text-green-600 dark:text-green-400"
                            : ticket.status === "Used"
                            ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                            : "bg-red-500/20 text-red-600 dark:text-red-400"
                        }`}
                      >
                        {ticket.status === "Valid" ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : ticket.status === "Used" ? (
                          <Calendar className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        {ticket.status}
                      </span>
                    </td>
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
