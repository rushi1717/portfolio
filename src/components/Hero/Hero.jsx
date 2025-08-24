import React, { useEffect, useRef } from "react";
import "./Hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const headingsRef = useRef([null]);
  const arrowRef = useRef(null);
  useEffect(() => {
    gsap.to(headingsRef.current, {
      yPercent: 90,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-main",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(arrowRef.current, {
      y: "100px",
      x:"90px",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-main",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

  }, []);
  return (
    <div className="hero-main">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-heading-main">
            {["innovating", "with heart"].map((text, i) => (
              <div className="hero-heading-container" key={i}>
                <h1 ref={(el) => (headingsRef.current[i] = el)}>{text}</h1>
              </div>
            ))}
          </div>
          <div className="hero-location-main">
            <div className="hero-location-arrow">
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                version="1.1"
                ref={arrowRef}
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Artboard"
                    transform="translate(-1019.000000, -279.000000)"
                    stroke="#000"
                    stroke-width="1.5"
                  >
                    <g
                      id="arrow-up-right"
                      transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                    >
                      <polyline
                        id="Path"
                        points="2.76923077 0 12 0 12 9.23076923"
                      ></polyline>
                      <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="hero-location-base">
              <div className="hero-location-heading">
                <span>Based in</span>
              </div>
              <div className="hero-location">
                <span>Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <div className="hero-footer-scroll">
            <div className="hero-footer-scroll-inner">
              <span>/scroll</span>
            </div>
          </div>

          <div className="hero-footer-text">
            <div className="hero-footer-text-item">
              <span>
                Blending <span style={{color:"red"}}>creativity</span> and innovation to deliver transformative
                experiences that resonate and inspire globally.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
