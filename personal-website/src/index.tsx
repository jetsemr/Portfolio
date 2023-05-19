import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './routes/Home'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
