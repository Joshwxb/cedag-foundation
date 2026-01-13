import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onDonateClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Outreach', href: '#outreach' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden"
          >
            <img 
              src="/logo.png.jpeg" 
              alt="CEDAG Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-10 h-10 bg-foundation-yellow rounded-full flex items-center justify-center font-bold text-white shadow-sm">C</div>';
              }}
            />
          </motion.div>
          <span className="font-extrabold text-lg md:text-xl tracking-tight text-foundation-black uppercase">
            CEDAG FOUNDATION
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-foundation-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <motion.button 
            onClick={onDonateClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foundation-yellow text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-foundation-yellow/20 cursor-pointer"
          >
            Donate Now
          </motion.button>
        </div>

        {/* Sleeker Hamburger Icon */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 z-[70] relative"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-foundation-black rounded-full block"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-foundation-black rounded-full block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-foundation-black rounded-full block"
          />
        </button>
      </div>

      {/* Mobile Side Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[65]"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white shadow-2xl lg:hidden z-[66] p-8 flex flex-col"
            >
              {/* UPDATED: Nav Links are now smaller (text-xl instead of 2xl), 
                  less thick (font-bold instead of black), and have tighter gaps (gap-6) */}
              <div className="mt-16 flex flex-col gap-6 text-lg font-bold text-foundation-black uppercase tracking-wide">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={toggleMenu}
                    className="hover:text-foundation-yellow transition-colors border-b border-gray-50 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Donate button is also slightly adjusted for the smaller drawer */}
                <button 
                  onClick={() => { toggleMenu(); onDonateClick(); }}
                  className="mt-4 bg-foundation-yellow text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg shadow-foundation-yellow/20"
                >
                  Donate Now
                </button>
              </div>
              
              <div className="mt-auto border-t pt-6 text-gray-500 text-xs font-semibold space-y-1">
                <p className="flex items-center gap-2">
                  <span>📧</span> cedagfoundation@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> +234 816 782 7909
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;