import React from 'react';
import '../Styling/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='text-container'>
          <h2>Ready to Start Your Journey in STEM?</h2>
          <h4>Explore endless possibilities in Sciences, Technology, Engineering, and Mathematics.<br/> 
            Take the first step today—discover resources, connect with mentors, and unlock your potential.</h4>
        </div>
        <button className="show-more-button">Get Free Consultation</button>
      </div>
      <div className='lower-footer'>
        <h2>STEM</h2>
        <p>CAREER PATH</p>
        <h4>Copyright by 2024 STEM CAREER PATH</h4>
        <ul>
          <li>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/admission" style={{ textDecoration: 'none' }}>
              Admission
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer;
