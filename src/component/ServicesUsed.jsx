import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ServicesUsed = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-12 mx-auto"> {/* Reduced padding */}
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-full" data-aos="fade-up"> {/* Added AOS */}
            <h2 className="title-font font-medium sm:text-5xl text-4xl text-white">2.7K</h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-full" data-aos="fade-up" data-aos-delay="100"> {/* Added AOS with delay */}
            <h2 className="title-font font-medium sm:text-5xl text-4xl text-white">1.8K</h2>
            <p className="leading-relaxed">Subscribers</p>
          </div>
          <div className="p-4 sm:w-1/4 w-full" data-aos="fade-up" data-aos-delay="200"> {/* Added AOS with delay */}
            <h2 className="title-font font-medium sm:text-5xl text-4xl text-white">35</h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/4 w-full" data-aos="fade-up" data-aos-delay="300"> {/* Added AOS with delay */}
            <h2 className="title-font font-medium sm:text-5xl text-4xl text-white">4</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesUsed;
