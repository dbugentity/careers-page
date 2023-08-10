// Navbar.js (Navbar component)
import React from 'react';
import './Navbar.css'; // Make sure to have this CSS file in the same directory

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item">Kinship</div>
      <div className="separator">|</div>
      <div className="nav-item">careers</div>
    </div>
  );
};

export default Navbar;
