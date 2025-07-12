import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/logo.png';
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
            I am a <span className="typewriter">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Artificial Intelligence Engineer",
                  "Machine learning Specialist",
                  "Deep Learning Expert",
                  "UI/UX Designer",
                ]}
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
            I am a full-stack developer with over 2 years of experience in web development and artificial intelligence. 
            I specialize in building innovative applications that leverage machine learning and deep learning to solve real world problems. 
            Passionate about creating effective solutions, 
            I develop intelligent tools that simplify workflows and deliver meaningful value to users.
          </p>
          <a
            href="https://drive.google.com/file/d/1YDloObukVdPIKMYHlr8fy-FtmY1PEfXc/view?usp=sharing"
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
