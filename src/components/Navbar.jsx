import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <li><Link to="/" className="hover:text-teal-800 font-semibold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-800 font-semibold transition-colors">About Us</Link></li>
              <li><Link to="/donation" className="hover:text-teal-800 font-semibold transition-colors">Donation</Link></li>
              <li><Link to="/team" className="hover:text-teal-800 font-semibold transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-teal-800 font-semibold transition-colors">Contact</Link></li>
            </ul>

            {/* Login Button */}
            <Link 
              to="/login" 
              className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300`}>
          <ul className="pb-4 space-y-4">
            <li><Link to="/" className="block py-2 hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="block py-2 hover:text-gray-300">About Us</Link></li>
            <li><Link to="/donation" className="hover:text-teal-800 font-semibold transition-colors">Donation</Link></li>
            <li><Link to="/team" className="block py-2 hover:text-gray-300">Team</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-gray-300">Contact</Link></li>
            <li> <Link  to="/login"  className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100"> Login</Link> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;