import React from "react";
import Footer from "./Footer";

const MagicSearch = () => {
  return (
    <div className="flex flex-col min-h-screen mt-20">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center py-12 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold">Magic Search</h1>
          <p className="text-lg md:text-xl mt-4 font-light">
            Upload, manage, and generate RFQs seamlessly with our AI-powered platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-10 mt-12">
          {/* Steps Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-teal-500 text-white rounded-full font-bold text-lg">
                1
              </div>
              <p className="text-lg font-medium">
                <strong>Download:</strong> Download and fill the BOQ file for a smooth RFQ creation process.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg">
                2
              </div>
              <p className="text-lg font-medium">
                <strong>Upload:</strong> Upload the filled file and additional details.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full font-bold text-lg">
                3
              </div>
              <p className="text-lg font-medium">
                <strong>Generate:</strong> Automatically generate RFQs with AI-driven insights.
              </p>
            </div>
          </div>

          {/* Upload Section */}
          <div className="mt-10 border-dashed border-4 border-gray-300 rounded-lg p-8 text-center">
            <div className="text-green-500 text-5xl mb-4">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p className="text-gray-600 text-lg font-medium">
              Drag and drop your Excel file here or click to upload.
            </p>
            <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 ease-in-out">
              Upload File
            </button>
          </div>

          {/* Generate Button */}
          <div className="mt-10 text-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
              Automatically Generate RFQs
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MagicSearch;
