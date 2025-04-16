import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router'
import '@styles/styles.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)