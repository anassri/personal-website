import React from 'react';
import './style/portfolio.css';
import stLogo from './images/st-logo.svg';
import stScreen from './images/app-04.png';
// import VisibilitySensor from "react-visibility-sensor";

export default function SprintTurf({ setPageVisible }) {
    const captions = "Sprint Turf is a simple project management app. ST is a group project created to provide a simple solution to developers. Developed with Vanilla JS, Node.js, PostgresQL"
    const githubs = "https://github.com/anassri/sprint-turf-project";
    const appLinks = "http://sprint-turf.herokuapp.com/";
    const responsibility = "I was responsible for Sign up page, notes section, UI/UX development and styling."

    return (
        // <VisibilitySensor partialVisibility 
        //     onChange={isVisible => isVisible ? setPageVisible("st") : null}>

            <div className="portfolio-container" id="st">
            <div className="portfolio-body-container">
                <div className="left-portfolio-container">
                    <div className="portfolio-first-row">
                        <img src={stScreen} alt='aidies' className="monitor-photo" />
                    </div>
                </div>
                <div className="right-portfolio-container">
                    <h1 className="app-title">Sprint Turf</h1>
                    <p className="app-subtitle">Simple management app for your complex projects.</p>
                    <img src={stLogo} alt='app logo' className="app-logo" />
                    <div className="hello-line-container content-divider" />
                    <div className="portfolio-third-row">
                        <p className="caption-text">{captions} <br></br><span style={{ fontWeight: 'bold' }}> Responsibility: </span>{responsibility}</p>
                    </div>
                    <div className="portfolio-fourt-row">
                        <a className="github-button"
                            href={githubs} target="_blank" rel="noreferrer">
                            <div className="github-button-container">
                                View on GitHub
                    </div>
                        </a>
                        <a className="app-button"
                            href={appLinks} target="_blank" rel="noreferrer">
                            <div className="app-button-container">
                                Go to App
                    </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // </VisibilitySensor>
    )
}