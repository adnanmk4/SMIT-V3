import React from 'react';
import { Link } from 'react-router-dom';

const HomeServices = () => {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container px-5 mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Flex container for heading and button */}
            <div className="flex justify-between items-center mb-6">
              {/* Updated heading */}
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md transition duration-500 hover:scale-105 hover:drop-shadow-lg">
                Our  Services
              </h2>

              {/* Updated button */}
              <Link
                to="/services"
                className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-pink-500 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400"
              >
                <span className="relative z-10">View All Services</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-20 rounded-lg"></div>
              </Link>
            </div>

            <div className="flex flex-wrap -m-4">
              {/* Card 1 */}
              <div className="lg:w-1/3 sm:w-1/2 w-full p-6">
                <div className="relative bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl h-96">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    src="https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 hover:bg-opacity-90 hover:opacity-100 p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-2 text-center text-sm">
                      Explore the beauty of the stars with an incredible night view of the sky.
                    </p>
                    <Link
                      to="/details"
                      className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="lg:w-1/3 sm:w-1/2 w-full p-6">
                <div className="relative bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl h-96">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    src="https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 hover:bg-opacity-90 hover:opacity-100 p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      NATURE BEAUTY
                    </h2>
                    <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
                      Mountain Scenery
                    </h1>
                    <p className="leading-relaxed mb-2 text-center text-sm">
                      Experience the breathtaking views of mountains and valleys.
                    </p>
                    <Link
                      to="/details"
                      className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="lg:w-1/3 sm:w-1/2 w-full p-6">
                <div className="relative bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl h-96">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    src="https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 hover:bg-opacity-90 hover:opacity-100 p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      OCEAN JOURNEY
                    </h2>
                    <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
                      Ocean Waves
                    </h1>
                    <p className="leading-relaxed mb-2 text-center text-sm">
                      Sail across the deep blue oceans and discover marine life.
                    </p>
                    <Link
                      to="/details"
                      className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
