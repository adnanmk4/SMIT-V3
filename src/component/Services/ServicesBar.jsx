import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

const ServicesBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
    });
  }, []);

  return (
    <div className='bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 min-h-screen flex items-center justify-center'> {/* Ensure full height, gradient background, and center content */}
      <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"
          data-aos="fade-right" 
        >
          <img 
            className="object-cover object-center rounded" 
            alt="services" 
            src="https://wac-cdn.atlassian.com/dam/jcr:e40a81ed-cc02-472d-a62b-f5b2d21d11ef/tips-and-tricks-wide.png?cdnVersion=2283" // Replace with a service-related image URL
          />
        </div>
        <div 
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" 
          data-aos="fade-left" 
        >
          <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Our Professional Services
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            We offer a wide range of services tailored to help businesses succeed in the digital world, including web development, mobile app development, and cloud solutions. Our team is dedicated to delivering high-quality, efficient, and scalable solutions to meet your business needs.
          </p>
          
          <Link to={'/contact'}>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact Us
            </button>     
          </div>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default ServicesBar;
