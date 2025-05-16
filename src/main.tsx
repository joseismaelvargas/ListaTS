import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import { Pendientes } from './components/Pendientes'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Pendientes></Pendientes>
  </StrictMode>,
)
