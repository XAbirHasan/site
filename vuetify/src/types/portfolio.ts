export interface PersonalInfo {
  name: string
  title: string
  subtitle?: string
  location: string
  timezone: string
  timezoneDisplay: string
  phone?: string
  email: string
  linkedin: string
  github: string
  openToRemote?: boolean
  openToRelocation?: boolean
  relocationNote?: string
  summary: string
  aboutSummary: string
  coreStrengths?: string[]
  availability?: {
    notice: string
    relocation: string
    remote: string
  }
}

export interface Skill {
  name: string
  proficiency: string
  level: number
}

export interface Skills {
  [category: string]: Skill[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  url?: string
  featured?: boolean
  category?: string
  year?: string
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
  honors?: string
}

export interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
}

export interface Research {
  title: string
  status: string
  description?: string
  url?: string
}

export interface PageInfo {
  title: string
  subtitle: string
}

export interface Pages {
  work: PageInfo
  about?: PageInfo
}

export interface PortfolioData {
  personal: PersonalInfo
  skills: Skills
  projects: Project[]
  workExperience: WorkExperience[]
  education: Education[]
  certifications?: Certification[]
  research: Research[]
  pages: Pages
}
