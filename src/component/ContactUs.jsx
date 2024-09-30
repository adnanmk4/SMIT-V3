import React from 'react';

const GetTicket = () => {
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
          <div className="flex flex-wrap -m-2 bg-white rounded-lg p-10 shadow-xl border border-gray-100 transition-all hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="firstName" className="leading-7 text-sm text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                />
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
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                />
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
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                />
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
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                />
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
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                >
                  <option value="General Admission">General Admission</option>
                  <option value="VIP">VIP</option>
                  <option value="Student">Student</option>
                </select>
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
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 rounded-full text-lg shadow-lg transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
                Generate Ticket
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto:support@tickets.com" className="text-indigo-500 hover:text-purple-600">
                support@Smit.com
              </a><br /><br />
              <span className="inline-flex">
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition duration-200">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="ml-4 text-gray-500 hover:text-indigo-600 transition duration-200">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" className="ml-4 text-gray-500 hover:text-indigo-600 transition duration-200">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8a4 4 0 013.37 3.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a href="#" className="ml-4 text-gray-500 hover:text-indigo-600 transition duration-200">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zm-2.27 8.73L12 16l-1.73 2.73M12 8v4m0 4h.01"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTicket;
