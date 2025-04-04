import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Anything F1</h3>
            <p>Your ultimate destination for everything Formula 1. Join our community of passionate F1 fans!</p>
          </div>
          
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/driverstats">Drivers</a></li>
              <li><a href="/teamstats">Teams</a></li>
              <li><a href="/driverstandings">Standings</a></li>
              <li><a href="/forum">Community Forum</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="/marketplace">Merchandise</a></li>
              <li><a href="/quiz">F1 Quiz</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/news">Latest News</a></li>
              <li><a href="/calendar">Race Calendar</a></li>
              <li><a href="/history">F1 History</a></li>
            </ul>
          </div>
          
          <div className="footer-column footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest F1 updates, news, and exclusive content.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input" 
                required 
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anything F1. All rights reserved.</p>
          <div className="footer-links-bottom">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookie">Cookie Policy</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;