import React from 'react';
import './style/home.css'
import './style/scroll.css'
import homePhoto from './images/profile_side_dsk.png';
// import VisibilitySensor from "react-visibility-sensor";
import downArrow from './images/down-arrow.svg';
export default function Home({setPageVisible}){

    return (
        // <VisibilitySensor partialVisibility onChange={isVisible => isVisible ? setPageVisible("home") : null}>
            <div className="home-body-container" id="about">
                <div className="home-container">
                    <div className="left-home-container">
                        <img src={homePhoto} alt='main personal' className="home-photo" />
                    </div>
                    <div className="right-home-container">
                        <div className="hello-container">
                            <h1>Hello!</h1>
                        </div>
                        <div className="hello-line-container" />
                    <p className="intro-text" style={{letterSpacing: 1}}>My name is <span style={{ fontWeight: '400' }}>Ammar Nassri</span>, and I’m a <span style={{ fontWeight: '400' }}>full-stack developer</span>, <span style={{ fontWeight: '400' }}>UI/UX designer</span>, 
                        and <span style={{ fontWeight: '400' }}>animator</span>. Currently living in <span style={{ fontWeight: '400' }}>Atlanta, GA</span>. I love turning problems into impeccable user experience with valuable content.
                        </p>
                    </div>
                <div className="down-arrow">
                    <div className="arrow bounce">
                        <a className="fa fa-arrow-down fa-2x" href="#"></a>
                    </div>
                </div>
                </div>
            </div>
        // </VisibilitySensor>
    );
}