import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Contact from "./Contact";
import Resume from "./Resume";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
