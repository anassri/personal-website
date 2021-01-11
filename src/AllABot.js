import React from 'react';
import './style/portfolio.css';
import aabLogo from './images/aab-logo.svg';
import aabScreen from './images/app-02.png';
// import VisibilitySensor from "react-visibility-sensor";

export default function AllABot({ setPageVisible }) {
    const captions = "All-A-Bot is a custom Discord bot generator. AAB is a group project built to help Discord members generate quick bots to serve their needs. Developed with React, Python, PostgresQL"
    const githubs = "https://github.com/anassri/All-A-Bot"
    const appLinks = "https://all-a-bot.herokuapp.com/";
    const responsibility = "I was responsible for Explore Bots page, View Bot, contributed to the system that generates the code for the bot, and the UI/UX development and styling"

    return (
        // <VisibilitySensor partialVisibility 
        //     onChange={isVisible => isVisible ? setPageVisible("aab") : null}>

        <div className="portfolio-container" id="aab">
            <div className="portfolio-body-container">
                <div className="left-portfolio-container">
                    <div className="portfolio-first-row">
                        <img src={aabScreen} alt='all-a-bot' className="monitor-photo" />
                    </div>
                </div>
                <div className="right-portfolio-container">
                    <h1 className="app-title">All-A-Bot</h1>
                    <p className="app-subtitle">Custom Discord bot generator.</p>
                    <img src={aabLogo} alt='app logo' className="app-logo" />
                    <div className="hello-line-container content-divider" />
                    <div className="portfolio-third-row">
                        <p className="caption-text">{captions} <span style={{ fontWeight: 'bold' }}> Responsibility: </span>{responsibility}</p>
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