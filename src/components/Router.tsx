import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Navigation from './Navigation'
import Footer from './Footer'

import { routes } from '../data/data'

function Router() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        {routes.map((item) => {
          return (
            <Route key={item.name} path={item.path} element={item.element} />
          )
        })}
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default Router
