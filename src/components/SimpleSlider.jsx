import React, { useState, useEffect } from "react";
import prod1 from '../assets/prod1.jpg'
import prod2 from '../assets/prod2.jpg'
import prod3 from '../assets/prod3.jpg'

import "./CardSlider.css";

const cards = [
  {
     title: "أعلاف اغنام تسمين",
   
    img: prod1,
  },
  {
   title: "أعلاف اغنام",
    
    img: prod2,
  },
  {
    title: "سوبر بادي لحم ممتاز",
    
    img:prod3,
  },

];

const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // 3000ms = 3s

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {cards.map((card, index) => {
          const position = index === currentIndex ? "activeCard" : "";
          return (
            <div key={index} className={`card ${position}`}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleSlider;
