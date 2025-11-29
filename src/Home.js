import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, Laptop, BrainCircuit, Gamepad, 
  Globe, Rocket, MonitorPlay, Command,
  MessageSquare, Building2, Film, 
  Terminal, Database, Smartphone
} from "lucide-react";
import MovingBackground from "./MovingBackground";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Development",
      description: "I build modern web applications with React, focusing on performance and user experience. No jQuery, I promise.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "I create mobile apps using React Native and Capacitor. Yes, I know native is faster, but this is more fun.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "I develop complete solutions from frontend to backend. The stack is my playground.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "VR & Immersive Tech",
      description: "I explore virtual reality and immersive experiences. Sometimes I get motion sick, but it's worth it.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & APIs",
      description: "I design and implement scalable backend systems and RESTful APIs. GraphQL? We can talk.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Blockchain & Privacy",
      description: "I work with blockchain technology and privacy-focused solutions. No, I won't explain how blockchain works.",
    }
  ];

  return (
    <div className="relative text-white">
      <MovingBackground />
      
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .gradient-text {
            background: linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .highlight-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }

          .highlight-card:hover {
            background: rgba(255, 255, 255, 0.05);
            transform: translateY(-5px);
          }

          .service-card {
            animation: fadeInUp 0.5s ease-out;
            transition: all 0.3s ease;
          }

          .service-card:hover {
            transform: translateY(-5px) scale(1.02);
          }

          .floating-element {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Hi, I'm</span>{" "}
              <span className="text-white">Roberto</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-blue-400 font-semibold mb-6">
              Developer & Digital Creator
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I build software. Sometimes it works.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <MonitorPlay className="w-5 h-5" />
                  View My Projects
                </span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Get In Touch
                </span>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="text-center floating-element">
                <div className="text-3xl font-bold gradient-text mb-1">25+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center floating-element" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold gradient-text mb-1">8+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center floating-element" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card highlight-card rounded-xl p-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;