import React from 'react'
import { Link } from 'react-router-dom'
import { FaCookie, FaCog, FaChartBar, FaAd, FaEnvelope, FaPhone, FaMapMarkerAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa'

const CookiePolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 pt-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center">
              <FaCookie className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how BGG Classics uses cookies and similar technologies to enhance your browsing experience and improve our services.
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
                <FaCookie className="text-purple-600" />
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and enabling certain website functionality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy explains how BGG Classics uses cookies and similar tracking technologies on our website, and how you can manage your cookie preferences.
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Cookies We Use</h2>
              
              {/* Essential Cookies */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaCog className="text-blue-600 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-700">Essential Cookies</h3>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">Required</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These cookies are necessary for the website to function properly. They enable core functionality such as:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Security and authentication</li>
                  <li>Shopping cart functionality</li>
                  <li>Form submission and data processing</li>
                  <li>Load balancing and website performance</li>
                  <li>Remembering your privacy preferences</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Essential cookies cannot be disabled as they are required for the website to function.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaChartBar className="text-green-600 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-700">Analytics Cookies</h3>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Optional</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Number of visitors and page views</li>
                  <li>Time spent on different pages</li>
                  <li>Popular content and products</li>
                  <li>Traffic sources and user behavior patterns</li>
                  <li>Website performance and error tracking</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Third-party services:</strong> We may use Google Analytics, Hotjar, or similar services for analytics.
                  </p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaCog className="text-purple-600 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-700">Functional Cookies</h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Optional</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These cookies enhance your browsing experience by remembering your preferences:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Language and region preferences</li>
                  <li>Recently viewed products</li>
                  <li>Wishlist and favorites</li>
                  <li>Display preferences (theme, layout)</li>
                  <li>Form data and user preferences</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaAd className="text-orange-600 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-700">Marketing Cookies</h3>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Optional</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These cookies are used to deliver personalized advertisements and track marketing campaign effectiveness:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Personalized product recommendations</li>
                  <li>Targeted advertising on other websites</li>
                  <li>Social media integration</li>
                  <li>Email marketing effectiveness</li>
                  <li>Conversion tracking</li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Third-party services:</strong> We may use Facebook Pixel, Google Ads, or similar advertising platforms.
                  </p>
                </div>
              </div>
            </section>

            {/* How Long Cookies Last */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How Long Do Cookies Last?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Session Cookies</h3>
                  <p className="text-blue-700 text-sm">
                    These temporary cookies are deleted when you close your browser. They're used for essential website functionality during your visit.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Persistent Cookies</h3>
                  <p className="text-green-700 text-sm">
                    These cookies remain on your device for a set period (usually 1-24 months) and remember your preferences across visits.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Some cookies on our website are set by third-party services we use to enhance functionality:
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Google Analytics</h4>
                  <p className="text-sm text-gray-600">Used to track website usage and performance metrics.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Social Media Platforms</h4>
                  <p className="text-sm text-gray-600">Enable social sharing and embedded content from Facebook, Instagram, etc.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Payment Processors</h4>
                  <p className="text-sm text-gray-600">Secure payment processing and fraud prevention.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Customer Support</h4>
                  <p className="text-sm text-gray-600">Live chat functionality and customer service tools.</p>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaToggleOn className="text-purple-600" />
                Managing Your Cookie Preferences
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Cookie Settings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can manage your cookie preferences at any time. Here are your options:
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">Current Cookie Preferences</h4>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Manage Settings
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Essential Cookies</span>
                    <FaToggleOn className="text-green-500 text-xl" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Analytics Cookies</span>
                    <FaToggleOn className="text-green-500 text-xl" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Functional Cookies</span>
                    <FaToggleOff className="text-gray-400 text-xl" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Marketing Cookies</span>
                    <FaToggleOff className="text-gray-400 text-xl" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Browser Settings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can also control cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Block all cookies or only third-party cookies</li>
                <li>Delete existing cookies from your device</li>
                <li>Set up notifications when cookies are being sent</li>
                <li>Browse in private/incognito mode</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
                </p>
              </div>
            </section>

            {/* Browser Instructions */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Browser-Specific Instructions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Google Chrome</h4>
                    <p className="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Mozilla Firefox</h4>
                    <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                    <p className="text-sm text-gray-600">Preferences → Privacy → Cookies and website data</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Microsoft Edge</h4>
                    <p className="text-sm text-gray-600">Settings → Site permissions → Cookies and site data</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates to Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-600" />
                  <span className="text-gray-700">cookies@bggclassics.com</span>
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
              to="/terms-of-service" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Terms of Service
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

export default CookiePolicy
