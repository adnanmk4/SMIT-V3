import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Lottie from 'react-lottie';
import pic1 from '../assets/pic1.json';
import pic2 from '../assets/pic2.webp';
import AOS from 'aos'; // Import AOS library for animations
import 'aos/dist/aos.css'; // Import AOS CSS

const services = [
  {
    title: "Web Development",
    subtitle: "Building Modern Websites",
    description: "Custom web solutions that cater to your business needs.",
  },
  {
    title: "App Development",
    subtitle: "Apps for Every Platform",
    description: "Creating responsive and user-friendly mobile applications.",
  },
  {
    title: "SEO Optimization",
    subtitle: "Boost Your Visibility",
    description: "Enhancing your website's visibility on search engines.",
  },
  {
    title: "Digital Marketing",
    subtitle: "Reach Your Audience",
    description: "Comprehensive marketing strategies to grow your brand.",
  },
  {
    title: "UI/UX Design",
    subtitle: "Designing User Experiences",
    description: "Creating intuitive and engaging interfaces for users.",
  },
  {
    title: "E-commerce Solutions",
    subtitle: "Online Shopping Made Easy",
    description: "Building secure and efficient e-commerce platforms.",
  },
  {
    title: "Cloud Services",
    subtitle: "Scalable Solutions",
    description: "Flexible cloud solutions for your business infrastructure.",
  },
  {
    title: "Content Creation",
    subtitle: "Engaging Content Strategies",
    description: "Creating quality content to engage and retain customers.",
  },
];

const LeftHero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pic1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center justify-between w-full mb-20">
            {/* Text block */}
            <h1 data-aos="fade-right" className="sm:text-9xl text-4xl font-bold title-font text-red-500 drop-shadow-lg">
              Smit Services
            </h1>

            {/* Lottie Animation */}
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Begin Gallery Items */}
            {services.map((service, index) => (
              <div key={index} className="lg:w-1/4 sm:w-1/2 p-4">
                <div
                  className="flex relative transition-transform transform hover:scale-105 duration-300 ease-in-out"
                  data-aos="zoom-in"
                >
                  <img
                    alt="service"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md transition duration-300 ease-in-out"
                    src={pic2} // You can replace with relevant images for each service
                  />
                  <div className="relative z-10 w-full border-2 border-gray-300 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                    <div className="px-4 py-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                        {service.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h1>
                      <p className="leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>
                      <Link to="/services"> {/* Link to services page */}
                        <button className="bg-indigo-500 text-white py-1 px-3 rounded hover:bg-indigo-600 transition duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="flex justify-center mt-12">
            <Link to="/contact"> {/* Link to contact page */}
              <button className="bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-200 shadow-lg transform hover:scale-105">
                Join Us Today!
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftHero;
