import React from 'react';
import logo from './images/logo.svg';
import './style/nav.css';

export default function Navigation(){
    return (
        <div className="nav-body-container">
            <div className="left-side-container">
                <div className="logo-container">
                    <img src={logo} alt='website logo' height='66' />
                </div>
                <div className="dots-nav-container">
                    <div className="dot-nav-button" />
                    <div className="dot-nav-button" />
                    <div className="dot-nav-button" />
                    <div className="dot-nav-button" />
                    <div className="dot-nav-button" />
                </div>
                <div className="copyright-statement-container">
                    <div className="social-media-mobile-container">
                        <i class="social-media fab fa-twitter"></i>
                        <i class="social-media fab fa-github"></i>
                        <i class="social-media fab fa-linkedin-in"></i>
                        <i class="social-media fas fa-envelope"></i>
                    </div>
                    <p className="copyright-statement">© 2020 Ammar Nassri</p>
                </div>
            </div>
            <div className="right-side-container">
                <div className="nav-buttons-mobile-container">
                    <i class="nav-menu-container fas fa-bars"></i>
                </div>
                <div className="nav-buttons-container">
                    <p className="nav-button">ABOUT</p>
                    <p className="nav-button">PORTFOLIO</p>
                    <p className="nav-button">RESUME</p>
                </div>
                <div className="social-media-container">
                    <i class="social-media fab fa-twitter"></i>
                    <i class="social-media fab fa-github"></i>
                    <i class="social-media fab fa-linkedin-in"></i>
                    <i class="social-media fas fa-envelope"></i>
                </div>
            </div>
        </div>
    )
}