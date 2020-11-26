import React from 'react';
import './style/portfolio.css';
import aidiesLogo from './images/aidies-logo.svg';
import aidiesScreen from './images/app-01.png';
import dearyLogo from './images/deary-logo.svg';
import dearyScreen from './images/app-04.png';
import aabLogo from './images/aab-logo.svg';
import aabScreen from './images/app-03.png';
import stLogo from './images/st-logo.svg';
import stScreen from './images/app-02.png';
import PortfolioEntry from './PortfolioEntry';

export default function PortfolioTop(){
    const logos = [aidiesLogo, dearyLogo, aabLogo, stLogo];
    const screens = [aidiesScreen, dearyScreen, aabScreen, stScreen];
    const captions = ["Deary is a social media app built to help people keep in touch with the ones they care about.Developed with React, Python, PostgresQL, AWS",
        "All-A-Bot is a custom Discord bot generator. AAB is a group project built to help Discord members generate quick bots to serve their needs. Developed with React, Python, PostgresQL",
        "Aidies is an auction website built to help people auction off their work for charity. Developed with React, Node.js, PostgresQL, AWS",
        "Sprint Turf is a simple project management app. ST is a group project created to provide a simple solution to developers. Developed with Vanilla JS, Node.js, PostgresQL"
    ]
    const githubs = ["https://github.com/anassri/deary",
                        "https://github.com/anassri/All-A-Bot",
                        "https://github.com/anassri/aid-ies",
                        "https://github.com/anassri/sprint-turf-project",
                    ];
    const appLinks = ["https://deary-social.herokuapp.com/", 
                        "https://all-a-bot.herokuapp.com/",
                        "https://aidies.herokuapp.com/",
                        "http://sprint-turf.herokuapp.com/"
                        ];
    return (
        <div className="portfolio-container">
            <div className="portfolio-body-container">
                <div className="left-portfolio-container">
                    <PortfolioEntry logo={logos[1]} screen={screens[1]} caption={captions[0]} github={githubs[0]} appLink={appLinks[0]}/>
                </div>
                <div className="right-portfolio-container">
                    <PortfolioEntry logo={logos[2]} screen={screens[2]} caption={captions[1]} github={githubs[1]} appLink={appLinks[1]}/>
                </div>
            </div>
        </div>
    )
}