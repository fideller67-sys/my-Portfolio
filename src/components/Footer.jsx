import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full glass-panel mt-20 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-white/10">
      <div className="mb-4 md:mb-0">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Fidel. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/fideller67-sys" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
          <FaLinkedin size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
          <FaTwitter size={20} />
        </a>
        <a href="mailto:nwankwofidel7@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
