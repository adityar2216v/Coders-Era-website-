'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // EMAILJS CONFIGURATION
  // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
  const EMAILJS_SERVICE_ID: string = "service_q2zm3kc";
  const EMAILJS_TEMPLATE_ID: string = "template_05fr5dp";
  const EMAILJS_PUBLIC_KEY: string = "C4DlnBIPdvNBkpoYb";

  // GOOGLE SHEETS CONFIGURATION
  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SHEET_SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbyXlpF-i99sie7F-MYGapI88pfRPbLGsaNAO6_do3SG7Z1pWOwPLOXbuzokIJLFdKZO/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send Email using EmailJS
      // We use current form reference
      if (EMAILJS_SERVICE_ID !== "service_id") {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current!,
          EMAILJS_PUBLIC_KEY
        );
      } else {
        console.log("EmailJS keys not set. simulating success.");
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // 2. Submit to Google Sheets (if URL is provided and not the default placeholder)
      if (GOOGLE_SHEET_SCRIPT_URL && !GOOGLE_SHEET_SCRIPT_URL.includes("REPLACE_THIS")) {
        const formBody = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formBody.append(key, value);
        });

        await fetch(GOOGLE_SHEET_SCRIPT_URL, {
          method: 'POST',
          body: formBody,
          mode: 'no-cors'
        });
      }

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

    } catch (error) {
      console.error("FAILED...", error);
      setIsSubmitting(false);
      alert("Failed to send message. Please try again.");
    }
  };

  const inputClasses = "w-full px-5 py-4 rounded-xl border border-white/10 bg-black/40 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contact <span className="text-gradient-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Have questions or want to join our community? We&apos;d love to hear from you. Reach out to us using the form below.
          </motion.p>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              className="w-full lg:w-3/5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 md:p-10 border-white/10 bg-white/[0.02]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

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
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">Your Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" required />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">Subject</label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClasses} required >
                        <option value="" className="bg-black text-gray-400">Select a subject</option>
                        <option value="general" className="bg-black">General Inquiry</option>
                        <option value="membership" className="bg-black">Membership</option>
                        <option value="events" className="bg-black">Events</option>
                        <option value="partnership" className="bg-black">Partnership</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">Your Message</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className={inputClasses} placeholder="How can we help you?" required ></textarea>
                    </div>

                    <Button type="submit" isLoading={isSubmitting} size="lg" className="w-full md:w-auto px-10">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            <motion.div
              className="w-full lg:w-2/5 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>

              <Card className="h-auto p-8 bg-white/5 border-white/10">
                {/* Info items */}
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-lg text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Email</h3>
                      <p className="text-primary/80 mt-1">coders.eraa@gmail.com</p>
                      <p className="text-muted-foreground text-sm mt-1">Response time: ~24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 mt-1 p-3 bg-secondary/10 rounded-lg text-secondary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">HQ Location</h3>
                      <p className="text-gray-300 mt-1">Plot 19, Knowledge park 2</p>
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
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-black hover:text-white transition-colors">
                          <BsTwitterX />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
                          <BsGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                          <BsLinkedin />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card hoverEffect className="p-6 border-green-500/20 bg-green-500/5 group">
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
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-black/30 py-24">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Visit HQ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our office is located in the heart of the tech district. Stop by and say hello!
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group h-[450px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 mix-blend-overlay" />
            <iframe className='w-full h-full filter grayscale invert-[0.8] contrast-125 hover:filter-none transition-all duration-700' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28060.32888310369!2d77.47016222292659!3d28.463246480579468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1750190449103!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}