const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center font-display">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Lukman Harahap. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        Built with ❤️ and <span className="text-secondary">React.js</span>.
      </p>
    </footer>
  );
};

export default Footer;
