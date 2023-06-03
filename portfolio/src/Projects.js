import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const projects = [
  {
    name: "Memory Card",
    image: `${process.env.PUBLIC_URL}/memorygame.png`,
    tech: "React Js, HTML, CSS",
    live: "https://bucolic-gaufre-1afbd0.netlify.app",
    source: "https://github.com/yyassin1/Memory-Card",
    detail:
      "The Memory Game with Ethiopian Region flags is an interactive web-based game. Players click on shuffled flags representing different regions of Ethiopia and try to match pairs without repeating selections. It challenges memory and concentration skills while providing an engaging experience. The goal is to find all matching pairs within the shortest time possible.",
  },
  {
    name: "CV Builder",
    image: `${process.env.PUBLIC_URL}/cv.png`,
    tech: "React Js, HTML, CSS",
    live: "https://exquisite-duckanoo-c1b515.netlify.app",
    source: "https://github.com/yyassin1/CV-builder",
    detail:
      "The CV Builder is a web application that helps users create professional resumes quickly. It offers an intuitive interface for inputting personal and professional information and selecting customizable resume templates. Users can generate visually appealing resumes to highlight their skills and qualifications for potential employers.",
  },
  {
    name: "Weather App",
    image: `${process.env.PUBLIC_URL}/weather.png`,
    tech: "HTML, CSS, Vanilla Javascript",
    live: "https://lucent-froyo-686d52.netlify.app/",
    source: "https://github.com/yyassin1/Weather-App",
    detail:
      "The Weather App, created using HTML, CSS, and JavaScript, delivers real-time weather information. It showcases current weather conditions, temperature conversion between Fahrenheit and Celsius, wind speed, sunrise and sunset times, and a day-to-night mode for visual appeal. It offers an intuitive user interface for a seamless weather-checking experience.",
  },
  {
    name: "Tobacco Store Page",
    image: `${process.env.PUBLIC_URL}/flavor.png`,
    tech: "React Js, HTML, CSS, Netlify",
    live: "https://remarkable-longma-fff1a4.netlify.app/",
    source: "https://github.com/yyassin1/Flavor-Us-Market",
    detail:
      "A full website built with React, featuring a shopping list and a shopping cart functionality for a seamless online shopping experience.",
  },
];

const Projects = () => {
  return (
    <div className="container">

      <Header />
      <div className="project-page">
        <h1 className="page-title">My Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-details">
              <h2>{project.name}</h2>
              <p>
                <strong>Technologies:</strong> {project.tech}
              </p>
              <p>{project.detail}</p>
              <div className="project-links">
                <a href={project.live} className="project-link">
                  Live Demo
                </a>
                <a href={project.source} className="project-link">
                  Source Code
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="project--more">
        <a href="https://github.com/yyassin1" className="project-link">
          More Projects
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;