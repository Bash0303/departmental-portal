import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaHome, FaInfoCircle, FaUsers, FaBook, FaBell } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [staffDropdown, setStaffDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleStaffDropdown = () => setStaffDropdown(!staffDropdown);

  return (
    <nav className="bg-primary-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo and department name */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <img
              className="h-14 w-14 rounded-lg object-cover border-2 border-white shadow-md"
              src="/src/assets/logo.jpg"
              alt="Department Logo"
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase">Department of Computer Science</h1>
              <p className="text-xs md:text-sm text-gray-300 font-medium">Networking the World</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="/" 
              className="flex items-center px-4 py-3 rounded-md text-sm font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaHome className="mr-2" /> Home
            </a>
            
            <a 
              href="/about" 
              className="flex items-center px-4 py-3 rounded-md text-sm font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaInfoCircle className="mr-2" /> About
            </a>
            
            {/* Staff Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleStaffDropdown}
                className="flex items-center px-4 py-3 rounded-md text-sm font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
              >
                <FaUsers className="mr-2" /> Staff
                {staffDropdown ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
              </button>
              
              {staffDropdown && (
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-xl py-2 z-10 border border-gray-100">
                  <a 
                    href="/staff/academic" 
                    className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-secondary-light hover:text-white transition-colors duration-200"
                  >
                    Academic Staff
                  </a>
                  <a 
                    href="/staff/non-academic" 
                    className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-secondary-light hover:text-white transition-colors duration-200"
                  >
                    Non-Academic Staff
                  </a>
                </div>
              )}
            </div>
            
            <a 
              href="/resources" 
              className="flex items-center px-4 py-3 rounded-md text-sm font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaBook className="mr-2" /> Resources
            </a>
            
            <a 
              href="/notice" 
              className="flex items-center px-4 py-3 rounded-md text-sm font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaBell className="mr-2" /> Notice
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-md text-white hover:bg-primary-light focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark pb-4">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a 
              href="/" 
              className="flex items-center px-4 py-3 rounded-md text-base font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaHome className="mr-3" /> Home
            </a>
            
            <a 
              href="/about" 
              className="flex items-center px-4 py-3 rounded-md text-base font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaInfoCircle className="mr-3" /> About
            </a>
            
            {/* Mobile Staff Dropdown */}
            <div className="px-4 py-2">
              <button 
                onClick={toggleStaffDropdown}
                className="flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center">
                  <FaUsers className="mr-3" /> Staff
                </div>
                {staffDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {staffDropdown && (
                <div className="ml-6 mt-2 space-y-2 bg-primary-light rounded-md p-2">
                  <a 
                    href="/staff/academic" 
                    className="block px-4 py-2 text-sm font-medium rounded hover:bg-white hover:text-primary-dark transition-colors duration-200"
                  >
                    Academic Staff
                  </a>
                  <a 
                    href="/staff/non-academic" 
                    className="block px-4 py-2 text-sm font-medium rounded hover:bg-white hover:text-primary-dark transition-colors duration-200"
                  >
                    Non-Academic Staff
                  </a>
                </div>
              )}
            </div>
            
            <a 
              href="/resources" 
              className="flex items-center px-4 py-3 rounded-md text-base font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaBook className="mr-3" /> Resources
            </a>
            
            <a 
              href="/notice" 
              className="flex items-center px-4 py-3 rounded-md text-base font-bold uppercase hover:bg-primary-light hover:text-white transition-colors duration-300"
            >
              <FaBell className="mr-3" /> Notice
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;