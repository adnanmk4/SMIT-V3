import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className='sticky top-0 z-50'>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to={'/'}><span className="ml-3 text-xl">Tailblocks</span></Link>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className={`${location.pathname === '/' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}>Home</Link>
            <Link to="/about" className={`${location.pathname === '/about' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}>About</Link>
            
            {/* Dropdown for Services */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link 
                to="/services" 
                className={`${location.pathname.startsWith('/services') ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300 flex items-center`} 
                onClick={toggleDropdown}
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>

              {/* Full Screen Dropdown Menu with 6 items */}
              {isDropdownOpen && (
                <div className="fixed top-16 left-0 w-full h-64 bg-gray-800 shadow-lg z-40 grid grid-cols-2 gap-10 p-8">
                  <div className="flex flex-col">
                    <Link to="/web" className="block px-6 py-4 text-lg text-gray-300 hover:bg-indigo-500 hover:text-white">Web & App Development</Link>
                    <Link to="/graphics" className="block px-6 py-4 text-lg text-gray-300 hover:bg-indigo-500 hover:text-white">Graphic Designing</Link>
                    <Link to="/flutter" className="block px-6 py-4 text-lg text-gray-300 hover:bg-indigo-500 hover:text-white">Flutter</Link>
                  </div>
                  <div className="flex flex-col">
                    <Link to="/seo" className="block px-6 py-4 text-lg text-gray-300 hover:bg-indigo-500 hover:text-white">SEO Optimization</Link>
                    <Link to="/digital-marketing" className="block px-6 py-4 text-lg text-gray-300 hover:bg-indigo-500 hover:text-white">Digital Marketing</Link>
                    <Link to="/consulting" className="block px-6 py-4 text-lg text-gray-300 hover:bg-indigo-500 hover:text-white">Consulting Services</Link>
                    
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}>Contact</Link>
            <Link to="/team" className={`${location.pathname === '/team' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}>Team</Link>
            <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}>Portfolio</Link>
          </nav>
          <Link to="/contact">
            <button className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none text-base mt-4 md:mt-0 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded">
              Get Ticket
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
