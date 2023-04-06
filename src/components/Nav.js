import { useState, useEffect } from 'react';

function Nav() {

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const contactSection = document.getElementById('contact');
      const sections = [aboutSection, servicesSection, contactSection];
      
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 50) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-[#0a58d7] shadow-lg px-3 py-3">
        <div className="flex items-center ml-5 font-bold text-lg">
          <a href="/">
          <h1>COMPANY LOGO</h1>
          </a>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <ul className="flex">
            <li className={`mr-4 md:mr-8 ml-2 ${activeSection === 'about' ? 'text-sm font-semibold text-white' : 'text-sm font-semibold hover:text-gray-400 '}`}>
              <a href="#about">About</a>
            </li>
            <li className={`mr-4 sm:mr-8 ${activeSection === 'services' ? 'text-sm font-semibold text-white' : 'text-sm font-semibold hover:text-gray-400 '}`}>
              <a href="#services">Services</a>
            </li>
            <li className={`${activeSection === 'contact' ? 'text-sm font-semibold text-white' : 'text-sm font-semibold hover:text-gray-400'}`}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
