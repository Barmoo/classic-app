import React from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaUserCheck, FaExclamationTriangle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingCart, FaCreditCard } from 'react-icons/fa'

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 pt-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center">
              <FaGavel className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using BGG Classics services. By using our services, you agree to be bound by these terms.
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
                <FaUserCheck className="text-purple-600" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to BGG Classics! These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you do not agree with any part of these terms, then you may not access or use our services.
              </p>
            </section>

            {/* Definitions */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Definitions</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-600">
                  <li><strong>"Company"</strong> refers to BGG Classics</li>
                  <li><strong>"Service"</strong> refers to our website, products, and related services</li>
                  <li><strong>"User"</strong> refers to anyone who accesses or uses our Service</li>
                  <li><strong>"Products"</strong> refers to coconut oil, coconut snacks, beauty accessories, and related items</li>
                  <li><strong>"Account"</strong> refers to your user account on our platform</li>
                </ul>
              </div>
            </section>

            {/* User Accounts */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Account Creation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To make purchases, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Account Termination</h3>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.
              </p>
            </section>

            {/* Products and Orders */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaShoppingCart className="text-purple-600" />
                Products and Orders
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Product Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide accurate product descriptions, images, and pricing. However:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Product colors may vary due to monitor settings</li>
                <li>We reserve the right to correct pricing errors</li>
                <li>Product availability is subject to change</li>
                <li>We may limit quantities on certain products</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Order Processing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you place an order:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>You make an offer to purchase products at the listed price</li>
                <li>We reserve the right to accept or decline your order</li>
                <li>Orders are processed after payment confirmation</li>
                <li>You will receive order confirmation via email</li>
                <li>We may contact you for additional verification</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Shipping and Delivery</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shipping terms:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Risk of loss transfers to you upon delivery</li>
                <li>You are responsible for providing accurate delivery information</li>
                <li>Additional charges may apply for remote locations</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaCreditCard className="text-purple-600" />
                Payment Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment obligations:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>All prices are in Ghana Cedis (GHC) unless otherwise stated</li>
                <li>Payment is required at the time of purchase</li>
                <li>We accept major credit cards and approved payment methods</li>
                <li>You authorize us to charge your payment method for all fees</li>
                <li>You are responsible for all applicable taxes</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            {/* Returns and Refunds */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Returns and Refunds</h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Return Policy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We want you to be satisfied with your purchase. Our return policy includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Returns accepted within 30 days of delivery</li>
                <li>Products must be in original condition and packaging</li>
                <li>Perishable items and opened consumables cannot be returned</li>
                <li>Return shipping costs may apply</li>
                <li>Custom or personalized items are non-returnable</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Refund Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Approved refunds will be processed within 5-10 business days to your original payment method. Shipping charges are non-refundable unless the return is due to our error.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on our website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Text, graphics, logos, and images</li>
                <li>Software and source code</li>
                <li>Trademarks and trade names</li>
                <li>Product descriptions and specifications</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Are the property of BGG Classics or our licensors and are protected by copyright and intellectual property laws. You may not use, reproduce, or distribute this content without our written permission.
              </p>
            </section>

            {/* Prohibited Uses */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaExclamationTriangle className="text-red-500" />
                Prohibited Uses
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use our Service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>For any unlawful purpose or prohibited activity</li>
                <li>To violate any laws or regulations</li>
                <li>To transmit harmful or malicious code</li>
                <li>To collect user information without consent</li>
                <li>To impersonate others or provide false information</li>
                <li>To interfere with website security or functionality</li>
                <li>To engage in fraudulent activities</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimers</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>IMPORTANT:</strong> Our products and services are provided "as is" without warranties of any kind, either express or implied.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We disclaim all warranties, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, reliability, or completeness of information</li>
                <li>Uninterrupted or error-free service</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, BGG Classics shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages exceeding the amount you paid for products</li>
                <li>Events beyond our reasonable control</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by the laws of Ghana. Any disputes arising from these Terms or your use of our Service will be subject to the jurisdiction of the courts of Ghana.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting an updated version on our website. Continued use of our Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-600" />
                  <span className="text-gray-700">legal@bggclassics.com</span>
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
              to="/privacy-policy" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Privacy Policy
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

export default TermsOfService
