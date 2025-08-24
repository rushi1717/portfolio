import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ScrollProvider from "./components/ScrollProvider";
const App = () => {
  useEffect(() => {
      const lenis = new Lenis({
      duration: 1.2, // Adjust for scroll speed (1.2 = smooth)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smoothWheel: true, // Smooth scroll for mouse wheel
      smoothTouch: false, // Disable on touch devices for better UX
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
