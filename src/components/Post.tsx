import React, { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx'

const Post = ({
  id,
  title,
  author,
  date,
  subheader,
}: {
  id: string
  title: string
  author: string
  date: string
  subheader: string
}) => {
  const [postMarkdown, setPostMarkdown] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await import(`../data/md/${id}.md`)
        const response = await fetch(res.default)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const text = await response.text()
        setPostMarkdown(text)
      } catch (err) {
        setError('Error loading post. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()

    return () => {
      setPostMarkdown('')
      setError(null)
    }
  }, [id])

  if (loading) {
    return <div className="mt-10 text-center text-gray-500">Loading...</div>
  }

  if (error) {
    return <div className="mt-10 text-center text-red-500">{error}</div>
  }

  return (
    <div className="mt-10 max-w-4xl mx-auto p-5">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <article className="prose lg:prose-sm max-w-none">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <h5 className="text-gray-600 mb-4 text-sm">
            {author} | {date}
          </h5>
          <Markdown>{postMarkdown}</Markdown>
        </article>
      </div>
    </div>
  )
}

export default Post
