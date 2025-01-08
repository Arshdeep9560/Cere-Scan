import React from 'react';
import logobg from '../assets/logobg.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-10 pb-4 mx-auto sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Section */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center text-teal-300">
              <img src={logobg} alt="logo" className='h-24 mb-2' /> {/* Adjust height to increase logo size */}
              
            </div>
          </div>

          {/* Company Links Section */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-white">Company</p>
            <nav className="mt-4">
              <ul className="space-y-3 text-sm text-center">
                <li>
                  <a href="/" className="text-gray-300 hover:underline">Home</a>
                </li>
                <li>
                  <a href="/product" className="text-gray-300 hover:underline">Upload Scan</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:underline">About Us</a>
                </li>
                <li>
                  <a href="/contact_us" className="text-gray-300 hover:underline">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-white">Quick Links</p>
            <nav className="mt-4">
              <ul className="space-y-3 text-sm text-center">
                <li>
                  <a href="#" className="text-gray-300 hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">License</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-white">Follow Us</p>
            <div className="mt-4 flex space-x-3">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://mail.google.com" target='blank' className="text-gray-300 hover:text-white" aria-label="Gmail">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-sm text-center text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
