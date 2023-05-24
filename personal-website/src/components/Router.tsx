import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './Navigation'
import Home from '../routes/Home'
import Projects from '../routes/Projects'
import Blog from '../routes/Blog'
import Resume from '../routes/Resume'

const routes = [
  { name: 'Home', path: '/', element: <Home /> },
  { name: 'Portfolio', path: '/portfolio', element: <Projects /> },
  { name: 'Blog', path: '/blog', element: <Blog /> },
  { name: 'Resume', path: 'resume', element: <Resume /> },
]

function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {routes.map((item) => {
          return (
            <Route key={item.name} path={item.path} element={item.element} />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
