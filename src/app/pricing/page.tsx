'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$0',
      frequency: 'per month',
      description: 'Ideal for individuals with occasional exchange needs.',
      features: [
        'Access to competitive rates',
        'Standard transfer limits',
        'Email support',
        'Basic currency alerts',
      ],
      cta: 'Sign Up for Free',
      highlight: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      frequency: 'per month',
      description: 'Best for frequent individual transfers and small businesses.',
      features: [
        'Enhanced exchange rates',
        'Higher transfer limits',
        'Priority email & chat support',
        'Advanced currency alerts',
        'Dedicated account manager',
      ],
      cta: 'Go Premium',
      highlight: true,
    },
    {
      name: 'Business',
      price: '$49.99',
      frequency: 'per month',
      description: 'Tailored for businesses with regular international payment volumes.',
      features: [
        'Wholesale exchange rates',
        'Unlimited transfer limits',
        '24/7 phone & chat support',
        'Multi-currency accounts',
        'API access',
        'Custom reporting',
      ],
      cta: 'Get Started',
      highlight: false,
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing for Every Need</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your exchange volume and desired features. No hidden fees, just transparent pricing.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`rounded-xl overflow-hidden shadow-lg border ${tier.highlight ? 'border-blue-500 scale-105' : 'border-gray-200'} relative flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: tier.highlight ? -10 : -5 }}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-blue-600">{tier.price}</p>
                  <p className="text-gray-500">{tier.frequency}</p>
                </div>
                <ul className="mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-3">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition duration-300 ${tier.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table (Placeholder) */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Detailed Feature Comparison</h2>
          <p className="text-center text-gray-600 mb-8">A comprehensive look at what each plan offers.</p>
          {/* This would be a more complex table component */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
            [Comparison Table Placeholder]
            <p className="mt-4">Contact us for a full feature breakdown.</p>
          </div>
        </motion.div>

        {/* Custom Solutions CTA */}
        <motion.div
          className="bg-blue-600 text-white rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">For high-volume transactions or unique business requirements, our enterprise solutions are designed just for you.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300">
            Contact Sales
          </Link>
        </motion.div>
      </div>
    </div>
  );
}