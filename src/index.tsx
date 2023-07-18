import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div className="overflow-y-hidden bg-slate-100">
      <Router />
    </div>
  </React.StrictMode>,
)
