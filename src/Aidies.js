import React from 'react';
import './style/portfolio.css';
import aidiesLogo from './images/aidies-logo.svg';
import aidiesScreen from './images/app-03.png';
import VisibilitySensor from "react-visibility-sensor";

export default function Aidies({ setPageVisible }) {
    const captions = "Aidies is an auction website built to help people auction off their work for charity. Developed with React, Node.js, PostgresQL, AWS"
    const githubs = "https://github.com/anassri/aid-ies"
    const appLinks = "https://aidies.herokuapp.com/";

    return (
        // <VisibilitySensor partialVisibility 
        //     onChange={isVisible => isVisible ? setPageVisible("aidies") : null}>

        <div className="portfolio-container"id="aidies">
            <div className="portfolio-body-container">
                <div className="left-portfolio-container">
                    <div className="portfolio-first-row">
                        <img src={aidiesScreen} alt='aidies photo' className="monitor-photo" />
                    </div>
                </div>
                <div className="right-portfolio-container">
                    <h1 className="app-title">Aidies</h1>
                    <p className="app-subtitle">Auction off unique work for charity. </p>
                    <img src={aidiesLogo} alt='app logo' className="app-logo" />
                    <div className="hello-line-container content-divider" />
                    <div className="portfolio-third-row">
                        <p className="caption-text">{captions}</p>
                    </div>
                    <div className="portfolio-fourt-row">
                        <a className="github-button"
                                href={githubs} target="_blank">
                            <div className="github-button-container">
                                View on GitHub
                    </div>
                        </a>
                        <a className="app-button"
                                href={appLinks} target="_blank">
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