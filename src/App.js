import { useState, useEffect, useRef } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    if (contactRef.current && window.scrollY >= contactRef.current.offsetTop) {
      setActiveLink('contact');
    } else if (servicesRef.current && window.scrollY >= servicesRef.current.offsetTop) {
      setActiveLink('services');
    } else if (aboutRef.current && window.scrollY >= aboutRef.current.offsetTop) {
      setActiveLink('about');
    } else {
      setActiveLink('');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(ref.current.id);
  }

  return (
    <div>
     <div className="flex flex-col text-xl">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-[#0a58d7] shadow-lg px-3 py-3">
        <div className="flex items-center ml-5 font-bold">
          <a href="/">
          <h1 className='text-yellow-500'>COMPANY LOGO</h1>
          </a>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <ul className="flex">
            <li className={`mr-4 md:mr-8 text-sm lg:text-lg font-semibold ${activeLink === 'about' ? 'text-yellow-500' : 'text-white'} hover:text-yellow-500 cursor-pointer`} onClick={() => handleNavClick(aboutRef)}>
              <span id="about">About</span>
            </li>
            <li className={`mr-4 md:mr-8 text-sm lg:text-lg font-semibold ${activeLink === 'services' ? 'text-yellow-500' : 'text-white'} hover:text-yellow-500 cursor-pointer`} onClick={() => handleNavClick(servicesRef)}>
              <span id="services">Services</span>
            </li>
            <li className={`mr-4 md:mr-8 text-sm lg:text-lg font-semibold ${activeLink === 'contact' ? 'text-yellow-500' : 'text-white'} hover:text-yellow-500 cursor-pointer`} onClick={() => handleNavClick(contactRef)}>
              <span id="contact">Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
     <Header />
     <div ref={aboutRef}>
       <About />
     </div>
     <div ref={servicesRef}>
       <Services />
     </div>
     <div ref={contactRef}>
       <Contact />
     </div>
     <Footer />
    </div>
  );
}
export default App;
