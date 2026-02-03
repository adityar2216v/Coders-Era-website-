'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { ThreeDTiltCard } from '@/components/common/ThreeDTiltCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden scanlines">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-blue-600/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-gradient-blue">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions or want to join our community? We&apos;d love to hear from you. Reach out to us using the form below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              className="w-full lg:w-3/5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Get in Touch</h2>

                {submitSuccess ? (
                  <motion.div
                    className="bg-green-500/20 border border-green-500/50 text-green-200 p-8 rounded-2xl mb-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <p className="text-xl font-bold mb-2">Message Sent!</p>
                    <p>We&apos;ve received your inquiry and will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-400 mb-2 text-sm font-medium uppercase tracking-wider">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border border-gray-700/50 bg-black/40 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2 text-sm font-medium uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border border-gray-700/50 bg-black/40 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm font-medium uppercase tracking-wider">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-700/50 bg-black/40 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                      >
                        <option value="" className="bg-gray-900">Select a subject</option>
                        <option value="general" className="bg-gray-900">General Inquiry</option>
                        <option value="membership" className="bg-gray-900">Membership</option>
                        <option value="events" className="bg-gray-900">Events</option>
                        <option value="partnership" className="bg-gray-900">Partnership</option>
                        <option value="other" className="bg-gray-900">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-400 mb-2 text-sm font-medium uppercase tracking-wider">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-5 py-4 rounded-xl border border-gray-700/50 bg-black/40 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/40 hover:scale-[1.02] transform flex items-center justify-center uppercase tracking-wide text-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-2/5 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>

              <ThreeDTiltCard className="h-auto">
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md relative overflow-hidden group">
                  {/* Info items */}
                  <div className="space-y-8 relative z-10">
                    <div className="flex items-start space-x-5">
                      <div className="flex-shrink-0 mt-1 p-3 bg-blue-500/10 rounded-lg text-blue-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Email</h3>
                        <p className="text-blue-300 mt-1">info@codersera.com</p>
                        <p className="text-gray-500 text-sm mt-1">Response time: ~24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="flex-shrink-0 mt-1 p-3 bg-purple-500/10 rounded-lg text-purple-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">HQ Location</h3>
                        <p className="text-gray-300 mt-1">Plot 14, Knowledge park 2</p>
                        <p className="text-gray-300">Greater Noida, Uttar Pradesh - India</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="flex-shrink-0 mt-1 p-3 bg-pink-500/10 rounded-lg text-pink-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Socials</h3>
                        <div className="flex space-x-4 mt-2">
                          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors">
                            <BsTwitterX />
                          </a>
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-gray-500/20 hover:text-white transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                          </a>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-600/20 hover:text-blue-500 transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ThreeDTiltCard>

              <div className="glass-card p-6 rounded-2xl border border-green-500/20 bg-green-500/5 relative overflow-hidden group hover:bg-green-500/10 transition-colors cursor-pointer">
                <a
                  href="https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 relative z-10"
                >
                  <div className="bg-green-500 p-3 rounded-full text-white shadow-lg shadow-green-500/30">
                    <IoLogoWhatsapp className='text-2xl' />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Join Whatsapp Community</h3>
                    <p className="text-sm text-green-200/70">Connect with active developers instantly</p>
                  </div>
                  <div className="ml-auto text-green-400 group-hover:translate-x-1 transition-transform">→</div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black/30 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Visit HQ</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our office is located in the heart of the tech district. Stop by and say hello!
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 mix-blend-overlay" />
            <iframe className='w-full h-[450px] filter grayscale invert-[0.8] contrast-125 hover:filter-none transition-all duration-700' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28060.32888310369!2d77.47016222292659!3d28.463246480579468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1750190449103!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}