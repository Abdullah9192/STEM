import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styling/LandingPage.css'; 

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-logo">STEM</h1>
        </div>
        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="navbar-toggle-line"></div>
          <div className="navbar-toggle-line"></div>
          <div className="navbar-toggle-line"></div>
        </button>
        <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <Link 
                to="/home" 
                className={activeLink === 'home' ? 'active' : ''} 
                onClick={() => handleLinkClick('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/admission" 
                className={activeLink === 'admission' ? 'active' : ''} 
                onClick={() => handleLinkClick('admission')}
              >
                Admission
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={activeLink === 'about' ? 'active' : ''} 
                onClick={() => handleLinkClick('about')}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={activeLink === 'blog' ? 'active' : ''} 
                onClick={() => handleLinkClick('blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={activeLink === 'contact' ? 'active' : ''} 
                onClick={() => handleLinkClick('contact')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
