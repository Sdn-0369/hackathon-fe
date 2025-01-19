import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg px-6 py-4 flex items-center justify-between z-50">
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
        <span className="text-black">work</span>
        <span className="text-white bg-black px-2 py-1 rounded">wise</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {["Home", "Magic Search", "For Vendors", "About Us", "Contact Us"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
            className="relative text-gray-700 font-medium transition hover:text-orange-600"
          >
            {item}
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-orange-600 transition-all duration-300 hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium transition hover:bg-orange-600 hover:text-white hover:border-orange-600">
            Login
          </button>
        </Link>
        <Link to="/sign-in">
          <button className="px-6 py-2 bg-black text-white rounded-full font-medium transition hover:bg-orange-600">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-gray-800">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <Link
            to="/"
            className="flex items-center text-2xl font-bold text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-black">work</span>
            <span className="text-white bg-black px-2 py-1 rounded">wise</span>
          </Link>

          {["Home", "Magic Search", "For Vendors", "About Us", "Contact Us"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-700 font-medium transition hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="flex flex-col space-y-4">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium transition hover:bg-orange-600 hover:text-white hover:border-orange-600">
                Login
              </button>
            </Link>
            <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full px-6 py-2 bg-black text-white rounded-full font-medium transition hover:bg-orange-600">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
