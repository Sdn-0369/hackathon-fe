import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
    
      <div className="flex-grow py-12 px-6 mb-0">
        <div className="mt-12"></div>

        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
     
            <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">We're Here to Help You!</h2>
              <p className="text-lg mb-6">
                At <span className="font-semibold">Workwise</span>, we believe in the power of connection and collaboration.
                Whether you're a seasoned buyer, a dedicated vendor, or just curious about what we offer, our team is
                always ready to assist you.
              </p>
            </div>

   
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-blue-700 text-xl" />
                  <div>
                    <p className="font-medium text-gray-800">Office Location</p>
                    <p className="text-gray-600">
                      Workwise, Suite no. 801, Synergy Business Park, ITT Bhatti, Hanuman Tekdi, Goregaon, Mumbai,
                      Maharashtra 400063
                    </p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <FaEnvelope className="text-blue-700 text-xl" />
                  <div>
                    <p className="font-medium text-gray-800">Email Address</p>
                    <p className="text-gray-600">hello@letsworkwise.com</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-blue-700 text-xl" />
                  <div>
                    <p className="font-medium text-gray-800">Contact Number</p>
                    <p className="text-gray-600">+91 9930787798</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          <div className="p-8 mt-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
            <form>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-yellow-400 text-black font-medium py-2 px-6 rounded-md shadow-lg hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
