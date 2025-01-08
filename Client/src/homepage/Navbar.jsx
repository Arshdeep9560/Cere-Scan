import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logobg from '../assets/logobg.png';
import defaultProfileImage from '../assets/default.png';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showInfoBox, setShowInfoBox] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setIsAuthenticated(true);
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setShowInfoBox(false);
  };

  const toggleInfoBox = () => setShowInfoBox(!showInfoBox);

  return (
    <nav className="bg-blue-950 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logobg} alt="Logo" className="w-11 h-11" />
        </div>

        {/* Menu items */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className="text-white hover:text-blue-500">Home</NavLink>
          <NavLink to="/about" className="text-white hover:text-blue-500">About Us</NavLink>
          <NavLink to="/product" className="text-white hover:text-blue-500">Upload Scan</NavLink>
          <NavLink to="/contact_us" className="text-white hover:text-blue-500">Contact Us</NavLink>
        </div>

        {/* Authentication/Profile Section */}
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className="text-white hover:text-blue-500">Log in</NavLink>
              <NavLink to="/signup" className="bg-white text-blue px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
                Sign up
              </NavLink>
            </>
          ) : (
            <button onClick={toggleInfoBox} className="text-white focus:outline-none">
              <img src={defaultProfileImage} alt="Default Profile" className="w-10 h-10 rounded-full object-cover" />
            </button>
          )}
        </div>
      </div>

      {showInfoBox && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-lg p-4 z-50">
          <h3 className="text-lg font-semibold">{user?.name || 'User Name'}</h3>
          <p className="text-sm text-gray-600">{user?.email || 'user@example.com'}</p>
          <p className="text-sm text-gray-600">{user?.phone || '123-456-7890'}</p>
          <button
            onClick={handleLogout}
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
