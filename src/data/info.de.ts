import type { CiriculumVitae } from "../types/CiriculumVitae";

export const info: CiriculumVitae = {
  baseUrl: "https://mischahaenen.github.io/",
  name: "Mischa Haenen",
  jobDescription: "Frontend Softwareentwickler",
  about: `Als leidenschaftlicher Softwareentwickler liegt mein Fokus auf der Frontend-Softwareentwicklung, Interaktionsdesign und dem Menschen im Entwicklungsprozess. Mit einem Hintergrund in Bildung liegt mir die Bedeutung von interkulturellen und intergenerationellen Teams am Herzen`,
  professionalExperience: [
    {
      name: "mimacom AG",
      role: "Softwareentwickler Professional (60%)",
      startDate: "Aktuell",
      location: "Bern, Schweiz",
      description: `Als Leiter der Frontend-Gilde bei der mimacom AG erkunde ich neue Frontend-Entwicklungen und bewährte Verfahren.
        Meine Verantwortlichkeiten erstrecken sich auch auf die Frontend Architektur für das ISAK-Projekt. Zusätzlich zu meinen technischen Rollen biete ich Beratungsdienste im Frontend-Bereich an und unterstütze Kunden bei der Optimierung ihrer Frontend-Strategien.
        Meine Tätigkeit bei mimacom hat meine Frontend-Expertise weiter gefestigt. Ich war aktiv an verschiedenen Kundenprojekten beteiligt und habe verschiedene Rollen von Entwickler, Interaktionsdesigner und Scrum Master übernommen.`,
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Angular",
        "React",
        "Nx",
        "Java",
      ],
    },
    {
      name: "SBB AG",
      role: "DevOps Softwareingenieur (100%)",
      startDate: "2019",
      endDate: "2022",
      location: "Bern, Schweiz",
      description: `Bei SBB AG arbeitete ich in der App Bakery, wo ich vielseitige Rollen von der Frontend- und Backend-Entwicklung bis zum Design von mobilen Apps übernahm. 
        Zusätzlich zur Entwicklung war ich verantwortlich für die Bearbeitung von Kundenanfragen und die Begleitung unserer internen Kunden während des gesamten Projektzyklus.`,
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
      role: "Lehrling Softwareingenieur & Scrum Master (100%)",
      startDate: "2015",
      endDate: "2019",
      location: "Bern, Schweiz",
      description: `Ich absolvierte meine Lehre bei login Berufsbildung AG, ergänzt durch eine Teilzeit-Matura.
        Während dieser Zeit habe ich meine Fähigkeiten in verschiedenen Bereichen, mit einem besonderen Schwerpunkt auf Frontend-Entwicklung .
        Ich erwarb auch eine Scrum Master-Zertifizierung, die mein Fachwissen in agilen Methoden und Teamzusammenarbeit erweiterte.`,
      technologies: ["JavaScript", "HTML", "CSS", "Angular", "Hermes", "Scrum"],
    },
  ],

  education: [
    {
      name: "BFH",
      role: "Bachelor of Science Wirtschaftsinformatik",
      startDate: "Aktuell",
      location: "Bern, Schweiz",
      description: `Im Rahmen eines Bachelor of Science in Wirtschaftsinformatik vertiefe ich mich in die Bereiche Softwarearchitektur und -design und rüste mich mit dem Wissen aus, um robuste und skalierbare Softwarelösungen zu erstellen.`,
    },
    {
      name: "GIBB",
      role: "Softwareingenieur EFZ mit Berufsmaturität",
      startDate: "2015",
      endDate: "2019",
      location: "Bern, Schweiz",
      description: `Während meiner Lehre absolvierte ich die Berufsmaturität und legte damit eine solide Grundlage für meine zukünftigen Bestrebungen in der Softwareentwicklung.`,
    },
  ],

  skillsAndCertificates: [
    {
      name: "",
      role: "IREB Anforderungsingenieur - Grundstufe",
      startDate: "2023",
      endDate: "2023",
      location: "Bern, Schweiz",
      description: `Im Jahr 2023 absolvierte ich die Schulung zum IREB Requirementsengineer.
        Diese Ausbildung stärkte mein Wissen im Bereich des Requirementsengineering. Sie hat mich mit einem soliden Verständnis für die Erstellung präziser Anforderungen und den Nuancen, die während des gesamten Prozesses zu berücksichtigen sind, ausgestattet.
        Dieses Fachwissen hat die Qualität meiner Beiträge in Projekten erheblich gesteigert.`,
    },
    {
      name: "",
      role: "ISAQB Zertifizierter Fachmann für Softwarearchitektur - Grundstufe",
      startDate: "2021",
      endDate: "2021",
      location: "Bern, Schweiz",
      description: `Nach meiner Ausbildung bei login AG erlangte ich die ISAQB-Zertifizierung in Softwarearchitektur auf dem Foundation Level.
        Diese Zertifizierung versetzte mich in die Lage, fundierte Architekturentwürfe zu konzipieren und dadurch die Qualität und Robustheit meiner Codebasis zu verbessern.`,
    },
    {
      name: "",
      role: "Führung 1 - SVF",
      startDate: "2020",
      endDate: "2020",
      location: "Bern, Schweiz",
      description: `Während meiner Unteroffiziersausbildung im Militär im Jahr 2020 erreichte ich die Zertifizierung Führung 1.
        Diese Zertifizierung kam nicht nur den Rekruten zugute, die ich ausbildete, sondern hat auch mein Berufsleben bereichert. Ich verwende didaktische und methodologische Ansätze, um meine Ideen und Erklärungen zu artikulieren.
        Darüber hinaus habe ich mit einem Jahrzehnt Erfahrung in der Leitung von Pfadfindern nicht nur junge Menschen betreut, sondern auch meine Kollegen bei der Planung und Durchführung von Lagern und Aktivitäten angeleitet.`,
    },
    {
      name: "",
      role: "Zertifizierter Scrum Master",
      startDate: "2018",
      endDate: "2018",
      location: "Bern, Schweiz",
      description: `Im Jahr 2018 erlangte ich während meiner Tätigkeit bei login AG die Scrum Master-Zertifizierung.
        Die Zertifizierung bereicherte mich mit tiefen Einblicken in die agile Zusammenarbeit, was es mir ermöglichte, Teams effektiv zu führen und die Kommunikation mit Stakeholdern zu optimieren.`,
    },
  ],

  languages: [
    { language: "Schweizerdeutsch", proficiency: "C2" },
    { language: "Deutsch", proficiency: "C2" },
    { language: "Niederländisch", proficiency: "C2" },
    { language: "Englisch", proficiency: "B2" },
    { language: "Französisch", proficiency: "B1" },
  ],

  technologies: [
    { language: "Angular", proficiency: "Experte" },
    { language: "Vue", proficiency: "Fortgeschritten" },
    { language: "React", proficiency: "Mittelstufe" },
    { language: "Nuxt3", proficiency: "Fortgeschritten" },
    { language: "Astro", proficiency: "Mittelstufe" },
    { language: "HTML", proficiency: "Experte" },
    { language: "CSS", proficiency: "Experte" },
    { language: "TailwindCSS", proficiency: "Fortgeschritten" },
    { language: "Jest", proficiency: "Mittelstufe" },
    { language: "Javascript", proficiency: "Experte" },
    { language: "Typescript", proficiency: "Experte" },
    { language: "Vite", proficiency: "Fortgeschritten" },
    { language: "Dart", proficiency: "Mittelstufe" },
    { language: "Flutter", proficiency: "Mittelstufe" },
    { language: "Fortran", proficiency: "Keine" },
  ],

  tools: [
    "Adobe Photoshop",
    "Adobe InDesign",
    "Figma",
    "Atlassian Confluence & JIRA",
    "VSCode",
    "HoppScotch",
    "iTerm (zsH)",
    "Googeln",
  ],

  socialMedia: {
    email: "mischahaenen@gmail.com",
    linkedin: "https://www.linkedin.com/in/mischa-haenen-9ab11810a",
    github: "https://github.com/mischahaenen",
  },
};
