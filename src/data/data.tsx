import React from 'react'
import Home from '../routes/Home'
import Projects from '../routes/Projects'
import Blog from '../routes/Blog'
import Resume from '../routes/Resume'

export const routes = [
  { name: 'Home', href: '/', path: '/', element: <Home /> },
  {
    name: 'Projects',
    href: '/#/projects',
    path: '/projects',
    element: <Projects />,
  },
  { name: 'Posts', href: '/#/posts', path: '/posts', element: <Blog /> },
  { name: 'Resume', href: '/#/resume', path: '/resume', element: <Resume /> },
]
