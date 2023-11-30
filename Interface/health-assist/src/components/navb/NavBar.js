// Header.js

import React from 'react';
import './NavB.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header navbar">
      <div className="logo">Logo</div>
        <div className="navbar-center">
          <Link to="/">Home</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <Link to="/login">Login / Signup</Link>
    </header>
  );
};

export default Header;
