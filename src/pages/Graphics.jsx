import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles

const Graphics = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a 1-second animation
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" data-aos="fade-up">Graphics Design</h1>
        
        <div className="mb-8" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is Graphics Design?</h2>
          <p className="text-gray-600 leading-relaxed">
            Graphics design is the art and practice of planning and projecting ideas 
            and experiences with visual and textual content. It involves creating visual 
            compositions to solve problems and communicate ideas through typography, imagery, 
            color, and form. Graphics design can be seen in various media including print, 
            web, and digital formats.
          </p>
        </div>

        <div className="mb-8" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Principles of Graphics Design</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">Balance: Ensuring visual stability.</li>
            <li className="mb-2">Contrast: Creating visual interest through differences.</li>
            <li className="mb-2">Alignment: Arranging elements for a clean layout.</li>
            <li className="mb-2">Repetition: Consistency in design elements.</li>
            <li className="mb-2">White Space: Using space effectively to enhance focus.</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Popular Tools for Graphics Design</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">Adobe Photoshop</li>
            <li className="mb-2">Adobe Illustrator</li>
            <li className="mb-2">CorelDRAW</li>
            <li className="mb-2">Figma</li>
            <li className="mb-2">Canva</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
