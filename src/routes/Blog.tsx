import React from 'react'

import AllPosts from '../components/AllPosts'

const Blog = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f1eb] text-center">
      <div className="text-lg font-bold">
        <AllPosts />
      </div>
    </div>
  )
}

export default Blog
