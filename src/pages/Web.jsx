import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles

const Web = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a 1-second animation
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" data-aos="fade-up">
          Web and App Development
        </h1>
        
        <div className="mb-8" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is Web Development?</h2>
          <p className="text-gray-600 leading-relaxed">
            Web development refers to the process of creating websites and web applications. 
            It involves building, maintaining, and optimizing websites using technologies 
            like HTML, CSS, JavaScript, and frameworks such as React or Angular. Web 
            developers focus on both the front-end (what users interact with) and back-end 
            (server-side operations) aspects of development.
          </p>
        </div>

        <div className="mb-8" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is App Development?</h2>
          <p className="text-gray-600 leading-relaxed">
            App development refers to creating applications for mobile devices or desktops. 
            These apps can be native (built for a specific platform, like iOS or Android) 
            or cross-platform (using tools like React Native, Flutter). The process includes 
            designing the user interface, writing code, and testing the app for performance.
          </p>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Technologies in Web and App Development</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">HTML, CSS, and JavaScript</li>
            <li className="mb-2">React.js, Angular, and Vue.js for web</li>
            <li className="mb-2">React Native, Flutter for app development</li>
            <li className="mb-2">Node.js, Express.js for backend web apps</li>
            <li className="mb-2">Databases: MongoDB, Firebase, MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Web;
