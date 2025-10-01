import Sidebar from "../sections/Sidebar"
import Topbar from "../sections/Topbar"
import { User, Lock, Mail, Save } from "lucide-react"

export default function Settings() {
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
              <User className="w-5 h-5" /> Settings
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Update your account and preferences.
            </p>
          </div>

          {/* Account Settings Form */}
          <div className="rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 p-6 shadow-lg space-y-6">
            <h3 className="text-lg font-semibold">Account Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="p-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="p-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Username</label>
                <input
                  type="text"
                  placeholder="johndoe"
                  className="p-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="p-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <button className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md flex items-center gap-2 hover:scale-[1.02] transition-transform">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>

          {/* Preferences Section */}
          <div className="rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/5 p-6 shadow-lg space-y-4">
            <h3 className="text-lg font-semibold">Preferences</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" /> Receive newsletter
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" /> Enable notifications
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" /> Dark mode
              </label>
            </div>
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
