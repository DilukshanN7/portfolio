import './App.css';
import About from './components/about';
import Backdrop from './components/backdrop';
import Contact from './components/contact';
import Features from './components/features';
import Header from './components/header';
import Hero from './components/hero';
import Modal from './components/modal';
import Mouse from './components/mouse';
import ProjectFresh from './components/projectsfresh';
import Talent from './components/talent';
import { ReactLenis, useLenis } from 'lenis/react'
import { useRef } from 'react';

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  
  const homeRef = useRef(null);
  const talentRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHome = () => homeRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToTalents = () => talentRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToSpotlight = () => projectRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <ReactLenis root>
      <div className="App">
        <Header 
          scrollToHome={scrollToHome}
          scrollToContact={scrollToContact}
          scrollToSpotlight={scrollToSpotlight}
          scrollToTalents={scrollToTalents}
          />
          <Mouse />
        <Hero ref={homeRef} />
        <Talent  />
        <About />
        <Features ref={talentRef} />
        <ProjectFresh ref={projectRef} />
        <Contact ref={contactRef} />
      </div>
    </ReactLenis>
  );
}

export default App;
