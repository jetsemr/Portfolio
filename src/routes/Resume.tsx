import React from 'react'
import ResumeSection from '../components/ResumeSection'
import ResumeItem from '../components/ResumeItem'
import ResumeDownload from '../data/Resume.pdf'

const education: ResumeEntry[] = [
  {
    entity: 'University of Kansas',
    date: 'May 2023',
    location: 'Lawrence, KS',
    title:
      'Bachelor of Science with Distinction in Computer Science, Economics',
    content: (
      <ul>
        <li>- GPA: 3.98/4.00</li>
        <li>- Jennett Finance Scholar</li>
        <li>- SELF Engineering Fellowship</li>
      </ul>
    ),
  },
  {
    entity: 'Shawnee Mission East High School',
    date: 'May 2019',
    location: 'Prairie Village, KS',
    title: 'International Baccalaureate (DP)',
    content: <></>,
  },
]

const work: ResumeEntry[] = [
  {
    entity: 'WeWork',
    date: 'July 2022 - August 2022',
    location: 'New York, NY',
    title: 'Software Engineering Intern',
    content: <></>,
  },
  {
    entity: 'C2FO',
    date: 'May 2021 - August 2021',
    location: 'Kansas City, KS',
    title: 'Software Engineering Intern',
    content: <></>,
  },
  {
    entity: 'WarehouseQuote.com (Northpoint Development)',
    date: 'June 2020 - August 2020',
    location: 'Kansas City, MO',
    title: 'Technology Intern',
    content: <></>,
  },
  {
    entity: 'Asian Debate League',
    date: 'December 2019 - Present',
    location: 'Taipei, Taiwan',
    title: 'Remote Debate Instructor',
    content: <></>,
  },
  {
    entity: 'Shawnee Mission East High School',
    date: 'December 2019 - January 2023',
    location: 'Prairie Village, KS',
    title: 'Assistant Debate Coach',
    content: <></>,
  },
]

const awards: ResumeEntry[] = [
  {
    entity: 'Outstanding Computer Science Senior',
    date: 'May 2023',
    location: 'Lawrence, KS',
    title: 'University of Kansas School of Engineering',
    content: <></>,
  },
  {
    entity: 'Don Parsons Debate Award',
    date: 'May 2023',
    location: 'Lawrence, KS',
    title: 'University of Kansas School of Communications',
    content: <></>,
  },
  {
    entity: 'First Round At Large Bid at NDT 2023',
    date: 'March 2023',
    location: 'Washington, D.C.',
    title: 'National Debate Tournament',
    content: <></>,
  },
  {
    entity: 'Vann Economics Fellowship Essay Contest Winner',
    date: 'May 2020',
    location: 'Lawrence, KS',
    title: 'University of Kansas',
    content: <></>,
  },
  {
    entity: "Dean's Scholarship",
    date: 'August 2019',
    location: 'Lawrence, KS',
    title: 'University of Kansas School of Engineering',
    content: <></>,
  },
  {
    entity: 'NCFL Policy Debate National Champion',
    date: 'May 2019',
    location: 'Milwaukee, WI',
    title: 'Shawnee Mission East Policy Debate',
    content: <></>,
  },
]

const Resume = () => {
  console.log(education)
  return (
    <div className="static h-max-h w-max-h">
      <div className="m-auto mt-5 w-1/2 text-center">
        <a
          href={ResumeDownload}
          download="Jet_Semrick_Resume.pdf"
          className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Download PDF
        </a>
      </div>
      <div className="flex flex-col mt-5 divide-y-2 divide-neutral-300 m-auto w-1/3">
        <ResumeSection title="Education">
          {education.map((item) => {
            return <ResumeItem item={item} key={item.title} />
          })}
        </ResumeSection>
        <ResumeSection title="Work">
          {work.map((item) => {
            return <ResumeItem item={item} key={item.title} />
          })}
        </ResumeSection>
        <ResumeSection title="Awards">
          {awards.map((item) => {
            return <ResumeItem item={item} key={item.title} />
          })}
        </ResumeSection>
      </div>
    </div>
  )
}

export default Resume
