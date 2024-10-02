'use client';
import React from 'react';

// AppPortfolio Component
const TeamSkills = () => {
    const skills = [
        { skill: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg' },
        { skill: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg' },
        { skill: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/css3.svg' },
        { skill: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/node-dot-js.svg' },
        { skill: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mongodb.svg' },
        { skill: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/tailwindcss.svg' },
        { skill: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/git.svg' },
        { skill: 'Redux', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/redux.svg' },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Skills Section */}
            <section className="my-10">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Skills & Technologies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map(({ skill, icon }) => (
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

export default TeamSkills;
