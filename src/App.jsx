import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 7000);
  };

  const outreachData = [
    { id: 1, img: '/1.jpeg', title: 'Educational Support', desc: 'Providing essential learning materials to students to enhance their academic journey.' },
    { id: 2, img: '/2.jpeg', title: 'School Mentorship', desc: 'Guiding young minds through career talks and personal development sessions.' },
    { id: 3, img: '/3.jpeg', title: 'Classroom Outreach', desc: 'Direct engagement with pupils to understand and solve their educational needs.' },
    { id: 4, img: '/4.jpeg', title: 'Community Impact', desc: 'Strengthening the bond between schools and the community through active support.' },
    { id: 5, img: '/5.jpeg', title: 'Future Leaders', desc: 'Empowering the next generation with the confidence to lead and excel.' },
    { id: 6, img: '/6.jpeg', title: 'Global Vision', desc: 'Broadening the horizons of every child we encounter through quality outreach.' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-foundation-yellow selection:text-white">
      <Navbar onDonateClick={() => setShowPayment(true)} />

      <main className="flex-grow">
        <Hero showPayment={showPayment} setShowPayment={setShowPayment} />
        <About />

        {/* --- SCHOOL OUTREACH SECTION --- */}
        <section id="outreach" className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-foundation-yellow font-bold text-xl mb-2 tracking-widest uppercase">Our Impact</h2>
              <h3 className="text-4xl md:text-5xl font-black text-foundation-black uppercase">SCHOOL OUTREACH</h3>
              <div className="w-24 h-1 bg-foundation-yellow mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {outreachData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="h-72 rounded-3xl overflow-hidden shadow-lg mb-6 border-4 border-white">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=CEDAG+Photo'; }}
                    />
                  </div>
                  <div className="px-2">
                    <h4 className="text-xl font-black text-foundation-black uppercase mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROFESSIONAL CLEAN WHITE CONTACT SECTION --- */}
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
          {/* Subtle background divider */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-0 bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              
              {/* Left Side: Professional Dark Info Panel */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-5/12 bg-foundation-black p-10 md:p-14 text-white flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-foundation-yellow font-bold text-xs mb-4 tracking-[0.3em] uppercase">Contact Us</h2>
                  <h3 className="text-4xl font-black uppercase mb-6 leading-tight">
                    Let’s Build <br /> <span className="text-foundation-yellow">The Future</span> Together
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-10">
                    Reach out today to learn more about our missions or to find out how you can contribute to a child's growth.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="text-foundation-yellow mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Email Support</p>
                      <p className="font-bold text-lg">cedagfoundation@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-foundation-yellow mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Phone Line</p>
                      <p className="font-bold text-lg">+234 816 782 7909</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: High-End White Form */}
              <div className="lg:w-7/12 p-10 md:p-14">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div 
                      key="contact-form-container"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h4 className="text-foundation-black text-2xl font-black mb-8 uppercase tracking-tight">Send A Message</h4>
                      <form className="space-y-6" onSubmit={handleContactSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                            <input required type="text" placeholder="e.g. Samuel Ade" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-foundation-black focus:border-foundation-yellow focus:bg-white outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input required type="email" placeholder="samuel@mail.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-foundation-black focus:border-foundation-yellow focus:bg-white outline-none transition-all" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">How can we help?</label>
                          <textarea required rows="4" placeholder="Type your message here..." className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-foundation-black focus:border-foundation-yellow focus:bg-white outline-none transition-all resize-none"></textarea>
                        </div>

                        <motion.button 
                          whileHover={{ scale: 1.01 }} 
                          whileTap={{ scale: 0.99 }} 
                          className="w-full bg-foundation-yellow text-white py-5 rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-foundation-yellow/30 hover:brightness-105 transition-all"
                        >
                          Send Message
                        </motion.button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success" 
                      initial={{ scale: 0.9, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }} 
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h4 className="text-foundation-black text-2xl font-black mb-2 uppercase">Successful!</h4>
                      <p className="text-gray-500">Your message has been sent to the foundation.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-foundation-black text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-gray-800 pb-12">
            <div>
              <p className="font-black text-3xl text-foundation-yellow tracking-tighter uppercase">CEDAG FOUNDATION</p>
              <p className="text-gray-400 mt-2 max-w-sm">Empowering the next generation through quality educational development.</p>
            </div>
            
            <div className="space-y-4 font-medium text-sm text-gray-300 flex flex-col items-start md:items-end">
              <p>Email: cedagfoundation@gmail.com</p>
              <p>Phone: +234 816 782 7909</p>
              
              <div className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/CEDAGfoundation" className="text-gray-400 hover:text-foundation-yellow transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/cedagfoundation?igsh=Y3RxeXoyaWdxZTU3" className="text-gray-400 hover:text-foundation-yellow transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-foundation-yellow transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center pt-10 text-gray-500 text-sm italic">"We cherish and value you!"</p>
        </div>
      </footer>
    </div>
  );
}

export default App;