import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import AIJourney from '@/components/AIJourney';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <AIJourney />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
