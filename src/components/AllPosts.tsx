import React from 'react'
import { posts } from '../data/posts'

const AllPosts = () => {
  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
        Posts
      </h2>
      <hr className="m-auto mb-8 border-2 w-1/2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((item) => (
          <a
            key={item.id}
            href={`#/posts/${item.id}`}
            className="block"
            rel="noreferrer"
            target="_self"
          >
            <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h3>
              <div className="text-xs text-gray-500 mb-4">
                {item.author} | {item.date}
              </div>
              <p className="text-xs font-light text-gray-600 mb-1 text-left">
                {' '}
                {item.subheader}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default AllPosts
