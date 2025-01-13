import React from 'react'
import profile from '../img/profile.png'

const Home = () => {
  return (
    <div className="static h-screen w-screen">
      <div className="m-auto mt-[80px] w-[300px] h-[300px] rounded-full overflow-hidden">
        <img 
          src={profile} 
          alt="Jet Semrick" 
          className="w-full h-full object-cover object-top translate-y"
        ></img>
      </div>
      <div className="text-center content-center lg:mt-18 mt-9">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Jet Semrick
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 md:w-1/3 w-9/12 m-auto">
          Master's student in operations research and information engineering at{' '}
          <span className="font-bold">Cornell University</span> and debate coach
          at Taipei American School.
          <br />
          <br />I am based in New York City, but am sometimes in Taipei and
          Kansas City. Undergrad in CS and economics at the{' '}
          <span className="font-bold">University of Kansas</span>.
          <br />
          <br />
          Interests: artificial intelligence, quantitative trading, software
          engineering, sports, and policy debate.
        </p>
      </div>
    </div>
  )
}

export default Home
