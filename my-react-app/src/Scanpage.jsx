
import React from 'react';
import Navbar from './homepage/Navbar';

const TumorDetection = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black min-h-screen p-8 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold md:text-7xl mb-20">
        Tumor Detector
      </h1>

      <div className="flex justify-between w-full max-w-5xl gap-8">
        {/* Left side: Upload Image and Image Display */}
        <div className="w-1/2 mr-4">
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <label htmlFor="mri-upload" className="block mb-2 text-left text-2xl">
              Upload Image of MRI Scan
            </label>
            <input
              type="file"
              id="mri-upload"
              accept="image/*"
              className="bg-gray-700 text-white border border-gray-600 rounded-lg p-2 w-full"
            />
            <p className=" text-gray-400 text-sm mt-2">Image should be under 10 MB</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg mb-6 h-60">
            <p className="text-center">Image</p>
            <div className="flex items-center justify-center h-48 border border-gray-600 rounded-lg">
              <p className="text-gray-400">Image will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Right side: Confidence Level, Tumor Type, and Recommendation */}
        <div className="w-1/2">
          {/* Pie chart */}
          <div className="flex justify-center mb-6">
            <div className="pie-chart w-32 h-32 rounded-full bg-purple-500 flex items-center justify-center">
              <p className="text-center">Confidence Level</p>
            </div>
          </div>

          {/* Reduced box length using w-4/5 */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6 w-4/5 mx-auto flex flex-col items-center">
            <div className="text-center">
              <h2 className="text-lg font-semibold">Confidence Level</h2>
              <p className="text-gray-400">--%</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center mb-6 w-4/5 mx-auto">
            <h2 className="text-lg font-semibold">Tumor Type</h2>
            <p className="text-gray-400">Name</p>
          </div>

          {/* Recommendation Box */}
          <div className="bg-gray-800 p-4 rounded-lg text-center w-4/5 mx-auto">
            <h2 className="text-lg font-semibold">Recommendations</h2>
            <p className="text-gray-400">Depends upon results</p> {/* Placeholder for recommendation */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TumorDetection;
