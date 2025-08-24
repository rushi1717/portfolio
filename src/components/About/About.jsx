import React, { useRef, useEffect } from "react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const btnRef = useRef(null);
  const containerRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const span = spanRef.current;

    if (container && span) {
      // Create the scroll trigger animation
      gsap.fromTo(
        span,
        {
          y: 0, // Starting position
        },
        {
          y: -200, // Move upward by 50px (adjust as needed)
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom", // When container's bottom touches viewport's bottom
            end: "bottom top", // When container's bottom reaches viewport's top
            scrub: 1, // Smooth animation tied to scroll progress
          },
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="about-main">
      <div className="about-container">
        <div className="about-heading-main">
          <div className="about-heading-container">
            <div className="about-big-heading">
              <span>
                Empowering brands to rise above in the digital age. Together,
                we'll set new standards—bold, sharp, and ahead of the curve.
              </span>
            </div>
            <div className="about-small-heading">
              <span>
                Blending design, code, and interaction fuels my unique approach
                to creating standout digital experiences.
              </span>
            </div>
          </div>
        </div>
        <div className="about-link-btn-container" ref={containerRef}>
          <div className="about-link-btn" ref={btnRef}>
            <div ref={spanRef}>
              <span className="about-btn-background"></span>
              <span className="about-btn-text">About me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
