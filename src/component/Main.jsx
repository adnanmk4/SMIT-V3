import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const links = [
    { name: 'Open Roles', href: '#' },
    { name: 'Internship Program', href: '#' },
    { name: 'Our Values', href: '#' },
    { name: 'Meet Our Leadership', href: '#' },
  ];

  const stats = [
    { name: 'Offices Worldwide', value: '12' },
    { name: 'Full-Time Colleagues', value: '300+' },
    { name: 'Hours Per Week', value: '40' },
    { name: 'Paid Time Off', value: 'Unlimited' },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 flex items-center justify-center">
      <img
        alt="Background"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl transition-transform duration-500 transform hover:scale-105"
            data-aos="fade-up"
          >
            About Us
          </h2>
          <p
            className="mt-6 text-lg leading-8 text-gray-300 transition-opacity duration-500 opacity-80 hover:opacity-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are a global leader in innovation, dedicated to creating exceptional experiences for our customers and fostering a vibrant work environment for our team.
          </p>
          <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-white">Explore Opportunities</h3>
            <div className="flex flex-col md:flex-row md:space-x-4 mt-4 justify-center">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100} // Incremental delay for each link
                >
                  <span className="text-lg font-semibold">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105 overflow-hidden flex flex-col justify-between"
                data-aos="fade-up"
              >
                <h4 className="text-xl font-bold text-indigo-400">{stat.value}</h4>
                <p className="text-gray-300 text-base">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
