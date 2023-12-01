import React, { useState } from 'react';
import './AuthForm.css'; // Import the CSS file for additional styling
import { Link } from 'react-router-dom';

const Login = ({ switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);

    fetch('/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
      .then(response => response.json())
      .then(data => {
        if (data === null) {
          alert('Invalid Credentials');
          window.location.href = '/login';
        } else {
          // const COOKIE_NAME = 'AuthData';
          // const d = new Date();
          // d.setTime(d.getTime());
          // const expires = 'expires=' + d.toUTCString();
          // document.cookie = `access_token=${data.access_token}`;
          // document.cookie = `user=${data.user};`;
          // window.location.href = '/';
        }
      })
      .catch(error => {
        alert('Cannot Login Due to Some Internal Error');
      });

    // Reset form fields after login
    setEmail('');
    setPassword('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="auth-form" method="post">
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
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
