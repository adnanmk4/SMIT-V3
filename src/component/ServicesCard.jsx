import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../Styles/Servicecard.css';

const ServicesCard = () => {
  const [serviceList, setServiceList] = useState([]); // State to hold services data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch services from backend
  const getAllServices = async () => {
    try {
      const response = await fetch('https://saylani-tech-backend.vercel.app/services/', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();
      console.log(data.services); // Log the fetched services
      setServiceList(data.services); // Set fetched services in state
    } catch (err) {
      setError(err.message); // Handle fetch errors
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  useEffect(() => {
    getAllServices();
    Aos.init({ duration: 1000 }); // Initialize AOS animation
  }, []);

  if (loading) {
    return <div>Loading services...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if fetch fails
  }

  return (
    <section className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center mb-20">
          <h1 className="text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text">
            OUR Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Crafting modern solutions to fuel your digital transformation journey.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {serviceList.map((service, index) => (
            <div className="p-4 lg:w-1/4 md:w-1/2" key={index} data-aos="fade-up">
              <div className="cardss h-full flex flex-col items-center text-center bg-gray-900 bg-opacity-80 shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-72 object-cover object-center mb-4 hover:opacity-90 transition-opacity duration-300"
                />
                <div className="content w-full p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
