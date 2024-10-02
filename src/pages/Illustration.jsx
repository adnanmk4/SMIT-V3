import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';

const Illustration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      {/* Container */}
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-indigo-700">Illustration Services</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our illustrations capture ideas and bring concepts to life through vibrant visuals. Whether it’s detailed drawings or minimal icons, we create visuals that tell your story, enhance communication, and make your brand stand out.
          </p>
        </div>

        {/* Why Illustrations Matter */}
        <div className="mt-10" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800">Why Illustrations Matter</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Illustrations play a crucial role in creating a visual identity and simplifying complex ideas. They are vital in:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Enhancing brand recognition and identity with custom visuals.</li>
            <li>Making content more engaging and visually appealing.</li>
            <li>Simplifying complex ideas for better understanding.</li>
          </ul>
        </div>

        {/* Types of Illustrations */}
        <div className="mt-10" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-800">Types of Illustrations We Offer</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our diverse range of illustrations cater to different industries and use cases:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-gray-700">
            <div>
              <h3 className="font-semibold text-indigo-600">Editorial Illustration</h3>
              <p className="mt-2">
                Used in books, magazines, and articles to visually represent written content.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-600">Technical Illustration</h3>
              <p className="mt-2">
                Helps simplify and explain complex products or processes with clear visuals and diagrams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-600">Advertising Illustration</h3>
              <p className="mt-2">
                Attracts attention in marketing campaigns and promotional materials, making products stand out.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-600">Infographic Illustration</h3>
              <p className="mt-2">
                Visual storytelling through informative graphics, combining data and design for maximum impact.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="zoom-in">
          <button className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-300">
            Get Custom Illustrations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
