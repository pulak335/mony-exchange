'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer (Frontend)',
      location: 'Remote / London, UK',
      type: 'Full-time',
      description: 'We are looking for a talented Senior Frontend Engineer to join our growing team and help build the next generation of our money exchange platform.',
      requirements: [
        '5+ years of experience with React/Next.js',
        'Strong proficiency in TypeScript, HTML, CSS',
        'Experience with state management libraries (e.g., Redux, Zustand)',
        'Familiarity with RESTful APIs and modern frontend build pipelines',
      ],
      responsibilities: [
        'Develop and maintain user-facing features using React and Next.js',
        'Collaborate with product, design, and backend teams',
        'Ensure the technical feasibility of UI/UX designs',
        'Optimize applications for maximum speed and scalability',
      ],
    },
    {
      id: 2,
      title: 'Financial Analyst',
      location: 'New York, USA',
      type: 'Full-time',
      description: 'Join our finance team to analyze market trends, assess financial risks, and contribute to our strategic financial planning.',
      requirements: [
        'Bachelor\'s degree in Finance, Economics, or related field',
        '3+ years of experience in financial analysis, preferably in FinTech',
        'Strong analytical and quantitative skills',
        'Proficiency in financial modeling and data analysis tools (e.g., Excel, SQL)',
      ],
      responsibilities: [
        'Conduct in-depth financial analysis and market research',
        'Prepare financial reports and presentations for management',
        'Monitor economic trends and regulatory changes',
        'Assist in budgeting and forecasting processes',
      ],
    },
    {
      id: 3,
      title: 'Customer Support Specialist',
      location: 'Remote / Dublin, Ireland',
      type: 'Full-time',
      description: 'Be the first point of contact for our customers, providing exceptional support and resolving inquiries related to our services.',
      requirements: [
        '2+ years of experience in customer service, ideally in a tech or finance environment',
        'Excellent communication and interpersonal skills',
        'Ability to empathize with customers and resolve issues efficiently',
        'Proficiency in multiple languages is a plus',
      ],
      responsibilities: [
        'Respond to customer inquiries via email, chat, and phone',
        'Troubleshoot and resolve customer issues promptly',
        'Educate customers on product features and best practices',
        'Document customer interactions and feedback',
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be a part of a dynamic and innovative team that is revolutionizing the money exchange industry.
          </p>
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Money Exchange?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: '🌍',
                title: 'Global Impact',
                description: 'Contribute to a platform that connects people and businesses across borders.',
              },
              {
                icon: '🌱',
                title: 'Growth Opportunities',
                description: 'We invest in our employees\' development with continuous learning and career advancement.',
              },
              {
                icon: '💡',
                title: 'Innovative Environment',
                description: 'Work with cutting-edge technology and solve challenging problems in FinTech.',
              },
              {
                icon: '🤝',
                title: 'Collaborative Culture',
                description: 'Join a supportive team that values teamwork, respect, and open communication.',
              },
              {
                icon: '⚖️',
                title: 'Work-Life Balance',
                description: 'We promote a healthy work-life balance with flexible working arrangements.',
              },
              {
                icon: '💰',
                title: 'Competitive Benefits',
                description: 'Enjoy attractive compensation packages, health benefits, and more.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Openings */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Job Openings</h2>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-xl shadow-md p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{job.location} &bull; {job.type}</p>
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {job.responsibilities.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link 
                  href={`/careers/${job.id}`} 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  Apply Now
                </Link>
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
          <h2 className="text-2xl font-bold mb-4">Can't Find Your Role?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">We're always growing! Send us your resume, and we'll keep you in mind for future opportunities.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300">
            Submit Your Resume
          </Link>
        </motion.div>
      </div>
    </div>
  );
}