import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NavArrows from './components/NavArrows';
import VideoBackground from './components/VideoBackground';
import FloatingStar from './components/FloatingStar';
import Particles from './components/Particles';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';


function App() {
  return (
    <div className="horizontal-app">
      <VideoBackground />
      <Header />
      <Sidebar />
      <NavArrows />
      <FloatingStar />
      <Particles />
      <CursorTrail />
      <main className="horizontal-scroll">
        <section className="panel" id="hero">
          <Hero />
        </section>
        <section className="panel" id="skills">
          <Skills />
        </section>
        <section className="panel" id="experience">
          <Experience />
        </section>
        <section className="panel" id="education">
          <Education />
        </section>
        <section className="panel" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
