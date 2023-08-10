import React from "react";
import './Brands.css'; 
import logo from '../../assets/logo.png';
import brands from '../../assets/brands.png';

const Brands = () => {
  return (
    <div className="brand-container">
      <img src={logo} alt="react logo" className="logo" />
      <div className="logo-text-container">
        <p className="logo-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <img src={brands} alt=""  className="kinship-brands"/>
    </div>
  );
}

export default Brands;