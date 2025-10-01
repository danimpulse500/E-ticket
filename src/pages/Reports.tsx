import Sidebar from "../sections/Sidebar"
import Topbar from "../sections/Topbar"
import { FileText, Download, Calendar } from "lucide-react"

export default function Reports() {
  const reports = [
    { id: "r1", title: "Monthly Sales", type: "PDF", date: "2025-09-01", status: "Generated" },
    { id: "r2", title: "Event Attendance", type: "Excel", date: "2025-08-28", status: "Pending" },
    { id: "r3", title: "Revenue Analysis", type: "PDF", date: "2025-08-20", status: "Generated" },
    { id: "r4", title: "Ticket Usage", type: "CSV", date: "2025-08-15", status: "Pending" },
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
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5" /> Reports
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              View and download generated reports.
            </p>
          </div>

          {/* Reports Table */}
          <div className="rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 overflow-hidden shadow-lg">
            <table className="min-w-full table-auto">
              <thead className="text-left text-xs text-gray-500 dark:text-gray-400 bg-white/30 dark:bg-black/30">
                <tr>
                  <th className="px-6 py-3">Report ID</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-t border-white/20 dark:border-white/10">
                    <td className="px-6 py-4 font-medium">{report.id}</td>
                    <td className="px-6 py-4">{report.title}</td>
                    <td className="px-6 py-4">{report.type}</td>
                    <td className="px-6 py-4 flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" /> {report.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          report.status === "Generated"
                            ? "bg-green-500/20 text-green-600 dark:text-green-400"
                            : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="px-3 py-1 rounded-lg border border-white/20 dark:border-white/10 text-sm flex items-center gap-1 hover:bg-white/20">
                        <Download className="w-4 h-4" /> Download
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
