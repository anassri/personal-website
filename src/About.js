import React from 'react';
import './style/about.css'
import './style/home.css'
import placeholderPhoto from './images/Directors_photo.jpg';
import VisibilitySensor from "react-visibility-sensor";

const StatBar = ({width})=>{
    return  <svg className="svg-container">
                <rect width="100%" height="5" style={{ fill: "#BCBCBC", opacity: 0.4}} />
                <rect width={width} height="5" style={{ fill: "#33DD87"}} />
            </svg>
}
export default function About({ setPageVisible }) {
    const skillArr = ["CSS", "HTML", "React", "JavaScript", "Node.js", "Python", "SQL", "UI/UX Design", "Animation"];
    const skillRange = ["85%", "85%", "75%", "80%", "60%", "70%", "60%", "90%", "90%"]
    return (
        <VisibilitySensor partialVisibility offset={{ top: 500 }}
            onChange={isVisible => isVisible ? setPageVisible("about") : null}>
            <div className="about-body-container" id="about">
                <div className="about-container">
                    <div className="left-about-container">
                        <img src={placeholderPhoto} alt='about personal photo' className="about-photo"  />
                        <div className="hello-line-container" />
                        <p className="intro-text">I’m a full-stack developer with a soft spot for UI design. 
                        Currently living in Atlanta, GA. I love turning problems 
    into impeccable user experience with valuable content.</p>
                    </div>

                    <div className="right-about-container">
                        {skillArr.map((skill, i) =>
                            <div className="stat-bar-container" key={i}>
                                <div className="stat-skill"> 
                                <p className="skill">{skill}</p>
                                </div>
                                <div className="stat-bar">
                                    <StatBar width={skillRange[i]}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    );
}