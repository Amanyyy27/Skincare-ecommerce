import React, { useEffect, useState, useRef } from "react";
import "./Slider.css";
import img1 from "../Assets/slider/1.jpg";
import img2 from "../Assets/slider/2.jpg";
import img3 from "../Assets/slider/3.jpg";
import img4 from "../Assets/slider/4.jpg";


const Slider = () => {
  const texts = [
    "Welcome to earth. skincare<br><br>Discover the natural beauty of earth. skincare, where we believe that healthy skin starts with the purest ingredients. Our organic skincare line is crafted to nourish and rejuvenate, giving your skin the care it deserves.",
    "Sustainable and Ethical<br><br>Our commitment to sustainability means that our products are not only good for your skin but also for the environment. We source our ingredients responsibly and use eco-friendly packaging to reduce our footprint.",
    "Pure Ingredients, Pure Results<br><br>At earth. Skincare, we use only the finest organic ingredients, free from harsh chemicals and synthetic additives. Each product is designed to enhance your natural beauty while being kind to the planet.",
    "Holistic Skincare for All<br><br>Whether you're looking to hydrate, brighten, or soothe, Earth. Skincare has something for everyone. Our holistic approach ensures that every product works in harmony with your skin's natural processes.",
  ];

  const images = [img4, img3, img2, img1];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // Manual slide navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle touch swipe
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe left
    } else if (touchEndX - touchStartX > 50) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <section className="slider-container">
      <div className="slider-wrapper">
        <div
          className="slider"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
              <div className="slide-text" dangerouslySetInnerHTML={{ __html: texts[index] }}></div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="slider-nav">
          {images.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Left and Right Navigation Arrows */}
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
};

export default Slider;
