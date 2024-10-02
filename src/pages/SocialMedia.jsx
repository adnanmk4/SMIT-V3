import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS for animations

const SocialMedia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS for 1-second animations
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8" data-aos="fade-up">
          Social Media Marketing Services
        </h1>
        
        {/* Section 1: Introduction */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Expand Your Reach and Grow Your Brand
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Social media is a powerful tool to connect with your audience, build your brand, and increase engagement. Our social media marketing 
            services help you leverage platforms like Facebook, Instagram, Twitter, and LinkedIn to reach a wider audience, create meaningful 
            connections, and grow your business.
          </p>
        </div>

        {/* Section 2: Key Benefits */}
        <div className="mb-10" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Our Social Media Services?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Customized social media strategies tailored to your business</li>
            <li>Targeted ads to reach the right audience</li>
            <li>Engaging content creation to increase followers and engagement</li>
            <li>Consistent performance tracking and analytics reports</li>
            <li>Expert management across multiple platforms</li>
          </ul>
        </div>

        {/* Section 3: Social Media Platforms */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Platforms We Specialize In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold text-indigo-600">Facebook</h3>
              <p className="text-gray-700 mt-2">Build your community, run targeted ads, and increase brand awareness on the largest social media platform.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold text-indigo-600">Instagram</h3>
              <p className="text-gray-700 mt-2">Engage with your audience through visually compelling content, stories, and interactive posts.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold text-indigo-600">Twitter</h3>
              <p className="text-gray-700 mt-2">Stay relevant and connect with users in real-time with trending topics and discussions.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold text-indigo-600">LinkedIn</h3>
              <p className="text-gray-700 mt-2">Enhance your professional presence and connect with industry leaders on the largest B2B platform.</p>
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10" data-aos="zoom-in">
          <button className="bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
            Get Started with Social Media Marketing
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
