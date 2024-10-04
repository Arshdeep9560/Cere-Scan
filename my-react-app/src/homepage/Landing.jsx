
import React from 'react';

import logo from '../assets/logo.png';  
import Navbar from './Navbar';

const Landing = () => {
  return (
<>
<Navbar/>
<div className="min-h-screen bg-gray-100 flex flex-col">
  {/* Hero Section */}
  <section className="relative bg-black text-white flex flex-col lg:flex-row items-start lg:items-center justify-between h-screen px-8">
    <div className="w-full lg:w-4/5 max-w-4xl">
      <h1 className="text-4xl font-bold md:text-5xl text-left">
        Transforming Brain Tumor Diagnosis with AI
      </h1>
      <p className="mt-4 text-lg md:text-xl text-left">
        Accurate classification of brain MRI scans into glioma, meningioma, pituitary tumors, or no tumor.
      </p>
      
      {/* Button Box Section */}
      <div className="mt-6 flex justify-start">
        <div className="border rounded-lg bg-gray-800 px-8 py-3 shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out">
          <button
            onClick={() => window.location.href = '/upload'}
            className="text-white text-base font-medium"
          >
            Upload Your MRI Scan
          </button>
        </div>
      </div>
    </div>

    {/* Logo Section */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
      <img src={logo} alt="Cere Scan Logo" className="max-w-full h-auto" />
    </div>
  </section>

  {/* Brief Introduction */}
  <section className="py-16 bg-white text-gray-700">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold">Introducing Cere Scan</h2>
      <p className="mt-4 text-lg">
        Cere Scan is designed to assist healthcare professionals by providing a second opinion on MRI results, ensuring a quick and accurate preliminary diagnosis of brain tumors.
      </p>

      {/* Key Benefits */}
      <ul className="mt-8 space-y-4 text-left max-w-xl mx-auto">
        <li className="flex items-start">
          <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
          <p>Quick and easy MRI scan uploads</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
          <p>Accurate and reliable preliminary diagnosis</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
          <p>Support for radiologists in clinical decision-making</p>
        </li>
      </ul>
    </div>
  </section>
</div>
</>
);
};

export default Landing;
