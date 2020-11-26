import React from 'react';
import monitor from './images/screen.png';
import { useHistory } from 'react-router';

export default function PortfolioEntry({logo, screen, caption, github, appLink}){
    const history = useHistory();
    return (
        <div className="portfolio-entry-container">
            <div className="portfolio-first-row">
                <img src={monitor} alt='monitor photo' className="monitor-photo"/>
                <img src={screen} alt='app photo' className="app-photo"/>
            </div>
            <div className="portfolio-second-row">

            </div>
            <div className="hello-line-container content-divider" />
            <div className="portfolio-third-row">
                <img src={logo} alt='app logo' className="app-logo"/>
                <p className="intro-text">{caption}</p>
            </div>
            <div className="portfolio-fourt-row">
                <a className="github-button"
                    href={github}>
                    <div className="github-button-container">
                        View on GitHub
                    </div>
                </a>
                <a className="app-button"
                    href={appLink}>
                    <div className="app-button-container">
                        Go to App
                    </div>
                </a>
            </div>

        </div>
    )
}