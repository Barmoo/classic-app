import React from 'react'
import { Link } from 'react-router-dom'
import { FaShieldAlt, FaUserShield, FaLock, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 pt-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center">
              <FaShieldAlt className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how BGG Classics collects, uses, and protects your personal information.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: June 13, 2025
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaUserShield className="text-purple-600" />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BGG Classics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make purchases from us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personally identifiable information, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Account credentials (username, password)</li>
                <li>Demographic information (age, gender, preferences)</li>
                <li>Communication history with our customer service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Non-Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may also collect non-personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address and location data</li>
                <li>Website usage patterns and preferences</li>
                <li>Device information</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Provide customer service and support</li>
                <li>Send you important updates about your orders</li>
                <li>Improve our products and services</li>
                <li>Personalize your shopping experience</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaLock className="text-purple-600" />
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing systems</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>Secure data storage and backup systems</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience. These technologies help us:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You can control cookie settings through your browser preferences. For more details, please see our <Link to="/cookie-policy" className="text-purple-600 hover:text-purple-800 underline">Cookie Policy</Link>.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request restriction of data processing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-600" />
                  <span className="text-gray-700">privacy@bggclassics.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-purple-600" />
                  <span className="text-gray-700">+233 (0) 24 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-purple-600" />
                  <span className="text-gray-700">BGG Classics, Accra, Ghana</span>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/terms-of-service" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Terms of Service
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/cookie-policy" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Cookie Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
