import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS for animations

const Branding = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS for 1-second animations
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-8" data-aos="fade-up">
          Branding Services
        </h1>
        
        {/* Section 1: Introduction */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Elevate Your Brand Identity
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Branding is about more than just a logo. It’s about creating a cohesive and impactful identity that resonates with your target audience. 
            Our branding services help you build a strong and consistent visual identity across all touchpoints, from logo design to marketing collateral 
            and everything in between. Whether you’re a startup or an established business, we’ll work with you to create a brand that stands out.
          </p>
        </div>

        {/* Section 2: Our Branding Solutions */}
        <div className="mb-10" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Comprehensive Branding Solutions
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Logo Design and Identity Creation</li>
            <li>Brand Messaging and Voice Development</li>
            <li>Color Palette and Typography Strategy</li>
            <li>Marketing Materials (Business Cards, Brochures, etc.)</li>
            <li>Brand Guidelines for Consistency</li>
          </ul>
        </div>

        {/* Section 3: Why Branding Matters */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Branding Matters?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Branding goes beyond aesthetics. It creates an emotional connection with your audience and communicates your values. A strong brand 
            fosters trust, inspires loyalty, and differentiates you from competitors. It sets the tone for your entire business and leaves a lasting 
            impression in the minds of customers.
          </p>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10" data-aos="zoom-in">
          <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Let's Build Your Brand
          </button>
        </div>
      </div>
    </div>
  );
};

export default Branding;
