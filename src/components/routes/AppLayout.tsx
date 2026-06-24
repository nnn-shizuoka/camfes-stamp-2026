import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '../pages/AppShell'

export default function AppLayout() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />} />
      <Route path="/stamp/:id" element={<AppShell />} />
      <Route path="/complete" element={<AppShell />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
