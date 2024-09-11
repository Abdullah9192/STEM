import React from 'react';
import '../Styling/empower.css';

const MissionEmpower = () => {
  const items = [
    { type: 'image', src: require('../Images/books-1281581_1280.jpg'), className: 'custom-size-1' },
    { type: 'text', content: (<div><span>40+</span><span>Courses</span></div>), className: 'custom-text-1' },
    { type: 'image', src: require('../Images/college-student-3500990_1280.jpg'), className: 'custom-size-2' },
    { type: 'text', content: (<div><span>1000+</span><span>Training Programs</span></div>), className: 'custom-text-2' },
    { type: 'image', src: require('../Images/graduation-995042_1280.jpg'), className: 'custom-size-3' },
    { type: 'text', content: '20,000+ Joined Students', className: 'custom-text-3' },
    { type: 'image', src: require('../Images/students-8628244_1280.jpg'), className: 'custom-size-4' },
    { type: 'text', content: '#STEM career path', className: 'custom-text-4' },
    { type: 'image', src: require('../Images/university-105709_1280.jpg'), className: 'custom-size-5' },
    { type: 'text', content: '5.0 Rating Education', className: 'custom-text-5' },
  ];

  return (
    <div className="empower-container">
      <div className="header-text">
        <h1>Our Mission is to empower<br />
          individuals to acquire new skills
        </h1>
        <h4>
          Our experts have helped applicants like you get into top medical schools,<br />
          residency programs, dental schools, and more.
        </h4>
      </div>
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className={`grid-item ${item.className}`}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`Item ${index}`} className="grid-image" />
            ) : (
              <div className={`grid-text-box ${item.className}`}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionEmpower;
