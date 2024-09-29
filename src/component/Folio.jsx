'use client';
import React from 'react';

// Sample project data
const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'An innovative project that solves problems effectively.',
        image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q',
        link: '#',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'A cutting-edge application that enhances user experience.',
        image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q',
        link: '#',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'A revolutionary tool designed to simplify complex tasks.',
        image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q',
        link: '#',
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'An engaging platform that connects people seamlessly.',
        image: 'https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg',
        link: '#',
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'An engaging platform that connects people seamlessly.',
        image: 'https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg',
        link: '#',
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'An engaging platform that connects people seamlessly.',
        image: 'https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg',
        link: '#',
    },
];

// AppPortfolio Component
const AppPortfolio = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Header Section */}
            <header className="text-center mb-10">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
                    My Portfolio
                </h1>
                <p className="mt-4 text-lg text-gray-700 italic">Explore my work and passion projects.</p>
            </header>
            
            {/* Projects Section */}
            <section className="my-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl relative">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mt-2">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300 relative"
                                >
                                    View Project
                                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-indigo-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Skills Section */}
            <section className="my-10">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Skills & Technologies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        { skill: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg' },
                        { skill: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg' },
                        { skill: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/css3.svg' },
                        { skill: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/node-dot-js.svg' },
                        { skill: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mongodb.svg' },
                        { skill: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/tailwindcss.svg' },
                        { skill: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg' },
                        { skill: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg' },
                    ].map(({ skill, icon }) => (
                        <div key={skill} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 relative">
                            <img src={icon} alt={skill} className="h-12 w-12 mb-2" />
                            <h3 className="font-semibold text-lg text-gray-800 text-center">{skill}</h3>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-600 opacity-0 transition-opacity duration-300 hover:opacity-30"></span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AppPortfolio;
