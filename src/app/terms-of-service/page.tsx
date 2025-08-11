'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using Our Service.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 text-gray-700 leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to Money Exchange. These Terms of Service (&quot;Terms&quot;), together with our Privacy Policy,
              govern your access to and use of the Money Exchange website and services (collectively, the &quot;Service&quot;).
              By accessing or using the Service, you agree to be bound by these Terms.
              If you disagree with any part of the terms then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Accounts</h2>
            <p>
              When you create an account with us, you must provide us with information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password,
              whether your password is with our Service or a third-party service.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p>
              The Service and its original content, features and functionality are and will remain the exclusive property of Money Exchange and its licensors.
              The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Money Exchange.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Money Exchange.
            </p>
            <p>
              Money Exchange has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
              You further acknowledge and agree that Money Exchange shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation Of Liability</h2>
            <p>
              In no event shall Money Exchange, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
              The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            <p>
              Money Exchange its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
              If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
              What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>By email: support@moneyexchange.com</li>
              <li>By visiting this page on our website: <a href="/contact" className="text-blue-600 hover:underline">/contact</a></li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}