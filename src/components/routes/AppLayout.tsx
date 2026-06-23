import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '../pages/AppShell'

export default function AppLayout() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />} />
      <Route path="/stamps" element={<Navigate to="/" replace />} />
      <Route path="/stamp/:id" element={<AppShell />} />
      <Route path="/complete" element={<AppShell />} />
      <Route path="/certificate" element={<AppShell />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
