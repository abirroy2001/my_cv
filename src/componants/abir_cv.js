import React from "react";
import "./css/abir_cv.css";
import profilePic from "./images/abir_roy.jpeg";

function AbirCv() {
  return (
    <div className="portfolio">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <img src={profilePic} alt="Abir Roy" className="profile-pic" />
        </div>

        <div className="hero-right">
          <h1>ABIR ROY</h1>
          <h2>Full Stack Developer</h2>

          <p>
            1+ Year of Experience in Angular, React, Node.js,
            MongoDB, Express.js, React Native and REST API Development.
          </p>

          <div className="contact">
            <span>📞 +91 8967054672</span>
            <span>✉️ abirroyroy2020@gmail.com</span>
          </div>

          <div className="buttons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>

        <div className="card">
          <p>
            Full Stack Developer experienced in building scalable web
            and mobile applications using MEAN/MERN stack technologies.
            Skilled in API development, MongoDB optimization,
            authentication systems, React Native mobile applications,
            and enterprise software development.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h2>Work Experience</h2>

        <div className="card">
          <h3>Vauras Advisory Services Pvt. Ltd.</h3>

          <h4>Full Stack Developer | April 2025 - Present</h4>

          <ul>
            <li>Developed scalable frontend and backend solutions.</li>
            <li>Optimized backend APIs and database performance.</li>
            <li>Implemented RBAC and secure user management.</li>
            <li>Built responsive React and Angular applications.</li>
            <li>Worked closely with QA and business teams.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Featured Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>Payroll Management System</h3>
            <p>
              Complete payroll solution with salary generation,
              attendance tracking, leave management and RBAC.
            </p>
          </div>

          <div className="project-card">
            <h3>Payroll Mobile App</h3>
            <p>
              React Native application with attendance, leave
              management and payroll access.
            </p>
          </div>

          <div className="project-card">
            <h3>Notebook (MERN)</h3>
            <p>
              Full-stack notebook platform with authentication
              and cloud storage.
            </p>
          </div>

          <div className="project-card">
            <h3>AI Chat Bot</h3>
            <p>
              NLP-powered chatbot built using Python and AI techniques.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Technical Skills</h2>

        <div className="skills">
          {[
            "Angular",
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "React Native",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Git",
            "REST API"
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>

        <div className="card">
          <h3>Netaji Subhash Engineering College</h3>
          <p>B.Tech Information Technology</p>
          <p>CGPA: 8.14 | 2021 - 2025</p>
        </div>

        <div className="card">
          <h3>Tikrapara A.M High School</h3>
          <p>Higher Secondary</p>
          <p>88.4% | 2018 - 2020</p>
        </div>
      </section>

    </div>
  );
}

export default AbirCv;