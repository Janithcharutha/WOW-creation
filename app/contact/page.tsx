'use client';
import React from 'react';
import Navbar from '../components/navbar';



export default function ContactPage() {
  return (
    <section className="py-12 bg-gray-50">
        <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <div className="border-t-2 border-gray-200 w-24 mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                <p className="text-gray-600">077 927 9067</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Email</h3>
                <p className="text-gray-600">wowcreation11@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">TikTok</h3>
                <p className="text-gray-600">
                  <a
                    href="https://tiktok.com/@wowcreation0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    tiktok.com/@wowcreation0
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">WhatsApp</h3>
                <p className="text-gray-600">
                  <a
                    href="https://wa.me/94718809058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +94 71 880 9058
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Find Us on the Map
          </h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757686!2d79.8534764153285!3d6.921668220401725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593b7c7b3b3d%3A0x3b7c7b3b3b3b3b3d!2sGavi%20Street%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1621234567890!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}