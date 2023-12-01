// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling
import imgdoc from '../images/docimg.jpg'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="text-content">
          <h1>Welcome to HealthAssist</h1>
          <p>Nurturing Your Well-being</p>
          <button>Book an Appointment</button>
        </div>
        <img src={imgdoc} alt="Doctor" className="doctor-image" />
      </section>

      <section className="features-section">
        <div> <h1>Features</h1> 
        <div className="feature-box">
          {/* <h4>Feature 1</h4> */}
          <p ><h5>Real-Time Progress Tracking and Collaborative Data Sharing:</h5>
   - The software enables real-time tracking of patient progress during appointments, with updates on symptoms, prescribed treatments, or recommended procedures recorded dynamically. Simultaneously, Health Assist facilitates collaboration among healthcare professionals by allowing multiple doctors to access and share patient data when needed. This dual feature promotes comprehensive assessments, well-rounded treatment plans, and ensures an accurate overview of the patient's health journey.</p>
        </div>
        <div className="feature-box">
          {/* <h4>Feature 2</h4> */}
          <p><h5>Archiving for Historical Reference:</h5>
   - After a patient is completely cured, Health Assist archives comprehensive information related to the case. This historical data serves as a valuable resource for future reference, contributing to research and providing an in-depth understanding of successful treatment methodologies. The archival feature not only benefits current patients but also adds to the continuous improvement of healthcare practices.</p>
        </div>
        <div className="feature-box">
          {/* <h4>Feature 3</h4> */}
          <p> <h5>User-Friendly Interface:</h5>
   - Health Assist boasts a user-friendly interface designed for both patients and healthcare professionals. The intuitive design ensures effortless navigation through features such as patient registration, real-time progress tracking, and AI-driven doctor recommendations. This enhances the overall user experience, making the application accessible and efficient for all users involved in the healthcare process.</p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
