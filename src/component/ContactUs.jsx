import React, { useState } from 'react';
import Swal from 'sweetalert2';
import getrequest from '../Config/mongodb';

const GetTicket = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    txt: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    return formErrors;
  };

  const getticket = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await getrequest({
          name: formData.name,
          email: formData.email,
          msg: formData.txt,
        });

        Swal.fire({
          icon: 'success',
          title: 'Ticket Generated',
          text: `Your ticket has been generated!`,
        });

        setFormData({
          name: '',
          email: '',
          txt: '', // Correctly clearing the 'txt' field now
        });
        console.log(response);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to generate ticket.',
        });
      }
    }
  };

  return (
    <section className="text-gray-600 body-font relative bg-gradient-to-b from-indigo-100 via-white to-indigo-50 py-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-indigo-900 drop-shadow-lg">
            Book Your Premium Ticket
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-gray-600 font-light">
            Reserve your spot for an unforgettable experience! Just fill out the form below and get instant confirmation.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={getticket} className="flex flex-wrap -m-2 bg-white rounded-lg p-10 shadow-xl border border-gray-100 transition-all hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="txt" className="leading-7 text-sm text-gray-700">Message</label>
                <textarea
                  id="txt"
                  name="txt"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 h-40 text-base outline-none text-gray-700 py-3 px-4 resize-none leading-8 transition-colors duration-300 ease-in-out"
                  value={formData.txt}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 rounded-full text-lg shadow-lg transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                Generate Ticket
              </button>
            </div>
          </form>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <span className="text-indigo-500 hover:text-purple-600">support@Smit.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTicket;