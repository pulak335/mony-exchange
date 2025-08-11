'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/team/john-doe.jpg', // Placeholder image
      bio: 'John is the visionary behind Money Exchange, with over 15 years of experience in the financial technology sector. His passion for simplifying international payments led to the creation of this platform.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Chief Operating Officer',
      image: '/team/jane-smith.jpg', // Placeholder image
      bio: 'Jane oversees all operational aspects, ensuring seamless and efficient service delivery. Her expertise in logistics and customer satisfaction is invaluable.',
    },
    {
      id: 3,
      name: 'David Lee',
      role: 'Head of Technology',
      image: '/team/david-lee.jpg', // Placeholder image
      bio: 'David leads our innovative tech team, responsible for building and maintaining our secure and robust exchange platform. He is a strong advocate for cutting-edge solutions.',
    },
    {
      id: 4,
      name: 'Emily White',
      role: 'Head of Customer Success',
      image: '/team/emily-white.jpg', // Placeholder image
      bio: 'Emily is dedicated to ensuring our customers have the best experience. She leads the support team and is always looking for ways to improve user satisfaction.',
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Money Exchange</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide fast, secure, and transparent money exchange services to individuals and businesses worldwide.
          </p>
        </motion.div>

        {/* Our Story/Mission */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 mb-16 grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story & Mission</h2>
            <p className="text-gray-700 mb-4">
              Founded in 20XX, Money Exchange was born out of a desire to simplify the complex world of international money transfers. We saw a need for a service that was not only efficient and secure but also transparent about its fees and exchange rates.
            </p>
            <p className="text-gray-700">
              Our mission is to empower individuals and businesses by providing them with a reliable and cost-effective way to send and receive money across borders, fostering global connectivity and economic growth.
            </p>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            {/* Placeholder for an image related to mission/story */}
            <div className="absolute inset-0 bg-blue-400 flex items-center justify-center text-white text-xl font-semibold">
              Our Mission Image
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'We believe in clear and upfront communication about rates and fees, with no hidden costs.',
                icon: '💡',
              },
              {
                title: 'Security',
                description: 'Protecting your money and data is our top priority through advanced encryption and compliance.',
                icon: '🛡️',
              },
              {
                title: 'Efficiency',
                description: 'We strive for fast and seamless transactions, ensuring your money moves quickly and reliably.',
                icon: '⏱️',
              },
              {
                title: 'Customer Focus',
                description: 'Our users are at the heart of everything we do. We are committed to providing exceptional support.',
                icon: '❤️',
              },
              {
                title: 'Innovation',
                description: 'Continuously improving our technology and services to meet the evolving needs of our global customers.',
                icon: '🚀',
              },
              {
                title: 'Integrity',
                description: 'Operating with the highest ethical standards, building trust and long-term relationships.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-56 w-full">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                    {member.name}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-blue-600 text-white rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Growing Team!</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">We're always looking for passionate individuals to help us revolutionize money exchange.</p>
          <Link href="/careers" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300">
            View Openings
          </Link>
        </motion.div>
      </div>
    </div>
  );
}