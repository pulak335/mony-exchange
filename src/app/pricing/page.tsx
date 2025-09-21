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
        'Mobile app access',
        'Transaction history',
      ],
      cta: 'Sign Up for Free',
      highlight: false,
      color: 'from-gray-500 to-gray-600',
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
        'Multi-currency wallet',
        'Scheduled transfers',
        'Priority processing',
      ],
      cta: 'Go Premium',
      highlight: true,
      color: 'from-amber-500 to-amber-600',
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
        'Bulk transfer tools',
        'White-label solutions',
      ],
      cta: 'Get Started',
      highlight: false,
      color: 'from-blue-500 to-blue-600',
    },
  ];

  const features = [
    { name: 'Exchange Rates', basic: 'Standard', premium: 'Enhanced', business: 'Wholesale' },
    { name: 'Transfer Limits', basic: '$10,000/month', premium: '$50,000/month', business: 'Unlimited' },
    { name: 'Support', basic: 'Email', premium: 'Email + Chat', business: '24/7 Phone + Chat' },
    { name: 'Account Manager', basic: '❌', premium: '✅', business: '✅' },
    { name: 'API Access', basic: '❌', premium: '❌', business: '✅' },
    { name: 'Custom Reporting', basic: '❌', premium: '❌', business: '✅' },
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
              Simple <span className="text-yellow-300">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
              Choose a plan that fits your exchange volume and desired features. No hidden fees, just transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing-tiers" className="px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                View Plans
              </a>
              <a href="#comparison" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-amber-600 rounded-lg text-lg font-semibold transition-colors">
                Compare Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing-tiers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-amber-600">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our free plan and upgrade as your needs grow. All plans include our core exchange services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                  tier.highlight 
                    ? 'ring-4 ring-amber-500 ring-opacity-50 scale-105 bg-gradient-to-br from-white to-amber-50' 
                    : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: tier.highlight ? -12 : -8 }}
              >
                {tier.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-6 rounded-bl-2xl font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 md:p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tier.description}</p>
                    <div className="mb-8">
                      <div className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                        {tier.price}
                      </div>
                      <p className="text-gray-500 text-lg">{tier.frequency}</p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact" 
                    className={`block w-full py-4 px-6 rounded-xl text-center font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                      tier.highlight 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="comparison" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Feature <span className="text-amber-600">Comparison</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare all features across our plans to find the perfect fit for your needs.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  <tr>
                    <th className="px-6 py-6 text-left text-lg font-semibold">Features</th>
                    <th className="px-6 py-6 text-center text-lg font-semibold">Basic</th>
                    <th className="px-6 py-6 text-center text-lg font-semibold">Premium</th>
                    <th className="px-6 py-6 text-center text-lg font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{feature.name}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{feature.basic}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{feature.premium}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{feature.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pricing <span className="text-amber-600">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our pricing and plans.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
              },
              {
                question: 'Are there any hidden fees?',
                answer: 'No hidden fees. Our pricing is completely transparent. You only pay the monthly subscription fee and standard exchange rates.'
              },
              {
                question: 'What happens if I exceed my transfer limits?',
                answer: 'If you exceed your plan\'s transfer limits, we\'ll notify you and offer options to upgrade your plan or process the transaction with standard rates.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll refund your subscription fee.'
              },
              {
                question: 'Is there a free trial for paid plans?',
                answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start your trial.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              Need a <span className="text-yellow-300">Custom Solution</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-amber-100">
              For high-volume transactions or unique business requirements, our enterprise solutions are designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                Contact Sales
              </Link>
              <Link href="/faq" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-amber-600 rounded-lg text-lg font-semibold transition-colors">
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}