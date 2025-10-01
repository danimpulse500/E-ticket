import React from "react"
import Sidebar from "../sections/Sidebar"
import Topbar from "../sections/Topbar"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
