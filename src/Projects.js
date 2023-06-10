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
    live: "https://yassin-cv-builder.netlify.app/",
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
    live: "https://flavor-us-market.netlify.app",
    source: "https://github.com/yyassin1/Flavor-Us-Market",
    detail:
      "A full website built with React, featuring a shopping list and a shopping cart functionality for a seamless online shopping experience.",
  },
  {
  name: "Etch-A-Sketch",
    image: `${process.env.PUBLIC_URL}/etch.png`,
    tech: "HTML, CSS, JavaScript",
    live: "https://yassin-etch-a-sketch.netlify.app/",
    source: "https://github.com/yyassin1/etch-a-sketch",
    detail:
      "This is a JavaScript program that dynamically creates a grid of cells using the DOM manipulation. Each cell in the grid can be colored by hovering over it, and the grid can be cleared by clicking a button.",
  },
  {
    name: "Tic-Tac-Toe",
      image: `${process.env.PUBLIC_URL}/tictactoe.png`,
      tech: "HTML, CSS, JavaScript",
      live: "https://yassin-tictactoe.netlify.app",
      source: "https://github.com/yyassin1/tic-tac-toe",
      detail:
        "This is a simple web-based Tic-Tac-Toe game where players can compete against each other or against a computer opponent.",
    },
    {
      name: "Rock-Paper-Scissor",
        image: `${process.env.PUBLIC_URL}/tictactoe.png`,
        tech: "HTML, CSS, JavaScript",
        live: "https://yassin-rockpaperscissor.netlify.app",
        source: "https://github.com/yyassin1/Rock-Paper-Scissors",
        detail:
          "Rock Paper Scissors is a simple web-based game where players can compete against the computer by choosing rock, paper, or scissors. The game follows the traditional rules: rock beats scissors, scissors beats paper, and paper beats rock.",
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
