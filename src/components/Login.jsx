import React, { useState } from 'react';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200 mb-4"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mb-4">
          <a href="/forgot-password" className="text-blue-600 hover:text-blue-800">Forgot Password?</a>
        </p>
        <div className="flex flex-col space-y-4">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition duration-200 flex items-center justify-center">
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded transition duration-200 flex items-center justify-center">
            <FaLinkedin className="mr-2" />
            Login with LinkedIn
          </button>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account? 
          <a href="/sign-in" className="text-blue-600 hover:text-blue-800"> Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

