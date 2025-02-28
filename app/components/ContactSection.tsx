'use client';

import { FormEvent, useEffect, useState } from 'react';
import styles from '../styles/ContactSection.module.css';
import { setupScrollAnimations } from '../utils/scrollAnimations';

export default function ContactSection() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for spinner

  useEffect(() => {
    setupScrollAnimations(); // Initialize the scroll animations on component mount
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true); // Start spinner

    // Grab form values
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for reaching out! Your message has been sent.');
        setErrorMessage('');
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setSuccessMessage('');
        setErrorMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      setSuccessMessage('');
      setErrorMessage('There was an error sending your message. Please try again later.');
    } finally {
      setLoading(false); // Stop spinner
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-700">
      <div className="container mx-auto px-4">
        <h5
          className={`
            text-center text-reactColor text-3xl mb-12 font-bold
            ${styles.fadeDown}
          `}
          data-scroll="out"
        >
          Drop me a line <i className="fas fa-fish"></i>
        </h5>

        <div
          className={`
            bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto 
            hover:shadow-xl transition-shadow duration-300
            ${styles.fadeUp}
          `}
          data-scroll="out"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-reactColor"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-reactColor"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-reactColor text-gray-800 placeholder-gray-500"
                placeholder="Your message here..."
                required
              />
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="resumeBtn flex items-center justify-center space-x-2"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <div
                    className="loader border-t-transparent border-white border-4 w-5 h-5 rounded-full animate-spin"
                    aria-label="Loading"
                  ></div>
                ) : (
                  'Send'
                )}
              </button>
              <button
                type="reset"
                className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </form>

          {successMessage && (
            <div className="mt-6 text-center text-green-600 font-semibold">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mt-6 text-center text-red-600 font-semibold">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
