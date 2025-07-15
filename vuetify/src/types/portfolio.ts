export interface PersonalInfo {
  name: string
  title: string
  location: string
  timezone: string
  timezoneDisplay: string
  email: string
  linkedin: string
  github: string
  summary: string
  aboutSummary: string
}

export interface Skills {
  [category: string]: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  url?: string
  featured?: boolean
  category?: string
}

export interface WorkExperience {
  company: string
  position: string
  subtitle?: string
  location: string
  period: string
  description: string
  achievements: string[]
}

export interface Education {
  institution: string
  degree: string
  location: string
  graduationDate: string
  gpa: string
}

export interface Research {
  title: string
  status: string
  url?: string
}

export interface PageInfo {
  title: string
  subtitle: string
}

export interface Pages {
  work: PageInfo
}

export interface PortfolioData {
  personal: PersonalInfo
  skills: Skills
  projects: Project[]
  workExperience: WorkExperience[]
  education: Education[]
  research: Research[]
  pages: Pages
}
