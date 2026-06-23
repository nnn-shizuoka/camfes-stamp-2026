import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import AppLayout from './components/routes/AppLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AppLayout />
    </HashRouter>
  </StrictMode>,
)
