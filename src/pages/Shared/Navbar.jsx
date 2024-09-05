import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { navLinksdata } from "../../data/Data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (id) => {
    setOpenSubmenu(id);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  return (
    <nav className="bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div></div>
        <div className="hidden md:flex space-x-4 items-center">
          {navLinksdata.map((item) => (
            <div
              key={item._id}
              onMouseEnter={() => handleMouseEnter(item._id)}
              onMouseLeave={handleMouseLeave}
            >
              {item.submenu ? (
                <div className="relative group">
                  <div className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <Link
                      to={item.link}
                      aria-label={`Navigate to ${item.title}`}
                    >
                      <span className="text-sm md:text-base font-semibold">{item.title}</span>
                    </Link>
                    <FaAngleDown className="ml-1 transition-transform transform duration-300 group-hover:rotate-180" />
                  </div>
                  <div
                    className={`absolute hidden group-hover:block py-2 w-48 bg-white shadow-lg rounded-md z-10 ${
                      openSubmenu === item._id ? "block" : "hidden"
                    }`}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        to={`${item.link}${subitem.link}`}
                        onClick={toggleMenu}
                        className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100 text-sm md:text-base"
                        aria-label={`Navigate to ${subitem.title}`}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={`/${item.link}`}
                  className="px-3 py-2 rounded-md text-sm md:text-base font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-label={`Navigate to ${item.title}`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              onClick={toggleMenu}
              className="text-white cursor-pointer w-6 h-6"
              aria-label="Close menu"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="text-white cursor-pointer w-6 h-6"
              aria-label="Open menu"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          {navLinksdata.map((item) => (
            <div
              key={item._id}
              className="border-t border-gray-700"
              onMouseEnter={() => handleMouseEnter(item._id)}
              onMouseLeave={handleMouseLeave}
            >
              {item.submenu ? (
                <div className="relative group">
                  <div className="block px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
                    <Link
                      to={item.link}
                      aria-label={`Navigate to ${item.title}`}
                    >
                      <span className="text-sm md:text-base">{item.title}</span>
                    </Link>
                    <FaAngleDown className="ml-1 transition-transform transform duration-300 group-hover:rotate-180" />
                  </div>
                  <div
                    className={`py-2 bg-gray-800 ${
                      openSubmenu === item._id ? "block" : "hidden"
                    }`}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        to={`${item.link}${subitem.link}`}
                        onClick={toggleMenu}
                        className="block px-4 py-2 text-sm md:text-base text-gray-300 hover:bg-gray-700"
                        aria-label={`Navigate to ${subitem.title}`}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={`/${item.link}`}
                  className="block px-3 py-2 text-sm md:text-base font-medium text-white hover:bg-gray-700"
                  aria-label={`Navigate to ${item.title}`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
