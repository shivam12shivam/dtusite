import React, { useState, useRef } from "react";

export default function MenuBar() {
  const [dropdown, setDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = [
    { label: "About Us", links: [{ label: "History", link: "https://dtu.ac.in/Web/About/history.php" }, { label: "Vision and Mission", link: "https://dtu.ac.in/Web/About/vision.php" }, { label: "Core values", link: "https://dtu.ac.in/Web/About/corevalues.php" }, { label: "Research", link: "https://dtu.ac.in/Web/About/research.php" }] },
    { label: "Administration", links: [{ label: "Chancellor", link: "/departments" }, { label: "Vice Chancellor", link: "/leadership" }, { label: "Pro Vice Chancellor", link: "/policy" }] },
    { label: "Academics", links: [{ label: "Academic-UG", link: "/courses" }, { label: "Academic-PG", link: "/programs" }, { label: "Programs Offered", link: "/faculty" }] },
    { label: "Admission", links: [{ label: "B.Tech", link: "/apply-now" }, { label: "Eligibility", link: "/eligibility" }, { label: "Fees", link: "/fees" }] },
    { label: "Academic Units", links: [{ label: "Departments", link: "/academic-units/departments" }, { label: "Research", link: "/academic-units/research" }, { label: "Resources", link: "/academic-units/resources" }] },
    { label: "Publications", links: [{ label: "Journals", link: "/publications/journals" }, { label: "Conferences", link: "/publications/conferences" }, { label: "Books", link: "/publications/books" }] },
    { label: "Facilities", links: [{ label: "Library", link: "/facilities/library" }, { label: "Labs", link: "/facilities/labs" }, { label: "Sports", link: "/facilities/sports" }] },
    { label: "Quick Link", links: [{ label: "Downloads", link: "/downloads" }, { label: "FAQ", link: "/faq" }, { label: "Events", link: "/events" }] },
    { label: "Student Welfare", links: [{ label: "Scholarships", link: "/student-welfare/scholarships" }, { label: "Counseling", link: "/student-welfare/counseling" }, { label: "Activities", link: "/student-welfare/activities" }] },
  ];

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout when hovering
    }
    setDropdown(index); // Open dropdown when hovered
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(null); // Close dropdown after 200 mili second if not hovered
    }, 200);
  };

  return (
    <div className="bg-gray-600 flex justify-between items-center mb-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className=" relative flex-grow border-r border-white"
          onMouseEnter={() => handleMouseEnter(index)} // Hover to open
          onMouseLeave={handleMouseLeave} // Leave to start closing
        >
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-all text-sm font-medium px-4 py-2 block"
          >
            {item.label}
          </a>
          {dropdown === index && (
            <div className="absolute left-0 mt-2 bg-gray-800 text-white border border-gray-700 rounded shadow-lg w-48 z-10">
              {item.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.link}  // Actual link for the item
                  className="block px-4 py-2 text-sm hover:bg-gray-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
