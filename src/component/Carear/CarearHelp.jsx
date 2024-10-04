import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const CarearHelp = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 p-4">
            <h1
                className="text-4xl font-bold mb-4 text-white"
                data-aos="fade-up"
            >
                How Can We Help You?
            </h1>
            <p
                className="text-lg text-white mb-6 text-center max-w-md"
                data-aos="fade-up"
                data-aos-delay="200" 
            >
                Are you ready to push boundaries and explore new frontiers of innovation?            </p>

            <Link to={'/jobletter'}>
                <button
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
                    data-aos="zoom-in" // AOS animation for the button
                    data-aos-delay="400"
                >
                    Lets Work Together
                </button>
            </Link>
        </div>
    );
};

export default CarearHelp;