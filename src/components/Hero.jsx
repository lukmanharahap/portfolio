import profilepict from '../assets/profilepict.jpg';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto h-screen justify-center max-w-screen-xl pt-24 flex flex-col-reverse md:flex-row items-center px-6 md:px-12"
      >
        {/* Left Section: Text */}
        <div
          className="text-center md:text-left animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark leading-tight">
            Hi, I'm <span className="text-primary">Lukman Harahap</span> 👋
          </h1>
          <p className="text-lg font-sans text-gray-800 mt-4 max-w-prose mx-auto md:mx-0">
            I'm an aspiring{' '}
            <span className="text-primary font-bold">
              Technologist and Data
            </span>{' '}
            With 2 years of experience in technology and data, I specialize in
            analytics, machine learning, and robotics systems. Always eager to
            grow, I'm on a journey to explore opportunities where I can
            contribute, learn, and grow.
          </p>
          <div className="flex mt-6 items-center justify-center md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center text-white font-medium rounded-lg px-4 py-3 bg-primary hover:bg-secondary transition-all duration-300"
            >
              See My Work
              <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                <FaArrowRight />
              </span>
            </a>
            {/* <a
              href="#contact"
              className="ml-6 bg-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition"
            >
              Contact Me
            </a> */}
          </div>
        </div>

        {/* Right Section: Image */}
        <div
          className="flex justify-center md:justify-end mt-8 md:mt-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <img
            src={profilepict}
            alt="Profile Picture"
            className="ml-4 w-36 h-36 sm:w-44 sm:h-44 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-primary max-w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
