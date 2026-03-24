import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
