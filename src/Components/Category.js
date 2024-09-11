import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../Styling/Category.css';

const Category = () => {
  return (
    <div className="category-container">
      <div className="header-text">
        <h1>Explore Our Top Categories</h1>
        <h4>
          Our experts have helped applicants like you get into top medical schools,<br/>
          residency programs, dental schools, and more.
        </h4>
      </div>
      <div className="categories">
        <div className="category-box">
          <div className="icon-text-container">
            <div className="small-div">
              <FontAwesomeIcon icon={faDollarSign} className="icondollar" />
              <span style={{ color: 'black' }}>Free</span>
            </div>
            <div className="largediv">
              <FontAwesomeIcon icon={faCalendarAlt} className="iconcalender" />
              <span>Monday, Wednesday</span>
            </div>
          </div>
          <div className="content">
            <h1>BS/MD Program</h1>
            <p className='left-align'>Our experts have helped applicants like you get into top medical schools, residency programs, dental schools, and more.</p>
          </div>
          <div className="hover-text">
          <h4>Categories 1</h4>
            <h2> BS/MDProgram</h2>
            <p>Discover more about our programs with exclusive benefits and tailored advice from our experts.</p>
            <a>Register Now</a>
          </div>
        </div>
        <div className="category-box">
          <div className="icon-text-container">
            <div className="small-div">
              <FontAwesomeIcon icon={faDollarSign} className="icondollar" />
              <span style={{ color: 'black' }}>$600-$1000</span>
            </div>
            <div className="largediv">
              <FontAwesomeIcon icon={faCalendarAlt} className="iconcalender" />
              <span>Monday, Wednesday</span>
            </div>
          </div>
          <div className="content">
            <h1>Development Program</h1>
            <p className='left-align'>Our experts have helped applicants like you get into top medical schools, residency programs, dental schools, and more.</p>
          </div>
          <div className="hover-text">
          <h4>Categories 2</h4>
            <h2> Development Program</h2>
            <p>Discover more about our programs with exclusive benefits and tailored advice from our experts.</p>
            <a>Register Now</a>
          </div>
        </div>
        <div className="category-box">
          <div className="icon-text-container">
            <div className="small-div">
              <FontAwesomeIcon icon={faDollarSign} className="icondollar" />
              <span style={{ color: 'black' }}>$600-$1000</span>
            </div>
            <div className="largediv">
              <FontAwesomeIcon icon={faCalendarAlt} className="iconcalender" />
              <span>Monday, Wednesday</span>
            </div>
          </div>
          <div className="content">
            <h1>MD Program</h1>
            <p className='left-align'>Our experts have helped applicants like you get into top medical schools, residency programs, dental schools, and more.</p>
          </div>
          <div className="hover-text">
          <h4>Categories 3</h4>
          <h2> MD Program</h2>
            <p>Discover more about our programs with exclusive benefits and tailored advice from our experts.</p>
            <a>Register Now</a>
          </div>
        </div>
        <div className="category-box">
          <div className="icon-text-container">
            <div className="small-div">
              <FontAwesomeIcon icon={faDollarSign} className="icondollar" />
              <span style={{ color: 'black' }}>Free</span>
            </div>
            <div className="largediv">
              <FontAwesomeIcon icon={faCalendarAlt} className="iconcalender" />
              <span>Monday, Wednesday</span>
            </div>
          </div>
          <div className="content">
            <h1>Dental Program</h1>
            <p className='left-align'>Our experts have helped applicants like you get into top medical schools, residency programs, dental schools, and more.</p>
          </div>
          <div className="hover-text">
          <h4>Categories 4</h4>
          <h2> Dental Program</h2>
            <p>Discover more about our programs with exclusive benefits and tailored advice from our experts.</p>
            <a>Register Now</a>
          </div>
        </div>
      </div>
      <button class="show-more-button">Show More</button>
    </div>
  );
};

export default Category;
