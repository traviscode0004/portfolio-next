'use client';

import { FormEvent, useState } from 'react';

export default function ContactSection() {
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccessMessage('Thank You!');
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h5 className="text-center text-reactColor text-3xl mb-12 font-bold">
          Drop me a line <i className="fas fa-fish"></i>
        </h5>

        {/* Card Wrapper */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-reactColor"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-reactColor"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-reactColor"
                placeholder="Your message here..."
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-reactColor text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
              <button
                type="reset"
                className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </form>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-6 text-center text-green-600 font-semibold">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
