import React, { useRef } from "react";
import gsap from "gsap";
import './ScrambleLogo.css'
const ScrambleLogo = () => {
  const textRef = useRef(null);
  const originalText = "Rushikesh Harke";

  const handleMouseEnter = () => {
    const el = textRef.current;
    const chars = "!@#$%^&*()_+{}:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let iterations = 0;
    const totalIterations = 20; // total frames for scramble effect
    let scrambleInterval;

    scrambleInterval = setInterval(() => {
      let scrambled = originalText
        .split("")
        .map((char, index) => {
          if (index < iterations / 2) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      el.innerText = scrambled;

      iterations++;
      if (iterations > totalIterations) {
        clearInterval(scrambleInterval);
        gsap.to(el, { text: originalText, duration: 0.5 });
      }
    }, 50); // speed of scrambling
  };

  return (
    <div className="logo-main">
      <span ref={textRef} onMouseEnter={handleMouseEnter}>
        Rushikesh
      </span>
    </div>
  );
};

export default ScrambleLogo;
