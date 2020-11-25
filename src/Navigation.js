import React from 'react';
import logo from './images/logo.svg';
import './style/nav.css';

export default function Navigation(){
    return (
        <div className="nav-body-container">
            <div className="top-side-container">
                <div className="logo-container">
                    <img src={logo} alt='website logo' height='66' />
                </div>
                <div className="nav-buttons-mobile-container">
                    <i className="nav-menu-container fas fa-bars"></i>
                </div>
                <div className="nav-buttons-container">
                    <p className="nav-button">ABOUT</p>
                    <p className="nav-button">PORTFOLIO</p>
                    <p className="nav-button">RESUME</p>
                </div>
            </div>
        </div>
    )
}