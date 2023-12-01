// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling
import imgdoc from '../images/docimg.jpg'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="text-content">
          <h1>Welcome to our Medical Center</h1>
          <p>Your trusted healthcare provider</p>
          <button>Book an Appointment</button>
        </div>
        <img src={imgdoc} alt="Doctor" className="doctor-image" />
      </section>

      <section className="features-section">
        <div className="feature-box">
          {/* <h4>Feature 1</h4> */}
          <p>Description of feature 1</p>
        </div>
        <div className="feature-box">
          {/* <h4>Feature 2</h4> */}
          <p>Description of feature 2</p>
        </div>
        <div className="feature-box">
          {/* <h4>Feature 3</h4> */}
          <p>Description of feature 3</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
