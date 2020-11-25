import React from 'react';
import './style/home.css'
import placeholderPhoto from './images/Directors_photo.jpg';
export default function Home(){

    return (
        <div className="home-body-container">
            <div className="home-container">
                <div className="left-home-container">
                    <img src={placeholderPhoto} alt='main personal photo' className="home-photo" />
                </div>
                <div className="right-home-container">
                    <div className="hello-container">
                        <h1>Hello!</h1>
                    </div>
                    <div className="hello-line-container" />
                    <p className="intro-text">My name is Ammar Nassri, and I am a full-stack
web developer, UI/UX designer, and animator.</p>
                </div>
            </div>
        </div>
    );
}