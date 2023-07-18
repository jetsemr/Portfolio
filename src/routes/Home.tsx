import React from 'react'
import profile from '../img/profile.png'

const Home = () => {
  return (
    <div className="static h-screen w-screen">
      <div className="m-auto mt-[80px] w-[300px] h-[300px] rounded-full overflow-hidden flex justify-center item-center">
        <img src={profile} alt="" className="object-none"></img>
      </div>
      <div className="text-center content-center lg:mt-18 mt-9">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Jet Semrick
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 md:w-1/3 w-9/12 m-auto">
          Software engineer, researcher, and recreational athlete. I studied
          computer science and economics at the{' '}
          <span className="font-bold">University of Kansas</span>. Over the
          years I have lived and worked in Kansas, Missouri, and New York.
          <br />
          <br />
          Focus areas: programming, sports, competitive debate, and finance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://www.linkedin.com/in/jetsemrick/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/jetsemrick"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Twitter
          </a>
          <a
            href="https://github.com/jetsemrick"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
