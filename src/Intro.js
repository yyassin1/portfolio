import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Intro() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <>
      <Header />
      <div className="intro__container">
        <img
          src={`${process.env.PUBLIC_URL}/YassinProfile1.JPG`}
          alt="Yassin Profile"
          className="intro__image"
        />
        <div className="intro__content">
          <h2>Hi, I'm</h2>
          <h1 className="intro--name">Yassin Yassin</h1>
          <h3>I'm a Frontend Developer</h3>
          <button onClick={handleButtonClick} className="intro__button">
            More About Me
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
