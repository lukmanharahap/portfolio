import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="text-dark scroll-smooth">
      <div className="absolute overflow-x-hidden antialiased top-0 z-[-2] h-full w-full bg-background overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div>
        <Navbar />
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
