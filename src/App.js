import "./App.css";
import { NavBar } from "./components/navBar";
import { Banner } from "./components/Banner";
import { ProjectCard } from "./components/ProjectCard";
import { About } from "./components/About";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectsCarousel } from "./components/Carousel";
import { ProjectsCarousel2 } from "./components/Carousel2";
import { ProjectsCarousel3 } from "./components/Carousel3";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProjectCard />
      <About />
      <ProjectsCarousel />
      <ProjectsCarousel2 />
      <ProjectsCarousel3 />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
