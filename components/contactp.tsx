'use client';
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-100 ">
      <section className="w-full py-12">
        <div className="w-full px-7">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
            Contact Us
            <br />24/7 Phone & Email Support
          </h1>
          <div className="border-t-4 mb-4 border-[#fdd302] w-24 mx-auto "></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
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
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div className="bg-white p-6 rounded-lg shadow-md w-full">
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
        </div>
      </section>
    </div>
  );
}
