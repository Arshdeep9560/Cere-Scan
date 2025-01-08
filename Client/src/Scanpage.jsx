import React, { useState } from 'react';
import Navbar from './homepage/Navbar';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import Footer from './homepage/Footer';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const TumorDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [confidence, setConfidence] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedImage) {
      alert("Please upload an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.prediction); // Set prediction result
      setConfidence(response.data.confidence); // Set confidence level
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Prepare the data for the pie chart
  const pieData = {
    labels: ['Confidence', 'Uncertainty'],
    datasets: [
      {
        data: [confidence || 0, confidence ? 100 - confidence : 100],
        backgroundColor: ['#00C851', '#ff4444'],
        borderColor: ['#00C851', '#ff4444'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen p-8 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold md:text-7xl mb-20 animate__animated animate__bounceInDown">Tumor Detector</h1>

        <div className="flex justify-between w-full max-w-5xl gap-8">
          {/* Left side: Upload Image and Image Display */}
          <div className="w-1/2 mr-4 animate__animated animate__bounceInLeft">
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <label htmlFor="mri-upload" className="block mb-2 text-left text-2xl">
                Upload Image of MRI Scan
              </label>
              <input
                type="file"
                id="mri-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="bg-gray-700 text-white border border-gray-600 rounded-lg p-2 w-full"
              />
              <p className="text-gray-400 text-sm mt-2">Image should be under 10 MB</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mb-4 h-60">
              <p className="text-center">Image</p>
              <div className="flex items-center justify-center h-48 border border-gray-600 rounded-lg">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="h-full object-contain" />
                ) : (
                  <p className="text-gray-400">Image will be displayed here</p>
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Submit
            </button>
          </div>

          {/* Right side: Confidence Level, Tumor Type, and Recommendation */}
          <div className="w-1/2 animate__animated animate__bounceInRight">
            {/* Pie Chart - Confidence Level */}
            <div className="bg-gray-800 p-4 rounded-lg mb-6 w-4/5 mx-auto flex flex-col items-center">
              <h2 className="text-lg font-semibold text-center">Confidence Level</h2>
              <div className="w-32 h-32 flex justify-center items-center">
                <Pie data={pieData} />
              </div>
              <p className="text-gray-400 mt-2 text-center">{confidence ? `${confidence.toFixed(2)}%` : '--'}</p>
            </div>

            {/* Tumor Type */}
            <div className="bg-gray-800 p-4 rounded-lg text-center mb-6 w-4/5 mx-auto">
              <h2 className="text-lg font-semibold">Tumor Type</h2>
              <p className="text-gray-400">{prediction || '--'}</p>
            </div>

            {/* Recommendation Box */}
            <div className="bg-gray-800 p-4 rounded-lg text-center w-4/5 mx-auto">
              <h2 className="text-lg font-semibold">Recommendations</h2>
              <p className="text-gray-400">{prediction === 'Tumor' ? 'Consult a doctor for further diagnosis.' : 'Continue with regular health checkups.'}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TumorDetection;
