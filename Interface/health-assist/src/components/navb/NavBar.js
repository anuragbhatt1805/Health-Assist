import React, { useState } from 'react';
import './NavB.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../../img/Logo.png' // Import the Logo image

const Header = () => {
  // Example state for user login status
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear authentication)
    setIsLoggedIn(false); // Set isLoggedIn to false upon logout
  };

  return (
    <header className="header navbar">
      {/* Logo as an image */}
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-center d-flex align-items-center">
        <Link to="/" className="mx-3">Home</Link>
        <Link to="/appointment" className="mx-3">Appointment</Link>
        <Link to="/chat" className="mx-3">Chat</Link>
        <Link to="/faq" className="mx-3">FAQ</Link>
      </div>
      {isLoggedIn ? (
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle dropdown-profile-btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            {/* User icon */}
            <i className="fas fa-user-circle"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li><Link to="/profile" className='dropdown-item'>Profile</Link></li>
            <li><button onClick={handleLogout} className='dropdown-item'>Logout</button></li>
          </ul>
        </div>
      ) : (
        <Link to="/login">Login / Signup</Link>
      )}
    </header>
  );
};

export default Header;
