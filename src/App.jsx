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

        {/* --- UPDATED CONTACT SECTION WITH SVG ICONS --- */}
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-foundation-yellow/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-stretch">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 flex flex-col justify-center"
              >
                <h2 className="text-foundation-yellow font-bold text-lg mb-2 tracking-[0.2em] uppercase">Connect With Us</h2>
                <h3 className="text-5xl font-black text-foundation-black uppercase mb-6 leading-tight">
                  We’d Love To <br /> <span className="text-foundation-yellow">Hear From You</span>
                </h3>
                
                <div className="space-y-6 mt-8">
                  {/* EMAIL ICON CONTAINER */}
                  <div className="group flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl">
                    <div className="w-14 h-14 bg-foundation-yellow text-white rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Official Email</h4>
                      <p className="text-lg font-bold text-foundation-black">cedagfoundation@gmail.com</p>
                    </div>
                  </div>

                  {/* PHONE ICON CONTAINER */}
                  <div className="group flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl">
                    <div className="w-14 h-14 bg-foundation-black text-white rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Phone Line</h4>
                      <p className="text-lg font-bold text-foundation-black">+234 816 782 7909</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 bg-foundation-black rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden flex items-center justify-center"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-foundation-yellow"></div>
                
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
                      <h4 className="text-white text-2xl font-black mb-8">Send Us A Message</h4>
                      <form className="space-y-5" onSubmit={handleContactSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <input required type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-foundation-yellow outline-none transition-colors" />
                          <input required type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-foundation-yellow outline-none transition-colors" />
                        </div>
                        <input required type="text" placeholder="Subject" className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-foundation-yellow outline-none transition-colors" />
                        <textarea required rows="4" placeholder="How can we help you?" className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-foundation-yellow outline-none transition-colors resize-none"></textarea>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-foundation-yellow text-white py-5 rounded-xl font-black text-lg uppercase tracking-widest shadow-lg">
                          Send Message
                        </motion.button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10 px-4">
                      <div className="w-20 h-20 bg-foundation-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h4 className="text-white text-2xl font-black mb-4 uppercase">Thank You!</h4>
                      <p className="text-gray-400 text-lg leading-relaxed">Message received successfully.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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