// Login.js

import React, { useState } from 'react';
import './AuthForm.css'; // Import the CSS file for styling

const Login = ({ switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic (e.g., authentication) here using email and password
    console.log('Login with:', email, password);
    // Reset form fields after login
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span className='switch' onClick={switchToSignup}>Sign Up</span></p>
    </div>
  );
};

export default Login;
