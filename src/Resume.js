import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import YassinResume from "./files/Yassin_Yassin Resume.pdf";
export default function Resume() {
  return (
    <div className="container">
      <Header />
      <h1 className="resume--header">Resume</h1>
      <div className="resume--link-wrapper">
        <a className="resume--link" href={YassinResume} download>
          Download Resume
        </a>
      </div>
      <Footer />
    </div>
  );
}
