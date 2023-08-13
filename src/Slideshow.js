import React, { useState } from 'react';
import './Slideshow.css'; // Import your CSS file for styling

const images = [
  'image1.jpg', 'image2.jpg', 'image3.jpg', /* ... add more image paths ... */
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img src={images[currentIndex]} alt="Slideshow" />
      </div>
      <div className="landscape-slides">
        {images.map((image, index) => (
          <div className={`landscape-slide ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
