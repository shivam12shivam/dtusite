import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Vision & Mission", link: "http://www.dtu.ac.in/Web/About/vision.php" },
    { label: "East Delhi Campus", link: "http://www.dtu.ac.in/Web/Departments/eastcampus/about/" },
    { label: "Wall of Donors", link: "http://www.dtu.ac.in/Web/quick_links/donors.php" },
    { label: "Alumni Affairs", link: "http://alumniaffairs.dtu.ac.in/" },
    { label: "International Affairs", link: "http://intaffairs.dtu.ac.in/" },
    { label: "T & P", link: "http://tnp.dtu.ac.in/" },
    { label: "ICC", link: "http://dtu.ac.in/Web/ICC/about/" },
    { label: "NIRF", link: "http://www.dtu.ac.in/Web/quick_links/NIRF2017.php" },
    { label: "ARIIA", link: "http://dtu.ac.in/Web/ICC/about/" },
    { label: "Photo Gallery", link: "http://www.dtu.ac.in/Web/programme/vigilance23/" },
    { label: "DTU Studio", link: "https://www.youtube.com/channel/UCZqfUb0w7w0NPsTx7I7RtsQ" },
    { label: "RTI Info", link: "http://www.dtu.ac.in/Web/quick_links/rti.php" },
    { label: "Contact Us", link: "http://www.dtu.ac.in/Web/About/contactus.php" },
  ];

  return (
    <div className=" bg-gray-500 relative w-full flex justify-between items-center top-0 left-0 z-50 mx-0" >
      {/* Logo */}

      {/* Mobile Hamburger Icon */}
      <button
        className="lg:hidden text-white px-4 py-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex w-full justify-around items-center space-x-4 mx-2">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-white hover:text-gray-800 hover:bg-white transition-all text-sm font-medium px-2 py-1"
          >
            <a href={item.link} className="block">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-400 py-2 border-t border-white`}
      >
        <ul className="flex flex-col items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-white hover:text-gray-800 hover:bg-white transition-all text-sm font-medium px-4 py-2"
            >
              <a href={item.link} className="block">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
