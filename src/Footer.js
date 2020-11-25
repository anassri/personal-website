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
                    <p className="copyright-statement">© 2020 Ammar Nassri</p>
                </div>
                <div className="social-media-container">
                    <i className="social-media fab fa-twitter"></i>
                    <i className="social-media fab fa-github"></i>
                    <i className="social-media fab fa-linkedin-in"></i>
                    <i className="social-media fas fa-envelope"></i>
                </div>
            </div>
        </div>
    )
}