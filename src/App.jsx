import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FloatingStar from './components/FloatingStar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="horizontal-app">
      <Header />
      <Sidebar />
      <FloatingStar />
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
      <Footer />
    </div>
  );
}

export default App;
