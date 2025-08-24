import React, { useEffect, useRef } from "react";
import "./ScrollText.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ScrollText = () => {
  const containerRef = useRef(null);
  const directionRef = useRef(-1);
  const velocityRef = useRef(1);
  const lastScrollTopRef = useRef(0);
  let xPos = 0;

  useEffect(() => {
    const container = containerRef.current;
    const textElement = container.querySelector(".scroll-text");

    // Clone for seamless loop
    const clone = textElement.cloneNode(true);
    container.appendChild(clone);
    const totalWidth = textElement.offsetWidth;

    gsap.ticker.add(() => {
      xPos += velocityRef.current * directionRef.current;
      gsap.set(container.children, { x: xPos });

      // Wrap text smoothly
      if (xPos <= -totalWidth) xPos += totalWidth;
      if (xPos >= 0) xPos -= totalWidth;
    });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScrollTopRef.current);
      const newDirection = currentScroll > lastScrollTopRef.current ? -1 : 1;

      // Increase speed temporarily based on scroll delta
      gsap.to(velocityRef, {
        current: Math.min(1 + delta * 0.1, 4), // cap at 4x speed
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(velocityRef, {
            current: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });

      // Bounce effect on direction change
      if (newDirection !== directionRef.current) {
        directionRef.current = newDirection;
        gsap.fromTo(
          velocityRef,
          { current: 0 },
          { current: 1, duration: 0.6, ease: "power2.out" }
        );
      }

      lastScrollTopRef.current = Math.max(currentScroll, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      gsap.ticker.remove(() => {});
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(".scroll-text", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-text",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="scroll-main">
      <div style={{ overflow: "hidden", width: "100vw" }}>
        <div
          ref={containerRef}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          <div className="scroll-text">
            RUSHIKESH HARKE <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollText;
