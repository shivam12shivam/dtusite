import React from "react";

export default function Header() {
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
    <div className="bg-gray-400 w-full flex justify-center items-center fixed top-0 left-0 z-50">
      <ul className="flex w-full justify-around items-center px-4 py-2 border-t border-b border-white">
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
  );
}
