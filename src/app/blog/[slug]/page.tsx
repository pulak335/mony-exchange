'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Sample blog posts data (replace with actual data fetching from a CMS/API)
const blogPosts = [
  {
    slug: 'understanding-exchange-rates',
    title: 'Understanding Exchange Rates: A Beginner\'s Guide',
    date: 'October 26, 2023',
    author: 'John Doe',
    category: 'Guides',
    image: '/images/blog/exchange-rates.jpg',
    content: `
      <p>Exchange rates can seem complex, but understanding them is crucial for anyone dealing with international money transfers. Simply put, an exchange rate is the value of one country's currency in relation to another country's currency.</p>
      <p>For example, if the exchange rate between USD and EUR is 1 USD = 0.90 EUR, it means that one US dollar can be exchanged for 0.90 Euros. These rates are constantly fluctuating due to various economic and geopolitical factors.</p>
      <h3>Factors Influencing Exchange Rates</h3>
      <p>Several key factors influence exchange rates:</p>
      <ul>
        <li><strong>Interest Rates:</strong> Higher interest rates tend to attract foreign investment, increasing demand for the domestic currency and thus its value.</li>
        <li><strong>Inflation:</strong> Countries with consistently lower inflation rates tend to see an appreciation in their currency value.</li>
        <li><strong>Current Account Deficits:</strong> A large deficit indicates a country is spending more on foreign trade than it is earning, which can devalue its currency.</li>
        <li><strong>Public Debt:</strong> High public debt can lead to inflation and a lack of confidence in the economy, negatively impacting the currency.</li>
        <li><strong>Terms of Trade:</strong> If a country's export prices rise faster than its import prices, its terms of trade improve, leading to higher revenue and increased demand for its currency.</li>
        <li><strong>Political Stability & Economic Performance:</strong> Stable political environments and strong economic performance generally attract foreign investment, strengthening the currency.</li>
      </ul>
      <h3>How to Get the Best Exchange Rate</h3>
      <p>When exchanging money, it's important to look beyond just the headline rate. Consider:</p>
      <ol>
        <li><strong>Compare Providers:</strong> Different banks and money transfer services offer varying rates and fees. Use comparison tools to find the best deal.</li>
        <li><strong>Understand Fees:</strong> Some services offer seemingly good rates but hide high fees. Always check the total cost of your transaction.</li>
        <li><strong>Timing:</strong> If possible, monitor exchange rate trends and transfer when the rate is favorable.</li>
        <li><strong>Avoid Airport Exchange:</strong> These typically offer the worst rates due to convenience.</li>
      </ol>
      <p>By keeping these factors in mind, you can make more informed decisions and get more value out of your international money transfers.</p>
    `,
  },
  {
    slug: 'secure-money-transfers',
    title: '5 Tips for Secure International Money Transfers',
    date: 'October 20, 2023',
    author: 'Jane Smith',
    category: 'Security',
    image: '/images/blog/secure-transfer.jpg',
    content: `
      <p>Sending money internationally requires careful consideration, especially when it comes to security. Here are five essential tips to ensure your funds reach their destination safely and securely.</p>
      <h3>1. Choose a Reputable Service Provider</h3>
      <p>The first and most crucial step is to select a money transfer service with a strong reputation for security and reliability. Look for providers that are:</p>
      <ul>
        <li><strong>Licensed and Regulated:</strong> Ensure they are authorized by financial authorities in the countries they operate.</li>
        <li><strong>Transparent with Fees and Rates:</strong> A trustworthy provider will clearly display all costs upfront.</li>
        <li><strong>Well-Reviewed:</strong> Check independent review sites and customer testimonials.</li>
      </ul>
      <h3>2. Verify Recipient Details Carefully</h3>
      <p>A common cause of failed or misdirected transfers is incorrect recipient information. Double-check:</p>
      <ul>
        <li>Full legal name of the recipient.</li>
        <li>Correct bank account number and SWIFT/BIC code for bank transfers.</li>
        <li>Accurate address and contact information.</li>
      </ul>
      <p>Even a single digit error can lead to significant delays or loss of funds.</p>
      <h3>3. Use Strong, Unique Passwords and Two-Factor Authentication (2FA)</h3>
      <p>Protect your online accounts with robust security measures:</p>
      <ul>
        <li><strong>Strong Passwords:</strong> Use a combination of uppercase and lowercase letters, numbers, and symbols. Avoid easily guessable information.</li>
        <li><strong>Unique Passwords:</strong> Do not reuse passwords across different services.</li>
        <li><strong>Enable 2FA:</strong> This adds an extra layer of security, requiring a second form of verification (like a code from your phone) in addition to your password.</li>
      </ul>
      <h3>4. Be Wary of Scams and Phishing Attempts</h3>
      <p>Scammers often target individuals making money transfers. Be vigilant:</p>
      <ul>
        <li><strong>Unsolicited Requests:</strong> Be suspicious of requests to send money to people you don't know, especially if they promise large returns or claim to be in an emergency.</li>
        <li><strong>Phishing Emails/Messages:</strong> Never click on suspicious links or download attachments from unknown senders. Always verify the sender's authenticity.</li>
        <li><strong>Too Good to Be True:</strong> If an offer seems too good to be true, it probably is.</li>
      </ul>
      <h3>5. Keep Records of Your Transactions</h3>
      <p>Maintain a detailed record of all your international money transfers. This includes:</p>
      <ul>
        <li>Transaction ID or reference number.</li>
        <li>Date and time of transfer.</li>
        <li>Amount sent and received.</li>
        <li>Recipient details.</li>
        <li>Any communication with the service provider regarding the transfer.</li>
      </ul>
      <p>These records can be invaluable if you need to track a transfer, dispute a transaction, or for tax purposes.</p>
      <p>By following these tips, you can significantly reduce the risks associated with international money transfers and ensure your funds arrive safely.</p>
    `,
  },
  {
    slug: 'future-of-fintech',
    title: 'The Future of FinTech: Innovations in Money Exchange',
    date: 'October 15, 2023',
    author: 'Alex Chen',
    category: 'Technology',
    image: '/images/blog/fintech-future.jpg',
    content: `
      <p>The financial technology (FinTech) landscape is evolving rapidly, and the money exchange sector is at the forefront of this transformation. Driven by technological advancements and changing consumer demands, the future of money exchange promises greater efficiency, accessibility, and security.</p>
      <h3>Blockchain and Cryptocurrencies</h3>
      <p>Perhaps the most talked-about innovation, blockchain technology and cryptocurrencies are poised to revolutionize cross-border payments. By enabling decentralized, transparent, and immutable transactions, blockchain can significantly reduce transaction times and costs, bypassing traditional banking intermediaries.</p>
      <ul>
        <li><strong>Faster Settlements:</strong> Transactions can be settled in minutes, not days.</li>
        <li><strong>Lower Fees:</strong> Reduced reliance on intermediaries can cut down transfer costs.</li>
        <li><strong>Increased Transparency:</strong> All transactions are recorded on a public ledger.</li>
      </ul>
      <p>While regulatory challenges remain, the potential for cryptocurrencies like stablecoins to facilitate instant, low-cost international transfers is immense.</p>
      <h3>Artificial Intelligence (AI) and Machine Learning (ML)</h3>
      <p>AI and ML are already being deployed to enhance various aspects of money exchange:</p>
      <ul>
        <li><strong>Fraud Detection:</strong> AI algorithms can identify suspicious patterns and anomalies in transactions, significantly improving security.</li>
        <li><strong>Personalized Services:</strong> ML can analyze user behavior to offer tailored exchange rate alerts and product recommendations.</li>
        <li><strong>Automated Customer Support:</strong> AI-powered chatbots can handle routine inquiries, freeing up human agents for more complex issues.</li>
      </ul>
      <h3>Open Banking and APIs</h3>
      <p>Open banking initiatives, which allow third-party financial service providers to access customer banking data (with consent) via APIs, are fostering a more interconnected and competitive ecosystem. This enables:</p>
      <ul>
        <li><strong>Seamless Integrations:</strong> Money exchange services can integrate directly with banking apps and other financial platforms.</li>
        <li><strong>Enhanced User Experience:</strong> Customers can manage their finances and initiate transfers more easily from a single interface.</li>
        <li><strong>New Product Development:</strong> APIs facilitate the creation of innovative financial products and services.</li>
      </ul>
      <h3>Real-time Payments and Instant Transfers</h3>
      <p>The demand for instant gratification extends to money transfers. Many countries are implementing real-time payment systems that allow funds to be transferred and received almost instantaneously, 24/7. This reduces the need for traditional batch processing and provides immediate liquidity.</p>
      <h3>Biometrics and Advanced Security</h3>
      <p>Beyond passwords, biometrics (fingerprint, facial recognition) are becoming more common for authenticating transactions, offering both convenience and enhanced security. Coupled with advanced encryption techniques, these measures are making money transfers safer than ever.</p>
      <p>The future of money exchange is bright, characterized by continuous innovation aimed at making international transfers faster, cheaper, more secure, and more accessible for everyone.</p>
    `,
  },
];

export default function BlogPost() {
  const params = useParams();
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-lg text-gray-600">The blog post you are looking for does not exist.</p>
        <Link href="/news" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="text-gray-600 text-sm mb-6">
            <span>By {post.author}</span> &bull; <span>{post.date}</span> &bull; <span>{post.category}</span>
          </div>
          {post.image && (
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover rounded-lg mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          )}
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-10 text-center">
            <Link href="/news" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
              Back to All News
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  );
}