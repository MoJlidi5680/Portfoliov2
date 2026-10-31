import React from "react";
import "../Experience/Experience.css";
import prestacodeLogo from "../../assets/company_logo/prestacode.png";

const highlights = [
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "AI Agents",
  "Multi-Agent Systems",
  "Agent Orchestration",
  "RAG",
  "LLM",
  "LangChain",
  "Vector Database",
  "NLP",
  "Computer Vision",
  "Python",
  "TensorFlow",
  "Scikit-learn",
  "Flask",
  "Git/GitLab",
];

const ProfessionalExperience = () => (
  <section id="professional-experience" className="professional-experience-section">
    <div className="text-center">
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div className="underline" />
      <p>Developing AI solutions to solve complex challenges.</p>
    </div>

    <article className="experience-item">
      <div className="experience-header">
        <div className="company-logo">
          <img src={prestacodeLogo} alt="PrestaCode" />
        </div>
        <div>
          <h3>AI Engineer</h3>
          <h4>PrestaCode</h4>
          <p>October 2025 – October 2026</p>
        </div>
      </div>

      <p className="experience-desc">
        Developed AI-driven solutions using machine learning, deep learning,
        NLP, generative AI, and large language models. Built autonomous AI
        agents and orchestrated multi-agent systems to automate complex tasks
        and support decision-making. Created RAG
        pipelines and LLM-powered applications with LangChain, along with
        intelligent chatbots using NLP. Applied computer vision and machine
        learning to deliver reliable, production-ready solutions, collaborating
        with cross-functional teams using Agile methods to integrate, test, and
        deploy applications.
      </p>

      <div className="skills-list">
        <h5>Skills:</h5>
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  </section>
);

export default ProfessionalExperience;
