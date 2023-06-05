import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="header--name">
        <Link to="/" className="header--name--button">
          Yassin
        </Link>
      </div>
      <nav className="button--nav">
        <Link to="/about" className="button">
          About
        </Link>
        <Link to="/skills" className="button">
          Skills & Tools
        </Link>
        <Link to="/projects" className="button">
          Projects
        </Link>
        <Link to="/resume" className="button">
          Resume
        </Link>
        <Link to="/contact" className="button">
          Contact
        </Link>
      </nav>
    </header>
  );
}
