import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Styling/Consultant.css';

const Consultant = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const interval = setInterval(() => {
        const firstItem = carousel.firstElementChild;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${firstItem.offsetWidth + 20}px)`; // Consider margin between items
        setTimeout(() => {
          carousel.style.transition = 'none';
          carousel.appendChild(firstItem);
          carousel.style.transform = 'translateX(0)';
          setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
          }, 50);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  const consultants = [
    { 
      image: require('../Images/c1.jpg'), 
      name: 'John Doe', 
      role: 'Development', 
      profile: 'Social Media Profile', 
      socialIcons: ['facebook', 'twitter', 'linkedin'] 
    },
    { 
      image: require('../Images/c2.jpg'), 
      name: 'Jane Smith', 
      role: 'Development', 
      profile: 'Social Media Profile', 
      socialIcons: ['facebook', 'twitter', 'linkedin'] 
    },
    { 
      image: require('../Images/c3.jpg'), 
      name: 'Emily Johnson', 
      role: 'Development', 
      profile: 'Social Media Profile', 
      socialIcons: ['facebook', 'twitter', 'linkedin'] 
    },
    { 
      image: require('../Images/c4.jpg'), 
      name: 'Michael Brown', 
      role: 'Development', 
      profile: 'Social Media Profile', 
      socialIcons: ['facebook', 'twitter', 'linkedin'] 
    }
  ];

  return (
    <div className="consultant-container">
      <div className="header-text">
        <h1>Learn from Top Experts<br />
          through your consultation!
        </h1>
        <h4>
          Our experts have helped applicants like you get into top medical schools,<br />
          residency programs, dental schools, and more.
        </h4>
      </div>
      <div className="carousel">
        <div className="carousel-track" ref={carouselRef}>
          {consultants.map((consultant, index) => (
            <div key={index} className="carousel-item">
              <div className="image-section">
                <img src={consultant.image} alt={`Consultant ${index}`} />
              </div>

              <div className="text-section">
    <div className="text-left">
        <h3>{consultant.name}</h3>
        <p>{consultant.role}</p>
    </div>
    <div className="text-right">
        <p>{consultant.profile}</p>
        <div className="social-icons">
            {consultant.socialIcons.map((icon, idx) => (
                <FontAwesomeIcon key={idx} icon={['fab', icon]} className="social-icon" />
            ))}
        </div>
    </div>
</div>

            </div>
          ))}
        </div>
      </div>
      <button class="show-more-button">Get Free Consultation</button>
    </div>
  );
};

export default Consultant;
