import React from "react";
impor t "./abir_cv.css";
function AbirCv() {
    return (
        <div className="section">
            <h2>Featured Projects</h2>

            <div className="project-grid">

                <div className="project-card">
                    <h3>Payroll Management System</h3>

                    <p>
                        Developed a complete payroll management solution using
                        Angular, Node.js, Express.js and MongoDB.
                        Features include employee management, attendance tracking,
                        leave management, salary generation, payslip creation and
                        role-based access control.
                    </p>

                    <div className="tech-stack">
                        <span>Angular</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>Express.js</span>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Payroll Mobile Application</h3>

                    <p>
                        Built a React Native application for employees to mark
                        attendance, apply for leave, view payslips and access
                        real-time payroll information directly from mobile devices.
                    </p>

                    <div className="tech-stack">
                        <span>React Native</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                </div>

                <div className="project-card">
                    <h3>AI Interviewer</h3>

                    <p>
                        Developed an AI-powered interview platform capable of
                        conducting technical interviews, evaluating answers,
                        providing feedback and generating interview scores using
                        Large Language Models.
                    </p>

                    <div className="tech-stack">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>OpenAI API</span>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Web Notebook Application</h3>

                    <p>
                        Built a full-stack notebook application where users can
                        create, edit and manage notes. Implemented secure
                        authentication and cloud-based data storage.
                    </p>

                    <div className="tech-stack">
                        <span>React</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AbirCv;