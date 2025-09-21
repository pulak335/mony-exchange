'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'Personal Exchange',
      description: 'Perfect for individuals who need to exchange currencies for travel, online shopping, or sending money to family abroad.',
      features: [
        'Competitive exchange rates',
        'No hidden fees',
        'Fast processing',
        'Secure transactions',
        '24/7 customer support',
      ],
      price: 'No monthly fee',
      cta: 'Get Started',
      popular: false,
    },
    {
      id: 2,
      title: 'Business Exchange',
      description: 'Designed for businesses that need to make international payments, manage multiple currencies, or pay overseas employees.',
      features: [
        'Volume discounts',
        'Multi-currency accounts',
        'API integration',
        'Dedicated account manager',
        'Detailed reporting',
      ],
      price: 'From $29.99/month',
      cta: 'Contact Sales',
      popular: true,
    },
    {
      id: 3,
      title: 'Enterprise Solutions',
      description: 'Custom solutions for large organizations with complex international payment needs and high transaction volumes.',
      features: [
        'Custom exchange rates',
        'Bulk payment processing',
        'Advanced security features',
        'Integration with ERP systems',
        'Regulatory compliance support',
      ],
      price: 'Custom pricing',
      cta: 'Request Demo',
      popular: false,
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
              Our <span className="text-yellow-300">Products</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
              Choose the right money exchange solution for your needs. Whether you&apos;re an individual, business, or enterprise, we have you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                View Products
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-amber-600 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Product <span className="text-amber-600">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a suite of financial tools designed to simplify your money exchange needs. From personal transfers to enterprise solutions, we offer secure, efficient, and transparent services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Global Reach',
                description: 'Send and receive money across borders with ease, supporting over 150 currencies.',
                icon: '🌍',
              },
              {
                title: 'Secure Transactions',
                description: 'State-of-the-art encryption and fraud prevention ensure your funds are always safe.',
                icon: '🔒',
              },
              {
                title: '24/7 Support',
                description: 'Our dedicated support team is available around the clock to assist you.',
                icon: '💬',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                  product.popular 
                    ? 'ring-4 ring-amber-500 ring-opacity-50 scale-105 bg-gradient-to-br from-white to-amber-50' 
                    : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: product.popular ? -12 : -8 }}
              >
                {product.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-6 rounded-bl-2xl font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <div className="mb-8">
                    <p className="text-4xl font-bold text-amber-600 mb-2">{product.price}</p>
                  </div>
                  <ul className="mb-8 space-y-4">
                    {product.features.map((feature, i) => (
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
                    className={`mt-auto block w-full py-4 px-6 rounded-xl text-center font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                      product.popular 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {product.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
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
              Enhance Your Experience with <span className="text-amber-600">Add-ons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailor your money exchange solution with powerful add-ons designed to meet specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'API Access',
                description: 'Integrate our services directly into your applications.',
                icon: '🔌',
              },
              {
                title: 'Dedicated Account Manager',
                description: 'Personalized support for high-volume users.',
                icon: '👨‍💼',
              },
              {
                title: 'Advanced Analytics',
                description: 'Gain deeper insights into your transaction data.',
                icon: '📊',
              },
              {
                title: 'Priority Processing',
                description: 'Faster transaction times for urgent transfers.',
                icon: '⚡',
              },
            ].map((addon, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{addon.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{addon.title}</h3>
                <p className="text-gray-600 leading-relaxed">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional <span className="text-amber-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover additional services that can enhance your money exchange experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Currency Alerts',
                description: 'Get notified when exchange rates reach your target level.',
                icon: '🔔',
              },
              {
                title: 'Recurring Transfers',
                description: 'Set up automatic transfers on a schedule that works for you.',
                icon: '🔄',
              },
              {
                title: 'Multi-Currency Wallet',
                description: 'Hold multiple currencies in your account for future exchanges.',
                icon: '💳',
              },
              {
                title: 'Market Analysis',
                description: 'Access expert insights and forecasts for major currency pairs.',
                icon: '📈',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
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
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our products and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How do I get started with a money exchange account?',
                answer: 'Getting started is easy! Simply click on the "Get Started" button, fill out our registration form, verify your identity, and you can begin exchanging currencies right away.',
              },
              {
                question: 'What currencies do you support?',
                answer: 'We support over 150 major and exotic currencies, including USD, EUR, GBP, JPY, AUD, CAD, CHF, and many more. Check our full list of supported currencies in your account dashboard.',
              },
              {
                question: 'How long do transfers take?',
                answer: 'Most transfers are processed within 1-2 business days. Premium and Business accounts may have access to faster processing times, sometimes as quick as same-day transfers.',
              },
              {
                question: 'Is there a limit to how much I can exchange?',
                answer: 'Personal accounts have standard limits that can be increased with additional verification. Business and Enterprise accounts have higher or custom limits based on your needs.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
          
          <div className="text-center mt-12">
            <Link href="/faq" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors shadow-lg">
              View All FAQs
            </Link>
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
              Ready to Start <span className="text-yellow-300">Exchanging</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-amber-100">
              Join thousands of satisfied customers who trust our service for their currency exchange needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                Contact Us Today
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