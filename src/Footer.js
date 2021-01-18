import React from 'react';
import './style/footer.css';

export default function Footer(){

    return (
        <div className="footer-container">
            <div className="bottom-side-container">
                <div className="copyright-statement-container">
                    <div className="social-media-mobile-container">
                        <i className="social-media fab fa-twitter"></i>
                        <i className="social-media fab fa-github"></i>
                        <i className="social-media fab fa-linkedin-in"></i>
                        <i className="social-media fas fa-envelope"></i>
                    </div>
                    <p className="copyright-statement">© 2021 Ammar Nassri</p>
                </div>
                <div className="social-media-container">
                    <a href="https://twitter.com/ammar_nassri" target="_blank" rel="noreferrer"><i className="social-media fab fa-twitter"></i></a>
                    <a href="https://github.com/anassri" target="_blank" rel="noreferrer"><i className="social-media fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/anassri/" target="_blank" rel="noreferrer"> <i className="social-media fab fa-linkedin-in"></i></a>
                    <a href="mailto:ar.nassri@gmail.com" target="_blank" rel="noreferrer"> <i className="social-media fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
    )
}