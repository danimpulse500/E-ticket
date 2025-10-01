import {
  Plus,
  LogOut,
  Home,
  Calendar,
  Ticket,
  ListChecks,
  FileText,
  Settings,
  X,
  MapPin,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Sidebar() {
  const nav = [
    { id: "d", icon: <Home className="w-5 h-5" />, label: "Dashboard", path: "/" },
    { id: "e", icon: <Calendar className="w-5 h-5" />, label: "Events", path: "/events" },
    { id: "o", icon: <ListChecks className="w-5 h-5" />, label: "Orders", path: "/orders" },
    { id: "t", icon: <Ticket className="w-5 h-5" />, label: "Tickets", path: "/tickets" },
    { id: "r", icon: <FileText className="w-5 h-5" />, label: "Reports", path: "/reports" },
    { id: "s", icon: <Settings className="w-5 h-5" />, label: "Settings", path: "/settings" },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [attendees, setAttendees] = useState("")
  const [price, setPrice] = useState("") // ticket price (string while typing)

  const handleSubmit = () => {
    // simple validation
    if (!title.trim() || !date || !location.trim() || !price) {
      alert("Please fill in title, date, location and ticket price.")
      return
    }

    const parsedPrice = parseFloat(price)
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      alert("Please enter a valid ticket price.")
      return
    }

    const newEvent = {
      title,
      date,
      location,
      attendees: attendees || "0",
      price: parsedPrice, // number in Naira (or chosen currency)
    }
    console.log("Created event:", newEvent)

    // TODO: call API or update shared state/store here

    // reset
    setTitle("")
    setDate("")
    setLocation("")
    setAttendees("")
    setPrice("")
    setIsOpen(false)
  }

  return (
    <aside className="w-72 flex-shrink-0 bg-white/30 dark:bg-black/30 backdrop-blur-xl border-r border-white/20 dark:border-white/10 h-screen p-5 fixed">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md text-white font-bold">
          ET
        </div>
        <div>
          <h3 className="text-lg font-semibold">E-Ticket Co.</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {nav.map((n) => (
          <Link
            key={n.id}
            to={n.path}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-white/20 dark:bg-white/10 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-200"
          >
            <div className="p-2 rounded-lg bg-white/40 dark:bg-white/20">{n.icon}</div>
            <span className="text-sm font-medium">{n.label}</span>
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="mt-auto pt-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md"
        >
          <Plus className="w-4 h-4" /> New Event
        </button>

        <button className="mt-3 w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-white/20">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md p-6 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold mb-4">New Event</h2>

            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-sm mb-1">Event Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Tech Conference 2025"
                  className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Eko Hotel, Lagos"
                  className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1 flex items-center gap-1">
                  <Users className="w-4 h-4" /> Attendees
                </label>
                <input
                  type="number"
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  placeholder="1200"
                  className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Ticket Price */}
              <div className="flex flex-col">
                <label className="text-sm mb-1 flex items-center gap-1">
                  Ticket Price (₦)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="1200.00"
                  className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-6 w-full px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow hover:scale-[1.02] transition-transform"
            >
              Create Event
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
