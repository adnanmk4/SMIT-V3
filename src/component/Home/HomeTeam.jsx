import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.png';
import pic4 from '../../assets/pic4.webp';
import pic5 from '../../assets/pic5.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Team members array
const teamMembers = [
  { id: 1, name: 'Aliyan Sheikh', position: 'Lead Developer', description: 'Expert in full-stack development', image: pic2 },
  { id: 2, name: 'Zeshan Ijaz', position: 'Backend Developer', description: 'Specialized in Node.js and databases', image: pic3 },
  { id: 3, name: 'Wajid Ahmed', position: 'UI/UX Designer', description: 'Creating user-friendly designs', image: pic4 },
  { id: 4, name: 'Fatima Khalil', position: 'Project Manager', description: 'Overseeing project execution ', image: pic5 },
];

const TeamSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  // Slider settings
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-indigo-800 py-14 mt-14">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10" data-aos="fade-down">Meet Our Team</h2>
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              <div
                className="bg-black shadow-2xl border border-indigo-500 transform transition duration-500 hover:scale-105 hover:shadow-indigo-600 rounded-lg p-5 mx-5"
                data-aos="flip-left"
              ><center>
                    <figure className="mr-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover h-24 w-24 rounded-full border-4 border-indigo-500 shadow-lg"
                    data-aos="zoom-in"
                  />
                </figure>

              </center>

              <br />
               
         
                
                <div className="cards-body">
                  <h3 className="cards-title text-2xl font-semibold text-white mb-1" data-aos="fade-right">{member.name}</h3>
                  <h4 className="text-lg text-gray-300 mb-2" data-aos="fade-left">{member.position}</h4>
                  <p className="text-gray-200" data-aos="fade-up">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
