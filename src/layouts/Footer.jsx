import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 px-5 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Expense Tracker</h3>
            <p className="text-gray-400">
              Keep your finances organized and under control with our easy-to-use expense tracking app.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white">
                  Propfile
                </Link>
              </li>
            
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook icon */}
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter icon */}
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram icon */}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8  px-5 flex justify-between items-center">
          <p className="text-gray-400">&copy; 2024 Expense Tracker. All rights reserved.</p>
          <Link
            to="/download"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Expenses File
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;