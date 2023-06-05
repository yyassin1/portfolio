import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container">
      <Header />
      <section className="contact">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__description">
          Have a project in mind or just want to say hello? Feel free to reach
          out!
        </p>
        <div className="contact__icons">
          <a href="https://github.com/yyassin1">
            <FaGithub className="contact__icon" />
          </a>
          <a href="https://www.linkedin.com/in/yassin-yassin-133181193/">
            <FaLinkedin className="contact__icon" />
          </a>
          <a href="https://your-website.com">
            <FaGlobe className="contact__icon" />
          </a>
          <a href="tel:+3017285514">
            <FaPhone className="contact__icon" />
          </a>
          <a href="mailto:yyassin1@montgomerycollege.edu">
            <FaEnvelope className="contact__icon" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
