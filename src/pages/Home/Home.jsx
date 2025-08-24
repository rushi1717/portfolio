import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Project from "../../components/Project/Project";
import ScrollText from "../../components/ScrollText/ScrollText";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <ScrollText />
      <Contact />
    </div>
  );
};

export default Home;
