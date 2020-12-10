import React from 'react';
import logo from './images/logo.svg';
import './style/nav.css';
import { HashLink } from 'react-router-hash-link';

export default function Navigation({ pageVisible }){
    return (
        <div className="nav-body-container">
            <div className="top-side-container">
                <div className="logo-container">
                    
                    <HashLink smooth to="/#home">
                            <img src={logo} alt='website logo' height='66' />
                    </HashLink>
                </div>
                <div className="nav-buttons-container">
                    <HashLink smooth to="/#about"
                         className="nav-button"><p>ABOUT</p> </HashLink>
                    <HashLink smooth to="/#skills"
                         className="nav-button"><p>SKILLS</p> </HashLink>
                    <HashLink smooth to="/#deary"
                         className="nav-button"><p>PORTFOLIO</p></HashLink>
                    <HashLink smooth to="/#resume"
                         className="nav-button"><p>RESUME</p></HashLink>
                </div>
            </div>
        </div>
    )
}