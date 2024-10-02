import React from 'react';
import { Link } from 'react-router-dom';

const AppPortFolio = () => {
    // Array of unique image URLs
    const images = [
        "https://media.geeksforgeeks.org/wp-content/uploads/20240221232203/screen-capture-ezgifcom-video-to-gif-converter.gif",
        "https://j.gifs.com/WP16vx.gif",
        "https://www.cluemediator.com/wp-content/uploads/2020/12/output-integrate-stripe-payment-gateway-in-react-clue-mediator.gif",
        "https://lh5.googleusercontent.com/xi9lpQvZwaTKwvOzU54V8r1W7fNLvpz3tTiT6CVizdIxVp1ICZI0PPhkJKPeaq_eWAkdWbxnB9N97eLeCg-_VwmyBAunlAgK7ZymSQ3e7_N2NwVajzVf0hXlb9LeHdEDNe6Xzt_b",
        "https://i.imgur.com/tpm0k7u.gif",
        "https://mastery.games/gif/reddesign.gif",
    ];

    // Array of project titles and descriptions
    const projects = [
        {
            title: "TIMER APP",
            description: "Timer App is with a cool gradient Background.",
        },
        {
            title: "TO-DO APP",
            description: "To-Do App where you can list your daily tasks .",
        },
        {
            title: "PAYMENT METHOD",
            description: "A Payment Method App where you can pay your bills.",
        },
        {
            title: "TIC TAC TOE",
            description: "Tic Tac Toe a game to enjoy with your friends.",
        },
        {
            title: "ARCADE GAME",
            description: "A Arcade Game to enjoy online with friends.",
        },
        {
            title: "FLYING CARS",
            description: "A Game where you can fly cars and e.",
        },
    ];

    return (
        <>
            <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
                <div className="container px-5 mx-auto">
                    {/* Centered heading */}
                    <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-md transition duration-500 hover:scale-105 hover:drop-shadow-lg mb-10">
                        Our Projects
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Card 1 */}
                        {Array.from({ length: images.length }).map((_, index) => (
                            <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={`portfolio-item-${index}`}>
                                <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl h-64 group">
                                    <img
                                        alt={projects[index].title} // Using custom project title for alt text
                                        className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-110"
                                        src={images[index]} // Using unique image for each card
                                        loading="lazy" // Lazy loading for images
                                    />
                                    <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 group-hover:bg-opacity-90 group-hover:opacity-100 p-6">
                                        <h2 className="tracking-widest text-lg md:text-xl lg:text-2xl font-bold text-indigo-600 mb-1">
                                            {projects[index].title} {/* Custom project title with larger font size */}
                                        </h2>
                                        <p className="leading-relaxed mb-2 text-center text-sm">
                                            {projects[index].description} {/* Updated project description */}
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
