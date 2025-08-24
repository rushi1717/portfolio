import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./NavLink.css";

const NavLink = ({ text }) => {
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(textRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power2.inOut",
    });
    tl.current.fromTo(
      cloneRef.current,
      { y: "100%" },
      { y: "0%", duration: 0.4, ease: "power2.inOut" },
      "<"
    );
  }, []);

  return (
    <div
      className="hover-text-container"
      onMouseEnter={() => tl.current.play(0)}
    >
      <span ref={textRef} className="hover-text">
        {text}
      </span>
      <span ref={cloneRef} className="hover-text">
        {text}
      </span>
    </div>
  );
};

export default NavLink;
