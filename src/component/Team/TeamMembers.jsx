import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMembers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const teamMembers = [
    {
      name: 'Alper Kamu',
      role: 'UI Developer',
      description: 'Skilled in creating intuitive user interfaces with a focus on seamless user experiences.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrISD3_lXhqhe75EKhwYAo9jYZAqAj7IhcQg&s',
      delay: 0,
    },
    {
      name: 'Holden Caulfield',
      role: 'Frontend Engineer',
      description: 'Specializes in building responsive and interactive web applications.',
      img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
      delay: 100,
    },
    {
      name: 'Samantha Jones',
      role: 'Backend Developer',
      description: 'Experienced in designing scalable backend systems and working with databases.',
      img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Joe-Gaunt-200x200.jpg',
      delay: 200,
    },
    {
      name: 'Chris Evans',
      role: 'Full Stack Developer',
      description: 'Passionate about combining front-end and back-end technologies to create full-scale solutions.',
      img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Francis-Ko-200x200.jpg',
      delay: 300,
    },
    {
      name: 'Olivia Turner',
      role: 'Product Manager',
      description: 'Leads cross-functional teams to ensure the delivery of high-quality products.',
      img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
      delay: 400,
    },
    {
      name: 'Lucas Lee',
      role: 'UX Designer',
      description: 'Designs user-friendly interfaces based on in-depth user research.',
      img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Alison-Cameron-200x200.jpg',
      delay: 500,
    },
    {
      name: 'Emily Smith',
      role: 'Data Scientist',
      description: 'Uses data to drive decision-making and uncover business insights.',
      img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Kevin-Yates-200x200.jpg',
      delay: 600,
    },
    {
      name: 'David Johnson',
      role: 'DevOps Engineer',
      description: 'Optimizes development pipelines and ensures continuous integration and delivery.',
      img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Richard-Evans-200x200.jpg',
      delay: 700,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-gray-400 py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            OUR Special Members
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet our amazing team, each member brings unique skills and experience to the table.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {teamMembers.map((member) => (
            <div className="p-2" data-aos="fade-up" data-aos-delay={member.delay} key={member.name}>
              <div className="h-full flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl relative">
                <img
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-full h-40 object-cover object-center mb-2"
                  src={member.img}
                />
                <div className="w-full p-3">
                  <h2 className="title-font font-medium text-lg text-indigo-600">{member.name}</h2>
                  <h3 className="text-gray-600 mb-2 text-sm">{member.role}</h3>
                  <p className="mb-4 text-gray-600 text-xs">{member.description}</p>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
