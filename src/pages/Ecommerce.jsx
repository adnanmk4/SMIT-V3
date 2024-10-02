import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS animation library

const Ecommerce = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS animations
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-10">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-green-600 mb-8" data-aos="fade-up">
          E-commerce Solutions
        </h1>
        
        {/* Section 1: Introduction */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Comprehensive Online Store Development
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our e-commerce solutions are designed to give your business the tools it needs to succeed online. From building responsive 
            websites to integrating secure payment gateways, we provide everything required to set up and manage your online store efficiently. 
            Whether you're a small business or an enterprise, we tailor solutions to your specific needs.
          </p>
        </div>

        {/* Section 2: Key Features */}
        <div className="mb-10" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Key Features of Our E-commerce Solutions
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Customizable and responsive web design</li>
            <li>Secure payment gateways (Stripe, PayPal, etc.)</li>
            <li>Product management system with inventory tracking</li>
            <li>SEO-optimized for better search engine ranking</li>
            <li>Advanced analytics to track sales and user behavior</li>
            <li>Mobile-friendly for a seamless shopping experience</li>
          </ul>
        </div>

        {/* Section 3: Why Choose Us */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Our E-commerce Solutions?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We focus on delivering scalable, secure, and flexible e-commerce platforms that grow with your business. 
            With years of experience in web and mobile development, we ensure a seamless user experience across all devices. 
            Our solutions are designed to boost conversions, enhance customer satisfaction, and streamline operations.
          </p>
        </div>
        
        {/* Call-to-action */}
        <div className="text-center mt-10" data-aos="zoom-in">
          <button className="bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Get Started with Your Online Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
