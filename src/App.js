import './App.css';
import { NavBar} from './components/navBar';
import { Banner } from './components/Banner';
import { ProjectCard } from './components/ProjectCard';
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProjectCard />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
