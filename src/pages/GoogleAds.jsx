import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS for animations

const GoogleAds = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS for animations
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8" data-aos="fade-up">
          Google Ads Services
        </h1>
        
        {/* Section 1: Introduction */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Drive Traffic and Boost Conversions with Google Ads
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Google Ads is one of the most effective ways to target potential customers at the exact moment they are searching for your products or services.
            Our Google Ads services help you create targeted campaigns that deliver measurable results, driving traffic, increasing conversions, and maximizing 
            your return on investment.
          </p>
        </div>

        {/* Section 2: Key Benefits */}
        <div className="mb-10" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Our Google Ads Services?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Comprehensive keyword research and analysis</li>
            <li>Highly targeted ad campaigns to reach your audience</li>
            <li>Optimized landing pages for better conversion rates</li>
            <li>Ad copywriting to increase click-through rates (CTR)</li>
            <li>Ongoing campaign management and performance tracking</li>
          </ul>
        </div>

        {/* Section 3: Our Process */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Google Ads Process
          </h2>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Understanding your business goals and target audience</li>
            <li>Comprehensive keyword research and competitor analysis</li>
            <li>Creating and launching ad campaigns tailored to your needs</li>
            <li>Ongoing optimization to improve performance and reduce costs</li>
            <li>Detailed performance reports with insights and recommendations</li>
          </ol>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10" data-aos="zoom-in">
          <button className="bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
            Start Your Google Ads Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;
