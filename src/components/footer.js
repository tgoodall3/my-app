import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="portfolio-footer">
        <div className="footer-content">
            <div className="footer-section quick-links">
            <h3>Quick Links</h3>
                <ul>
                <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
                </ul>
            </div>

            <div class="footer-section social-networks">
                <div className="social-links">
                <h3>Connect With Me</h3>
                    <a href="yhttps://www.instagram.com/tyl3rgoodall/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                    <a href="https://www.linkedin.com/in/tyler-goodall/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>
                    <a href="mailto:tylergoodall3@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16" width="14">
                      <path d="M502.3 190.8c9.7 9.7 9.7 25.6 0 35.3L365.5 362.9c-9.7 9.7-25.6 9.7-35.3 0s-9.7-25.6 0-35.3L446.6 256 330.3 139.7c-9.7-9.7-9.7-25.6 0-35.3s25.6-9.7 35.3 0L502.3 190.8zM320 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32S337.7 224 320 224zM192 256c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32S192 273.7 192 256zM109.3 362.9c-9.7 9.7-25.6 9.7-35.3 0L9.7 298.1c-9.7-9.7-9.7-25.6 0-35.3L150.6 121.4c9.7-9.7 25.6-9.7 35.3 0s9.7 25.6 0 35.3L65.4 256l120.5 120.3c9.7 9.7 9.7 25.6 0 35.3C135 372.6 119 372.6 109.3 362.9z"/>
                     </svg>
                    </a>

                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2023 Tyler Goodall. All Rights Reserved.</p>
        </div>
</footer>
  );
}

export default Footer;
