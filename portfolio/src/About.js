import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function About() {
  return (
    <div className="container">
      <Header />
      <div className="aboutme">
        <h1 className="aboutme--title">About Me</h1>
        <p className="aboutme__content">
          Introducing the Mastermind Behind the Pixels: Greetings, fellow
          traveler in the digital realm! I'm thrilled to have you visit my web
          developer portfolio—a virtual haven where creativity meets
          functionality. Allow me to be your guide on this exhilarating journey,
          where code merges with imagination to create captivating online
          experiences. I am Yassin Yassin, a coding virtuoso, web developer, and
          explorer of the internet's boundless possibilities. With a profound
          command over technologies, I bring websites to life. I skillfully
          orchestrate CSS, HTML, and JavaScript, creating harmonious user
          interfaces that captivate the senses. Using React, Webpack, and Git, I
          transform static pages into dynamic and responsive marvels. But my
          expertise extends beyond front-end development. I conquer complex
          challenges with languages like C and Python, building robust and
          elegant solutions. I believe code is not just about functionality but
          also evoking emotions and telling stories. I create digital
          experiences that enchant users with immersive narratives and
          captivating visuals. Beyond coding, I am an avid learner, always
          seeking new knowledge to broaden my horizons. Collaboration fuels my
          passion, as I eagerly bring ideas to life and learn from fellow
          enthusiasts. Join me on this expedition through my portfolio, where
          creativity and technology intertwine. Let's explore the vast web,
          leaving no pixel unturned and no boundary uncrossed. Welcome to my
          digital realm. Are you ready to join me?
        </p>
      </div>
      <Footer />
    </div>
  );
}
