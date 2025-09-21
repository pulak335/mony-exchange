'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Money Exchange Launches New Mobile App for Seamless Transfers',
      date: 'October 26, 2023',
      category: 'Product Update',
      image: '/news/mobile-app.jpg', // Placeholder image
      excerpt: 'Our new mobile application is designed to provide an even more convenient and faster way to manage your international money transfers on the go.',
      slug: 'new-mobile-app',
    },
    {
      id: 2,
      title: 'Understanding Global Currency Fluctuations in Q4 2023',
      date: 'October 20, 2023',
      category: 'Market Analysis',
      image: '/news/market-analysis.jpg', // Placeholder image
      excerpt: 'Our expert analysts break down the key factors influencing major currency pairs and what to expect in the coming months.',
      slug: 'currency-fluctuations-q4-2023',
    },
    {
      id: 3,
      title: 'Money Exchange Partners with Leading Banks to Expand Global Reach',
      date: 'October 15, 2023',
      category: 'Partnership',
      image: '/news/partnership.jpg', // Placeholder image
      excerpt: 'We are excited to announce new strategic partnerships that will allow us to offer even more competitive rates and expand our service to new regions.',
      slug: 'new-bank-partnerships',
    },
    {
      id: 4,
      title: 'Tips for Secure Online Money Transfers',
      date: 'October 10, 2023',
      category: 'Security',
      image: '/news/security-tips.jpg', // Placeholder image
      excerpt: 'Learn how to protect yourself from fraud and ensure your online money transfers are always safe and secure with our comprehensive guide.',
      slug: 'secure-transfers-tips',
    },
    {
      id: 5,
      title: 'The Future of Digital Currencies in International Trade',
      date: 'October 05, 2023',
      category: 'Industry Trends',
      image: '/news/digital-currencies.jpg', // Placeholder image
      excerpt: 'An in-depth look at how blockchain and digital currencies are set to revolutionize the landscape of cross-border transactions.',
      slug: 'future-of-digital-currencies',
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest news, market insights, and company announcements from Money Exchange.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 w-full">
                {/* Placeholder for article image */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                  Article Image
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date} &bull; {article.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href={`/news/${article.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination (Placeholder) */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">Previous</button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">2</button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">3</button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">Next</button>
          </nav>
        </motion.div>
      </div>
    </div>
  );
}