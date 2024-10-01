import React from 'react';

const ContactUsed = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
            Our Achievements
          </h2>
          <div className="flex flex-wrap justify-center -m-4 text-center">
            {[
              { id: 1, number: '2.7K', label: 'Users' },
              { id: 2, number: '1.8K', label: 'Subscribes' },
              { id: 3, number: '35', label: 'Downloads' },
              { id: 4, number: '4', label: 'Products' },
            ].map((item) => (
              <div key={item.id} className="p-2 sm:w-1/4 w-1/2">
                <h2 className="title-font font-bold sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
                  {item.number}
                </h2>
                <p className="leading-relaxed text-md text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsed;
