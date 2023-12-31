export interface Experience {
  name: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  technologies?: string[];
}

export interface Language {
  language: string;
  code: string;
  proficiency: string;
}

export interface SocialMedia {
  email: string;
  linkedin: string;
  github: string;
}

export interface CiriculumVitae {
  baseUrl: string;
  name: string;
  jobDescription: string;
  about: string;
  professionalExperience: Experience[];
  education: Experience[];
  skillsAndCertificates: Experience[];
  languages: Language[];
  technologies: Language[];
  tools: string[];
  socialMedia: SocialMedia;
}
