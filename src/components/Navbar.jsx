import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Predict', path: '/predict' },
    { name: 'About', path: '/about' },
  ];
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <FaLeaf className="text-primary-600 text-2xl" />
            <span className="text-xl font-bold text-primary-800 font-serif">PlantGuard</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-primary-600' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-primary-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`px-4 py-2 rounded-md ${
                    location.pathname === link.path 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;