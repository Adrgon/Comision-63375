//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import RenderProps from './RenderProps'
//import HighOrderComponent from './HighOrderComponent'
//import CustomHooks from './CustomHook.jsx'
//import Children from './Children.jsx'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RenderProps />
  </StrictMode>

)
