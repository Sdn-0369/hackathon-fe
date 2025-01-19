import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Topbar from "./components/Topbar";
import WhyChooseUs from "./components/WhyChooseUs";
import Login from "./components/Login";
import SignIn from "./components/Signin";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ProductSearch from "./components/ProductSearch";
import GenerateRFQPage from "./components/GenerateRFQPage";
import FAQ from "./components/FAQ";
import ForVendors from "./components/ForVendors";
import MagicSearch from "./components/MagicSearch";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      
      <div
        className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('/pexels-pixabay-459728.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Maximise your profit through our <br />
            AI-powered procurement solution
          </h1>
          <p className="text-lg mb-6">
            To know more, call <strong>9930787798</strong>
          </p>
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 font-semibold mb-4"
            onClick={() => navigate("/search-product")}
          >
            Find Vendors By Product
          </button>
          <p className="text-sm">Start Your 30-day Free Trial Now</p>
        </div>
      </div>

      
      <WhyChooseUs />

      
      <section
        className="bg-cover bg-center bg-fixed py-16"
        style={{
          backgroundImage: "url('/26764.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
            <p className="text-center text-lg text-gray-200 mb-8">Find the right vendors and Workwise!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-500 text-white rounded-full text-2xl font-bold">
                  01
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Explore</h3>
                <p className="text-gray-300">Database of 10,000+ Vendors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-500 text-white rounded-full text-2xl font-bold">
                  02
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Shortlist</h3>
                <p className="text-gray-300">Approved vendors of industry leaders</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-500 text-white rounded-full text-2xl font-bold">
                  03
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Send</h3>
                <p className="text-gray-300">With just 1 click</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-500 text-white rounded-full text-2xl font-bold">
                  04
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Get</h3>
                <p className="text-gray-300">AI-generated rate comparison chart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <FAQ />

      <footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-product" element={<ProductSearch />} />
        <Route path="/generate-rfq" element={<GenerateRFQPage />} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/for-vendors" element={<ForVendors />} />
        <Route path="/magic-search" element={<MagicSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
