import React, { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx'

const Post = ({
  id,
  title,
  author,
  date,
}: {
  id: string
  title: string
  author: string
  date: string
}) => {
  const [postMarkdown, setPostMarkdown] = useState('#Hello')

  useEffect(() => {
    import(`../data/md/${id}.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostMarkdown(response))
        .catch((err) => console.log(err))
    })
  })

  console.log(postMarkdown)
  return (
    <div className="mt-10">
      <article className="m-auto prose">
        <h2>{title}</h2>
        <h5>
          {author} | {date}
        </h5>
        <Markdown>{postMarkdown}</Markdown>
      </article>
    </div>
  )
}

export default Post
