import React from "react";
import "./style/home.css";
import "./style/scroll.css";
import homePhoto from "../src/images/profile.jpg";

export default function Home({ setPageVisible }) {
  return (
    <div className="home-body-container" id="about">
      <div className="home-container">
        <div className="left-home-container">
          <img src={homePhoto} alt="main personal" className="home-photo" />
        </div>
        <div className="right-home-container">
          <div className="hello-container">
            <h1>Hello!</h1>
          </div>
          <div className="hello-line-container" />
          <p className="intro-text" style={{ letterSpacing: 1 }}>
            Welcome to my digital playground! I'm{" "}
            <span style={{ fontWeight: "400" }}>Ammar Nassri</span> and I’m a{" "}
            <span style={{ fontWeight: "400" }}>full-stack developer</span>,{" "}
            <span style={{ fontWeight: "400" }}>UI/UX designer</span>, and{" "}
            <span style={{ fontWeight: "400" }}>animator</span> based in{" "}
            <span style={{ fontWeight: "400" }}>Atlanta, GA</span>. I thrive on
            bringing innovative and imaginative ideas to life through
            technology. Let's work together to create something that is not only
            visually stunning but also captivates and inspires.
          </p>
        </div>
        <div className="down-arrow">
          <div className="arrow bounce">
            <i className="fa fa-arrow-down fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
