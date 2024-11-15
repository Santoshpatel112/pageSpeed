import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lighthouse from './components/lighthouse.jsx'
import { ContextProvider } from './context/newContext.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'Lighthouse',
    element:<Lighthouse/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
   
  </StrictMode>,
)
