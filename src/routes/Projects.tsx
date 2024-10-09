import React from 'react'
import ProjectList from '../components/ProjectList'

const projects: Products = {
  projects: [
    {
      name: 'Debate Tournament Judge Tool',
      code: 'https://github.com/jetsemr/Voting-Record-Calculator',
      description:
        'Tool to calculate the aff and neg win rate for each judge in a pool. Utilized Python and sourced data from tabroom.com using pandas and beautifulsoup.',
      date: 'November 2022',
    },
  ],
}

const Projects = () => {
  return (
    <div className="static h-screen w-screen">
      <ProjectList projects={projects.projects} />
    </div>
  )
}

export default Projects
