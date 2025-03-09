import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shuddhangon</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
        <ul className={`md:flex gap-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/team" className="hover:underline">Team</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
