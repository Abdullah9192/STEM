import React from 'react';
import '../Styling/Test.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const consultants = [
  { name: 'John Doe', image: require('../Images/c4.jpg') },
  { name: 'Jane Smith', image: require('../Images/c4.jpg') },
  { name: 'Mike Johnson', image: require('../Images/c4.jpg') },
];

const Consultant = () => {
  const duplicateConsultants = [...consultants, ...consultants];

  return (
    <div className="consultant-carousel">
            <div className="header-text">
        <h1>Learn from Top Experts<br />
          through your consultation!
        </h1>
        <h4>
          Our experts have helped applicants like you get into top medical schools,<br />
          residency programs, dental schools, and more.
        </h4>
      </div>
      <div className="consultant-slider">
        {duplicateConsultants.map((consultant, index) => (
          <div className="consultant-card" key={index}>
            <div className="consultant-image">
              <img src={consultant.image} alt={consultant.name} />
            </div>
            <div className="consultant-details">
              <div className="left-section">
                <div className="consultant-name">{consultant.name}</div>
                <div className="consultant-development">Right Development</div>
              </div>
              <div className="right-section">
                <div className="social-media-profile">Social Media Profile:</div>
                <div className="social-media-icons">
                  <i className="fab fa-linkedin"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="show-more-button">Get Free Consultation</button>
      </div>
    </div>
  );
};

export default Consultant;
