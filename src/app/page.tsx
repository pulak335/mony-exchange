'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Fast & Secure Money Exchange</h1>
              <p className="text-xl mb-8">Exchange currencies at competitive rates with our reliable and secure platform.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300">
                  Our Products
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-80 w-full">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Currency Exchange Illustration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer the best exchange rates with secure and fast transactions.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Competitive Rates',
                description: 'Get the best exchange rates in the market with minimal fees.',
                icon: '💰',
              },
              {
                title: 'Secure Transactions',
                description: 'Your money is protected with our advanced security measures.',
                icon: '🔒',
              },
              {
                title: 'Fast Transfers',
                description: 'Quick processing times for all your currency exchange needs.',
                icon: '⚡',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Currency Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Currency Calculator</h2>
              <p className="text-center text-gray-600 mb-8">Get a quick estimate of your currency exchange</p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>USD - US Dollar</option>
                    <option>EUR - Euro</option>
                    <option>GBP - British Pound</option>
                    <option>JPY - Japanese Yen</option>
                  </select>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>EUR - Euro</option>
                    <option>USD - US Dollar</option>
                    <option>GBP - British Pound</option>
                    <option>JPY - Japanese Yen</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Enter amount"
                  defaultValue="1000"
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Exchange Rate</p>
                    <p className="text-lg font-semibold">1 USD = 0.91 EUR</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">You Get</p>
                    <p className="text-2xl font-bold text-blue-600">910.00 EUR</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Exchange?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust our service for their currency exchange needs.</p>
            <Link href="/products" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition duration-300 inline-block">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
