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
      className="border-b border-gray-200 py-4"
      initial={false}
      animate={{ backgroundColor: isOpen ? '#f3f4f6' : '#ffffff' }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <motion.svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600"
          >
            <p>{answer}</p>
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
      questions: [
        {
          question: 'What is Money Exchange?',
          answer: 'Money Exchange is a leading online platform that facilitates fast, secure, and transparent international money transfers and currency exchange services for individuals and businesses.',
        },
        {
          question: 'How do I create an account?',
          answer: 'You can create an account by clicking on the "Sign Up" button on our homepage. You\'ll need to provide some basic information and complete a quick verification process.',
        },
        {
          question: 'Is my money safe with Money Exchange?',
          answer: 'Absolutely. We employ state-of-the-art security measures, including encryption and multi-factor authentication, to protect your funds and personal information. We are also regulated by relevant financial authorities.',
        },
        {
          question: 'What currencies do you support?',
          answer: 'We support a wide range of major and exotic currencies. You can view the full list of supported currencies on our platform or by contacting our support team.',
        },
      ],
    },
    {
      category: 'Transfer Questions',
      questions: [
        {
          question: 'How long does a transfer take?',
          answer: 'Transfer times vary depending on the currency pair, destination country, and chosen transfer method. Most transfers are completed within 1-3 business days, with some being instant.',
        },
        {
          question: 'What are the transfer fees?',
          answer: 'Our fees are transparent and competitive. You can see the exact fee for your transfer before confirming the transaction on our currency calculator or during the transfer process.',
        },
        {
          question: 'Can I cancel a transfer?',
          answer: 'A transfer can only be canceled if it has not yet been processed. Please contact our support team immediately if you wish to cancel a transfer.',
        },
        {
          question: 'What are the transfer limits?',
          answer: 'Transfer limits depend on your account verification level and the destination country. You can view your specific limits in your account dashboard.',
        },
      ],
    },
    {
      category: 'Account & Verification',
      questions: [
        {
          question: 'What documents are required for verification?',
          answer: 'For identity verification, we typically require a valid government-issued ID (passport, driver\'s license) and proof of address (utility bill, bank statement). Business accounts may require additional documentation.',
        },
        {
          question: 'How long does verification take?',
          answer: 'Verification usually takes between 24-48 hours, but it can be faster if all documents are clear and correctly submitted. We will notify you once your account is fully verified.',
        },
        {
          question: 'Can I have multiple accounts?',
          answer: 'Generally, individuals are allowed one personal account. Businesses can have a separate business account. Please contact support if you have specific needs.',
        },
      ],
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our money exchange services.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          className="bg-blue-600 text-white rounded-xl p-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Our dedicated support team is here to help. Reach out to us for personalized assistance.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300">
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}