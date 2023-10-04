import type { CiriculumVitae } from "src/types/CiriculumVitae";

export const info: CiriculumVitae = {
  baseUrl: "https://mischahaenen.github.io/",
  name: "Mischa Haenen",
  jobDescription: "Software Engineer Frontend",
  about: `I am a curious and inquisitive software developer. I am particularly interested in front-end software development,
    interaction design, and the human factor in development. I have experience in education, project management, and software development.
    Furthermore, the topic of generation management is very important to me, and I personally try to promote intercultural and intergenerational teams.`,
  professionalExperience: [
    {
      name: "login AG",
      role: "Software Engineer EFZ application development",
      startDate: "2015",
      endDate: "2019",
      location: "Bern, Switzerland",
      description: [
        `I completed my apprenticeship at login Berufsbildung AG with a part-time Matura.`,
        `I developed my skills in many areas and was able to focus on the front-end.`,
        `During this time, I was also able to obtain a Scrum Master certification.`,
      ],
    },
    {
      name: "SBB AG",
      role: "Software Engineer, various roles",
      startDate: "2019",
      endDate: "2022",
      location: "Bern, Switzerland",
      description: [
        `As a member of the "Kurzauftragsteam" of SBB AG I not only develop in the frontend, backend, and mobile, but also accept customer requests and accompany our internal customers throughout the entire project process.`,
        `In my job, I have deepened my skills in frontend and I am the leader of the Frontend Guild. I work in different customer projects and take different roles like developer, interaction designer, or architect.`,
      ],
    },
  ],

  education: [
    {
      name: "GIBB",
      role: "Software Engineer EFZ with vocational baccalaureate",
      startDate: "2015",
      endDate: "2019",
      location: "Bern, Switzerland",
      description: [
        `During my apprenticeship as an EFZ computer scientist,`,
        `I completed the vocational baccalaureate.`,
      ],
    },
    {
      name: "Bachelor of Science Business Information Technology",
      role: "",
      startDate: "2021",
      endDate: "2025",
      location: "Bern, Switzerland",
      description: [
        `With the Bachelor of Science Business Information Technology, I'm immersing myself in software architecture and design.`,
      ],
    },
  ],

  skillsAndCertificates: [
    {
      name: "ISAQB Certified Professional for Software Architecture - Foundation Level",
      role: "",
      startDate: "2021",
      endDate: "2021",
      location: "Bern, Switzerland",
      description: [
        `After my training at login Ag in 2021,`,
        `I completed the ISAQB certification for Software Architecture - Foundation Level.`,
        `With this training I wanted to consolidate my knowledge and have benefited from it in the future by being able to create architecture concepts in a well-founded way and my programme code also became better as a result.`,
      ],
    },
    {
      name: "Certified Scrum Master",
      role: "",
      startDate: "2018",
      endDate: "2018",
      location: "Bern, Switzerland",
      description: [
        `During my training at login AG in 2018, I was able to acquire certification as a Scrum Master.`,
        `The aim was to take on a lead role in learning teams and to communicate with stakeholders.`,
        `Through this training, I was able to learn in-depth knowledge of agile collaboration.`,
      ],
    },
  ],

  languages: [
    { language: "German", proficiency: "C2" },
    { language: "Dutch", proficiency: "C2" },
    { language: "English", proficiency: "B2" },
    { language: "French", proficiency: "B1" },
  ],

  technologies: [
    "Angular",
    "Vue",
    "React",
    "Next.js",
    "Nuxt3",
    "HTML",
    "CSS",
    "Bootstrap",
    "Jasmine",
    "Javascript",
    "Typescript",
    "Webpack",
    "Vite",
    "REST",
    "Flowable Platform",
    "Dart",
    "Flutter",
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
    phone: "+41 77 494 24 49",
    linkedin: "https://www.linkedin.com/in/mischa-haenen-9ab11810a",
    github: "https://github.com/mischahaenen",
  },
};
