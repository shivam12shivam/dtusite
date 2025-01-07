import React from "react";

export default function Secheader() {
  return (
    <div className="bg-white border-b border-gray-300 w-full left-0 box-border ">
      {/* Top Div */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-2">
        {/* Image on the left */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img
            src="public/images/Delhi-Technological-University.webp" // Replace with your image path
            alt="Delhi Technological University"
            className="h-20 w-auto"
          />
          <div className="ml-4">
            <h1 className="font-impact text-4xl font-extrabold text-gray-700">
              DELHI TECHNOLOGICAL UNIVERSITY
            </h1>
            <h2 className="font-impact text-2xl font-bold text-gray-600">
              (Erstwhile DELHI COLLEGE OF ENGINEERING)
            </h2>
          </div>
        </div>

        {/* Additional Buttons */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
            <a href="http://www.dtu.ac.in/Web/quick_links/donors.php">
          <button className="bg-gray-300 text-black px-4 py-2 font-semibold hover:bg-gray-400 underline ">
            Wall of Donors
          </button>
            </a>
            <a href="http://alumniaffairs.dtu.ac.in/">
          <button className="bg-gray-300 text-black px-4 py-2 font-semibold hover:bg-gray-400 underline">
            Giving Back
          </button>
            </a>
        </div>
      </div>
    </div>
  );
}
