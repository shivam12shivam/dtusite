import React from "react";

export default function Secheader() {
  return (
    <div className="bg-white border-b border-gray-300 w-full mt-6 left-0 box-border">
      {/* Top Div */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-2">
        {/* Image on the left */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img
            src="/src/images/Delhi-Technological-University.webp" // Replace with your image path
            alt="Delhi Technological University"
            className="h-20 w-auto"
          />
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-700">
              DELHI TECHNOLOGICAL UNIVERSITY
            </h1>
            <h2 className="text-sm font-medium text-gray-500">
              (Erstwhile DELHI COLLEGE OF ENGINEERING)
            </h2>
          </div>
        </div>

        {/* Additional Buttons */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          <button className="bg-gray-300 text-black px-4 py-2 font-semibold hover:bg-gray-400">
            Wall of Donors
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 font-semibold hover:bg-gray-400">
            Giving Back
          </button>
        </div>
      </div>
    </div>
  );
}
