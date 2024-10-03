import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

Modal.setAppElement('#root');

const CareerServices = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Graduates',
      subtitle: 'Our Graduates',
      description: 'We provide cutting-edge web services to make your digital presence stronger.',
      image: 'https://hbr.org/resources/images/article_assets/2019/04/Apr19_11_-AA002075.jpg',
    },
    {
      id: 2,
      title: 'Experienced Professionals',
      subtitle: 'Our Experienced Professionals',
      description: 'From front-end to back-end, we develop web applications that drive success.',
      image: 'https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2023%2F05%2Fmba-for-working-professionals.jpg&w=1920&q=75',
    },
    {
      id: 3,
      title: 'Internship/MTO',
      subtitle: 'Our Internship/MTO',
      description: 'Create high-performance mobile applications tailored to your business needs.',
      image: 'https://infotechgroup.com/wp-content/uploads/2024/05/values-03-1.webp',
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 py-16 relative">
        {/* Add subtle background pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-5 mx-auto relative z-10">
          <h2 data-aos="fade-up" className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide text-shadow-lg">
            Our Premium Services
          </h2>

          <div className="flex flex-wrap justify-center -m-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-4 lg:w-1/4 md:w-1/2 w-full"
                data-aos="fade-up"
              >
                <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105 h-80 flex flex-col">
                  {/* Add gradient overlay to image */}
                  <div className="relative h-40">
                    <img
                      alt="service"
                      className="w-full h-full object-cover object-center rounded-t-lg"
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 rounded-t-lg"></div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <h2 className="text-lg font-bold text-white mb-2 text-shadow-sm">{service.title}</h2>
                    <h3 className="text-sm text-indigo-400 mb-2">{service.subtitle}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for displaying service details */}
      {selectedService && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Service Details"
          className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all duration-300 scale-105"
          overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-shadow-lg">{selectedService.title}</h2>
          <img
            alt="service"
            className="w-full h-56 object-cover object-center mb-4 rounded-lg"
            src={selectedService.image}
          />
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">{selectedService.subtitle}</h3>
          <p className="text-gray-400 mb-4">{selectedService.description}</p>
          <button
            onClick={closeModal}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Close
          </button>
        </Modal>
      )}
    </>
  );
};

export default CareerServices;