import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ServicesBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
    });
  }, []);

  return (
    <div className='bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 min-h-screen'> {/* Ensure full height and gradient background */}
      <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"
          data-aos="fade-right" // AOS animation
        >
          <img 
            className="object-cover object-center rounded" 
            alt="hero" 
            src="https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg" 
          />
        </div>
        <div 
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" 
          data-aos="fade-left" // AOS animation
        >
          <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Before they sold out
            <br className="hidden lg:inline-block" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. 
            Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesBar;
    