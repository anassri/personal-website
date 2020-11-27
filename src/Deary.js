import React from 'react';
import './style/portfolio.css';
import dearyLogo from './images/deary-logo.svg';
import dearyScreen from './images/app-01.png';

export default function PortfolioTop() {
    const captions = "Deary is a social media app built to help people keep in touch with the ones they care about.Developed with React, Python, PostgresQL, AWS";
    const githubs = "https://github.com/anassri/deary"
    const appLinks = "https://deary-social.herokuapp.com/";

    return (
        <div className="portfolio-container">
            <div className="portfolio-body-container">
                <div className="left-portfolio-container">
                    <div className="portfolio-first-row">
                        <img src={dearyScreen} alt='deary photo' className="monitor-photo" />
                    </div>
                </div>
                <div className="right-portfolio-container">
                    <h1 className="app-title">Deary</h1>
                    <p className="app-subtitle">Stay in touch with the people you care about.</p>
                    <img src={dearyLogo} alt='app logo' className="app-logo" />
                    <div className="hello-line-container content-divider" />
                    <div className="portfolio-third-row">
                        <p className="caption-text">{captions}</p>
                    </div>
                    <div className="portfolio-fourt-row">
                        <a className="github-button"
                            href={githubs}>
                            <div className="github-button-container">
                                View on GitHub
                    </div>
                        </a>
                        <a className="app-button"
                            href={appLinks}>
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