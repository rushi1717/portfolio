// ScrollProvider.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: .4,
      easing: (t) => t, // linear easing
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return children;
};

export default ScrollProvider;
