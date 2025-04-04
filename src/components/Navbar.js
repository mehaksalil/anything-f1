import React, { useState } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Anything F1 Logo" />
        <h1>Anything F1</h1>
      </div>
      
      <button className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
      
      <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/driverstats">Drivers</a></li>
        <li><a href="/teamstats">Teams</a></li>
        <li><a href="/driverstandings">Standings</a></li>
        <li><a href="/forum">Forum</a></li>
        <li><a href="/Marketplace">Merchandise</a></li>
      </ul>
      
      <div className="navbar-auth">
  <a href="/login">
    <button>Sign In</button>
  </a>
  <a href="/register">
    <button>Sign Up</button>
  </a>
</div>
    </nav>
  );
};

export default Navbar;