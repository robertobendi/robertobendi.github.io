import { Link } from 'react-router-dom';
import ViewCounter from './ViewCounter';

function Footer() {
  return (
    <footer className="bg-gray-900/30 backdrop-blur-sm text-white border-t border-gray-800/50">
      <div className="max-w-[2000px] mx-auto px-6 lg:px-20">
        <div className="py-8 md:py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="/" className="font-bold text-2xl">
              robendi<span className="text-gray-400">.com</span>
            </Link>
            <p className="mt-2 text-gray-400">Building digital experiences with passion</p>
          </div>
          
          <div className="flex space-x-6 md:space-x-8">
            <a href="https://github.com/robertobendi" 
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/robertobendi" 
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/robbendinelli" 
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="py-4 md:py-6 border-t border-gray-800/50 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-4">
            © {new Date().getFullYear()} Roberto Bendinelli. All rights reserved.
            <ViewCounter />
          </div>
          <div>
            <a href="https://github.com/robertobendi/RePlate"
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
               target="_blank"
               rel="noopener noreferrer">
              Made with RePlate, another project by Roberto Bendinelli
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;