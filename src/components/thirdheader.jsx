import React from "react";

export default function MenuBar() {
  const menuItems = [
    { label: "About Us", link: "#" },
    { label: "Administration", link: "#" },
    { label: "Academics", link: "#" },
    { label: "Admission", link: "#" },
    { label: "Academic Units", link: "#" },
    { label: "Publications", link: "#" },
    { label: "Facilities", link: "#" },
    { label: "Quick Link", link: "#" },
    { label: "Student Welfare", link: "#" },
  ];

  return (
    // <div className="bg-gray-600 flex flex-wrap justify-around items-center">
      <div className=" bg-gray-600 flex flex-wrap justify-around items-center ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border-r border-white "
          >
            <a
              href={item.link}
              className="text-white hover:text-blue-400 transition-all text-sm font-medium px-4 py-2 block"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    // </div>
  );
}
