import React from "react";
import { Link } from "react-router-dom"; 
import vendorsImage from "../assets/vendor_image.jpg"; 
import bgImage from "../assets/bg.jpg";
import pic from "../assets/2pic.jpg"; 
import Footer from "./Footer";

const ForVendors = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('/venindustry.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-extrabold mb-2">For Vendors</h1>
          <p className="text-sm">Home / For Vendors</p>
        </div>
      </div>


      <div className="flex-grow">

        <div className="w-full max-w-5xl px-6 py-12 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Unlock Your Business Potential with Workwise
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Key Benefits for Vendors
              </h3>
              <ul className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                <li className="mb-4">
                  <span className="text-yellow-500 font-bold">
                    Premium Opportunities:
                  </span>{" "}
                  Access high-quality leads and exclusive contracts with top
                  companies like ONGC and IOCL.
                </li>
                <li className="mb-4">
                  <span className="text-yellow-500 font-bold">
                    Effortless Quoting & Communication:
                  </span>{" "}
                  Submit quotes quickly and receive instant WhatsApp alerts.
                </li>
                <li className="mb-4">
                  <span className="text-yellow-500 font-bold">
                    Dedicated Vendor Success Manager:
                  </span>{" "}
                  Enjoy personalized support to ensure smooth operations.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src={vendorsImage}
                alt="Vendors"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>


        <div
          className="w-full bg-fixed bg-cover bg-center py-24"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {/* Card 1 */}
              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Explore Our Vendor Services
                </h3>
                <ul className="leading-relaxed text-gray-300 list-disc list-inside">
                  <li className="mb-2">
                    <span className="text-yellow-500 font-bold">
                      Exclusive Contracts:
                    </span>{" "}
                    Target high-value government and industrial projects.
                  </li>
                  <li className="mb-2">
                    <span className="text-yellow-500 font-bold">
                      High-Quality Leads:
                    </span>{" "}
                    Connect with serious buyers and decision-makers.
                  </li>
                </ul>
              </div>

  
              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Effortless Quoting & Communication
                </h3>
                <ul className="leading-relaxed text-gray-300 list-disc list-inside">
                  <li className="mb-2">
                    <span className="text-yellow-500 font-bold">
                      Quick Quote Submission:
                    </span>{" "}
                    Submit detailed quotes efficiently.
                  </li>
                  <li className="mb-2">
                    <span className="text-yellow-500 font-bold">
                      Instant Notifications:
                    </span>{" "}
                    Stay informed with real-time alerts.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Dedicated Vendor Success Manager
                </h3>
                <ul className="leading-relaxed text-gray-300 list-disc list-inside">
                  <li className="mb-2">
                    <span className="text-yellow-500 font-bold">
                      Personalized Support:
                    </span>{" "}
                    Get tailored assistance for all platform-related needs.
                  </li>
                  <li className="mb-2">
                    <span className="text-yellow-500 font-bold">
                      Concierge Service:
                    </span>{" "}
                    Receive a personal touch to enhance your experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full max-w-5xl px-6 py-12 flex flex-col md:flex-row items-center justify-between mx-auto">
          <div className="md:w-1/2">
            <img
              src={pic}
              alt="Workwise Benefits"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Why Workwise?
            </h3>
            <ul className="text-gray-600 leading-relaxed text-lg list-none">
              <li className="mb-6 flex items-start">
                <span className="text-yellow-500 mr-2 mt-1">✔</span>
                <div>
                  <p className="font-bold text-gray-800">
                    Tailored Financial Flexibility
                  </p>
                  <p>Set your payment terms to manage cash flow.</p>
                </div>
              </li>
              <li className="mb-6 flex items-start">
                <span className="text-yellow-500 mr-2 mt-1">✔</span>
                <div>
                  <p className="font-bold text-gray-800">Constructive Feedback</p>
                  <p>Improve services with feedback from contractors.</p>
                </div>
              </li>
              <li className="mb-6 flex items-start">
                <span className="text-yellow-500 mr-2 mt-1">✔</span>
                <div>
                  <p className="font-bold text-gray-800">Smart Business Tools</p>
                  <p>
                    Use intuitive dashboards and analytics for better decisions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>


        <div className="w-full bg-gray-100 py-12 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Watch Our Demo Video
          </h3>
          <a
            href="https://www.youtube.com/watch?v=r6yHCHZsWj0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 shadow-md transition duration-300"
          >
            <span>Watch on YouTube</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/1200px-YouTube_icon_%282013-2017%29.png"
              alt="YouTube"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

    
      <Footer />
    </div>
  );
};

export default ForVendors;
