import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamHero = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const links = [
        { name: 'Open roles', href: '#' },
        { name: 'Internship program', href: '#' },
        { name: 'Our values', href: '#' },
        { name: 'Meet our leadership', href: '#' },
    ];

    const stats = [
        { name: 'Offices worldwide', value: '12' },
        { name: 'Full-time colleagues', value: '300+' },
        { name: 'Hours per week', value: '40' },
        { name: 'Paid time off', value: 'Unlimited' },
    ];

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 flex items-center justify-center">
            <img
                alt="Background"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white transition-transform duration-500 transform hover:scale-105" data-aos="fade-up">
                        Our Team Members
                    </h2>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-300 transition-opacity duration-500 opacity-70 hover:opacity-100" data-aos="fade-up" data-aos-delay="100">
                        We are a global leader in innovation, dedicated to creating exceptional experiences for our customers and fostering a vibrant work environment for our team.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamHero;
