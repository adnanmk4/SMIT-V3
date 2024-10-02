import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles

const Web = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a 1-second animation
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        
        {/* Page Header */}
        <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-10" data-aos="fade-up">
          Web and App Development
        </h1>
        
        {/* Section 1: What is Web Development? */}
        <div className="mb-12" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What is Web Development?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Web development refers to the process of creating websites and web applications. 
            It involves building, maintaining, and optimizing websites using technologies like 
            <span className="font-bold text-blue-600"> HTML</span>, 
            <span className="font-bold text-blue-600"> CSS</span>, 
            <span className="font-bold text-blue-600"> JavaScript</span>, and frameworks such as 
            <span className="font-bold text-blue-600"> React</span> or 
            <span className="font-bold text-blue-600"> Angular</span>. Web developers focus on both the 
            <span className="font-bold text-blue-600"> front-end</span> (what users interact with) and 
            <span className="font-bold text-blue-600"> back-end</span> (server-side operations) aspects of development.
          </p>
        </div>

        {/* Section 2: What is App Development? */}
        <div className="mb-12" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What is App Development?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            App development refers to creating applications for mobile devices or desktops. These apps can be 
            <span className="font-bold text-blue-600"> native</span> (built for a specific platform, like iOS or Android) or 
            <span className="font-bold text-blue-600"> cross-platform</span> (using tools like React Native, Flutter). 
            The process includes designing the user interface, writing code, and testing the app for performance.
          </p>
        </div>

        {/* Section 3: Key Technologies */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Key Technologies in Web and App Development
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li className="mb-3">HTML, CSS, and JavaScript</li>
            <li className="mb-3">React.js, Angular, and Vue.js for web</li>
            <li className="mb-3">React Native, Flutter for app development</li>
            <li className="mb-3">Node.js, Express.js for backend web apps</li>
            <li className="mb-3">Databases: MongoDB, Firebase, MySQL</li>
          </ul>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12" data-aos="zoom-in">
          <button className="bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300">
            Contact Us for Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Web;
