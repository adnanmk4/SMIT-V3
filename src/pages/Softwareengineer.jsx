import React from 'react';

const SoftwareEngineer = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Software Engineer</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          As a Software Engineer, you will be responsible for designing, developing, and maintaining software applications. You will work closely with cross-functional teams to deliver high-quality software solutions that meet our business needs and enhance user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Develop and maintain scalable and efficient software applications.</li>
          <li>Collaborate with product managers and designers to understand user requirements.</li>
          <li>Participate in code reviews and maintain coding standards.</li>
          <li>Troubleshoot, debug, and optimize existing applications.</li>
          <li>Write clear, maintainable, and testable code.</li>
          <li>Stay up-to-date with industry trends and technologies to innovate and improve solutions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Bachelor’s degree in Computer Science, Software Engineering, or a related field.</li>
          <li>Proven experience as a Software Engineer or similar role.</li>
          <li>Strong knowledge of programming languages such as Java, Python, C#, or JavaScript.</li>
          <li>Familiarity with web frameworks (React, Angular, or Vue.js) and database systems (SQL or NoSQL).</li>
          <li>Experience with version control systems (e.g., Git).</li>
          <li>Excellent problem-solving and analytical skills.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Join Us?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Join our innovative team of software developers and contribute to building cutting-edge solutions that make a difference! We provide an inclusive and collaborative environment, opportunities for growth, and the chance to work with the latest technologies. Be part of our mission to drive technological advancement and deliver exceptional user experiences.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors">
          Apply Now
        </button>
      </section>
    </div>
  );
}

export default SoftwareEngineer;
