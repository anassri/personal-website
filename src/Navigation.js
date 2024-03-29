import React from "react";
import logo from "./images/logo.svg";
import "./style/nav.css";
import { HashLink } from "react-router-hash-link";
import resume from "./Ammar_Nassri_Resume_2023.pdf";

export default function Navigation({ pageVisible }) {
  return (
    <div className="nav-body-container">
      <div className="top-side-container">
        <div className="logo-container">
          <HashLink smooth to="/#about">
            <img src={logo} alt="website logo" height="66" />
          </HashLink>
        </div>
        <div className="nav-buttons-container">
          <HashLink smooth to="/#about" className="nav-button">
            <p>ABOUT</p>{" "}
          </HashLink>
          <HashLink smooth to="/#skills" className="nav-button">
            <p>SKILLS</p>{" "}
          </HashLink>
          <HashLink smooth to="/#build" className="nav-button">
            <p>PORTFOLIO</p>
          </HashLink>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            <p>RESUME</p>
          </a>
        </div>
        <div className="resume-mobile-container">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            <p>RESUME</p>
          </a>
        </div>
      </div>
    </div>
  );
}
