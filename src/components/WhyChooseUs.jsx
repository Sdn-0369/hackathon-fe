import React from 'react';
import whyChooseUsImage from '../assets/istockphoto-1416048929-612x612.svg';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const buttonclick =()=>{
    navigate("/contact-us")
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-4">✔️</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Vendor Database of 10,000+ High-Quality Vendors
                </h3>
                <p className="text-gray-600">
                  Gain access to a vast network of trusted and verified vendors to streamline your procurement process.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-4">✔️</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Compliant Datasheets and Drawings of 1,000+ Products
                </h3>
                <p className="text-gray-600">
                  Get precise, industry-standard documentation to ensure accuracy and compliance.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-4">✔️</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  AI-Driven Automated Quote Comparison
                </h3>
                <p className="text-gray-600">
                  Leverage AI-powered tools to simplify decision-making and choose the best options.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6">
            <button 
             className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition"
             onClick={buttonclick}
              >
              Enquire Now
            </button>
          </div>
        </div>

        
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={whyChooseUsImage}
            alt="Why Choose Us"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
