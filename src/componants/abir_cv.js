import React, { useState } from "react"; import "./css/abir_cv.css";
import profilePic from "./images/abir_roy.jpeg";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPython,
    FaCode,
    FaDatabase,
    FaProjectDiagram
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
    SiAngular,
    SiMongodb,
    SiExpress,
    SiJavascript,
    SiTypescript,
    SiReact
} from "react-icons/si";
const projects = [
    {
        title: "Payroll Management System",
        tools: "Angular, Node.js, Express, MongoDB",
        description:
            "Developed a comprehensive payroll management system with separate admin and user panels.Enabled HR functionalities such as payslip generation, attendance tracking, salary and TDScalculations, and leave management aligned with government regulations.",
        link: "https://app.salarybooks.com/login"
    },
    {
        title: "Payroll Mobile App",
        tools: "React Native, Node.js, Express, MongoDB",
        description:
            "Developed an employee app enabling location-based attendance tracking and seamless leaveapplication. Integrated additional features to support real-time data sync and efficient employeemanagement.",
        link: "https://app.salarybooks.com/login"
    },
    {
        title: "Salarybooks Official Website",
        tools: "React, Node.js, Express, MongoDB",
        description:
            "It all started with a simple observation: payroll shouldn’t be this hard. As business owners and professionals, we saw countless companies — especially small and medium enterprises — struggling every month with salary calculations, compliance filings, and government regulations that changed from one state to another. Errors, delays, and penalties were common. The available tools were too complex, too expensive, or simply not made for the Indian market. That’s when we decided to create SalaryBooks.",
        link: "https://your-project-link.com"
    },
    {
        title: "AI Chat Bot",
        tools: "Python, NLP",
        description:
            "Built an AI chatbot using Python and NLP techniques, with support for intelligent conversation flow,context understanding, and automated user interaction.",
        link: "https://your-project-link.com"
    }
];
function AbirCv() {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <div className="portfolio">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-left">
                    <img src={profilePic} alt="Abir Roy" className="profile-pic" />
                </div>

                <div className="hero-right">
                    <h1>ABIR ROY</h1>
                    <h2>Software Developer |  1+ Year Experience</h2>

                    <div className="contact">
                        <span>📞 +91 8967054672</span>
                        <span>✉️ abirroyroy2020@gmail.com</span>
                    </div>

                    <div className="buttons">
                        <a href="https://www.linkedin.com/in/abir-roy2001" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>

                        <a href="https://github.com/abirroy2001?tab=repositories" target="_blank" rel="noreferrer">
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
                        Full-Stack Developer experienced in building scalable, product-based web and mobile applications
                        using MEAN/MERN stacks and React Native. Skilled in Node.js, API integration, and MongoDB with
                        strong problem-solving abilities in debugging and backend development. Passionate about
                        delivering efficient, user-friendly solutions with real-world impact
                    </p>
                </div>
            </section>

            {/* Experience */}
            <section className="section">
                <h2>Work Experience</h2>

                <div className="card">
                    <div className="experience-header">
                        <h3>Vauras Advisory Services Pvt. Ltd.</h3>

                        <h4> | April 2025 - Present</h4>
                    </div>
                    <h4>Full Stack Developer </h4>
                    <ul>
                        <li>Developed scalable solutions with full frontend and backend implementation, ensuring clean
                            and maintainable architecture.</li>
                        <li>Optimized backend APIs, database queries, and dashboard performance to improve response
                            time, scalability, and efficiency.</li>
                        <li>Implemented role-based access control (RBAC), secure integrations, and automated workflows
                            for reliable and efficient data processing and user management.</li>
                        <li>Developed responsive mobile UI with smooth backend data flow. Integrated optimized REST
                            APIs for secure and fast employee data access. Improved performance and UX via efficient
                            state management and error handling.</li>
                        <li>Worked closely with the QA team to identify, troubleshoot, and resolve issues.</li>
                    </ul>
                </div>
            </section>

            {/* Projects */}
            <section className="section">
                <h2>Projects</h2>

                <div className="projects">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <h3>{project.title}</h3>

                        </div>
                    ))}
                </div>
                {selectedProject && (
                    <div className="modal-overlay">
                        <div className="modal-content">

                            <button
                                className="close-btn"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>

                            <h2>{selectedProject.title}</h2>
                            <h4>Technology: {selectedProject.tools}</h4>
                            <p>{selectedProject.description}</p>

                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-btn"
                            >
                                View Project
                            </a>

                        </div>
                    </div>
                )}
            </section>

            {/* Skills */}
            <section className="section">
                <h2>Technical Skills</h2>

                <div className="skills-grid">
                    <div className="skill-card">
                        <FaReact className="skill-icon react" />
                        <span>React</span>
                    </div>

                    <div className="skill-card">
                        <SiAngular className="skill-icon angular" />
                        <span>Angular</span>
                    </div>

                    <div className="skill-card">
                        <FaNodeJs className="skill-icon node" />
                        <span>Node.js</span>
                    </div>

                    <div className="skill-card">
                        <SiExpress className="skill-icon express" />
                        <span>Express.js</span>
                    </div>

                    <div className="skill-card">
                        <SiMongodb className="skill-icon mongodb" />
                        <span>MongoDB</span>
                    </div>

                    <div className="skill-card">
                        <SiJavascript className="skill-icon javascript" />
                        <span>JavaScript</span>
                    </div>

                    <div className="skill-card">
                        <SiTypescript className="skill-icon typescript" />
                        <span>TypeScript</span>
                    </div>

                    <div className="skill-card">
                        <FaHtml5 className="skill-icon html" />
                        <span>HTML5</span>
                    </div>

                    <div className="skill-card">
                        <FaCss3Alt className="skill-icon css" />
                        <span>CSS3</span>
                    </div>

                    <div className="skill-card">
                        <FaGitAlt className="skill-icon git" />
                        <span>Git</span>
                    </div>

                    <div className="skill-card">
                        <FaGithub className="skill-icon github" />
                        <span>GitHub</span>
                    </div>

                    <div className="skill-card">
                        <FaJava className="skill-icon java" />
                        <span>Spring Boot</span>
                    </div>
                </div>
            </section>
            <section className="section">
                <h2>Languages & Core Computer Science Concepts</h2>

                <div className="skills-grid">

                    <div className="skill-card">
                        <FaJava className="skill-icon java" />
                        <span>Java</span>
                    </div>

                    <div className="skill-card">
                        <FaPython className="skill-icon python" />
                        <span>Python</span>
                    </div>

                    <div className="skill-card">
                        <FaCode className="skill-icon c-lang" />
                        <span>C Programming</span>
                    </div>

                    <div className="skill-card">
                        <SiLeetcode className="skill-icon dsa" />
                        <span>Data Structures & Algorithms</span>
                    </div>

                    <div className="skill-card">
                        <FaProjectDiagram className="skill-icon oop" />
                        <span>Object Oriented Programming</span>
                    </div>

                    <div className="skill-card">
                        <FaDatabase className="skill-icon dbms" />
                        <span>DBMS</span>
                    </div>

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
                    <p>88.4% | 2019 - 2020</p>
                </div>

                <div className="card">
                    <h3>Tikrapara A.M High School</h3>
                    <p>Secondary</p>
                    <p>88.57% | 2016 - 2017</p>
                </div>
            </section>

        </div>

    );
}

export default AbirCv;