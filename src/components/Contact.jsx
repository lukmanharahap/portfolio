import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoMdContact } from 'react-icons/io';
import { PiReadCvLogoBold } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [showContacts, setShowContacts] = useState(false);

  const contacts = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={30} />,
      href: 'https://www.linkedin.com/in/lukmanharahap/',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={30} />,
      href: 'https://github.com/lukmanharahap',
    },
    {
      name: 'Email',
      icon: <SiGmail size={30} />,
      href: 'mailto:lukmanharahap28@gmail.com',
    },
    {
      name: 'Resume',
      icon: <PiReadCvLogoBold size={30} />,
      href: '/CV_Lukman Harahap.pdf',
      download: true,
    },
  ];

  return (
    <>
      {/* Contact Section (Desktop) */}
      {/* <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-primary font-display"
            >
              <a
                href={contact.href}
                className="flex justify-between items-center w-full text-background"
                download={contact.download}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.name} {contact.icon}
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Contact Section (Mobile) */}
      <div
        onClick={() => setShowContacts(false)}
        className={`${
          showContacts ? 'block' : 'hidden'
        } fixed inset-0 z-40 bg-transparent`}
      ></div>

      <motion.button
        onClick={() => setShowContacts(!showContacts)}
        className="fixed bottom-6 right-6 bg-primary p-3 rounded-full shadow-lg text-white hover:bg-secondary transition z-50"
      >
        <IoMdContact size={40} />
      </motion.button>

      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-7 flex flex-col items-center space-y-3 z-50"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark p-3 rounded-full shadow-md text-white hover:text-primary transition"
                download={contact.download}
                whileTap={{ scale: 0.9 }}
              >
                {contact.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
