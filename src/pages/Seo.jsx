import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS for animations

const Seo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS for 1-second animations
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8" data-aos="fade-up">
          SEO Optimization Services
        </h1>
        
        {/* Section 1: Introduction */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Boost Your Website’s Search Engine Ranking
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Search Engine Optimization (SEO) is key to improving your website’s visibility on search engines like Google. With our expert SEO services, 
            we help your business rank higher, drive more traffic, and ultimately increase your online presence. We use proven strategies 
            that align with search engine algorithms and provide long-lasting results.
          </p>
        </div>

        {/* Section 2: Key Features */}
        <div className="mb-10" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us for SEO Optimization?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Comprehensive website audits and keyword research</li>
            <li>On-page and off-page SEO optimization</li>
            <li>Quality backlink building strategies</li>
            <li>SEO-friendly content creation and optimization</li>
            <li>Regular performance tracking and reporting</li>
          </ul>
        </div>

        {/* Section 3: SEO Process */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our SEO Optimization Process
          </h2>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Initial Consultation: Understand your business goals and current SEO standing</li>
            <li>Comprehensive Website Audit: Identify SEO opportunities and areas for improvement</li>
            <li>Keyword Research: Find relevant, high-traffic keywords for your business</li>
            <li>On-Page & Off-Page Optimization: Improve your website structure, content, and build backlinks</li>
            <li>Performance Tracking: Regularly monitor SEO performance and make adjustments</li>
          </ol>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10" data-aos="zoom-in">
          <button className="bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
            Start Your SEO Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seo;
