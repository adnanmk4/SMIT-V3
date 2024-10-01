import React, { useState } from 'react';
import Swal from 'sweetalert2';

const GetTicket = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    event: '',
    ticketType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.event) formErrors.event = 'Event name is required';
    if (!formData.ticketType) formErrors.ticketType = 'Ticket type is required';
    return formErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      Swal.fire({
        icon: 'success',
        title: 'Ticket Generated',
        text: `Your ticket for ${formData.event} has been generated!`,
      });
      // Optionally clear the form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        event: '',
        ticketType: '',
        message: '',
      });
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
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2 bg-white rounded-lg p-10 shadow-xl border border-gray-100 transition-all hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="firstName" className="leading-7 text-sm text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200`}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="lastName" className="leading-7 text-sm text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200`}
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="event" className="leading-7 text-sm text-gray-700">
                  Event Name
                </label>
                <input
                  type="text"
                  id="event"
                  name="event"
                  placeholder="e.g., Concert, Workshop, Seminar"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${errors.event ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200`}
                  value={formData.event}
                  onChange={handleChange}
                />
                {errors.event && <p className="text-red-500 text-xs mt-1">{errors.event}</p>}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="ticketType" className="leading-7 text-sm text-gray-700">
                  Ticket Type
                </label>
                <select
                  id="ticketType"
                  name="ticketType"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${errors.ticketType ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200`}
                  value={formData.ticketType}
                  onChange={handleChange}
                >
                  <option value="">Select Ticket Type</option>
                  <option value="General Admission">General Admission</option>
                  <option value="VIP">VIP</option>
                  <option value="Student">Student</option>
                </select>
                {errors.ticketType && <p className="text-red-500 text-xs mt-1">{errors.ticketType}</p>}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-700">
                  Additional Requests or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 h-40 text-base outline-none text-gray-700 py-3 px-4 resize-none leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                  placeholder="Let us know if you have any special requests."
                  value={formData.message}
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
            <a href="mailto:support@tickets.com" className="text-indigo-500 hover:text-purple-600">
              support@Smit.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTicket;
