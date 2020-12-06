import React from 'react';
import './style/home.css'
import homePhoto from './images/profile_side_dsk.png';
import VisibilitySensor from "react-visibility-sensor";
import downArrow from './images/down-arrow.svg';
export default function Home({setPageVisible}){

    return (
        // <VisibilitySensor partialVisibility onChange={isVisible => isVisible ? setPageVisible("home") : null}>
            <div className="home-body-container" id="home">
                <div className="home-container">
                    <div className="left-home-container">
                        <img src={homePhoto} alt='main personal' className="home-photo" />
                    </div>
                    <div className="right-home-container">
                        <div className="hello-container">
                            <h1>Hello!</h1>
                        </div>
                        <div className="hello-line-container" />
                        <p className="intro-text">My name is Ammar Nassri, and I am a full-stack
    web developer, UI/UX designer, and animator.</p>
                    </div>
                <div className="down-arrow">
                    <img src={downArrow} alt='down arrow' height='40' />
                </div>
                </div>
            </div>
        // </VisibilitySensor>
    );
}