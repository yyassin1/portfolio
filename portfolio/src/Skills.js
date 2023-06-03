import React from "react";
import Header from "./Header";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiWebpack,
  SiTailwindcss,
  SiGit,
  SiNetlify,
  SiC,
} from "react-icons/si";
import Footer from "./Footer";

export default function Skills() {
  return (
    <div className="container">
      <Header />
      <div className="skills-page">
        <h2 className="skill--header">Skills & Tools</h2>
        <div className="skills">
          <div className="skill">
            <FaHtml5 className="skill-icon" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <FaCss3Alt className="skill-icon" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <FaJs className="skill-icon" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <FaReact className="skill-icon" />
            <span>React</span>
          </div>
          <div className="skill">
            <SiWebpack className="skill-icon" />
            <span>Webpack</span>
          </div>
          <div className="skill">
            <SiTailwindcss className="skill-icon" />
            <span>Tailwind CSS</span>
          </div>
          <div className="skill">
            <SiGit className="skill-icon" />
            <span>Git</span>
          </div>
          <div className="skill">
            <SiNetlify className="skill-icon" />
            <span>Netlify</span>
          </div>
          <div className="skill">
            <SiC className="skill-icon" />
            <span>C</span>
          </div>
          <div className="skill">
            <FaPython className="skill-icon" />
            <span>Python</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
