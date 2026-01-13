import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Founder Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          {/* We added h-[400px] to limit the height and object-top to focus on the face */}
          <div className="border-8 border-foundation-yellow rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/aa.jpeg" 
              alt="Falola Ayomiposi - CEDAG Founder" 
              className="w-full h-[400px] object-cover object-top" 
            />
          </div>
        </motion.div>

        {/* Founder Story Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/3 text-left"
        >
          <h2 className="text-foundation-yellow font-bold text-xl mb-2 tracking-widest uppercase">Founder's Story</h2>
          <h3 className="text-4xl font-black text-foundation-black mb-6 uppercase">Victor S. Olawoore</h3>
          
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Driven by a deep passion for children's growth and educational development, <strong>Victor s olawoore</strong> established 
              the <strong>CEDAG Foundation</strong> to bridge the gap in quality learning. Our foundation believes that every 
              child deserves the tools to reach their full potential, regardless of their background or circumstances.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Through strategic school outreach programs and dedicated support systems, we are actively building a future where 
              education serves as the solid foundation for every child's lifelong success.
            </p>

            <div className="pt-4">
              <p className="italic font-medium text-gray-500 border-l-4 border-foundation-yellow pl-4">
                "We cherish and value you!" — A core value inspired by the CEDAG mission.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;