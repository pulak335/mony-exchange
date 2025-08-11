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
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right money exchange solution for your needs. Whether you're an individual, business, or enterprise, we have you covered.
          </p>
        </motion.div>

        {/* Product Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Product Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover a suite of financial tools designed to simplify your money exchange needs. From personal transfers to enterprise solutions, we offer secure, efficient, and transparent services.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-600">Send and receive money across borders with ease, supporting over 100 currencies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure Transactions</h3>
                <p className="text-gray-600">State-of-the-art encryption and fraud prevention ensure your funds are always safe.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated support team is available around the clock to assist you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`rounded-xl overflow-hidden shadow-lg border ${product.popular ? 'border-primary bg-primary-50' : 'border-gray-200 bg-white'} relative flex flex-col h-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {product.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 rounded-bl-lg font-medium text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">{product.price}</p>
                </div>
                <ul className="mb-8 space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`mt-auto block w-full py-4 px-4 rounded-lg text-center font-semibold text-lg transition duration-300 ${product.popular ? 'bg-primary hover:bg-primary-700 text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                >
                  {product.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Enhance Your Experience with Add-ons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Tailor your money exchange solution with powerful add-ons designed to meet specific needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">API Access</h3>
                <p className="text-gray-600">Integrate our services directly into your applications.</p>
              </div>
              <div className="p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Dedicated Account Manager</h3>
                <p className="text-gray-600">Personalized support for high-volume users.</p>
              </div>
              <div className="p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                <p className="text-gray-600">Gain deeper insights into your transaction data.</p>
              </div>
              <div className="p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Priority Processing</h3>
                <p className="text-gray-600">Faster transaction times for urgent transfers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Currency Alerts',
                description: 'Get notified when exchange rates reach your target level.',
              },
              {
                title: 'Recurring Transfers',
                description: 'Set up automatic transfers on a schedule that works for you.',
              },
              {
                title: 'Multi-Currency Wallet',
                description: 'Hold multiple currencies in your account for future exchanges.',
              },
              {
                title: 'Market Analysis',
                description: 'Access expert insights and forecasts for major currency pairs.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'How do I get started with a money exchange account?',
                answer: 'Getting started is easy! Simply click on the "Get Started" button, fill out our registration form, verify your identity, and you can begin exchanging currencies right away.',
              },
              {
                question: 'What currencies do you support?',
                answer: 'We support over 50 major and exotic currencies, including USD, EUR, GBP, JPY, AUD, CAD, CHF, and many more. Check our full list of supported currencies in your account dashboard.',
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
                className="bg-white rounded-lg shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-blue-600 hover:text-blue-800 font-medium">
              View all FAQs
            </Link>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-blue-600 text-white rounded-xl p-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to start exchanging?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Join thousands of satisfied customers who trust our service for their currency exchange needs.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300">
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}