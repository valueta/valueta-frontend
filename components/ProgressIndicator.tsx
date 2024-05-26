// components/ProgressIndicator.js
import React from "react";

const ProgressIndicator = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-full max-w-xs">
        <div className="flex flex-col items-start space-y-4 relative">


          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-primary bg-opacity-15 w-6 h-6 rounded-full">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <span>Enter your Phone Number</span>
          </div>


          <div className="h-8 border-l-2 border-primary ml-[11px] !mt-0"></div>

          <div className="flex items-center space-x-4 !mt-0">
            <div className="flex justify-center items-center bg-primary bg-opacity-15 w-6 h-6 rounded-full">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <span>Verify it’s You</span>
          </div>
          <div className="h-8 border-l-2 border-primary ml-[11px] !mt-0"></div>

          <div className="flex items-center space-x-4 !mt-0">
            <div className="flex justify-center items-center bg-primary bg-opacity-15 w-6 h-6 rounded-full">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <span>Create your Account</span>
            <div className="absolute -right-10 bg-black text-white px-2 py-1 rounded-full text-xs">
              You’re Here!
            </div>
          </div>
          <div className="h-8 border-l-2 border-gray-300 ml-[11px] !mt-0"></div>

          <div className="flex items-center space-x-4 !mt-0">
            <div className="flex justify-center items-center bg-bg-gray-300 bg-opacity-15 w-6 h-6 rounded-full">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
            <span>Create Transaction PIN</span>
          </div>
          <div className="h-8 border-l-2 border-gray-300 ml-[11px] !mt-0"></div>

          <div className="flex items-center space-x-4 !mt-0">
            <div className="flex justify-center items-center bg-bg-gray-300 bg-opacity-15 w-6 h-6 rounded-full">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
            <span>Verify your Identity (KYC)</span>
          </div>
        </div>
        <div className="mt-8 flex justify-between w-full">
          <button className="px-4 py-2 bg-black text-white rounded">
            Resume
          </button>
          <button className="px-4 py-2 underline text-black">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
