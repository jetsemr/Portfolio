import React from 'react'

import { posts } from '../data/posts'

const AllPosts = () => {
  return (
    <div className="mt-5">
      <div className="mt-[10px] text-center text-3xl font-bold">Posts</div>
      <hr className="m-auto border-2 w-1/4" />
      {posts.map((item) => {
        return (
          <div className="m-auto mt-5 h-20 sm:w-1/4 w-3/4 bg-slate-300 rounded-md">
            <div className="text-gray-600">{item.title}</div>
            <div className="text-xs font-light">{item.date}</div>
            <a
              href={'/posts/' + item.id}
              rel="noreferrer"
              className="rounded-md bg-blue-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Post
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default AllPosts
