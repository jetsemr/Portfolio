import React from 'react'
import ProjectList from '../components/ProjectList'
import calendar from '../img/calendar.png'
import calculator from '../img/calculator.png'
import connect4 from '../img/connect4.png'

const projects: Products = {
  projects: [
    {
      name: 'Calendar Plus',
      img: calendar,
      url: 'https://chrome.google.com/webstore/detail/calendar-plus/kgbbebdcmdgkbopcffmpgkgcmcoomhmh',
      code: 'https://github.com/maxxxxxdlp/calendar-plus',
      description:
        'Google chrome extension that enhances google calendar productivity.',
      date: 'May 2023',
    },
    {
      name: 'Debate Tournament Judge Tool',
      img: 'https://img.icons8.com/external-kosonicon-outline-color-kosonicon/128/null/external-debate-vote-kosonicon-outline-color-kosonicon.png',
      code: 'https://github.com/jetsemr/Voting-Record-Calculator',
      description:
        'Tool to calculate the aff and neg win rate for each judge in a pool.',
      date: 'November 2022',
    },
    {
      name: 'Tweeter',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUNMBlnTSn36wlRBXE83xuEi7-IEaNfSnMg&usqp=CAU',
      code: 'https://github.com/jetsemr/Tweeter',
      description:
        'A mock of the Twitter platform built to learn mySQL for a university class.',
      date: 'May 2022',
    },
    {
      name: 'Calculator',
      img: calculator,
      url: 'https://jetsemr.github.io/Calculator/',
      code: 'https://github.com/jetsemr/Calculator',
      description: 'Functional calculator web app built in React.',
      date: 'July 2022',
    },
    {
      name: 'Connect Four',
      img: connect4,
      url: 'https://people.eecs.ku.edu/~j939s316/eecs368-final-project/index.html',
      code: 'https://github.com/jetsemr/Connect4',
      description:
        'Connect four game built in JavaScript for programming classes.',
      date: 'May 2020',
    },
    {
      name: 'GithubQL',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/220px-GraphQL_Logo.svg.png',
      code: 'https://github.com/jetsemr/GitHubQL',
      description:
        'Web application that shows public repositories from a github user.',
      date: 'July 2022',
    },
  ],
}

const papers: Products = {
  projects: [
    {
      name: 'Market Effects of High Frequency Trading',
      img: 'https://img.icons8.com/ios/150/edit-graph-report.png',
      url: 'https://docs.google.com/document/d/e/2PACX-1vTS5aMJX4QQ9TVID-gWZPIcar6eFkG44D5LZBhcobf3_Mu4s3U6q1ib0xdsE58AFnYrdmkh9OUPqjXq/pub',
      description:
        'Finance research for the 2021-2022 Robert L. Gould Scholastic Award.',
      date: 'May 2020',
    },
    {
      name: 'Creative Destruction and Asteroid Mining',
      img: 'https://img.icons8.com/ios/150/edit-graph-report.png',
      url: 'https://docs.google.com/document/d/e/2PACX-1vTS5aMJX4QQ9TVID-gWZPIcar6eFkG44D5LZBhcobf3_Mu4s3U6q1ib0xdsE58AFnYrdmkh9OUPqjXq/pub',
      description:
        'Economic research for the 2020 Vann Fellowship in Applied Economics.',
      date: 'March 2020',
    },
    {
      name: 'DDos Attacks on the Financial Sector',
      img: 'https://img.icons8.com/ios/150/edit-graph-report.png',
      url: 'https://docs.google.com/document/d/e/2PACX-1vTR7gYAeo3MTV72eWXMnz5oDWw9LQ59w2j2bBxs0VM63KpkaTE3ULID3IB1EmxHzCb7Z2UEAESSQoBi/pub',
      description: 'Research paper on cyber attacks in the financial sector.',
      date: 'March 2022',
    },
    {
      name: 'Hashcht, A Password Cracking Tool',
      img: 'https://img.icons8.com/ios/150/edit-graph-report.png',
      url: 'https://docs.google.com/document/d/e/2PACX-1vRdEG49E3MKbDd-McpxYtZ3Jg6sNE7tkgCT_sp5RScYYUmwYlVJ5WZ-0teezCfOKbgXCwlk4GHJBR9F/pub',
      description: 'Research paper on password cracking and Hashcat as a tool.',
      date: 'April 2022',
    },
  ],
}

const Projects = () => {
  return (
    <div className="static h-max-h w-screen">
      <div className="mt-[10px] text-center text-3xl font-bold">Projects</div>
      <hr className="m-auto border-2 w-1/2" />
      <ProjectList projects={projects.projects} />
      <div className="mt-[10px] text-center text-3xl font-bold">Papers</div>
      <hr className="m-auto border-2 w-1/2" />
      <ProjectList projects={papers.projects} />
      {/* <div className="text-center text-3xl font-bold">Debate</div> */}
    </div>
  )
}

export default Projects
