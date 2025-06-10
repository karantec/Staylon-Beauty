import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        mobileMenuOpen &&
        !e.target.closest("nav") &&
        !e.target.closest("button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobileMenuOpen]);

  // Determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-pink-600 font-medium" : "";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-pink-600">Shringar.kay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`hover:text-pink-600 transition duration-300 ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-pink-600 transition duration-300 ${isActive(
              "/about"
            )}`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`hover:text-pink-600 transition duration-300 ${isActive(
              "/services"
            )}`}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className={`hover:text-pink-600 transition duration-300 ${isActive(
              "/gallery"
            )}`}
          >
            Gallery
          </Link>

          {/* Desktop Dropdown */}
          {/* <div className="relative group">
            <button
              className="flex items-center hover:text-pink-600 transition duration-300"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Other
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transition duration-300 transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300 origin-top-left
                ${
                  dropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/opening-hours"
                className={`block px-4 py-2 hover:bg-pink-50 transition ${isActive(
                  "/opening-hours"
                )}`}
              >
                Opening Hours
              </Link>
              <Link
                to="/policies"
                className={`block px-4 py-2 hover:bg-pink-50 transition ${isActive(
                  "/policies"
                )}`}
              >
                Policies
              </Link>
            </div>
          </div> */}

          <Link
            to="/contact"
            className={`hover:text-pink-600 transition duration-300 ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>

          <Link
            to="/appointment"
            className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center text-gray-700 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white shadow-inner transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <Link
            to="/"
            className={`py-2 border-b border-gray-100 hover:text-pink-600 transition ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`py-2 border-b border-gray-100 hover:text-pink-600 transition ${isActive("/about")}`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`py-2 border-b border-gray-100 hover:text-pink-600 transition ${isActive("/services")}`}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className={`py-2 border-b border-gray-100 hover:text-pink-600 transition ${isActive("/gallery")}`}
          >
            Gallery
          </Link>

          {/* Mobile Dropdown */}
          {/* <div className="py-2 border-b border-gray-100">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full hover:text-pink-600 transition"
            >
              <span>Other</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                dropdownOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <Link
                to="/opening-hours"
                className={`block py-2 hover:text-pink-600 transition ${isActive("/opening-hours")}`}
              >
                Opening Hours
              </Link>
              <Link
                to="/policies"
                className={`block py-2 hover:text-pink-600 transition ${isActive("/policies")}`}
              >
                Policies
              </Link>
            </div>
          </div> */}

          <Link
            to="/contact"
            className={`py-2 border-b border-gray-100 hover:text-pink-600 transition ${isActive("/contact")}`}
          >
            Contact
          </Link>

          <Link
            to="/appointment"
            className="bg-pink-600 text-white py-3 rounded-md text-center font-medium mt-2 hover:bg-pink-700 transition duration-300"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;