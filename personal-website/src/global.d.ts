declare module '*.txt'
declare module '*.html'
declare module '*.pdf'

interface ResumeEntry {
  entity: string
  date: string
  location: string
  title: string
  content: any
}
