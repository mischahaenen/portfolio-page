export interface ProfessionalExperience {
    name: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export interface Language {
    language: string;
    proficiency: string;
}

export interface SocialMedia {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}

export interface CiriculumVitae {
    baseUrl: string;
    name: string;
    jobDescription: string;
    about: string;
    professionalExperience: ProfessionalExperience[];
    education: ProfessionalExperience[];
    skillsAndCertificates: ProfessionalExperience[];
    languages: Language[];
    technologies: string[];
    tools: string[];
    socialMedia: SocialMedia;
}
