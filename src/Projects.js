import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-8 lg:px-20">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold mb-12">Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card - Repeat as needed */}
          <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Project Preview"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400 mb-4">Brief description of the project goes here. What problems it solves and what technologies were used.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;