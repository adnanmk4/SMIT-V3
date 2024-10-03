import React from 'react';

const UIdesigner = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My UI Design Portfolio</h1>
          <p className="text-lg mb-8">Creating Beautiful and User-Friendly Interfaces</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-400">
          I am a passionate UI designer with a knack for creating visually stunning and intuitive user interfaces.
          My goal is to enhance user experience through thoughtful design and usability. With over 5 years of experience
          in the industry, I have worked with diverse clients to deliver projects that meet their needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-800 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Services Offered</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-700 p-6 rounded-lg m-4 w-80 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">UI Design</h3>
            <p className="text-gray-400 mb-4">
              Crafting clean and modern user interfaces that elevate user experience.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg m-4 w-80 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">Prototyping</h3>
            <p className="text-gray-400 mb-4">
              Creating interactive prototypes to visualize the end product and gather feedback.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg m-4 w-80 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">User Research</h3>
            <p className="text-gray-400 mb-4">
              Conducting user research to understand user needs and improve designs.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-10">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/** Replace with your project images and links */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Project 1</h3>
              <p className="text-gray-400">Description of project 1.</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Project 2</h3>
              <p className="text-gray-400">Description of project 2.</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Project 3</h3>
              <p className="text-gray-400">Description of project 3.</p>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-10">What Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-700 p-6 rounded-lg m-4 w-80 shadow-lg hover:shadow-2xl transition duration-300">
            <p className="text-gray-400 mb-4">
              "The best UI designer I've worked with! Delivered on time and exceeded expectations."
            </p>
            <p className="text-white font-bold">- Client Name</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg m-4 w-80 shadow-lg hover:shadow-2xl transition duration-300">
            <p className="text-gray-400 mb-4">
              "Incredible attention to detail and a great communicator. Highly recommend!"
            </p>
            <p className="text-white font-bold">- Client Name</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            rows="4"
          ></textarea>
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default UIdesigner;
