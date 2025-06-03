import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Contact BBG Classics</h1>
      <p className="text-gray-700 mb-8 text-center max-w-xl">
        We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to share your feedback, our team is ready to help.
      </p>
      <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="you@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="4"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center text-gray-600">
        <p>Email: <a href="mailto:info@bbgclassics.com" className="text-green-700 underline">info@bbgclassics.com</a></p>
        <p>Phone: <a href="tel:+233249130774" className="text-green-700 underline">+233 249 130 774</a></p>
        <p>Address: 123 BBG Classics Street, Accra, Ghana</p>
      </div>
    </div>
  )
}

export default Contact