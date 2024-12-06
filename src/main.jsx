import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './Dashboard.jsx'
import Looker from './Looker.jsx'
import About from './About.jsx'




const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/dashboard',
    element : <Dashboard/>
  },
  {
    path : '/looker',
    element : <Looker/>
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
