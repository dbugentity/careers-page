import React, {useEffect} from "react";
import './Brands.css'; 
import logo from '../../assets/logo.png';
import brands from '../../assets/brands.png';
import 'aos/dist/aos.css';
import AOS from "aos";

const Brands = () => {
  useEffect(()=> {
    AOS.init({duration: 2000});
  }, [])
  return (
    <div className="brand-container">
      <img src={logo} alt="react logo" className="logo" data-aos="flip-up"/>
      <div className="logo-text-container">
        <p className="logo-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <img src={brands} alt=""  className="kinship-brands" />
    </div>
  );
}

export default Brands;