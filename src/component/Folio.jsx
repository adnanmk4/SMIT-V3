import React from 'react';
import { Link } from 'react-router-dom';

const AppPortFolio = () => {
    // Array of unique image URLs
    const images = [
        "https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz8a5wnnl0tqv589bgvdz.png",
        "https://miro.medium.com/v2/resize:fit:1400/0*rgxBZQVyrT1iiLIA.png",
        "https://www.cluemediator.com/wp-content/uploads/2020/12/output-integrate-stripe-payment-gateway-in-react-clue-mediator.gif",
        "https://via.placeholder.com/400x250?text=Project+4",
        "https://via.placeholder.com/400x250?text=Project+5",
        "https://via.placeholder.com/400x250?text=Project+6",
    ];

    return (
        <>
            <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
                <div className="container px-5 mx-auto">
                    {/* Centered heading */}
                    <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-md transition duration-500 hover:scale-105 hover:drop-shadow-lg mb-10">
                        Our Portfolio
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Card 1 */}
                        {Array.from({ length: images.length }).map((_, index) => (
                            <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={`portfolio-item-${index}`}>
                                <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl h-64 group">
                                    <img
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-110"
                                        src={images[index]} // Using unique image for each card
                                    />
                                    <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 group-hover:bg-opacity-90 group-hover:opacity-100 p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-indigo-600 mb-1">
                                            THE SUBTITLE {index + 1}
                                        </h2>
                                        <h1 className="title-font text-2xl font-semibold text-gray-900 mb-2">
                                            Project Title {index + 1}
                                        </h1>
                                        <p className="leading-relaxed mb-2 text-center text-sm">
                                            Brief description of the project {index + 1}.
                                        </p>
                                        <Link
                                            to="/details"
                                            className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out"
                                        >
                                            Learn More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 ml-1 transition-transform transform group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppPortFolio;
