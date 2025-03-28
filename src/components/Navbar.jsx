import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectDropdown, setProjectDropdown] = useState(false);
  const { pathname } = useLocation();

  // Function to check active link
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-orange-500 shadow-lg w-full sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 text-3xl font-bold ">
            <img className="size-16" src={logo} alt="" />
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 font-domine inline-block text-transparent bg-clip-text">
              Suddhagon
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links */}
          <div className={`md:flex items-center space-x-6 ${isOpen ? "flex flex-col  absolute top-16 left-0 w-full bg-orange-500 py-4 md:py-0" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row items-center gap-6">
              <li>
                <NavLink
                  to="/"
                  className={`hover:text-blue-500 text-white  font-semibold transition-colors ${
                    isActive("/") ? "text-blue-700 font-semibold underline" : ""
                  }`}
                  onClick={() => isOpen && setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`hover:text-blue-500 text-white font-semibold transition-colors ${
                    isActive("/about") ? "text-blue-700 font-semibold underline" : ""
                  }`}
                  onClick={() => isOpen && setIsOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li className="relative">
                <button
                  className="hover:text-blue-500 text-white font-semibold transition-colors"
                  onClick={() => setProjectDropdown(!projectDropdown)}
                >
                  Projects ▼
                </button>
                {projectDropdown && (
                  <ul className="absolute bg-white shadow-md rounded-md mt-2 w-40">
                    <li>
                      <NavLink
                        to="/projects/school"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => isOpen && setIsOpen(false)}
                      >
                        Suddhagon School
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/health"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => isOpen && setIsOpen(false)}
                      >
                        Health
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/environment"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => isOpen && setIsOpen(false)}
                      >
                        Environment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/community"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => isOpen && setIsOpen(false)}
                      >
                        Community Support
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/team"
                  className={`hover:text-blue-500 text-white font-semibold transition-colors ${
                    isActive("/team") ? "text-blue-700 font-semibold underline" : ""
                  }`}
                  onClick={() => isOpen && setIsOpen(false)}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`hover:text-blue-500 text-white font-semibold transition-colors ${
                    isActive("/contact") ? "text-blue-700 font-semibold underline" : ""
                  }`}
                  onClick={() => isOpen && setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Login Button */}
            <NavLink
              to="/login"
              className={`bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 transition-colors ${
                isActive("/login") ? "bg-orange-700" : ""
              }`}
              onClick={() => isOpen && setIsOpen(false)}
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;