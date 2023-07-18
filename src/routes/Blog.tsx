import React from 'react'

import AllPosts from '../components/AllPosts'

const Blog = () => {
  return (
    <div className="static h-screen w-screen text-center">
      <div className="text-lg font-bold">
        <AllPosts />
      </div>
    </div>
  )
}

export default Blog
