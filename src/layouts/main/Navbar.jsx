import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { LuAlignJustify } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src={logo} alt="Logo" className="h-10" />

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {!isOpen ? (
            <LuAlignJustify className="text-3xl" />
          ) : (
            <IoCloseSharp className="text-3xl" />
          )}
        </button>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex items-center space-x-6 mainFont text-[16px]">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/foods" className="hover:text-blue-500">
          Foods
        </Link>
        <Link to="/about" className="hover:text-blue-500">
          About us
        </Link>
        <Link to="/dashboard" className="hover:text-blue-500">
          Dashboard
        </Link>
        <Link to="/terms" className="hover:text-blue-500">
          Terms & Condition
        </Link>
      </div>

      {/* Full-screen overlay menu for mobile */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-lime-400 transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button inside Mobile Menu */}
        {isOpen && (
          <>
            <div className="absolute top-4 right-4">
              <button onClick={toggleMenu} className="text-white text-3xl">
                <IoCloseSharp />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center gap-8 h-full">
              <li>
                <Link
                  to="/"
                  className="text-white text-2xl hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/foods"
                  className="text-white text-2xl hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Foods
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-2xl hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-white text-2xl hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white text-2xl hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
