import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Function to check active link
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gray-400 shadow-lg w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold tracking-wide">Shuddhangon</h1>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex flex-col md:flex-row items-center gap-6">
              <li>
                <NavLink 
                  to="/" 
                  className={`hover:text-teal-800 font-semibold transition-colors ${
                    isActive("/") ? "text-teal-800 font-bold underline" : ""
                  }`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={`hover:text-teal-800 font-semibold transition-colors ${
                    isActive("/about") ? "text-teal-800 font-bold underline" : ""
                  }`}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/donation" 
                  className={`hover:text-teal-800 font-semibold transition-colors ${
                    isActive("/donation") ? "text-teal-800 font-bold underline" : ""
                  }`}
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/team" 
                  className={`hover:text-teal-800 font-semibold transition-colors ${
                    isActive("/team") ? "text-teal-800 font-bold underline" : ""
                  }`}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={`hover:text-teal-800 font-semibold transition-colors ${
                    isActive("/contact") ? "text-teal-800 font-bold underline" : ""
                  }`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Login Button */}
            <NavLink 
              to="/login" 
              className={`bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors ${
                isActive("/login") ? "bg-orange-700" : ""
              }`}
            >
              Login
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300`}>
          <ul className="pb-4 space-y-4">
            <li>
              <NavLink 
                to="/" 
                className={`block py-2 hover:text-gray-300 ${
                  isActive("/") ? "text-blue-600 font-bold" : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={`block py-2 hover:text-gray-300 ${
                  isActive("/about") ? "text-blue-600 font-bold" : ""
                }`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/donation" 
                className={`block py-2 hover:text-gray-300 ${
                  isActive("/donation") ? "text-blue-600 font-bold" : ""
                }`}
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/team" 
                className={`block py-2 hover:text-gray-300 ${
                  isActive("/team") ? "text-blue-600 font-bold" : ""
                }`}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={`block py-2 hover:text-gray-300 ${
                  isActive("/contact") ? "text-blue-600 font-bold" : ""
                }`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/login" 
                className={`inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 ${
                  isActive("/login") ? "bg-gray-100 text-blue-700" : ""
                }`}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;