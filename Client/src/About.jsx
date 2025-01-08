
import React from "react";
import Footer from "./homepage/Footer";
import Navbar from "./homepage/Navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black min-h-screen flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl text-center mb-8 animate__animated animate__bounceInDown">
        <h1 className="text-4xl font-bold text-white mb-4">About Cere Scan</h1>
        <p className="text-gray-600 text-lg">
          Cere Scan is a cutting-edge web application developed to assist radiologists and healthcare
          professionals in diagnosing brain tumors from MRI scans. By leveraging machine learning algorithms, 
          Cere Scan aims to classify brain MRI images into categories, providing preliminary diagnostic insights
          that can help medical experts deliver faster, data-driven diagnoses.
        </p>
      </div>

      <div className="bg-grey-900 shadow-lg rounded-lg p-8 max-w-4xl mb-8 animate__animated animate__bounceInLeft">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Purpose</h2>
        <p className="text-gray-600">
          At Cere Scan, our mission is to support the healthcare community by enhancing diagnostic 
          accuracy and speed. We believe in the transformative power of AI and aim to bridge the 
          gap between technology and healthcare by creating tools that provide timely, reliable insights.
        </p>
      </div>

      <div className="bg-grey-600 shadow-lg rounded-lg p-8 max-w-4xl mb-8 animate__animated animate__bounceInRight">
        <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li>AI-powered brain tumor classification into glioma, meningioma, pituitary, or no tumor.</li>
          <li>Data preprocessing and augmentation for improved model accuracy.</li>
          <li>Deep learning model architecture, utilizing CNN and ResNet50 for reliable predictions.</li>
          <li>User-friendly interface for easy upload and analysis of MRI images.</li>
        </ul>
      </div>

      <div className="bg-black shadow-lg rounded-lg p-8 max-w-4xl animate__animated animate__bounceInUp">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Goal</h2>
        <p className="text-gray-600">
          Our ultimate goal is to assist healthcare professionals in providing quick, preliminary 
          diagnostic insights that empower them to make informed decisions. By continually improving 
          our algorithms and integrating user feedback, we aim to offer a dependable tool that 
          brings the best of AI to healthcare.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
