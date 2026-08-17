import React from "react";
import { education } from "../../constants"; // tes données
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-header">
        <h2>EDUCATION</h2>
        <div className="underline"></div>
        <p>
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-logo">
              <img src={edu.img} alt={edu.school} />
            </div>
            <div className="education-details">
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <p className="date">{edu.date}</p>
              <p className="description">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
