import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations in milliseconds
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }, []);

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
      <header className="text-gray-400 bg-gray-900 body-font" data-aos="fade-down">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0" data-aos="fade-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to={'/'}><span className="ml-3 text-xl">Tailblocks</span></Link>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className={`${location.pathname === '/' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up">Home</Link>
            <Link to="/about" className={`${location.pathname === '/about' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="100">About</Link>
            
            {/* Dropdown for Services */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link 
                to="/services" 
                className={`${location.pathname.startsWith('/services') ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300 flex items-center`} 
                onClick={toggleDropdown}
                data-aos="fade-up" data-aos-delay="200"
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>

              {/* Wide Dropdown Menu with Sub-Services */}
              {isDropdownOpen && (
                <div className="fixed top-16 left-0 w-full bg-gray-800 shadow-lg z-40 p-8 grid grid-cols-3 gap-10" data-aos="fade-down">
                  {/* Column 1 */}
                  <div>
                    <h3 className="text-white text-lg mb-2">Web & App Development</h3>
                    <Link to="/web" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">Web Development</Link>
                    <Link to="/app" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">App Development</Link>
                    <Link to="/ecommerce" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">E-commerce Solutions</Link>
                  </div>
                  {/* Column 2 */}
                  <div>
                    <h3 className="text-white text-lg mb-2">Graphic Designing</h3>
                    <Link to="/logo" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">Logo Design</Link>
                    <Link to="/branding" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">Branding</Link>
                    <Link to="/illustration" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">Illustration</Link>
                  </div>
                  {/* Column 3 */}
                  <div>
                    <h3 className="text-white text-lg mb-2">Digital Marketing</h3>
                    <Link to="/seo" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">SEO Optimization</Link>
                    <Link to="/socialmedia" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">Social Media Marketing</Link>
                    <Link to="/googleAds" className="block px-3 py-2 text-gray-300 hover:bg-indigo-500 hover:text-white">Google Ads</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="300">Contact</Link>
            <Link to="/team" className={`${location.pathname === '/team' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="400">Team</Link>
            <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="500">Portfolio</Link>
          </nav>
          <Link to="/contact">
            <button className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none text-base mt-4 md:mt-0 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded" data-aos="fade-up" data-aos-delay="600">
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
