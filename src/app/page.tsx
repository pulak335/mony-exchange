'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621409618548-46a217334b00?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Financial technology background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-amber-800/80 opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Fast & Secure
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">
                Money Exchange
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Exchange currencies at competitive rates with our reliable and secure platform. 
              Trusted by thousands of customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                Our Products
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-amber-600 rounded-lg text-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-amber-600">MoneyExchange</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re not just another currency exchange platform. We&apos;re your trusted partner in global finance, 
              offering unparalleled service, security, and value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Best Exchange Rates',
                description: 'Get the most competitive rates in the market with our advanced algorithms and global network of partners.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                color: 'from-green-500 to-emerald-600',
                bgColor: 'bg-green-50',
                borderColor: 'border-green-200',
              },
              {
                title: 'Bank-Level Security',
                description: 'Your funds are protected with enterprise-grade encryption, fraud detection, and regulatory compliance.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-200',
              },
              {
                title: 'Lightning Fast Transfers',
                description: 'Process transactions in minutes, not days. Our streamlined system ensures quick and reliable transfers.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: 'from-amber-500 to-orange-600',
                bgColor: 'bg-amber-50',
                borderColor: 'border-amber-200',
              },
              {
                title: '24/7 Customer Support',
                description: 'Our dedicated support team is available around the clock to assist you with any questions or concerns.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                ),
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
                borderColor: 'border-purple-200',
              },
              {
                title: 'Global Coverage',
                description: 'Send and receive money to over 150 countries with support for 50+ currencies worldwide.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-teal-500 to-teal-600',
                bgColor: 'bg-teal-50',
                borderColor: 'border-teal-200',
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden fees or surprise charges. See exactly what you pay upfront with our transparent fee structure.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-indigo-500 to-indigo-600',
                bgColor: 'bg-indigo-50',
                borderColor: 'border-indigo-200',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Millions Worldwide
              </h3>
              <p className="text-xl text-gray-600">
                Join our growing community of satisfied customers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '2M+', label: 'Active Users' },
                { number: '$50B+', label: 'Transactions Processed' },
                { number: '150+', label: 'Countries Supported' },
                { number: '99.9%', label: 'Uptime Guarantee' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Currency Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Real-Time Exchange Calculator
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Currency <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Calculator</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get instant, accurate exchange rates and calculate your currency conversion in real-time. 
              No hidden fees, transparent pricing, and the best rates guaranteed.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Calculator Header */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Exchange Calculator</h3>
                    <p className="text-amber-100">Get the best rates instantly</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-amber-200">Last Updated</p>
                    <p className="text-lg font-semibold">Just now</p>
                  </div>
                </div>
              </div>

              {/* Calculator Body */}
              <div className="p-8 md:p-12">
                {/* Currency Selection */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* From Currency */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">From</label>
                    <div className="relative">
                      <select className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white appearance-none cursor-pointer hover:border-amber-300">
                        <option value="USD">🇺🇸 USD - US Dollar</option>
                        <option value="EUR">🇪🇺 EUR - Euro</option>
                        <option value="GBP">🇬🇧 GBP - British Pound</option>
                        <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
                        <option value="CAD">🇨🇦 CAD - Canadian Dollar</option>
                        <option value="AUD">🇦🇺 AUD - Australian Dollar</option>
                        <option value="CHF">🇨🇭 CHF - Swiss Franc</option>
                        <option value="CNY">🇨🇳 CNY - Chinese Yuan</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Swap Button */}
                  <div className="flex items-end justify-center pb-2">
                    <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </button>
                  </div>

                  {/* To Currency */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">To</label>
                    <div className="relative">
                      <select className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white appearance-none cursor-pointer hover:border-amber-300">
                        <option value="EUR">🇪🇺 EUR - Euro</option>
                        <option value="USD">🇺🇸 USD - US Dollar</option>
                        <option value="GBP">🇬🇧 GBP - British Pound</option>
                        <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
                        <option value="CAD">🇨🇦 CAD - Canadian Dollar</option>
                        <option value="AUD">🇦🇺 AUD - Australian Dollar</option>
                        <option value="CHF">🇨🇭 CHF - Swiss Franc</option>
                        <option value="CNY">🇨🇳 CNY - Chinese Yuan</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Amount</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="w-full p-4 pr-20 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-2xl font-semibold hover:border-amber-300" 
                      placeholder="Enter amount"
                      defaultValue="1000"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <span className="text-gray-500 font-medium">USD</span>
                    </div>
                  </div>
                </div>

                {/* Exchange Rate Display */}
                <div className="bg-gradient-to-r from-gray-50 to-amber-50 p-6 rounded-2xl mb-8 border border-gray-100">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center md:text-left">
                      <p className="text-sm text-gray-500 mb-1">Exchange Rate</p>
                      <p className="text-2xl font-bold text-gray-900">1 USD = 0.91 EUR</p>
                      <p className="text-sm text-green-600 flex items-center justify-center md:justify-start mt-1">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        +0.02% from yesterday
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">You Get</p>
                      <p className="text-4xl font-bold text-amber-600">910.00</p>
                      <p className="text-lg text-gray-600">EUR</p>
                    </div>
                    
                    <div className="text-center md:text-right">
                      <p className="text-sm text-gray-500 mb-1">Our Fee</p>
                      <p className="text-xl font-bold text-green-600">$2.50</p>
                      <p className="text-sm text-gray-500">0.25%</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Start Exchange
                    </div>
                  </button>
                  
                  <button className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300">
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      View All Rates
                    </div>
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">Best Rates</p>
                        <p className="text-xs text-gray-500">Guaranteed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">Secure</p>
                        <p className="text-xs text-gray-500">Bank-level</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">Fast</p>
                        <p className="text-xs text-gray-500">24/7 Service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Currency Exchange Rates Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Live Exchange <span className="text-amber-600">Rates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get real-time exchange rates for the most popular currency pairs. Rates are updated every minute.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  from: 'USD',
                  to: 'EUR',
                  rate: 0.91,
                  change: '+0.02',
                  changeType: 'positive',
                  flag: '🇺🇸',
                  flagTo: '🇪🇺',
                  name: 'US Dollar to Euro',
                },
                {
                  from: 'USD',
                  to: 'GBP',
                  rate: 0.79,
                  change: '-0.01',
                  changeType: 'negative',
                  flag: '🇺🇸',
                  flagTo: '🇬🇧',
                  name: 'US Dollar to British Pound',
                },
                {
                  from: 'USD',
                  to: 'JPY',
                  rate: 149.85,
                  change: '+1.25',
                  changeType: 'positive',
                  flag: '🇺🇸',
                  flagTo: '🇯🇵',
                  name: 'US Dollar to Japanese Yen',
                },
                {
                  from: 'USD',
                  to: 'CAD',
                  rate: 1.36,
                  change: '+0.03',
                  changeType: 'positive',
                  flag: '🇺🇸',
                  flagTo: '🇨🇦',
                  name: 'US Dollar to Canadian Dollar',
                },
                {
                  from: 'USD',
                  to: 'AUD',
                  rate: 1.52,
                  change: '-0.05',
                  changeType: 'negative',
                  flag: '🇺🇸',
                  flagTo: '🇦🇺',
                  name: 'US Dollar to Australian Dollar',
                },
              ].map((currency, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{currency.flag}</span>
                      <span className="text-lg font-bold text-gray-900">{currency.from}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{currency.to}</span>
                      <span className="text-2xl">{currency.flagTo}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {currency.rate}
                    </div>
                    <div className="text-sm text-gray-500">
                      {currency.name}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                      currency.changeType === 'positive' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      <svg 
                        className={`w-4 h-4 ${currency.changeType === 'positive' ? 'rotate-0' : 'rotate-180'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                      <span>{currency.change}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Rising</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Falling</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                  <span>Live Rates</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/exchange" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">
                  Exchange Now
                </Link>
                <Link href="/pricing" className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg font-semibold transition-colors">
                  View All Rates
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Simple & Secure Process
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of money exchange with our streamlined 3-step process. 
              From registration to completion, we&apos;ve made international transfers effortless and secure.
            </p>
          </motion.div>

          {/* Steps Container */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
              {[
                {
                  step: '01',
                  title: 'Create Your Account',
                  subtitle: 'Quick & Easy Setup',
                  description: 'Sign up in under 2 minutes with just your email and basic information. Complete our quick verification process to unlock all premium features and higher limits.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  features: ['Email verification', 'ID verification', 'Bank account setup'],
                  color: 'from-blue-500 to-blue-600',
                  bgColor: 'bg-blue-50',
                  textColor: 'text-blue-600'
                },
                {
                  step: '02',
                  title: 'Choose Your Transfer',
                  subtitle: 'Smart Exchange',
                  description: 'Select your currencies, enter the amount, and choose your preferred delivery method. Our AI-powered system shows you the best rates in real-time with transparent fees.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  ),
                  features: ['Real-time rates', 'Low fees', 'Multiple currencies'],
                  color: 'from-amber-500 to-amber-600',
                  bgColor: 'bg-amber-50',
                  textColor: 'text-amber-600'
                },
                {
                  step: '03',
                  title: 'Complete & Track',
                  subtitle: 'Secure Delivery',
                  description: 'Confirm your transfer with our secure payment system and track it in real-time. Receive instant notifications at every step until your money reaches its destination.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  features: ['Real-time tracking', 'Instant notifications', 'Secure delivery'],
                  color: 'from-green-500 to-green-600',
                  bgColor: 'bg-green-50',
                  textColor: 'text-green-600'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden group-hover:-translate-y-2">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center ${item.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className={`text-sm font-semibold ${item.textColor} mb-4`}>{item.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                      
                      {/* Features List */}
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Main CTA Container */}
            <div className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating Circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
                
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Trusted by 50,000+ Users Worldwide
                </motion.div>

                {/* Main Heading */}
                <motion.h3 
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Ready to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                    Get Started?
                  </span>
                </motion.h3>

                {/* Subtitle */}
                <motion.p 
                  className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Join thousands of satisfied customers who trust us with their international money transfers. 
                  <span className="text-yellow-200 font-semibold"> Start your first exchange in minutes!</span>
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link
                    href="/auth/signup"
                    className="group relative bg-white text-amber-600 hover:text-amber-700 font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 min-w-[200px]"
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Create Free Account
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                  
                  <Link
                    href="/exchange"
                    className="group relative border-2 border-white/50 text-white hover:bg-white hover:text-amber-600 font-bold py-5 px-10 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:border-white min-w-[200px]"
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Try Exchange Calculator
                    </div>
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    {
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      ),
                      title: "Bank-Level Security",
                      description: "256-bit SSL encryption"
                    },
                    {
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                      title: "Lightning Fast",
                      description: "Transfers in minutes"
                    },
                    {
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      ),
                      title: "24/7 Support",
                      description: "Always here to help"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-yellow-300 mb-4 group-hover:bg-white/30 transition-all duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-amber-200 text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security & <span className="text-amber-400">Compliance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your security is our top priority. We use industry-leading security measures and maintain strict regulatory compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '256-bit SSL Encryption',
                description: 'Bank-level encryption protects all your data and transactions.',
                icon: '🔐',
              },
              {
                title: 'PCI DSS Compliant',
                description: 'Certified compliance with Payment Card Industry standards.',
                icon: '🛡️',
              },
              {
                title: 'Fraud Detection',
                description: 'Advanced AI-powered fraud detection and prevention systems.',
                icon: '🤖',
              },
              {
                title: 'Regulatory Licensed',
                description: 'Licensed and regulated by financial authorities worldwide.',
                icon: '📋',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Companies Worldwide Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Companies Worldwide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Leading organizations trust our platform for their currency exchange needs</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Target Logo */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/Target_Corporation_logo_vector.svg.png?auto=format&q=60&fit=max&w=930"
                alt="Target Corporation"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Figma Logo */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/d1420edfbb52db6eebcd331b2f91fea17a3d4f5b"
                alt="Figma"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* AT&T Logo */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src="https://www.orangesoft.com.my/blog/sites/default/files/inline-images/ATT-logo.png"
                alt="AT&T"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Tata Logo */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src="https://i0.wp.com/www.themediaant.com/blog/wp-content/uploads/2024/06/Tata_logo.svg_.png?resize=740%2C679&ssl=1"
                alt="Tata Group"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Design Crowd Logo */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/2017/March/Typical-Downfalls-In-Logo-Designs/1_300.png"
                alt="Design Crowd"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Beats Logo */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src="https://www.orangesoft.com.my/blog/sites/default/files/inline-images/beats_logo.png"
                alt="Beats by Dre"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Got Questions? We Have Answers
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find comprehensive answers to common questions about our money exchange services. 
              Can&apos;t find what you&apos;re looking for? Our support team is here to help.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* FAQ Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['General', 'Security', 'Fees', 'Transfers', 'Account'].map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    index === 0 
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                {
                  question: 'How do I get started with money exchange?',
                  answer: 'Getting started is simple! Create an account, verify your identity, and you can begin exchanging currencies immediately. Our verification process typically takes just a few minutes and requires basic documentation.',
                  category: 'General',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )
                },
                {
                  question: 'What currencies do you support?',
                  answer: 'We support over 50 major and exotic currencies including USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, and many more. Check our full list of supported currencies in your account dashboard or contact support for specific currency inquiries.',
                  category: 'General',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )
                },
                {
                  question: 'How long do transfers take?',
                  answer: 'Most transfers are processed within 1-2 business days. Premium and Business accounts may have access to faster processing times, sometimes as quick as same-day transfers. Processing times may vary based on destination country and banking hours.',
                  category: 'Transfers',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  question: 'Are there any hidden fees?',
                  answer: 'No hidden fees! We believe in transparent pricing. You&apos;ll see exactly what you pay upfront, including our exchange rate and any applicable fees, before confirming your transaction. Our fee structure is clearly displayed on our website.',
                  category: 'Fees',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  question: 'Is my money safe with you?',
                  answer: 'Absolutely. We use bank-level security with 256-bit SSL encryption, are PCI DSS compliant, and maintain strict regulatory compliance. Your funds are protected by industry-leading security measures and are insured up to $250,000.',
                  category: 'Security',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  question: 'Can I track my transfer?',
                  answer: 'Yes! You can track your transfer in real-time through your account dashboard. We&apos;ll also send you email and SMS notifications at every step of the process, from initiation to completion.',
                  category: 'Transfers',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  question: 'What documents do I need for verification?',
                  answer: 'For verification, you&apos;ll need a government-issued photo ID (passport, driver&apos;s license, or national ID) and proof of address (utility bill or bank statement). Additional documents may be required for higher transaction limits.',
                  category: 'Account',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  question: 'What are your exchange rate margins?',
                  answer: 'Our exchange rates are highly competitive with minimal margins. We offer rates that are typically 0.1-0.5% above the interbank rate, which is among the best in the industry. Rates are updated in real-time throughout the day.',
                  category: 'Fees',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  )
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-amber-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Support CTA */}
            <motion.div 
              className="mt-16 text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                  Our support team is available 24/7 to help you with any questions or concerns. 
                  Get in touch and we&apos;ll respond within minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/faq"
                    className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
                  >
                    View Full FAQ
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with <span className="text-yellow-300">Exchange Rates</span>
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Get the latest exchange rates, market insights, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-amber-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Exchange?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust our service for their currency exchange needs.</p>
            <Link href="/products" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition duration-300 inline-block">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
