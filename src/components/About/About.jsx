import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/logo.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left side */}
        <div className="about-text">
          <h1>Hi, I am</h1>
          <h2>Mohamed Jlidi</h2>
          <h3>
            I am <span className="typewriter">
              <Typewriter
                words={[
                  "a Full-Stack Developer",
                  "an AI Engineer",
                  "a Machine Learning Specialist",
                  "a Deep Learning Specialist",
                  "a UI/UX Designer",
                ]
              }
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          <p>
            I am a full-stack developer and AI engineer focused on developing
            web applications and AI solutions. I specialize in machine learning,
            deep learning, natural language processing, and generative AI. I
            create LLM-powered applications, RAG pipelines, intelligent
            chatbots, and AI agents. I build solutions that simplify complex
            tasks and solve real-world problems.
          </p>
          <a
            href="https://drive.google.com/file/d/1FBJwKqQwdtZ_sS6A4SubJU3tagrPY2OL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right side */}
        <div className="about-image">
          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope
            tiltEnable={false}
          >
            <img
              src={profileImage}
              alt="Mohamed Jlidi"
              className="profile-img"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
