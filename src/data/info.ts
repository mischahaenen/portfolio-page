import type { CiriculumVitae } from "../types/CiriculumVitae";

export const info: CiriculumVitae = {
  baseUrl: "https://mischahaenen.ch",
  name: "Mischa Haenen",
  jobDescription: "Lead Frontend Software Engineer",
  about: `I am an frontend developer with an eye for design and a passion for accessibility and requirements engineering.
  With my experience, I transform complex requirements into user-friendly, aesthetically pleasing and accessible web solutions.
  Furthermore, I am a passionate team player who is committed to working with intercultural and intergenerational teams.`,
  professionalExperience: [
    {
      name: "mimacom AG",
      role: "Software Engineer Professional (60%)",
      startDate: "Currently",
      location: "Bern, Switzerland",
      description: `As the lead of the Frontend Guild at mimacom AG, I play a pivotal role in setting the direction for frontend development and best practices.
        My responsibilities extend to being the Frontend Architect for the ISAK Project, ensuring the project's frontend architecture is robust and scalable.
        In addition to my technical roles, I provide consulting services in the frontend domain, assisting teams and clients in optimizing their frontend strategies.
        My tenure at mimacom has further solidified my frontend and backend expertise. I've been actively involved in various customer projects, donning multiple hats ranging from a developer and interaction designer to an architect.`,
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Angular",
        "React",
        "Nx",
        "Java",
        "Terraform",
        "Azure",
      ],
    },
    {
      name: "SBB AG",
      role: "DevOps Software Engineer (100%)",
      startDate: "2019",
      endDate: "2022",
      location: "Bern, Switzerland",
      description: `At SBB AG, I worked in the App Bakery 🧁, where I took on versatile roles from frontend and backend development to mobile app design. 
      In addition to development, I was responsible for handling customer queries and supporting our internal customers throughout the project cycle.`,
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Angular",
        "Holacracy",
        "Flutter",
        "Java",
      ],
    },
    {
      name: "login AG",
      role: "Apprentice Software Engineer & Scrum Master (100%)",
      startDate: "2015",
      endDate: "2019",
      location: "Bern, Switzerland",
      description: `I undertook my apprenticeship at login Berufsbildung AG, complemented by a part-time Matura.
        During this tenure, I sharpened my skills across domains, with a special emphasis on front-end development.
        I also acquired a Scrum Master certification, enhancing my expertise in agile methodologies and team collaboration.`,
      technologies: ["JavaScript", "HTML", "CSS", "Angular", "Hermes", "Scrum"],
    },
  ],

  education: [
    {
      name: "BFH",
      role: "Bachelor of Science Business Information Technology",
      startDate: "Currently",
      location: "Bern, Switzerland",
      description: `Pursuing a Bachelor of Science in Business Information Technology, I am delving deep into the realms of software architecture and design, equipping myself with the knowledge to build robust and scalable software solutions.`,
    },
    {
      name: "GIBB",
      role: "Software Engineer EFZ with Vocational Baccalaureate",
      startDate: "2015",
      endDate: "2019",
      location: "Bern, Switzerland",
      description: `During my apprenticeship, I completed the vocational baccalaureate, laying a strong foundation for my future endeavors in software engineering.`,
    },
  ],

  skillsAndCertificates: [
    {
      name: "",
      role: "IREB Requirements Engineer - Foundation Level",
      startDate: "2023",
      endDate: "2023",
      location: "Bern, Switzerland",
      description: `In 2023, I undertook the IREB Requirements Engineer training at the Foundation Level.
        This training fortified my knowledge in requirements engineering. It has equipped me with a solid understanding of crafting precise requirements and the nuances to consider throughout the process.
        This expertise has significantly elevated the quality of my contributions in projects.`,
    },
    {
      name: "",
      role: "ISAQB Certified Professional for Software Architecture - Foundation Level",
      startDate: "2021",
      endDate: "2021",
      location: "Bern, Switzerland",
      description: `Post my training at login AG, I accomplished the ISAQB certification in Software Architecture at the Foundation Level.
        This certification empowered me with the skills to conceptualize well-founded architecture designs, subsequently improving the quality and robustness of my codebase.`,
    },
    {
      name: "",
      role: "Leadership 1 - SVF",
      startDate: "2020",
      endDate: "2020",
      location: "Bern, Switzerland",
      description: `During my NCO training in the military  ⚔️ 🇨🇭 in 2020, I achieved the Leadership 1 certification.
        This certification not only benefited the recruits I trained but has also enriched my professional life. I employ didactic and methodological approaches to articulate my ideas and explanations.
        Additionally, with a decade of experience leading scouts, I've not only mentored young individuals but also guided my peers in planning and executing camps and activities.`,
    },
    {
      name: "",
      role: "Certified Scrum Master",
      startDate: "2018",
      endDate: "2018",
      location: "Bern, Switzerland",
      description: `In 2018, during my tenure at login AG, I achieved the Scrum Master certification.
        The certification enriched me with profound insights into agile collaboration, enabling me to lead teams effectively and streamline stakeholder communication.`,
    },
  ],

  languages: [
    { language: "Swiss German", code: "ch", proficiency: "C2" },
    { language: "German", code: "de", proficiency: "C2" },
    { language: "Dutch", code: "nl", proficiency: "C2" },
    { language: "English", code: "en", proficiency: "B2" },
    { language: "French", code: "fr", proficiency: "B1" },
  ],

  technologies: [
    { language: "Javascript", code: "Javascript", proficiency: "> 3 years" },
    { language: "Typescript", code: "Typescript", proficiency: "> 3 years" },
    { language: "CSS", code: "CSS", proficiency: "> 3 years" },
    { language: "HTML", code: "HTML", proficiency: "> 3 years" },
    { language: "Angular", code: "Angular", proficiency: "> 3 years" },
    { language: "Vue", code: "Vue", proficiency: "1 year" },
    { language: "React", code: "React", proficiency: "1 year" },
    { language: "Nuxt3", code: "Nuxt3", proficiency: "1 year" },
    { language: "Astro", code: "Astro", proficiency: "< 1 year" },
    { language: "TailwindCSS", code: "TailwindCSS", proficiency: "< 1 year" },
    { language: "Jest", code: "Jest", proficiency: "> 2 years" },
    { language: "Vite", code: "Vite", proficiency: "1 year" },
    { language: "Dart", code: "Dart", proficiency: "1 year" },
    { language: "Flutter", code: "Flutter", proficiency: "1 year" },
    { language: "Fortran", code: "Fortran", proficiency: "-1000 years" },
  ],

  tools: [
    "Adobe Photoshop",
    "Adobe InDesign",
    "Figma",
    "Atlassian Confluence & JIRA",
    "VSCode",
    "HoppScotch",
    "iTerm (zsH)",
    "Googling",
  ],

  socialMedia: {
    email: "mischahaenen@gmail.com",
    linkedin: "https://www.linkedin.com/in/mischa-haenen-9ab11810a",
    github: "https://github.com/mischahaenen",
  },
};
