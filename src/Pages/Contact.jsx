import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPaperPlane, FaHeart, FaStar, FaQuestionCircle, FaHeadset, FaShoppingCart } from 'react-icons/fa'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'general',
        message: ''
      })
      alert('Thank you for your message! We\'ll get back to you soon.')
    }, 2000)
  }

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      detail: "+233 249 130 774",
      subtitle: "Mon-Fri 8AM-6PM",
      action: "tel:+233249130774",
      color: "text-purple-600"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      detail: "info@bbgclassics.com",
      subtitle: "We reply within 24hrs",
      action: "mailto:info@bbgclassics.com",
      color: "text-pink-600"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      detail: "+233 249 130 774",
      subtitle: "Quick responses",
      action: "https://wa.me/233249130774",
      color: "text-green-600"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      detail: "123 BBG Classics Street",
      subtitle: "Accra, Ghana",
      action: "#",
      color: "text-purple-600"
    }
  ]

  const contactCategories = [
    { icon: <FaQuestionCircle />, title: "General Inquiry", value: "general" },
    { icon: <FaShoppingCart />, title: "Order Support", value: "order" },
    { icon: <FaHeart />, title: "Product Information", value: "product" },
    { icon: <FaHeadset />, title: "Customer Service", value: "service" }
  ]

  const faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer standard shipping (3-5 days) and express shipping (1-2 days) across Ghana."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within Ghana only. International shipping coming soon!"
    },
    {
      question: "What's your return policy?",
      answer: "We offer 30-day returns on unopened products in original packaging."
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white pt-32 pb-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="text-pink-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              We're here to help you discover the perfect natural products for your lifestyle
            </p>
            <div className="flex items-center justify-center gap-2 text-pink-200">
              <FaStar className="text-yellow-300" />
              <span className="text-lg">Trusted by 10,000+ customers</span>
              <FaStar className="text-yellow-300" />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
        </div>

        {/* Contact Methods Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Multiple Ways To <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Connect</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose your preferred method of communication. We're available across multiple channels to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{method.detail}</p>
                <p className="text-sm text-gray-500">{method.subtitle}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Main Contact Form Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Send Us A Message</h3>
                <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="+233 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Category</label>
                  <div className="grid grid-cols-2 gap-3">
                    {contactCategories.map((category) => (
                      <label key={category.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={category.value}
                          checked={formData.category === category.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all duration-300 ${
                          formData.category === category.value 
                            ? 'border-purple-500 bg-purple-50 text-purple-700' 
                            : 'border-gray-200 hover:border-purple-300'
                        }`}>
                          {category.icon}
                          <span className="text-sm font-medium">{category.title}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Information Panel */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaClock className="text-purple-600" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-purple-200">
                    <span className="font-medium text-gray-700">Monday - Friday</span>
                    <span className="text-purple-600 font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-purple-200">
                    <span className="font-medium text-gray-700">Saturday</span>
                    <span className="text-purple-600 font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
                <p className="text-gray-600 mb-6">Stay connected for updates, tips, and exclusive offers!</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebook />, color: "bg-blue-600", href: "#" },
                    { icon: <FaInstagram />, color: "bg-pink-600", href: "#" },
                    { icon: <FaTwitter />, color: "bg-blue-400", href: "#" },
                    { icon: <FaWhatsapp />, color: "bg-green-600", href: "https://wa.me/233249130774" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`${social.color} text-white p-3 rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Natural Excellence?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made BGG Classics their trusted choice for premium natural products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/oil"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
              >
                Shop Coconut Products
              </a>
              <a
                href="/beauty"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Beauty Items
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
