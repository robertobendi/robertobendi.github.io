import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-[2000px] mx-auto px-8 lg:px-20">
        <div className="py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="font-bold text-2xl">
              robendi<span className="text-gray-400">.com</span>
            </Link>
            <p className="mt-2 text-gray-400">Building digital experiences with passion</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="https://github.com/robertobendi" 
               className="text-gray-400 hover:text-white transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/robertobendi" 
               className="text-gray-400 hover:text-white transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/robertobendi" 
               className="text-gray-400 hover:text-white transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-sm text-gray-400">
          © {new Date().getFullYear()} Roberto Bendinelli. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;