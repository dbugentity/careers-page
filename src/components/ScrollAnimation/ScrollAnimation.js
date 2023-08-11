import React from "react";
import './animation.css';
import AOS from "aos";
import 'aos/dist/aos.css';

function ScrollAnimation() {
  return (
    <div className="top">
      <h1 className="text-center">lorem ipsum</h1>

      <h1>Fade</h1>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation"></div>
      <div className="animation"></div>
      <div className="animation"></div>

      <h1>Flip</h1>
      <div className="animation"></div>
      <div className="animation"></div>

      <h1>Zoom in</h1>
      <div className="animation"></div>
      <div className="animation"></div>
    </div>
  )
}

export default ScrollAnimation;