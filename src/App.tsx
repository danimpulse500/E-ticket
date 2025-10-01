import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import Events from "./pages/Events"
import Orders from "./pages/Orders"
import Tickets from "./pages/Tickets"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
