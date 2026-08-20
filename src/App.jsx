import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CompanyTools from './components/CompanyTools';
import Projects from './components/Projects';
import WordPressPortfolio from './components/WordPressPortfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CompanyTools />
        <Projects />
        <WordPressPortfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
