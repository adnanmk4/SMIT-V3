import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s'); // Default image
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const UNSPLASH_API_KEY = 'OC1nfXOHm-yk-XWGO05G01ai4-1z_RE_RTrZSBcDCdU';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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

  const fetchImage = async (query) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query,
          client_id: UNSPLASH_API_KEY,
        },
      });
      if (response.data.results.length > 0) {
        setImageUrl(response.data.results[0].urls.small);
      } else {
        setImageUrl('https://via.placeholder.com/300x200?text=No+Image+Found');
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      setImageUrl('https://via.placeholder.com/300x200?text=Error');
    }
  };

  const handleServiceClick = (service) => {
    fetchImage(service);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
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

              {isDropdownOpen && (
                <div className="fixed top-16 left-0 w-full bg-gray-800 shadow-lg z-40 p-8 grid grid-cols-4 gap-10" data-aos="fade-down">
                  <div className="col-span-1">
                    <img
                      src={imageUrl}
                      alt="Service"
                      className="w-full h-auto rounded-lg"
                      style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                  </div>

                  <div className="col-span-3 grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-white text-lg mb-2">Web & App Development</h3>
                      <Link to="/web" onClick={() => handleServiceClick('web development')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Web Development</Link>
                      <Link to="/app" onClick={() => handleServiceClick('app development')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">App Development</Link>
                      <Link to="/ecommerce" onClick={() => handleServiceClick('ecommerce')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">E-commerce Solutions</Link>
                    </div>

                    <div>
                      <h3 className="text-white text-lg mb-2">Graphic Designing</h3>
                      <Link to="/logo" onClick={() => handleServiceClick('logo design')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Logo Design</Link>
                      <Link to="/branding" onClick={() => handleServiceClick('branding')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Branding</Link>
                      <Link to="/illustration" onClick={() => handleServiceClick('illustration')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Illustration</Link>
                    </div>

                    <div>
                      <h3 className="text-white text-lg mb-2">SEO Optimization</h3>
                      <Link to="/softwareengineer" onClick={() => handleServiceClick('seo optimization')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Softwar-Eengineer</Link>
                      <Link to="/devops" onClick={() => handleServiceClick('content creation')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Devops</Link>
                      <Link to="/qaengineer" onClick={() => handleServiceClick('site audit')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Qaengineer</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="300">Contact</Link> 
            <Link to="/team" className={`${location.pathname === '/team' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="400">Team</Link>
            <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="500">Portfolio</Link>
          </nav>

          <Link to="/carear" className={`${location.pathname === '/carear' ? 'text-white bg-indigo-500' : ''} mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="500">Carear</Link>

          <Link to='/contact'>
            <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition duration-300 ease-in-out'>
              GET TICKET ➡
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
