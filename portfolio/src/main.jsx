import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "@fontsource/comfortaa"
import "@fontsource/raleway"
import "@fontsource/nunito"
import "@fontsource/poppins"
import "@fontsource/roboto"
import "@fontsource/playfair-display"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
