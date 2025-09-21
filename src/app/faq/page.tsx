'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-2xl mb-4 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={false}
      animate={{ 
        backgroundColor: isOpen ? '#fef3c7' : '#ffffff',
        borderColor: isOpen ? '#f59e0b' : '#e5e7eb'
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none p-6 hover:bg-amber-50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-900 pr-4">{question}</h3>
        <motion.div
          className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center"
          animate={{ 
            backgroundColor: isOpen ? '#f59e0b' : '#fef3c7',
            rotate: isOpen ? 180 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-5 h-5 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <div className="pt-2 border-t border-amber-200">
              <p className="text-gray-700 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      category: 'General Questions',
      icon: '💡',
      questions: [
        {
          question: 'What is MoneyExchange?',
          answer: 'MoneyExchange is a leading online platform that facilitates fast, secure, and transparent international money transfers and currency exchange services for individuals and businesses worldwide.',
        },
        {
          question: 'How do I create an account?',
          answer: 'You can create an account by clicking on the "Sign Up" button on our homepage. You\'ll need to provide some basic information and complete a quick verification process to get started.',
        },
        {
          question: 'Is my money safe with MoneyExchange?',
          answer: 'Absolutely. We employ state-of-the-art security measures, including bank-level encryption, multi-factor authentication, and are regulated by relevant financial authorities to protect your funds and personal information.',
        },
        {
          question: 'What currencies do you support?',
          answer: 'We support over 150 currencies including all major currencies (USD, EUR, GBP, JPY, etc.) and many exotic currencies. You can view the full list of supported currencies on our platform or by contacting our support team.',
        },
        {
          question: 'Do you have a mobile app?',
          answer: 'Yes! We have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store to manage your transfers on the go.',
        },
      ],
    },
    {
      category: 'Transfer Questions',
      icon: '💸',
      questions: [
        {
          question: 'How long does a transfer take?',
          answer: 'Transfer times vary depending on the currency pair, destination country, and chosen transfer method. Most transfers are completed within 1-3 business days, with some being instant for certain currency pairs.',
        },
        {
          question: 'What are the transfer fees?',
          answer: 'Our fees are transparent and competitive. You can see the exact fee for your transfer before confirming the transaction using our currency calculator or during the transfer process. We never charge hidden fees.',
        },
        {
          question: 'Can I cancel a transfer?',
          answer: 'A transfer can only be canceled if it has not yet been processed. Please contact our support team immediately if you wish to cancel a transfer. Once processed, transfers cannot be canceled.',
        },
        {
          question: 'What are the transfer limits?',
          answer: 'Transfer limits depend on your account verification level and the destination country. You can view your specific limits in your account dashboard. Limits can be increased by completing additional verification.',
        },
        {
          question: 'Can I schedule recurring transfers?',
          answer: 'Yes! Premium and Business account holders can schedule recurring transfers for regular payments like salaries, rent, or other recurring expenses.',
        },
      ],
    },
    {
      category: 'Account & Verification',
      icon: '🔐',
      questions: [
        {
          question: 'What documents are required for verification?',
          answer: 'For identity verification, we typically require a valid government-issued ID (passport, driver\'s license) and proof of address (utility bill, bank statement). Business accounts may require additional documentation like business registration.',
        },
        {
          question: 'How long does verification take?',
          answer: 'Verification usually takes between 24-48 hours, but it can be faster if all documents are clear and correctly submitted. We will notify you via email once your account is fully verified.',
        },
        {
          question: 'Can I have multiple accounts?',
          answer: 'Generally, individuals are allowed one personal account. Businesses can have a separate business account. Please contact support if you have specific needs that require multiple accounts.',
        },
        {
          question: 'How do I update my personal information?',
          answer: 'You can update most of your personal information directly in your account settings. For sensitive information like name changes, please contact our support team for assistance.',
        },
        {
          question: 'What if I forget my password?',
          answer: 'You can reset your password by clicking "Forgot Password" on the login page. We\'ll send you a secure link to reset your password via email.',
        },
      ],
    },
    {
      category: 'Security & Support',
      icon: '🛡️',
      questions: [
        {
          question: 'How do you protect my personal information?',
          answer: 'We use bank-level encryption (256-bit SSL) to protect all data transmission and storage. We also implement strict access controls and regular security audits to ensure your information remains secure.',
        },
        {
          question: 'What if I notice suspicious activity on my account?',
          answer: 'If you notice any suspicious activity, please contact our support team immediately. We have 24/7 fraud monitoring and will work with you to secure your account and investigate any issues.',
        },
        {
          question: 'How can I contact customer support?',
          answer: 'You can contact our support team via email, live chat, or phone. Premium and Business customers have access to priority support channels. Visit our contact page for all support options.',
        },
        {
          question: 'Do you offer insurance on transfers?',
          answer: 'Yes, all transfers are protected by our comprehensive insurance coverage. In the unlikely event of a transfer issue, we will work to resolve it quickly and provide appropriate compensation.',
        },
        {
          question: 'What happens if my transfer fails?',
          answer: 'If a transfer fails due to our error, we will refund all fees and work to complete the transfer as soon as possible. If it fails due to incorrect recipient details, we will help you recover the funds.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-yellow-300">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
              Find answers to the most common questions about our money exchange services and get the help you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#faq-categories" className="px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                Browse FAQ
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-amber-600 rounded-lg text-lg font-semibold transition-colors">
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section id="faq-categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Your <span className="text-amber-600">Answers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive FAQ sections to find answers to your questions quickly and easily.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
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
              Need More <span className="text-amber-600">Help</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help you 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Live Chat Support',
                description: 'Get instant help from our support team via live chat.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                action: 'Start Chat',
                href: '/contact',
              },
              {
                title: 'Email Support',
                description: 'Send us an email and we&apos;ll get back to you within 24 hours.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                action: 'Send Email',
                href: '/contact',
              },
              {
                title: 'Phone Support',
                description: 'Call us directly for urgent matters and complex issues.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                action: 'Call Now',
                href: 'tel:+15551234567',
              },
            ].map((help, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600">
                  {help.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{help.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{help.description}</p>
                <Link
                  href={help.href}
                  className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
                >
                  {help.action}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have <span className="text-yellow-300">Questions</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-amber-100">
              Our dedicated support team is here to help you 24/7. Reach out to us for personalized assistance with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                Contact Support
              </Link>
              <Link href="/pricing" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-amber-600 rounded-lg text-lg font-semibold transition-colors">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}