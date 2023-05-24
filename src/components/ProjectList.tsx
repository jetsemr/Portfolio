import React from 'react'
import Project from './Project'

const ProjectList = ({ projects }: Products) => {
  return (
    <div className="m-auto w-[80%] flex flex-wrap lg:justify-between">
      {projects.map((item) => {
        console.log()
        return (
          <Project
            key={item.name}
            name={item.name}
            img={item.img}
            url={item.url}
            code={item.code}
            description={item.description}
            date={item.date}
          />
        )
      })}
    </div>
  )
}

export default ProjectList
