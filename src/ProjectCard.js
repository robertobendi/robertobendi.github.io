import React from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 w-full h-[600px] flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={imageUrl || "/api/placeholder/800/600"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        
        {/* Links Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 backdrop-blur-sm"
        >
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <motion.h3 
          whileHover={{ x: 5 }}
          className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
        >
          {title}
        </motion.h3>
        <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* View Details Link */}
        {detailsUrl && (
          <Link
            to={detailsUrl}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
          >
            <motion.span 
              whileHover={{ x: 5 }}
              className="flex items-center"
            >
              View Details
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </motion.span>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;