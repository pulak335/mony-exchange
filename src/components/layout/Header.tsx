'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectMobileMenuOpen, toggleMobileMenu } from '@/lib/redux/features/uiSlice';
import { useAuth } from '@/lib/auth/AuthContext';
import { fadeIn, slideInRight } from '@/lib/animations';

const Header = () => {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector(selectMobileMenuOpen);
  const { user, isAuthenticated, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Payment Methods', href: '/payment-methods' },
  ];

  const handleLogout = async () => {
    await logout();
    setShowUserMenu(false);
  };

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
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
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
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-semibold text-sm">
                    {user?.firstName ? user.firstName[0] : user?.username[0] || 'U'}
                  </span>
                </div>
                <span className="text-sm font-medium">{user?.username}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/history"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Transaction History
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Sign Out
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                href="/auth/signin"
                className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

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
              
              {/* Mobile Auth Section */}
              {isAuthenticated ? (
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-semibold">
                        {user?.firstName ? user.firstName[0] : user?.username[0] || 'U'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-gray-500">@{user?.username}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/dashboard"
                      className="block text-gray-600 hover:text-amber-600 transition-colors py-2"
                      onClick={() => dispatch(toggleMobileMenu())}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block text-gray-600 hover:text-amber-600 transition-colors py-2"
                      onClick={() => dispatch(toggleMobileMenu())}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/history"
                      className="block text-gray-600 hover:text-amber-600 transition-colors py-2"
                      onClick={() => dispatch(toggleMobileMenu())}
                    >
                      Transaction History
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        dispatch(toggleMobileMenu());
                      }}
                      className="block w-full text-left text-red-600 hover:text-red-700 transition-colors py-2"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-b border-gray-100 pb-4 space-y-3">
                  <Link
                    href="/auth/signin"
                    className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors"
                    onClick={() => dispatch(toggleMobileMenu())}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors"
                    onClick={() => dispatch(toggleMobileMenu())}
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
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