import React from 'react';
import logobg from '../assets/logobg.png'
const Navbar = () => {
  return (
    <nav className="bg-blue-950 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <svg className="w-8 h-8 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0C8.69 0 6 2.69 6 6v2H3c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3h6v2c0 3.31 2.69 6 6 6s6-2.69 6-6v-2h3c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3h-3V6c0-3.31-2.69-6-6-6zm4 6v2H8V6c0-2.21 1.79-4 4-4s4 1.79 4 4zm6 8v6c0 .55-.45 1-1 1h-3v-2c0-1.66-1.34-3-3-3s-3 1.34-3 3v2H4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h3v2c0 1.66 1.34 3 3 3s3-1.34 3-3v-2h6c.55 0 1 .45 1 1z"/>
          </svg> */}
         <img src={logobg} alt="Logo" className="w-11 h-11" />
        </div>

        {/* Menu items */}
        <div className="hidden md:flex space-x-8">
          <a href="#product" className="text-white hover:text-blue-500">Home</a>
          <a href="#features" className="text-white hover:text-blue-500">About Us</a>
          <a href="#marketplace" className="text-white hover:text-blue-500">Upload Scan</a>
          <a href="#company" className="text-white hover:text-blue-500">Contact Us</a>
        </div>

        {/* Log in / Sign up buttons */}
        <div className="flex items-center space-x-4">
          <a href="#login" className="text-white hover:text-blue-500">Log in</a>
          <a href="#signup" className="bg-white text-blue px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
