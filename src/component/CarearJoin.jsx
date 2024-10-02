import React from 'react';
import Lottie from 'lottie-react';
import Earth from '../assets/Earth.json';

const CarearJoin = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gradient-to-r from-blue-900 via-purple-900 to-black body-font relative overflow-hidden">
        {/* Add subtle background pattern */}
        <div className="absolute inset-0 bg-pattern opacity-20"></div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
          {/* Left Column */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white leading-tight text-shadow-xl">
              Join Our Global Team <br className="hidden lg:inline-block" />
              & Shape the Future
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Be a part of an innovative global workforce. Collaborate with professionals around the world and help drive cutting-edge projects forward. We value creativity, inclusivity, and excellence.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded text-lg shadow-lg transition transform hover:scale-105">
                Join Us Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <Lottie
              animationData={Earth}
              loop={true}
              className="w-full h-auto"
            />
            {/* Overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarearJoin;
