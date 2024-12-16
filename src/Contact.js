import React, { useState, useEffect } from "react";
import MovingBackground from "./MovingBackground";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen text-white relative flex items-center justify-center pt-20 md:pt-0">
      <MovingBackground />
      
      <div className="relative z-10 w-full max-w-4xl px-8 py-12 md:py-0">
        <div 
          className={`text-center transition-all duration-1000 transform ${
            isVisible 
              ? "translate-y-0 opacity-100 rotate-0" 
              : "translate-y-10 opacity-0 rotate-3"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 hover:scale-105 transition-transform duration-300">
            Let's Connect
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Contact Methods */}
            <div className="space-y-6">
              {/* Email Container */}
              <div 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/10 
                           transition-all duration-300 hover:-translate-y-1 hover:scale-102 cursor-pointer
                           border border-white/5 hover:border-white/10"
                onClick={() => window.location.href = 'mailto:robertobendi@outlook.it'}
              >
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-sm text-gray-400 font-medium">Email</div>
                    <div className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      robertobendi@outlook.it
                    </div>
                  </div>
                </div>
              </div>

              {/* Discord Container */}
              <div 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/10 
                           transition-all duration-300 hover:-translate-y-1 hover:scale-102
                           border border-white/5 hover:border-white/10"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.874-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm text-gray-400 font-medium">Discord</div>
                    <div className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      wheazel
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-6">
              {/* GitHub Container */}
              <div 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 
                           transition-all duration-300 hover:-translate-y-1 hover:scale-102 cursor-pointer
                           border border-white/5 hover:border-white/10"
                onClick={() => window.open('https://github.com/robertobendi', '_blank')}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Github className="w-8 h-8 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    GitHub
                  </span>
                </div>
              </div>

              {/* LinkedIn Container */}
              <div 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 
                           transition-all duration-300 hover:-translate-y-1 hover:scale-102 cursor-pointer
                           border border-white/5 hover:border-white/10"
                onClick={() => window.open('https://linkedin.com/in/robertobendi', '_blank')}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Linkedin className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    LinkedIn
                  </span>
                </div>
              </div>

              {/* X (Twitter) Container */}
              <div 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 
                           transition-all duration-300 hover:-translate-y-1 hover:scale-102 cursor-pointer
                           border border-white/5 hover:border-white/10"
                onClick={() => window.open('https://twitter.com/robbendinelli', '_blank')}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Twitter className="w-8 h-8 text-gray-100 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    X
                  </span>
                </div>
              </div>

              {/* Bluesky Container */}
              <div 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 
                           transition-all duration-300 hover:-translate-y-1 hover:scale-102 cursor-pointer
                           border border-white/5 hover:border-white/10"
                onClick={() => window.open('https://bsky.app/profile/robendi.com', '_blank')}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    🦋
                  </span>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    Bluesky
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Fun little message */}
          <p className="text-gray-400 italic mt-12 text-lg">
            Choose your preferred way to connect! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;