import React from "react";
import { Link } from "react-router-dom"; 
import vision from '../assets/vision.jpg';
import mission from '../assets/mission.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('/pexels-life-of-pix-2391.jpg')", 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-extrabold mb-2">About Us</h1>
          <p className="text-sm">Home / About Us</p>
        </div>
      </div>

      
      <div className="w-full max-w-5xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Our Journey
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Growing up, we witnessed firsthand the challenges faced by our families in the
          industrial sector. From{" "}
          <span className="font-semibold text-gray-800">
            inefficiencies in procurement processes
          </span>{" "}
          to <span className="font-semibold text-gray-800">on-site frauds</span> to the
          constant struggle of finding reliable vendors, these pain points were a daily
          reality. Inspired by these experiences and driven by a passion to make a
          difference, we embarked on a mission to transform the industry.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Workwise brings together over{" "}
          <span className="font-semibold text-gray-800">
            four decades of rich experience
          </span>{" "}
          with the innovative energy of young talent from IIT and VIT. This unique blend
          of expertise and fresh perspectives allows us to create{" "}
          <span className="font-semibold text-gray-800">MAGIC.</span>
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-12">
          Whether you're a buyer seeking reliable vendors or a vendor looking to expand
          your reach, Workwise is here to support you every step of the way, and become{" "}
          <span className="font-semibold text-gray-800">your growth partner.</span>
        </p>

        
        <div className="flex flex-col md:flex-row items-center bg-blue-100 p-8 rounded-lg mb-16">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Vision-B2B Procurement</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Workwise, our vision is to empower the growth of all stakeholders in the Indian heavy
              industry by revolutionizing the way they work together. We aim to bridge the gaps in
              technical, financial, operational, and market access challenges that hinder the industry’s
              progress.
            </p>
            <ul className="text-gray-600 leading-relaxed text-lg mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Clients, contractors, and suppliers collaborate seamlessly
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Procurement is a strategic advantage, not a roadblock
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Innovation and efficiency drive industry growth
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Stakeholders thrive, and the industry flourishes
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={vision}
              alt="Our Vision"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row-reverse items-center bg-gray-100 p-8 rounded-lg mb-16">
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-black leading-relaxed text-xl font-extrabold">
              At Workwise, our mission is twofold:
            </p>
            <ul className="text-gray-600 leading-relaxed text-lg mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Save 5% on procurement costs, resulting in a minimum of 20% extra profit
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Streamline procurement processes, freeing up 90% of time for strategic activities
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Grow business by 20%, expanding reach and opportunities
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Connect with contractors seamlessly, ensuring a steady pipeline of orders
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={mission}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      
      <div className="w-full py-8">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <p className="text-blue-900 text-2xl font-bold">
            Join us in shaping the future of the heavy industry. Together, let's build a
            more efficient, connected, and prosperous ecosystem.
          </p>
        </div>
      </div>

      
      <div className="w-full bg-gray-700 py-10 mb-5">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to transform your procurement process?
          </h3>
          <Link to="/contact-us"> 
            <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

