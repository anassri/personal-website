import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

export default function LeftNav({ pageVisible }){
    if(pageVisible){
        const element = document.querySelector('.active-dot')
        if(element){
            element.classList.remove("active-dot");
        }
        const activeElement = document.getElementById(`${pageVisible}-dot`);
        if(activeElement)
            activeElement.classList.add("active-dot");
    }
    return(
        <div className="dots-nav-container">
            <NavHashLink smooth to="/#home">
                <div className="dot-nav-button active-dot" id="home-dot" />
            </NavHashLink>
            <NavHashLink smooth to="/#about">
            <div className="dot-nav-button" id="about-dot" />
            </NavHashLink>
            <NavHashLink smooth to="/#deary">
            <div className="dot-nav-button" id="deary-dot" />
            </NavHashLink>
            <NavHashLink smooth to="/#aab">
            <div className="dot-nav-button" id="aab-dot" />
            </NavHashLink>
            <NavHashLink smooth to="/#aidies">
            <div className="dot-nav-button" id="aidies-dot" />
            </NavHashLink>
            <NavHashLink smooth to="/#st">
            <div className="dot-nav-button" id="st-dot" />
            </NavHashLink>
        </div>
    )
}