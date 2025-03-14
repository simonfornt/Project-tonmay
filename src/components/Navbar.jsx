import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Function to check active link
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-sky-200 shadow-lg w-full sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold tracking-wide">Shuddhangon</h1>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex flex-col md:flex-row items-center gap-6">
              <li>
                <NavLink  to="/" className={`hover:text-blue-500 font-semibold transition-colors ${  isActive("/") ? "text-blue-700 font-semibold underline" : ""  }`} >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink  to="/about"  className={`hover:text-blue-500 font-semibold transition-colors ${ isActive("/about") ? "text-blue-700 font-semibold underline" : ""  }`}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink   to="/donation" className={`hover:text-blue-500 font-semibold transition-colors ${  isActive("/donation") ? "text-blue-700 font-semibold underline" : "" }`} >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink  to="/team"  className={`hover:text-blue-5000 font-semibold transition-colors ${isActive("/team") ? "text-blue-700 font-semibold underline" : "" }`}>
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={`hover:text-blue-500 font-semibold transition-colors ${ isActive("/contact") ? "text-blue-700 font-semibold underline" : ""}`}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Login Button */}
            <NavLink  to="/login"  className={`bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 transition-colors ${ isActive("/login") ? "bg-orange-700" : ""  }`} >
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
