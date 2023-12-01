// Signup.js

import React, { useState } from 'react';
import './AuthForm.css'; // Import the CSS file for additional styling
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ switchToLogin }) => {
  const [abhaId, setAbhaId] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  const handleSignup = async(e) => {
    e.preventDefault();
     await axios.post("",{
      abhaId,email, phoneNo,name,password,dob
     });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="auth-form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup} className="auth-form" method="post">
          <input
            type="text"
            placeholder="Abha ID"
            value={abhaId}
            onChange={(e) => setAbhaId(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <Link to="/login"><button type="submit" className="btn btn-primary">Signup</button></Link>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
