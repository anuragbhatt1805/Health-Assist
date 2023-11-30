import React, { useState } from 'react';
import './NavB.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {
  // Example state for user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear authentication)
    setIsLoggedIn(false); // Set isLoggedIn to false upon logout
  };

  return (
    <header className="header navbar">
      <div className="logo">Logo</div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login / Signup</Link>
      )}
    </header>
  );
};

export default Header;
