import React from 'react';

export default function Portfolio({App1, App2}){
    return (
        <div className="portfolio-container">
            <div className="portfolio-body-container">
                <div className="left-portfolio-container">
                    <App1 />
                </div>
                <div className="right-portfolio-container">
                    <App2 />
                </div>
            </div>
        </div>
    )
}