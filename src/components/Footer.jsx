import React from 'react';
 function Footer  ()  {
  return (
    <footer className="bg-gray-800 text-white text-sm py-4 mt-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p>© Copyrights 2024, Workwise | All rights reserved</p>
        <div className="flex space-x-4">
          <a
            href="/privacy"
            className="hover:underline hover:text-gray-300 transition duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:underline hover:text-gray-300 transition duration-200"
          >
            Terms of Use
          </a>
          <a
            href="/linkedin"
            className="hover:underline hover:text-gray-300 transition duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer