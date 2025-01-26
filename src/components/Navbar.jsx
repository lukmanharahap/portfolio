import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [nav, setNav] = useState(false);
  const navsec = [
    { link: '#home', name: 'Home' },
    { link: '#tech-stack', name: 'Tech Stack' },
    { link: '#experience', name: 'Experience' },
    { link: '#projects', name: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolling(true);
      else setScrolling(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseNav = () => {
    setNav(false);
  };

  return (
    <nav
      className={`flex fixed w-full top-0 left-0 z-50 items-center justify-between transition-all duration-300 ${
        scrolling ? 'bg-dark shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div
        className={`ml-6 font-sign font-medium hover:scale-105 transition-transform duration-300 cursor-pointer ${scrolling ? 'text-white' : 'text-dark'}`}
      >
        <a href="#home">Lukman</a>
        {/* <img
          src={logo}
          alt="logo"
          className="w-16 h-16 mx-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
        /> */}
      </div>
      <ul
        className={`hidden space-x-6 mr-8 md:flex font-display font-medium ${
          scrolling ? 'text-white' : 'text-dark'
        }`}
      >
        {navsec.map((sec, index) => (
          <li key={index}>
            <a
              href={sec.link}
              className="relative after:bg-secondary hover:text-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {sec.name}
            </a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className={`md:hidden cursor-pointer mr-4 hover:text-secondary ${
          scrolling ? 'text-white' : 'text-dark'
        }`}
      >
        <FaBars size={30} />
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center space-y-8"
            onClick={handleCloseNav}
          >
            <ul className="flex flex-col justify-center space-y-2 items-center absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark to-gray-700 text-white">
              {navsec.map((sec, index) => (
                <li key={index}>
                  <a
                    href={sec.link}
                    className="relative text-2xl after:bg-secondary hover:text-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {sec.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
