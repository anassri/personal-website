import React from 'react';
import './style/about.css'
import './style/home.css'
import afterEffects from './images/aftereffects-icon.svg';
import audition from './images/audition-icon.svg';
import illustrator from './images/illustrator-icon.svg';
import maya from './images/maya-icon.svg';
import photoshop from './images/photoshop-icon.svg';
import premiere from './images/premiere-icon.svg';
import substance from './images/substance-icon.svg';
import toonboom from './images/toonboom-icon.svg';
import zbrush from './images/zbrush-icon.svg';
// import VisibilitySensor from "react-visibility-sensor";

// const StatBar = ({width})=>{
//     return  <svg className="svg-container">
//                 <rect width="100%" height="5" style={{ fill: "#BCBCBC", opacity: 0.4}} />
//                 <rect width={width} height="5" style={{ fill: "#33DD87"}} />
//             </svg>
// }
export default function About({ setPageVisible }) {
    // const skillArr = ["CSS", "HTML", "React", "JavaScript", "Node.js", "Python", "SQL", "UI/UX Design", "Animation"];
    // const skillRange = ["85%", "85%", "75%", "80%", "60%", "70%", "60%", "90%", "90%"]
    return (
        // <VisibilitySensor partialVisibility offset={{ top: 500 }}
            // onChange={isVisible => isVissible ? setPageVisible("about") : null}>
            <div className="about-body-container" id="skills">
                <div className="about-container">
                    <div className="section-title-container">
                        <h1>Skills</h1>
                    </div>
                    <div className="skills-container">
                        <div className="code-container">
                            <h1 className="section-header">Code</h1>
                            <div className="hello-line-container about-line" />

                            <div className="skill-item">
                                <i className="fab fa-js"></i>
                                <p className="skill-text">JavaScript</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-react"></i>
                                <p className="skill-text">React</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-node-js"></i>
                                <p className="skill-text">Node.js</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-python"></i>
                                <p className="skill-text">Python</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-html5"></i>
                                <p className="skill-text">HTML</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-css3-alt"></i>
                                <p className="skill-text">CSS</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <p className="skill-text">SQL</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-aws"></i>
                                <p className="skill-text">AWS</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-git-alt"></i>
                                <p className="skill-text">Git</p>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-docker"></i>
                                <p className="skill-text">Docker</p>
                            </div>
                            
                        </div>
                        <div className="design-container">
                            <h1 className="section-header">Design</h1>
                            <div className="hello-line-container about-line" />

                            <div className="skill-item">
                                <img className="design-icon" src={illustrator} alt="illustrator" width="21.88"/>
                                <p className="skill-text">Illustrator</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={photoshop} alt="photoshop" width="21.88" />
                                <p className="skill-text">Photoshop</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={maya} alt="maya" width="21.88" />
                                <p className="skill-text">Maya</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={zbrush} alt="zbrush" width="21.88" />
                                <p className="skill-text">ZBrush</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={substance} alt="substance" width="21.88" />
                                <p className="skill-text">Substance Painter</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={toonboom} alt="toonboom" width="21.88" />
                                <p className="skill-text">ToonBoom</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={afterEffects} alt="afterEffects" width="21.88" />
                                <p className="skill-text">After Effects</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={premiere} alt="premiere" width="21.88" />
                                <p className="skill-text">Premiere</p>
                            </div>
                            <div className="skill-item">
                            <img className="design-icon" src={audition} alt="audition" width="21.88" />
                                <p className="skill-text">Audition</p>
                            </div>
                        </div>
                        <div className="life-container">
                            
                            <h1 className="section-header">Life</h1>
                            <div className="hello-line-container about-line" />

                            <div className="skill-item">
                                <i className="fas fa-female"></i>
                                <p className="skill-text">Wife</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-baby"></i>
                                <p className="skill-text">Baby</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-paint-roller"></i>
                                <p className="skill-text">Building</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-walking"></i>
                                <p className="skill-text">Walking</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-music"></i>
                                <p className="skill-text">Music</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-film"></i>
                                <p className="skill-text">Films</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-gamepad"></i>
                                <p className="skill-text">Video Games</p>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-screwdriver"></i>
                                <p className="skill-text">Sculpting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </VisibilitySensor>
    );
}