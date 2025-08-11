'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
};

type Logo = {
  id: number;
  name: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CFO',
    company: 'TechGlobal Inc.',
    image: '/testimonials/person1.jpg', // You'll need to add these images to your public folder
    quote: 'MoneyExchange has transformed how our company handles international payments. The rates are competitive and the service is lightning fast.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Entrepreneur',
    company: 'Startup Ventures',
    image: '/testimonials/person2.jpg',
    quote: 'As someone who frequently transfers money internationally, I can confidently say that MoneyExchange offers the best service I have experienced.',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Finance Director',
    company: 'Global Retail Ltd.',
    image: '/testimonials/person3.jpg',
    quote: 'The transparency and security provided by MoneyExchange give us peace of mind when handling our international transactions.',
  },
];

const partnerLogos: Logo[] = [
  { id: 1, name: 'Company 1', image: '/logos/logo1.svg' },
  { id: 2, name: 'Company 2', image: '/logos/logo2.svg' },
  { id: 3, name: 'Company 3', image: '/logos/logo3.svg' },
  { id: 4, name: 'Company 4', image: '/logos/logo4.svg' },
  { id: 5, name: 'Company 5', image: '/logos/logo5.svg' },
  { id: 6, name: 'Company 6', image: '/logos/logo6.svg' },
];

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trusted by businesses and individuals worldwide for fast, secure, and reliable money exchange services.</p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mx-auto">
                    {/* Placeholder for testimonial image */}
                    <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl italic text-gray-800 mb-4">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">Trusted by Companies Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo) => (
              <motion.div
                key={logo.id}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                {/* Placeholder for company logo */}
                <div className="h-12 w-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{logo.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;