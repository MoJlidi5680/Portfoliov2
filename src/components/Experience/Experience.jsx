import React from "react";
import { experiences } from "../../constants";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      {/* Titre de la section */}
      <div className="text-center">
        <h2>EXPERIENCE</h2>
        <div className="underline"></div>
        <p>
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Ligne verticale centrale */}
      <div className="timeline-line"></div>

      {/* Timeline */}
      <div>
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`experience-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Bulle de la timeline */}
            <div className="timeline-circle">
              <img
                src={experience.img}
                alt={experience.company}
              />
            </div>

            {/* Contenu */}
            <div className="experience-content">
              <div className="experience-header">
                <div className="company-logo">
                  <img
                    src={experience.img}
                    alt={experience.company}
                  />
                </div>
                <div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.date}</p>
                </div>
              </div>

              <p className="experience-desc">{experience.desc}</p>

              <div className="skills-list">
                <h5>Skills:</h5>
                <ul>
                  {experience.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
