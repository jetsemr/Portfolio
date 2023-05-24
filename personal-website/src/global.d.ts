declare module '*.txt'
declare module '*.html'
declare module '*.pdf'
declare module '*.png'

interface ResumeEntry {
  entity: string
  date: string
  location: string
  title: string
  content: any
}

interface Product {
  name: string
  img: string
  url?: string
  code?: string
  description: string
  date: string
}

interface Products {
  projects: Product[]
}
