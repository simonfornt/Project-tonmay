// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-logo1.png";

const navLinkBaseClass =
  "text-white font-semibold transition-colors duration-200 ease-in-out hover:text-teal-200 focus:outline-none focus:text-teal-200";
const navLinkActiveClass =
  "text-teal-200 font-bold underline decoration-teal-400 underline-offset-4";
const mobileNavLinkClass = "block py-2 px-4 w-full text-center";

const projectLinks = [
  { to: "/projects/school", label: "Suddhagon School" },
  { to: "/projects/health", label: "Health" },
  { to: "/projects/environment", label: "Environment" },
  { to: "/projects/community", label: "Community Support" },
];

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { dropdown: true, label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const isActive = (path) => pathname === path;
  const isProjectsActive = pathname.startsWith("/projects");

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setIsProjectDropdownOpen(false);
      }
    };

    if (isProjectDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProjectDropdownOpen]);

  // Close menus when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsProjectDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeDropdownAndMobileMenu = () => {
    setIsProjectDropdownOpen(false);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isProjectDropdownOpen) setIsProjectDropdownOpen(false);
  };

  const toggleProjectDropdown = () => {
    setIsProjectDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-orange-500/95 backdrop-blur-sm shadow-lg w-full sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-3xl font-bold"
            onClick={closeMobileMenu}
          >
            <img
              className="size-12 md:size-16"
              src={logo}
              alt="Shuddhangan Logo"
            />
            <span className="text-white font-domine hidden sm:inline-block">
              Shuddhangan
            </span>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-orange-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center gap-6">
              {mainLinks.map((link, i) =>
                link.dropdown ? (
                  <li key={i} className="relative">
                    <button
                      ref={dropdownButtonRef}
                      onClick={toggleProjectDropdown}
                      className={`${navLinkBaseClass} flex items-center gap-1 ${
                        isProjectsActive ? navLinkActiveClass : ""
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isProjectDropdownOpen}
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          isProjectDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <ul
                      ref={dropdownRef}
                      className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 transition-all duration-200 origin-top ${
                        isProjectDropdownOpen
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {projectLinks.map((project, j) => (
                        <li key={j}>
                          <NavLink
                            to={project.to}
                            className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                            onClick={closeDropdownAndMobileMenu}
                          >
                            {project.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={i}>
                    <NavLink
                      to={link.to}
                      className={`${navLinkBaseClass} ${
                        isActive(link.to) ? navLinkActiveClass : ""
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
            <NavLink
              to="/login"
              className={`bg-white text-orange-600 px-4 py-2 rounded-md font-semibold shadow-sm hover:bg-orange-100 transition ${
                isActive("/login") ? "bg-orange-200" : ""
              }`}
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-orange-500 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 py-4">
          {mainLinks.map((link, i) =>
            link.dropdown ? (
              <li key={i} className="w-full">
                <button
                  className={`${navLinkBaseClass} ${mobileNavLinkClass} flex items-center justify-center gap-1 ${
                    isProjectsActive ? navLinkActiveClass : ""
                  }`}
                  onClick={toggleProjectDropdown}
                  aria-haspopup="true"
                  aria-expanded={isProjectDropdownOpen}
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      isProjectDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  className={`w-full bg-orange-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    isProjectDropdownOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {projectLinks.map((project, j) => (
                    <li key={j}>
                      <NavLink
                        to={project.to}
                        className={`${navLinkBaseClass} ${mobileNavLinkClass} block hover:bg-orange-700`}
                        onClick={closeDropdownAndMobileMenu}
                      >
                        {project.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={i}>
                <NavLink
                  to={link.to}
                  className={`${navLinkBaseClass} ${mobileNavLinkClass} ${
                    isActive(link.to) ? navLinkActiveClass : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
          <li className="mt-4">
            <NavLink
              to="/login"
              className={`bg-white text-orange-600 px-6 py-2 rounded-md font-semibold shadow-sm hover:bg-orange-100 transition ${
                isActive("/login") ? "bg-orange-200" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
