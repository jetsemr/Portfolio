import React from 'react'
import Home from '../routes/Home'
import Projects from '../routes/Projects'
import Blog from '../routes/Blog'

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
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jetsemrick', // Replace with your LinkedIn profile link
    element: <div></div>,
    nav: true,
    target: '_blank', // Ensures the link opens in a new tab
    rel: 'noopener noreferrer', // Provides security against reverse tabnabbing
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
        subheader={posts[0].subheader}
        date={posts[0].date}
      />
    ),
    nav: false,
  },
]
