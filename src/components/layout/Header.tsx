'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectMobileMenuOpen, toggleMobileMenu } from '@/lib/redux/features/uiSlice';
import { fadeIn, slideInRight } from '@/lib/animations';

const Header = () => {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector(selectMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center space-x-2">
            {/* Replace with your logo */}
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">$</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MoneyExchange</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="md:hidden text-gray-600"
          onClick={() => dispatch(toggleMobileMenu())}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 md:hidden"
          >
            <div className="p-5 space-y-5">
              <div className="flex justify-end">
                <button 
                  onClick={() => dispatch(toggleMobileMenu())}
                  className="text-gray-600"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                    onClick={() => dispatch(toggleMobileMenu())}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;