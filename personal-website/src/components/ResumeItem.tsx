import React, { FC, memo } from 'react'

const ResumeItem: FC<{ item: ResumeEntry }> = memo(({ item }) => {
  const { entity, title, date, location, content } = item

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left text-sm">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{entity}</h2>
        <h6 className="text-sm">{title}</h6>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">
            {location}
          </span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  )
})

export default ResumeItem
