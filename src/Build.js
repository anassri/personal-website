import React from "react";
import "./style/portfolio.css";
import buildLogo from "./images/build.png";

export default function Build({ setPageVisible }) {
  const appLinks = "https://build.com/";

  return (
    <div className="portfolio-container" id="build">
      <div className="portfolio-body-container">
        <div className="left-portfolio-container">
          <div className="portfolio-first-row">
            <img src={buildLogo} alt="aidies" className="build-hero-photo" />
          </div>
        </div>
        <div className="build-right-portfolio-container">
          <h1 className="app-title">Build with Ferguson</h1>
          <div className="hello-line-container content-divider" />
          <div className="portfolio-third-row">
            <p className="caption-text">
              As a software engineer and tech lead for the Top-of-Funnel team at{" "}
              <span style={{ fontWeight: "400" }}>Build with Ferguson</span>, I
              have extensive experience in developing features using{" "}
              <span style={{ fontWeight: "400" }}>React</span>,{" "}
              <span style={{ fontWeight: "400" }}>TypeScript</span>, and{" "}
              <span style={{ fontWeight: "400" }}>GraphQL</span>. I prioritize
              optimizing data for front-end consumption and creating performant
              components for faster loading times. To maintain the highest
              quality code, I create and style front-end components with React
              and <span style={{ fontWeight: "400" }}>Storybook</span>, and
              write unit tests using{" "}
              <span style={{ fontWeight: "400" }}>Jest</span> and{" "}
              <span style={{ fontWeight: "400" }}>React Testing Library</span>
              . <br />
              <br />
              Mentoring junior developers and providing technical leadership in
              software architecture and design decisions is a passion of mine. I
              value collaboration and actively participate in code reviews and
              technology meetings to learn from my colleagues and provide
              constructive feedback. My experience has taught me the importance
              of balancing technical expertise with strong communication skills
              to ensure the success of each project.
            </p>
          </div>
          <div className="portfolio-fourt-row">
            <a
              className="app-button"
              href={appLinks}
              target="_blank"
              rel="noreferrer"
            >
              <div className="app-button-container">Go to App</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
