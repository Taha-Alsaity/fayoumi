import React, { useEffect, useState } from "react";
import "./Hero.css";

const words = [" كفاءة", "تمييز", "موثوقية"];
const animationDelay = 2000;

const HeroHeadline = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, animationDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="cd-headline rotate-1 text-white mb-4 pb-2">
      <span>بشركة فيومي</span>

      <span className="cd-words-wrapper">
        {words.map((word, i) => (
          <b
            key={i}
            className={i === index ? "is-visible" : "is-hidden"}
          >
            {word}
          </b>
        ))}
      </span>
    </h1>
  );
};

export default HeroHeadline;
