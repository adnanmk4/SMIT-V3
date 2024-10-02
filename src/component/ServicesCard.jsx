import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../Styles/Servicecard.css';

const ServicesCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  const services = [
    {
      title: "Web and App Development",
      description: "Building robust and scalable web and mobile applications.",
      imgSrc: "https://camo.githubusercontent.com/db746ba4bb5946ea2c6646e6b758f9c036f59385449c92e02cdf63f0200429c8/68747470733a2f2f7777772e63726561746976656974696e737469747574652e636f6d2f696d616765732f636f757273652f636f757273655f313636333035323035362e6a7067",
    },
    {
      title: "Mobile Application Development",
      description: "Creating user-friendly mobile applications for iOS and Android.",
      imgSrc: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
    },
    {
      title: "Flutter",
      description: "Cross-platform app development with a beautiful UI using Flutter.",
      imgSrc: "https://www.ropstam.com/wp-content/uploads/2023/08/best-flutter-app-development-tools.webp",
    },
    {
      title: "Data Analysis",
      description: "Transforming data into actionable insights through analysis.",
      imgSrc: "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid",
    },
    {
      title: "UI Developer",
      description: "Designing intuitive and engaging user interfaces.",
      imgSrc: "https://w3sniff.com/common/article/ui-ux-design1.jpg",
    },
    {
      title: "Python & Chat Bot",
      description: "Developing intelligent chatbots using Python.",
      imgSrc: "https://www.kommunicate.io/blog/wp-content/uploads/2022/12/How-to-Create-a-WhatsApp-Chatbot-using-Flask-Python-Framework..png",
    },
    {
      title: "Cloud Computing",
      description: "Leveraging cloud technology to enhance scalability and performance.",
      imgSrc: "https://icsblog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2023/04/29163136/4-Pillars-of-Cloud-Computing-1.jpg",
    },
    {
      title: "Cybersecurity",
      description: "Protecting systems and networks from digital attacks.",
      imgSrc: "https://media.licdn.com/dms/image/D5612AQH-Kvvil-kYqQ/article-cover_image-shrink_720_1280/0/1703322126161?e=2147483647&v=beta&t=YUzMwe14hG9tbvLX4Y-E_VQeeCrovk-cSihA57rJgXc",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center mb-20">
          <h1 className="text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text">OUR Services</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Crafting modern solutions to fuel your digital transformation journey.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div className="p-4 lg:w-1/4 md:w-1/2" key={index} data-aos="fade-up">
              <div className="cardss h-full flex flex-col items-center text-center bg-gray-900 bg-opacity-80 shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img alt={service.title} className="rounded-lg w-full h-72 object-cover object-center mb-4 hover:opacity-90 transition-opacity duration-300" src={service.imgSrc} />
                
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
