import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/navData";
import Logo from "../../assets/images/Logo.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={Logo} alt="OKQ Solutions" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-[14px] font-medium transition-colors ${
                    isActive ? "text-[#02667E]" : "text-[#333333] hover:text-[#02667E]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Search */}
          <button className="p-1.5 text-[#333333] hover:text-[#02667E] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
            </svg>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors ${
              darkMode ? "bg-[#02667E]" : "bg-gray-300"
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full transition-transform flex items-center justify-center ${
                darkMode ? "translate-x-5 bg-white" : "translate-x-0 bg-white"
              }`}
            >
              {/* Sun/Moon icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm10-8a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 010-2h1a1 1 0 011 1zm12.364-5.364a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM8.757 15.243a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm8.486 0a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM8.757 8.757a1 1 0 01-1.414 0l-.707-.707A1 1 0 018.05 6.636l.707.707a1 1 0 010 1.414zM12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </span>
          </button>

          <Link
            to="/login"
            className="text-[13px] font-semibold text-[#333333] hover:text-[#02667E] transition-colors"
          >
            Login
          </Link>

          <Link
            to="/contactUs"
            className="bg-[#02667E] text-white text-[13px] font-semibold px-6 py-2.5 rounded-md hover:bg-[#024f63] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-[#333333]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `text-[14px] font-medium ${
                      isActive ? "text-[#02667E]" : "text-[#333333] hover:text-[#02667E]"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-3">
            <Link
              to="/login"
              className="block text-center border border-[#02667E] text-[#02667E] text-[13px] font-semibold px-6 py-2.5 rounded-md hover:bg-[#e8f7fa]"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block text-center bg-[#02667E] text-white text-[13px] font-semibold px-6 py-2.5 rounded-md hover:bg-[#024f63]"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
