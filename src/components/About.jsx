import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Founder Image Section - Reduced Weight and Height */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/4 flex justify-center md:justify-start"
        >
          {/* Added max-width and reduced height h-[320px] */}
          <div className="max-w-[480px] w-full border-4 border-foundation-yellow rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/aa.jpeg" 
              alt="Victor S. Olawoore - CEDAG Founder" 
              className="w-full h-[330px] object-cover object-top" 
            />
          </div>
        </motion.div>

        {/* Founder Story Section - Expanded width to 3/4 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-3/4 text-left"
        >
          <h2 className="text-foundation-yellow font-bold text-xl mb-2 tracking-widest uppercase">Founder's Story</h2>
          <h3 className="text-4xl font-black text-foundation-black mb-6 uppercase">Victor S. Olawoore</h3>
          
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Driven by a deep passion for children's growth and educational development, <strong>Victor S. Olawoore</strong> established 
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