import React from 'react';
import logo from './images/logo.svg';
import './style/nav.css';
import { NavHashLink } from 'react-router-hash-link';
import $ from 'jquery';

export default function Navigation(){
    return (
        <div className="nav-body-container">
            <div className="top-side-container">
                <div className="logo-container">
                    
                    <NavHashLink smooth to="/#home"
                        activeClassName="active">
                            <img src={logo} alt='website logo' height='66' />
                    </NavHashLink>
                </div>
                <div className="nav-buttons-mobile-container">
                    <i className="nav-menu-container fas fa-bars"></i>
                </div>
                <div className="nav-buttons-container">
                    <NavHashLink smooth to="/#about"
                        activeClassName="active" className="nav-button"><p>ABOUT</p> </NavHashLink>
                    <NavHashLink smooth to="/#portfolio"
                        activeClassName="active" className="nav-button"><p>PORTFOLIO</p></NavHashLink>
                    <NavHashLink smooth to="/#resume"
                        activeClassName="active" className="nav-button"><p>RESUME</p></NavHashLink>
                </div>
            </div>
        </div>
    )
}