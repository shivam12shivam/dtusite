import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Vision & Mission", link: "/vision" },
    { label: "East Delhi Campus", link: "/east-delhi-campus" },
    { label: "Wall of Donors", link: "/donors" },
    { label: "Alumni Affairs", link: "/alumni" },
    { label: "International Affairs", link: "/international" },
    { label: "T & P", link: "/training-placement" },
    { label: "ICC", link: "/icc" },
    { label: "NIRF", link: "/nirf" },
    { label: "ARIIA", link: "/ariia" },
    { label: "Photo Gallery", link: "/gallery" },
    { label: "DTU Studio", link: "/studio" },
    { label: "RTI Info", link: "/rti-info" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="bg-gray-400 fixed w-full flex justify-between items-center top-0 left-0 z-50 px-4">
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
      <ul className="hidden lg:flex w-full justify-around items-center space-x-4">
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
