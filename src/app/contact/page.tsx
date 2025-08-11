'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, feedback, or need assistance? Reach out to us using the form below or through our contact details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject of your inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gray-50 rounded-xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Contact Details</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Address:</h3>
                <p>123 Money Exchange Street,</p>
                <p>Financial District, City, Country</p>
                <p>ZIP Code: 12345</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone:</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email:</h3>
                <p>support@moneyexchange.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours:</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM (Local Time)</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media Links (Placeholder) */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us:</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  {/* Replace with actual SVG icons */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.163 6.839 9.504.5.092.682-.217.682-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.832.092-.647.35-1.089.636-1.338-2.22-.253-4.555-1.11-4.555-4.942 0-1.09.39-1.984 1.03-2.682-.104-.253-.448-1.27.098-2.65 0 0 .84-.268 2.75 1.025.798-.222 1.648-.333 2.495-.337.846.004 1.696.115 2.495.337 1.91-1.293 2.75-1.025 2.75-1.025.546 1.38.202 2.397.098 2.65.64.698 1.03 1.592 1.03 2.682 0 3.84-2.339 4.685-4.566 4.934.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482C21.136 20.16 24 16.416 24 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 10.48c-.004.05-.004.1-.004.15 0 4.445 3.17 8.138 7.378 8.992a4.092 4.092 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 bg-gray-100 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 p-8">Our Location</h2>
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
            <p>Map Placeholder</p>
            {/* You can embed a Google Map or OpenStreetMap here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}