import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Lhumos Platform",
      description: "A comprehensive video platform for scientific content, featuring dynamic slide synchronization, playlist management, and integrated file sharing. Built for CECAM and MARVEL, Lhumos provides an advanced interface for educational and research content delivery.",
      technologies: ["React", "React Router", "Video.js", "React Slick", "REST API"],
      imageUrl: "https://dome40.eu/sites/default/files/inline-images/EPFL%20Blog%20Post%202.png", // Replace with actual Lhumos screenshot
      liveUrl: "https://alpha.lhumos.org/", // Replace with actual URL
    },
    // Add other projects as needed
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my work, featuring web applications and design projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;