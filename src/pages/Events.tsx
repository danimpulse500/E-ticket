import { Plus, Calendar, MapPin, Users, Edit, Trash2 } from "lucide-react"
import Sidebar from "../sections/Sidebar"
import Topbar from "../sections/Topbar"

const events = [
  {
    id: "ev1",
    title: "Tech Conference 2025",
    date: "Feb 25, 2025",
    location: "Eko Hotel, Lagos",
    attendees: "1,200",
    status: "Upcoming",
  },
  {
    id: "ev2",
    title: "Music Fest – The Wave",
    date: "Jan 18, 2025",
    location: "TBS Arena, Lagos",
    attendees: "5,800",
    status: "Completed",
  },
  {
    id: "ev3",
    title: "Startup Pitch Night",
    date: "Mar 05, 2025",
    location: "Civic Center, Abuja",
    attendees: "300",
    status: "Upcoming",
  },
]

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            event.status === "Upcoming"
              ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
              : "bg-gray-500/20 text-gray-600 dark:text-gray-400"
          }`}
        >
          {event.status}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> {event.date}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {event.location}
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" /> {event.attendees} attendees
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="px-3 py-1 text-xs rounded-lg bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/5 hover:bg-white/30 flex items-center gap-1">
          <Edit className="w-4 h-4" /> Edit
        </button>
        <button className="px-3 py-1 text-xs rounded-lg bg-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-500/30 flex items-center gap-1">
          <Trash2 className="w-4 h-4" /> Delete
        </button>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Sidebar />

      <div className="ml-72">
        <Topbar />

        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Events</h2>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md flex items-center gap-2">
              <Plus className="w-4 h-4" /> New Event
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {events.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
