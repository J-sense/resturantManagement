import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <img src={logo} alt="Logo" className="h-10" />
        {/* Links */}
        <div className={`flex-col md:flex-row md:flex items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center space-y-4 mainFont text-[16px] md:space-y-0 text-center">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/foods" className="hover:text-blue-500">Foods</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About us</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
            <li><Link to="/terms" className="hover:text-blue-500">Terms & Condition</Link></li>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
