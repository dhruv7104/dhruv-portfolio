import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="container">
      <motion.header initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1>Dhruv Sanjay Gonnade</h1>
        <h2>Final Year Engineering Student</h2>
      </motion.header>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about">
        <h3>About Me</h3>
        <p>
          I’m Dhruv Gonnade, a final-year Computer Science Engineering student at Rajiv Gandhi College of Engineering,
          Research and Technology. Skilled in ReactJS, Node.js, and Python, with hands-on experience in building
          AI-powered tools and web applications.
        </p>
      </section>

      <section id="skills">
        <h3>Skills</h3>

        <div className="skills-group">
          <div className="subheading">Languages</div>
          <ul className="skills">
            <li>C</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="skills-group">
          <div className="subheading">Frameworks</div>
          <ul className="skills">
            <li>React</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className="skills-group">
          <div className="subheading">Developer Tools</div>
          <ul className="skills">
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h3>Projects</h3>

        <div className="project">
          <h4>Portfolio Website</h4>
          <p>Built a portfolio website using ReactJS to showcase my profile, skills, and projects.</p>
        </div>

        <div className="project">
          <h4>DocBot Conversation</h4>
          <p>
            Developed an intelligent chatbot that allows users to interact with PDF documents using natural language
            queries. Used Python and NLP for extracting answers.
          </p>
        </div>

        <div className="project">
          <h4>Deepfake Detection Tool</h4>
          <p>
            Created a deepfake detection tool using Python and PyTorch. Utilized CNNs to classify media and integrated
            it into a web app for real-time results.
          </p>
        </div>
      </section>
       <div className="project">
          <h4>Pybot</h4>
          <p>
            Developed an AI-powered chatbot using Python (Flask) and React, featuring fuzzy matching, generative replies,
            and online information retrieval via web APIs. Deployed on Render and Vercel for full-stack accessibility. 
          </p>
        </div>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <p>Email: <a href="mailto:dhruvgonnade000@gmail.com">dhruvgonnade000@gmail.com</a></p>
        <p>Phone: 8766511598</p>

        <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
          <a href="https://github.com/dhruv7104" target="_blank" rel="noopener noreferrer">
            <Github size={28} color="#0d47a1" />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-gonnade-285a39374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} color="#0d47a1" />
          </a>
          <a href="mailto:dhruvgonnade000@gmail.com">
            <Mail size={28} color="#0d47a1" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
