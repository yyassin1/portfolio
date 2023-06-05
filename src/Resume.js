import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import YassinResume from "../public/YassinResume.pdf";
export default function Resume() {
  return (
    <div className="container">
      <Header />
      <h1>Resume</h1>
      <a href={YassinResume} download>
        Download Resume
      </a>
      <Footer />
    </div>
  );
}
