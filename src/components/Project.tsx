import React from 'react'

const Project = ({ name, img, url, code, description, date }: Product) => {
  return (
    <div className="lg:w-[30%] w-[95%] md:h-[40vh] h-[50vh] mt-[20px] ml-[10px] mr-[10px] border-2 border-slate-300 rounded-md overflow-hidden">
      <div className="h-[30px] bg-slate-300 text-center font-bold sm:text-sm">
        {name}
      </div>
      <img
        src={img}
        alt=""
        className="w-[50%] h-[50%] m-auto object-scale-down item-center"
      />
      <div className="m-auto w-[90%]">
        <div>
          <span className="font-bold">Description:</span> {description}
        </div>
        <div>
          <span className="font-bold">Date:</span> {date}
        </div>
      </div>
      <div className="m-auto mt-[10px] w-1/2 text-center flex justify-evenly">
        {url !== undefined ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Check it out!
          </a>
        ) : (
          <></>
        )}
        {code !== undefined ? (
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Code
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Project
