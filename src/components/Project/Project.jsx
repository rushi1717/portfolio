import React, { useRef, useEffect, useState } from "react";
import "./Project.css";
import gsap from "gsap";

const Project = () => {
  const displayRef = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const displayEl = displayRef.current;
    const container = document.querySelector(".work-container");

    let isHovering = false;

    const moveHandler = (e) => {
      if (isHovering) {
        gsap.to(displayEl, {
          x: e.clientX - 500,
          y: e.clientY - 115,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    const enterHandler = (e) => {
      if (e.target.closest(".work")) {
        isHovering = true;
        gsap.set(displayEl, { x: e.clientX - 500, y: e.clientY - 115 });
        gsap.to(displayEl, { opacity: 1, scale: 1, duration: 0.3 });
      }
    };

    const leaveHandler = (e) => {
      if (!e.relatedTarget || !container.contains(e.relatedTarget)) {
        // Cursor fully left container
        isHovering = false;
        gsap.to(displayEl, { opacity: 0, scale: 0.8, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", moveHandler);
    container.addEventListener("mouseover", enterHandler);
    container.addEventListener("mouseleave", leaveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      container.removeEventListener("mouseover", enterHandler);
      container.removeEventListener("mouseleave", leaveHandler);
    };
  }, []);

  useEffect(() => {
    gsap.to(".project", {
      yPercent: -index * 100,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [index]);

  return (
    <div className="project-main">
      <div className="project-container">
        <div className="project-heading-main">
          <div className="project-heading-container">
            <span className="project-heading-duration">2022 - 2025</span>
            <span>
              ( Selected <span style={{ color: "rgb(255,79,0)" }}>Work</span> )
            </span>
          </div>
        </div>
        <div className="work-main">
          <div className="work-container">
            <div className="work" onMouseEnter={() => setIndex(0)}>
              <span>TWICE</span>
            </div>
            <div className="work" onMouseEnter={() => setIndex(1)}>
              <span>The DEMAI</span>
            </div>
            <div className="work" onMouseEnter={() => setIndex(2)}>
              <span>FABRIC</span>
            </div>
            <div className="work" onMouseEnter={() => setIndex(3)}>
              <span>Ready Co.</span>
            </div>
            <div className="work" onMouseEnter={() => setIndex(4)}>
              <span>Sweet Kadai</span>
            </div>
          </div>
        </div>

        <div className="project-display-main" ref={displayRef}>
          <div className="project-wrapper">
            <div className="project project-1"></div>
            <div className="project project-2"></div>
            <div className="project project-3"></div>
            <div className="project project-4"></div>
            <div className="project project-5"></div>
          </div>
        </div>
        <div className="project-page-main">
          <div className="project-btn">
            <span>more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
