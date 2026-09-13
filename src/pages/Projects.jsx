import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Lattice',
    description: 'A modern performance management platform clone focusing on employee growth, reviews, and continuous feedback.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    image: 'https://s0.wp.com/mshots/v1/https://lattice-workspace.vercel.app?w=800',
    liveUrl: 'https://lattice-workspace.vercel.app/',
    githubUrl: 'https://github.com/fideller67-sys/lattice-workspace'
  },
  {
    id: 2,
    title: 'WhatsApp Business E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI, secure payments, and a real-time dashboard.',
    tags: ['Basic Frontend(React)'],
    image: 'https://s0.wp.com/mshots/v1/https://whatsapp-business-rho.vercel.app?w=800',
    liveUrl: 'https://whatsapp-business-rho.vercel.app/',
    githubUrl: 'https://github.com/fideller67-sys/business-storefront'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Selected <span className="gradient-text">Works</span></h1>
        <p className="text-gray-400 max-w-2xl mb-12 text-lg">
          Here are some of the recent projects I've worked on, showcasing my skills in frontend and backend development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel rounded-2xl overflow-hidden group flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.liveUrl} className="bg-primary p-2 rounded-full text-white hover:bg-blue-600 transition-colors">
                  <ExternalLink size={20} />
                </a>
                <a href={project.githubUrl} className="bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors backdrop-blur-sm">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
