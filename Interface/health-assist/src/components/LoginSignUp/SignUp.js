// Signup.js

import React, { useState } from 'react';
import './AuthForm.css'; // Import the CSS file for styling

const Signup = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic (e.g., registration) here using email and password
    console.log('Signup with:', email, password);
    // Reset form fields after signup
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <span className='switch' onClick={switchToLogin}>Login</span></p>
    </div>
  );
};

export default Signup;
