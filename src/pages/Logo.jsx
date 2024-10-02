import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS for animations

const Illustration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS for 1-second animations
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8" data-aos="fade-up">
          Illustration Design Services
        </h1>
        
        {/* Section 1: Introduction */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Elevate Your Brand with Custom Illustrations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Illustrations are more than just visuals—they bring stories, ideas, and concepts to life. Whether you’re looking to enhance your
            website, product, or marketing materials, our custom illustration design services help make your brand stand out with unique,
            creative artwork that resonates with your audience.
          </p>
        </div>

        {/* Section 2: Key Features */}
        <div className="mb-10" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us for Illustrations?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Custom illustrations tailored to your brand's identity and message</li>
            <li>High-quality vector designs for scalability and versatility</li>
            <li>Illustrations that enhance storytelling and user engagement</li>
            <li>Perfect for digital, print, marketing, and editorial use</li>
            <li>Fast turnaround time and open to revisions</li>
          </ul>
        </div>

        {/* Section 3: Our Illustration Process */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Illustration Design Process
          </h2>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Initial Consultation: Understand your brand, audience, and vision</li>
            <li>Concept Development: Sketch ideas and concepts based on your input</li>
            <li>Design Execution: Create digital illustrations in various styles</li>
            <li>Feedback & Revisions: Refine the artwork according to your feedback</li>
            <li>Delivery: Provide final illustrations in multiple formats (PNG, SVG, etc.)</li>
          </ol>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10" data-aos="zoom-in">
          <button className="bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
            Start Your Illustration Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
