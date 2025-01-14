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
            className="block group h-full"
            rel="noreferrer"
            target="_self"
          >
            <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl h-[160px] flex flex-col">
              <h3 className="text-xl font-semibold text-gray-700 mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs font-light text-gray-600 mb-3 text-left line-clamp-3 flex-grow">
                {item.subheader}
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-medium text-[#475569] group-hover:text-[#334155]">
                  Read more
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default AllPosts
