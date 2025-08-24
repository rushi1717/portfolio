import React, { useRef, useEffect, useState } from "react";
import "./Journey.css";

const ScrollSVGTimeline = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleMilestones, setVisibleMilestones] = useState([]);

  // Milestone data
  const milestones = [
    { id: 1, text: "Started Journey", position: 15 },
    { id: 2, text: "First Achievement", position: 35 },
    { id: 3, text: "Major Breakthrough", position: 55 },
    { id: 4, text: "New Horizons", position: 75 },
    { id: 5, text: "Current Goals", position: 90 },
  ];

  // SVG path with curves and turns - creating a winding path starting from top
  const pathData = `
    M 250 0
    Q 200 30, 150 60
    Q 100 90, 50 50
    Q 150 100, 250 80
    Q 350 60, 400 150
    Q 450 240, 350 300
    Q 250 360, 300 450
    Q 350 540, 250 600
    Q 150 660, 200 750
    Q 250 840, 150 900
    Q 50 960, 100 1050
    Q 150 1140, 50 1200
    Q -50 1260, 50 1350
    Q 150 1440, 100 1530
    Q 50 1620, 150 1680
    Q 250 1740, 200 1830
    Q 150 1920, 250 1980
    Q 300 2050, 250 2100
  `;

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      const startTrigger = windowHeight / 2;
      const endTrigger = windowHeight / 2;

      const scrollStart = -rect.top + startTrigger;
      const scrollEnd = containerHeight - endTrigger;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      setScrollProgress(progress);

      // Update visible milestones based on progress
      const newVisibleMilestones = milestones
        .filter((milestone) => progress >= milestone.position / 100)
        .map((milestone) => milestone.id);

      setVisibleMilestones(newVisibleMilestones);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Get path length for stroke animation
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  // Function to get point along path at percentage
  const getPointAtLength = (percentage) => {
    if (pathRef.current && pathLength > 0) {
      const point = pathRef.current.getPointAtLength(
        (pathLength * percentage) / 100
      );
      return point;
    }
    return { x: 250, y: 50 }; // Fallback position
  };

  const pathStyle = {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength * (1 - scrollProgress),
    transition: "none", // Smooth scroll-linked animation
  };

  return (
    <div className="timeline-wrapper">
      <div ref={containerRef} className="timeline-container">
        <svg
          className="timeline-svg"
          width="500"
          height="2100"
          viewBox="0 0 500 2100"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000" />
              <stop offset="50%" stopColor="#000" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
          </defs>

          {/* Main animated path */}
          <path
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            style={pathStyle}
          />

          {/* Milestone markers */}
          {milestones.map((milestone, index) => {
            const point = getPointAtLength(milestone.position);
            const isVisible = visibleMilestones.includes(milestone.id);

            return (
              <g key={milestone.id}>
                {/* Milestone circle */}
                <circle
                  className={`milestone-circle ${isVisible ? "visible" : ""}`}
                  cx={point.x}
                  cy={point.y}
                  r="12"
                  fill="#fff"
                  stroke="url(#pathGradient)"
                  strokeWidth="4"
                />

                {/* Milestone text */}
                <foreignObject
                  className="milestone-foreignobject"
                  x={point.x - 80}
                  y={point.y - 60}
                  width="160"
                  height="50"
                >
                  <div
                    className={`milestone-text ${isVisible ? "visible" : ""}`}
                  >
                    {milestone.text}
                  </div>
                </foreignObject>
              </g>
            );
          })}

          {/* Decorative background dots */}
          <g className="decorative-dots">
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={i}
                className="decorative-dot"
                cx={Math.random() * 500}
                cy={100 + i * 100}
                r="2"
              />
            ))}
          </g>
        </svg>
        <div className="progress-indicator">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </div>
  );
};

export default ScrollSVGTimeline;
