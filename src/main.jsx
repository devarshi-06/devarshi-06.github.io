import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/outfit"
import "@fontsource/roboto"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
