import React from 'react'
import Home from '../routes/Home'
import Projects from '../routes/Projects'
import Blog from '../routes/Blog'
import Resume from '../routes/Resume'

import { posts } from './posts'
import Post from '../components/Post'

export const routes = [
  { name: 'Home', href: '/', path: '/', element: <Home />, nav: true },
  {
    name: 'Projects',
    href: '/#/projects',
    path: '/projects',
    element: <Projects />,
    nav: true,
  },
  {
    name: 'Posts',
    href: '/#/posts',
    path: '/posts',
    element: <Blog />,
    nav: true,
  },
  {
    name: 'Resume',
    href: '/#/resume',
    path: '/resume',
    element: <Resume />,
    nav: true,
  },
  {
    name: 'post1',
    href: '/#/posts/post1',
    path: '/posts/post1',
    element: (
      <Post
        id={posts[0].id}
        title={posts[0].title}
        author={posts[0].author}
        date={posts[0].date}
      />
    ),
    nav: false,
  },
]
