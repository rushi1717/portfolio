import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Logo.css";

const Logo = () => {
  const rushRef = useRef(null);
  const harkeRef = useRef(null);

  useEffect(() => {
    gsap.set(harkeRef.current, { x: "100%", opacity: 0 });
  }, []);

  const handleHover = () => {
    gsap.to(rushRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(harkeRef.current, {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.05,
    });
  };

  const handleLeave = () => {
    gsap.to(rushRef.current, {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.05,
    });
    gsap.to(harkeRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="logo-ha"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="logo-inner">
        <div>
          <span ref={rushRef}>Rushikesh</span>
        </div>
        {/* <div>
          <span ref={harkeRef}>Harke</span>
        </div> */}
      </div>
    </div>
  );
};

export default Logo;
