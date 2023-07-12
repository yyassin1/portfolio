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
          Hello! My name is Yassin Yassin, and I'm a passionate self-taught web
          developer with a focus on frontend development. I have a bachelor's
          degree from Hawassa University and an associate degree from Montgomery
          College, where I gained a solid foundation in computer science. My
          journey into web development began when I took the CS50 course on edX,
          which sparked my interest and ignited my passion for creating
          websites. I further honed my skills through projects and self-learning
          resources like The Odin Project. Since then, I have been deeply
          involved in building various websites and exploring the vast
          possibilities of frontend development. Apart from coding, I have a
          diverse range of interests and hobbies. I love going to the gym to
          stay active and maintain a healthy lifestyle. When I'm not coding, you
          can often find me riding horses, hiking in nature, enjoying a good
          book, or swimming. I believe in continuous learning and staying
          up-to-date with the latest trends and technologies in web development.
          I am excited to contribute my skills, creativity, and dedication to
          creating user-friendly and visually appealing web experiences. Feel
          free to explore my portfolio and projects to see the culmination of my
          passion and dedication to frontend development. If you have any
          questions or would like to collaborate, please don't hesitate to get
          in touch. Let's create something amazing together!
        </p>
      </div>
      <Footer />
    </div>
  );
}
