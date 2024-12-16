import React from 'react';
import ProjectCard from './ProjectCard';
import MovingBackground from './MovingBackground';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Lhumos Platform",
      description: "A comprehensive scientific video platform featuring dynamic slide synchronization and integrated file sharing. Built for CECAM and MARVEL, it provides an advanced interface for educational content delivery with playlist management and exercise support.",
      technologies: ["React", "React Router", "Video.js", "React Slick", "REST API"],
      imageUrl: "https://dome40.eu/sites/default/files/inline-images/EPFL%20Blog%20Post%202.png",
      liveUrl: "https://alpha.lhumos.org/",
    },
    {
      title: "LidarXP",
      description: "A cutting-edge VR application transforming LiDAR and video data into interactive 3D environments. Built for Oculus Quest, it enables real-time collaboration across headsets for precise 3D modeling, perfect for accident reconstruction and architectural visualization.",
      technologies: ["Unity", "C#", "Oculus SDK", "LiDAR", "AI Point Cloud Processing", "VR Collaboration"],
      imageUrl: "https://i.ibb.co/6wPD9KW/Screenshot-2024-12-06-100819.png",
      liveUrl: "https://youtu.be/otlmxsq-IIc",
    },
    {
      title: "RePlate",
      description: "A minimal, modern React.js template designed to jumpstart web projects. Features a clean, well-organized foundation with essential components pre-configured, including responsive navigation, modern footer, and contact form. Implements best practices for project structure and developer experience.",
      technologies: ["React 17", "Tailwind CSS", "PostCSS", "Autoprefixer"],
      imageUrl: "https://i.ibb.co/DtX23GJ/image.png",
      liveUrl: "https://github.com/robertobendi/RePlate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      <MovingBackground />
      
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Exploring the intersection of research, technology, and innovation through transformative digital solutions.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;