import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles

const Flutter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a 1-second animation
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" data-aos="fade-up">Flutter</h1>
        
        <div className="mb-8" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is Flutter?</h2>
          <p className="text-gray-600 leading-relaxed">
            Flutter is an open-source UI software development toolkit created by Google. 
            It is used to develop cross-platform applications for mobile, web, and desktop 
            from a single codebase. With Flutter, developers can build beautiful, natively 
            compiled applications efficiently.
          </p>
        </div>

        <div className="mb-8" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Features of Flutter</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">Hot Reload: Instantly see changes in the app without losing state.</li>
            <li className="mb-2">Rich Widgets: A wide variety of pre-designed widgets to create beautiful UIs.</li>
            <li className="mb-2">Cross-Platform: Write once, run on iOS, Android, web, and desktop.</li>
            <li className="mb-2">High Performance: Flutter apps compile to native ARM code for high performance.</li>
            <li className="mb-2">Strong Community: A growing community and plenty of resources available.</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Popular Tools for Flutter Development</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">Dart: The programming language used to build Flutter apps.</li>
            <li className="mb-2">Flutter SDK: The software development kit for Flutter applications.</li>
            <li className="mb-2">Visual Studio Code: A popular code editor with Flutter support.</li>
            <li className="mb-2">Android Studio: An IDE that provides powerful tools for Flutter development.</li>
            <li className="mb-2">Firebase: A platform to help you build and manage apps easily.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flutter;
