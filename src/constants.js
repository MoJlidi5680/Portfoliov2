// =====================
// Import Logos
// =====================

// Company Logos
import prestacodelogo from "./assets/company_logo/prestacode.png";
import solixylogo from "./assets/company_logo/solixy.png";

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
import MyEcommercelogo from "./assets/work_logo/MyEcommerce.png";
import ChildEmotionLogo from "./assets/work_logo/ChildEmotion.png"

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
    img: prestacodelogo,
    role: "AI Engineer",
    company: "prestacode",
    date: "February 2025 - June 2025",
    desc: "Integrating an Intelligent Chatbot into a Legal Consulting Platform for Querying Arabic Documents",
    skills: ["RAG", "LLM", "LangChain", "Vector Database", "NLP", "Python", "JavaScript", "Flask", "Git/GitHub"],

  },
  {
    id: 1,
    img: prestacodelogo,
    role: "AI Engineer",
    company: "prestacode",
    date: "June 2024 - July 2024",
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
  img: solixylogo,
  role: "Full Stack Developer",
  company: "Prestacode",
  date: "June 2023 - August 2023",
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
    school: "Lycée Manara Gabès",
    date: "2019 – 2020",
    degree: "Baccalaureate Math",
    desc: "Studied in the Baccalaureate Mathematics section, focusing on advanced mathematical concepts and problem solving.",
  },
  {
    id: 1,
    img: IsimgLogo,
    school: "ISIMG - Higher Institute of Computer Science and Multimedia of Gabès",
    date: "2020 – 2022",
    degree: "Integrated Preparatory Cycle in Mathematics-Physics-Computer Science",
    desc: "Acquired strong foundations in mathematics, physics, and computer science, with solid problem-solving and algorithmic skills.",
  },
  {
    id: 2,
    img: IsimgLogo,
    school:
      "ISIMG - Higher Institute of Computer Science and Multimedia of Gabès.",
    date: "2022 – 2025",
    grade: "In progress",
    degree: "Software Engineering and Information Systems Training Cycle",
    desc: "Specializing in Fullstack Web Development and Artificial Intelligence.",
  },
];

// =====================
// Projets
// =====================

export const projects = [
  {
    id: 0,
    title: "MyEcommerce",
    description: "A full-stack e-commerce platform enabling users to browse products, perform advanced searches by category and price range, add items to the cart with quantity management, manage secure login sessions, and contact the team via an email form. Developed with React, Node.js, and MySQL.",
    image: MyEcommercelogo,
    tags: ["React", "Node.js", "MySQL"],
    github: "https://github.com/MoJlidi5680/MyEcommerceOnline.git",
    webapp: "", 
    
  },
  {
    id: 1,
    title: "Child Emotion Recognition & Audio Correction",
    description: "Analyzes children's speech to detect emotions and provides a corrected transcription along with corrected audio. Users can upload an audio file, identify the emotion, correct grammatical errors, and generate the final audio. Developed with ML (Random Forest) for emotion classification, Deep Learning NLP for grammar correction, Speech Recognition for speech-to-text, and Text-to-Speech (TTS) for audio generation.",
    image: ChildEmotionLogo, 
    tags: ["AI", "Machine Learning", "Deep Learning", "NLP", "Speech Recognition", "Text-to-Speech", "Python", "Audio Processing"],
    github: "",
    webapp: "", 
  },
];
