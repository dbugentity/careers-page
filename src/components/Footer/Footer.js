import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
  <footer className="footer">
  <div className="footer-center">
  <span>Contact Us</span>
  <span>CA Supply Chain Act</span>
  <span>Modern Slavery Act</span>
  <span>Inclusivity & Diversity</span>
  <span>Privacy</span>
  <span>AdChoices</span>
  <span>Legal</span>
  <span>Cookies Notice</span>
  <span>Accessibility</span>
  <span>Your Privacy Choices</span>
  </div>
  <div className="footer-right">
  <a href="/"><i className="fab fa-facebook"></i></a>
  <a href="/"><i className="fab fa-twitter"></i></a>
  <a href="/"><i className="fab fa-linkedin"></i></a>
  <a href="/"><i className="fab fa-instagram"></i></a>
  </div>
  <div className="cookies"></div>
  </footer>
  );
};

export default Footer;
