import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './page/user/login/Login'
import Register from './page/user/register/register'
import LandingPage from './page/landing page/landingPage'
import Dashboard from './page/user/dashboard/dashboard'
import StatusPembayaran from './page/user/status pembayaran/statusPembayaran'
import HasilTryout from './page/hasil tryout/hasilTryOut'
import DetailHasilTryout from './page/hasil tryout/detail/detailHasilTryOut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/status-pembayaran" element={<StatusPembayaran />} />
        <Route path="/hasil-tryout" element={<HasilTryout />} />
        <Route path="/detail-hasil-tryout" element={<DetailHasilTryout />} />
      </Routes>
    </Router>
  )
}

export default App
