// =====================
// Import Logos
// =====================

// Company Logos
import ArabSoftLogo from "./assets/company_logo/ArabSoft.png";
import BimatechLogo from "./assets/company_logo/bimatech.png";

// Education Logos
import IsimgLogo from "./assets/education_logo/isimg.png";
import LyceeLogo from "./assets/education_logo/lycee.png";

// Tech Logos
import HtmlLogo from "./assets/tech_logo/html.png";
import CssLogo from "./assets/tech_logo/css.png";
import JavaScriptLogo from "./assets/tech_logo/JavaScript.png";
import ReactLogo from "./assets/tech_logo/React.webp";
import NodeJsLogo from "./assets/tech_logo/nodejs.png";
import ExpressLogo from "./assets/tech_logo/express.png";
import MongoDbLogo from "./assets/tech_logo/mongodb.png";
import GitLogo from "./assets/tech_logo/git.png";
import GithubLogo from "./assets/tech_logo/github.png";
import FigmaLogo from "./assets/tech_logo/figma.png";
import BootstrapLogo from "./assets/tech_logo/Bootstrap.png";
import CppLogo from "./assets/tech_logo/cpp.png";
import Angular from "./assets/tech_logo/angular.png";
import Spring_boot from "./assets/tech_logo/spring_boot.webp";
import Oracle12c from "./assets/tech_logo/oracle12c.png";
import Tailwind from "./assets/tech_logo/tailwind.svg";

// Work/Project Logos
import BimaStoreLogo from "./assets/work_logo/BimaStore.png";
import DawiniLogo from "./assets/work_logo/Dawini.png";
import FilmiTounsiLogo from "./assets/work_logo/FilmiTounsi.png";
import La5esliLogo from "./assets/work_logo/La5esli.png";

// =====================
// Skills Data
// =====================

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: HtmlLogo },
      { name: "CSS", logo: CssLogo },

      { name: "React", logo: ReactLogo },
      { name: "Bootstrap", logo: BootstrapLogo },
      { name: "Angular", logo: Angular },
      { name: "Tailwind CSS", logo: Tailwind },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: NodeJsLogo },
      { name: "Express", logo: ExpressLogo },
      { name: "Spring Boot", logo: Spring_boot },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: MongoDbLogo },
      { name: "Oracle 12c", logo: Oracle12c },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: GitLogo },
      { name: "GitHub", logo: GithubLogo },
      { name: "Figma", logo: FigmaLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: CppLogo },
      { name: "JavaScript", logo: JavaScriptLogo },
    ],
  },
];

// =====================
// Experiences
// =====================

export const experiences = [
  {
    id: 0,
    img: ArabSoftLogo,
    role: "AI Engineer",
    company: "prestacode",
    date: "May 2025 - Present",
    desc: "Integrating an Intelligent Chatbot into a Legal Consulting Platform for Querying Arabic Documents",
    skills: ["pythpn", "JavaScript", "Flask", "Git/GitHub"],
  },
  {
    id: 1,
    img: BimatechLogo,
    role: "AI Engineer",
    company: "prestacode",
    date: "August 2024 - September 2024",
    desc: "Developed a system for automatic detection of code vulnerabilities in Angular and Spring Boot applications, integrating machine learning and deep learning models for enhanced security analysis",
    skills: [
      "Angular",
      "Spring Boot",
      "Python",
      "AI",
      "machine learning",
      "Deep Learning",
    ],
  },
 {
  id: 2,
  img: BimatechLogo, // ou ton logo approprié
  role: "Full Stack Developer",
  company: "Prestacode",
  date: "October 2024 - December 2024",
  desc: "Built a project management application with user authentication and a robust admin dashboard. Each user manages their own projects, and each project includes multiple tasks. Developed using React for the frontend, Node.js and Express for the backend, and a MySQL database.",
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
  ],
},


];

// =====================
// Éducation
// =====================

export const education = [
  {
    id: 0,
    img: LyceeLogo,
    school: "Zarzis Technical High School",
    date: "2017 - 2021",
    grade: " 12,33",
    degree: "Mathematical",
    desc: "Focus on solving mathematical problems.",
  },
  {
    id: 1,
    img: IsimgLogo,
    school:
      "ISIMG - Higher Institute of Computer Science and Multimedia of Gabès",
    date: "2021 - 2023",
    grade: "12,28",
    degree:
      "Integrated Preparatory Cycle in Mathematics-Physics-Computer Science",
    desc: "Built a solid foundation in mathematics, physics, and developed strong problem-solving and algorithmic thinking skills.",
  },
  {
    id: 2,
    img: IsimgLogo,
    school:
      "ISIMG - Higher Institute of Computer Science and Multimedia of Gabès.",
    date: "2023 - Present",
    grade: "In progress",
    degree: "Software Engineering and Information Systems Training Cycle",
    desc: "Specialization in Fullstack Web Development.",
  },
];

// =====================
// Projets
// =====================

export const projects = [
  {
    id: 0,
    title: "BimaStore",
    description: "Multi-vendor e-commerce platform developed in MERN stack.",
    image: BimaStoreLogo,
    tags: ["React", "Redux", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ToumiFourat/MERN-MultiVendor-Shop",
    webapp: "https://www.youtube.com/watch?v=f0oHhQv0j9M&t=335s",
  },
  {
    id: 1,
    title: "Dawini",
    description: "Medical appointment booking platform with smart search.",
    image: DawiniLogo,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ToumiFourat/E-Appointment",
    webapp: "https://dawini.tn",
  },
  {
    id: 2,
    title: "Filmi Tounsi",
    description: "Tunisian movie streaming site, responsive and easy to use.",
    image: FilmiTounsiLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind Css",
      "React",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/ToumiFourat/Movies",
    webapp: "https://filmitounsi.tn",
  },
  {
    id: 3,
    title: "La5esli",
    description:
      "Web app developed with React and Flask for integrating fine-tuned BART and T5 models to summarize educational YouTube videos.",
    image: La5esliLogo,
    tags: ["React", "Flask", "MongoDB", "NLP"],
    github: "https://github.com/ToumiFourat/YT2Notes",
    webapp: "https://la5esli.tn",
  },
];
