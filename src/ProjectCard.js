import React from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({
  title,
  description,
  technologies = [],
  imageUrl,
  githubUrl,
  liveUrl,
  detailsUrl,
}) => {
  return (
    <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-800/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl || "/api/placeholder/800/600"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
        
        {/* Links Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-sm">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        {detailsUrl && (
          <Link
            to={detailsUrl}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
          >
            View Details
            <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;