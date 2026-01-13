import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ showPayment, setShowPayment }) => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay with bb.jpeg */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          /* Updated to use your local image 'bb.jpeg' from the public folder */
          backgroundImage: `url('/b4.jpeg')`, 
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div> 
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          Children's Education Development <span className="text-foundation-yellow">And Growth Foundation</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 mb-10 font-medium"
        >
          mobilizing resources towards the education of less privileged children
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.button 
            onClick={() => setShowPayment(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foundation-yellow text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl cursor-pointer hover:brightness-110 transition-all"
          >
            Donate Now
          </motion.button>
        </motion.div>
      </div>

      {/* Payment Method Pop-up */}
      <AnimatePresence>
        {showPayment && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPayment(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <button 
                onClick={() => setShowPayment(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black font-bold"
              >
                ✕
              </button>

              <h3 className="text-2xl font-black text-foundation-black mb-4">Payment Methods</h3>
              
              <div className="space-y-6 text-left">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Bank Name</p>
                  <p className="text-lg font-bold text-foundation-black uppercase">Zenith Bank</p>
                  
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-4 mb-1">Account Number</p>
                  <p className="text-2xl font-black text-foundation-yellow">1223689456</p>
                  
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-4 mb-1">Account Name</p>
                  <p className="text-md font-bold text-foundation-black uppercase">CEDAG Foundation</p>
                </div>

                <button 
                  onClick={() => setShowPayment(false)}
                  className="w-full bg-foundation-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;