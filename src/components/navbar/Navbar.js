import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Faculty Portal</Link>
        <div className="menu-icon" onClick={toggleNavbar}>
          <FaBars />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleLinkClick}>Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/allattendance" className="nav-links" onClick={handleLinkClick}>All Attendance</Link>
          </li>

          <li className="nav-item">
            <Link to="/addclass" className="nav-links" onClick={handleLinkClick}>AddClass</Link>
          </li>
          <li className="nav-item">
            <Link to="/classattendance" className="nav-links" onClick={handleLinkClick}>Class Attendance</Link>
          </li>
          <li className="nav-item">
            <Link to="/classrecord" className="nav-links" onClick={handleLinkClick}>Class Record</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={handleLinkClick}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="login-button2" onClick={handleLinkClick}>Login</Link>
          </li>
        </ul>
        <Link to="/login"><button className="login-button">Login</button></Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
