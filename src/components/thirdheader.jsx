import React, { useState, useRef } from "react";

export default function MenuBar() {
  const [dropdown, setDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = [
    { label: "About Us", links: [{ label: "History", link: "https://dtu.ac.in/Web/About/history.php" }, { label: "Vision and Mission", link: "https://dtu.ac.in/Web/About/vision.php" }, { label: "Core values", link: "https://dtu.ac.in/Web/About/corevalues.php" }, { label: "Research", link: "https://dtu.ac.in/Web/About/research.php" }] },
    { label: "Administration", links: [{ label: "Chancellor", link: "https://dtu.ac.in/Web/Administrations/Chancellor.php" }, { label: "Vice Chancellor", link: "https://dtu.ac.in/Web/Administrations/Vice-Chancellor.php" }, { label: "Pro Vice Chancellor", link: "https://dtu.ac.in/Web/Administrations/Pro-VC-1.php" }] },
    { label: "Academics", links: [{ label: "Academic-UG", link: "https://dtu.ac.in/Web/Academics" }, { label: "Academic-PG", link: "https://dtu.ac.in/Web/AcademicsPG/" }, { label: "Programs Offered", link: "https://dtu.ac.in/Web/Programs_dtu.pdf" }] },
    { label: "Admission", links: [{ label: "B.Tech", link: "https://jacdelhi.admissions.nic.in/" }, { label: "B.Tech(NRI/FN/PO)", link: "https://jacdelhi.admissions.nic.in/" }, { label: "B.Tech(Lateral Entry)", link: "https://jacdelhi.admissions.nic.in/" }] },
    { label: "Academic Units", links: [{ label: "Centres", link: "https://dtu.ac.in/Web/Departments/MCG/about/index.php" }, { label: "Departments", link: "https://dtu.ac.in/Web/Departments/AppliedChemistry/about" }] },
    { label: "Publications", links: [{ label: "Annual Reports", link: "https://iqac.dtu.ac.in/#annualreport" }, { label: "DTU Times", link: "http://dtutimes.dtu.ac.in/" }, { label: "Books", link: "https://dtu.ac.in/Web/About/books.php" }] },
    { label: "Facilities", links: [{ label: "EDUSAT Hub", link: "https://dtu.ac.in/Web/Facilities/edusathub.php" }, { label: "Central Library", link: "https://dtu.ac.in/Web/Facilities/edusathub.php" }, { label: "Computer Centre", link: "https://dtu.ac.in/Web/Facilities/ComputerCentre/about/" }] },
    { label: "Quick Link", links: [{ label: "Establishment Branch", link: "https://dtu.ac.in/Web/establishment/estd/rr/" }, { label: "Vigilance", link: "http://www.dtu.ac.in/Web/vigilance/about/" }, { label: "Acts,statutes,Ordinances", link: "https://dtu.ac.in/Web/quick_links/dtu_acts.php" }] },
    { label: "Student Welfare", links: [{ label: "Student Welfare Protocol", link: "https://dsw.dtu.ac.in/" }, { label: "DTU-IIF", link: "https://dtuiif.co.in/" }, { label: "Sports & Games", link: "https://dtuiif.co.in/" }] },
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
    <div className="flex flex-wrap bg-gray-600 flex justify-between items-center mb-4">
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
