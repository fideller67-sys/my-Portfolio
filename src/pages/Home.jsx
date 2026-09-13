import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, MonitorPlay, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center mt-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Building digital <br className="hidden md:block"/>
            <span className="gradient-text">experiences</span> that matter.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Hi, I'm Fidel. A passionate developer focused on crafting beautiful, interactive, and high-performance web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              View My Work <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all backdrop-blur-sm">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services/Skills Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center"
        >
          <div className="bg-primary/20 p-4 rounded-full mb-6">
            <MonitorPlay size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-4">Frontend Dev</h3>
          <p className="text-gray-400">Crafting responsive and interactive user interfaces using modern frameworks like React and Vue.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center"
        >
          <div className="bg-secondary/20 p-4 rounded-full mb-6">
            <Code2 size={32} className="text-secondary" />
          </div>
          <h3 className="text-xl font-bold mb-4">Backend Systems</h3>
          <p className="text-gray-400">Building robust and scalable APIs and server-side logic to power modern web applications.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center"
        >
          <div className="bg-purple-500/20 p-4 rounded-full mb-6">
            <Layers size={32} className="text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
          <p className="text-gray-400">Designing intuitive user experiences with a focus on aesthetics, accessibility, and modern trends.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
