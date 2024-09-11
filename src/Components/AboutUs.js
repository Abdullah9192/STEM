import React from 'react';
import '../Styling/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="header-text">
        <h1>What's People Say about Us!</h1>
        <h4>Our experts have helped applicants like you get into top</h4>
      </div>
      <div className="reviews-grid">
        <div className="review green-bg">
          <p className='testimonial'>Testimonials</p>
          <p className='say'>What they say about us?</p><br/>
          <p>Great service and amazing results!</p>
          <div className="stars" style={{marginTop:'40px'}}>☆☆☆☆☆</div>
        </div>
        <div className="client-image">
          <img src={require('../Images/client1.jpg')} alt="Client 1" />
        </div>
        <div className="review green-bg">
        <p className='testimonial'>Testimonials</p>
        <p className='say'>What they say about us?</p><br/>
          <p>Highly recommend to anyone looking to improve their skills!</p>
          <div className="stars" style={{marginTop:'20px'}}>☆☆☆☆☆</div>
        </div>
        <div className="client-image">
          <img src={require('../Images/client2.jpg')} alt="Client 2" />
        </div>
        <div className="review lightblue-bg">
        <p className='testimonial'>Testimonials</p>
        <p className='say'>What they say about us?</p><br/>
          <p>Fantastic experience with top-notch experts.</p>
          <div className="stars" >☆☆☆☆☆</div>
        </div>
        <div className="client-image">
          <img src={require('../Images/client3.jpg')} alt="Client 3" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
