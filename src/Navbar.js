import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-[2000px] mx-auto px-8 lg:px-20">
        <div className="flex items-center h-20 space-x-12">
          <Link to="/" className="font-bold text-2xl text-white shrink-0">
            robendi<span className="text-gray-400">.com</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto text-white"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4 px-8 py-6">
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;