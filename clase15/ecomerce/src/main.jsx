import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'


import App from './App.jsx'
//import AppPropsDrilling from './AppPropsDrilling.jsx'

//import AppUseContextSimple from './AppUseContextSimple.jsx'
//import AppUseContextHook from './AppUseContextHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>

)
