import { X, Calendar, MapPin, Users, Plus } from "lucide-react"
import { useState } from "react"

export default function NewEventPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [attendees, setAttendees] = useState("")

  const handleSubmit = () => {
    const newEvent = { title, date, location, attendees }
    console.log("Created event:", newEvent)

    // reset
    setTitle("")
    setDate("")
    setLocation("")
    setAttendees("")
    setIsOpen(false)
  }

  return (
    <div className="p-6">
      {/* New Event Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md"
      >
        <Plus className="w-4 h-4" /> New Event
      </button>

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
    </div>
  )
}
