import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="text-2xl font-bold gradient-text tracking-wider">
        FIDEL.
      </Link>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 ${
              location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-300'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <button 
        className="md:hidden text-light"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-panel flex flex-col items-center py-6 gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg uppercase tracking-widest hover:text-primary transition-colors duration-300 ${
                location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
