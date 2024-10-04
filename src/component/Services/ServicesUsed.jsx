import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesUsed = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {data.map((item, index) => (
            <div
              className="p-4 sm:w-1/4 w-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={item.label}
            >
              <h2 className="title-font font-medium sm:text-5xl text-4xl text-white">
                {item.currentValue}
                {item.currentValue === item.value ? '+' : ''}
              </h2>
              <p className="leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const dummyData = [
  { label: 'Users', value: 2700 },
  { label: 'Subscribers', value: 1800 },
  { label: 'Downloads', value: 350 },
  { label: 'Products', value: 400 }
];

const servicesUsed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateValues = () => {
      const updatedData = dummyData.map((item) => ({
        ...item,
        currentValue: 0 
      }));
      setData(updatedData);

      updatedData.forEach((item, index) => {
        const duration = 3000;
        const steps = duration / 50; // Number of updates (based on 50ms intervals)
        const increment = Math.ceil(item.value / steps); // Dynamic increment based on value

        const interval = setInterval(() => {
          setData((prevData) =>
            prevData.map((d, i) =>
              i === index && d.currentValue < item.value
                ? { ...d, currentValue: Math.min(d.currentValue + increment, item.value) }
                : d
            )
          );
        }, 50);
        setTimeout(() => clearInterval(interval), duration); 
      });
    };

    setTimeout(updateValues, 1000); 
  }, []);

  return (
    <div>
      <ServicesUsed data={data} />
    </div>
  );
};

export default servicesUsed;