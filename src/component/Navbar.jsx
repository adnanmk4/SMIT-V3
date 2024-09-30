import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to={'/'}><span className="ml-3 text-xl">Tailblocks</span></Link>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/"><p className="mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300">Home</p></Link>
            <Link to="/about"><p className="mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300">About</p></Link>
            <Link to="/services"><p className="mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300">Services</p></Link>
            <Link to="/contact"><p className="mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300">Contact</p></Link>
            <Link to="/team"><p className="mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300">Team</p></Link>
            <Link to="/portfolio"><p className="mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300">Portfolio</p></Link>
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
}

export default Navbar;
  