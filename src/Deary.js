import React from 'react';
import './style/portfolio.css';
import dearyLogo from './images/deary-logo.svg';
import dearyScreen from './images/app-01.png';

export default function Deary({ setPageVisible }) {
    const captions = `Deary is a social media app built to help people keep in touch with the ones they care about. Developed with React, Python, PostgresQL, AWS`;
    const responsibility = "this was a solo project, all aspects of this app has been developed by me."
    const githubs = "https://github.com/anassri/deary"
    const appLinks = "https://deary-social.herokuapp.com/";

    return (
        <div className="portfolio-container" id="deary" >
            <div className="portfolio-body-container">
                <div className="left-portfolio-container">
                    <div className="portfolio-first-row">
                        <img src={dearyScreen} alt='deary' className="monitor-photo" />
                    </div>
                </div>
                <div className="right-portfolio-container">
                    <div className="section-title-container">
                        <h1>Portfolio</h1>
                    </div>
                    <h1 className="app-title">Deary</h1>
                    <p className="app-subtitle">Stay in touch with the people you care about.</p>
                    <img src={dearyLogo} alt='app logo' className="app-logo" />
                    <div className="hello-line-container content-divider" />
                    <div className="portfolio-third-row">
                        <p className="caption-text">{captions} <br></br><span style={{fontWeight: 'bold'}}> Responsibility: </span>{responsibility}</p>
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
    )
}