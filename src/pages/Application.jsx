import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Application = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Page Header */}
      <div className="container mx-auto text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Application Development</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Building high-quality, scalable, and efficient applications for all platforms.
        </p>
      </div>

      {/* Details Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0">
        
        {/* Column 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Custom Application Solutions</h2>
          <p className="text-gray-600 text-lg">
            Our application development services are designed to provide customized solutions tailored to your business needs. We create fast, secure, and scalable applications that can support your company’s growth.
          </p>
          <ul className="list-disc mt-4 text-gray-600 ml-4">
            <li>Mobile and Web Applications</li>
            <li>Enterprise Solutions</li>
            <li>Cross-Platform Development</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Technologies We Use</h2>
          <p className="text-gray-600 text-lg">
            We work with the latest and most reliable technologies to ensure your application is robust and future-proof. Here are some technologies we specialize in:
          </p>
          <ul className="list-disc mt-4 text-gray-600 ml-4">
            <li>React Native for mobile apps</li>
            <li>Flutter for cross-platform apps</li>
            <li>Node.js and Express for backend development</li>
            <li>MongoDB for database solutions</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto text-center mt-10" data-aos="zoom-in">
        <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Application;
