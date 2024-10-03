import React from 'react';

const Cto = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Chief Technology Officer (CTO)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          As the Chief Technology Officer (CTO), you will play a crucial role in shaping the technological strategy and vision of our company. You will lead the technology team to develop innovative solutions and ensure the alignment of technology with our business goals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Develop and implement the company’s technology strategy and roadmap.</li>
          <li>Lead the technology team and manage software development processes.</li>
          <li>Identify and evaluate new technologies and software solutions.</li>
          <li>Collaborate with other departments to align technology with business objectives.</li>
          <li>Ensure the security and scalability of all technology platforms.</li>
          <li>Mentor and develop team members to enhance their skills and capabilities.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Bachelor’s degree in Computer Science, Engineering, or a related field (Master’s preferred).</li>
          <li>Proven experience as a CTO or similar leadership role.</li>
          <li>Strong understanding of software development, system architecture, and data management.</li>
          <li>Excellent leadership and team management skills.</li>
          <li>Strong problem-solving and analytical abilities.</li>
          <li>Excellent communication and interpersonal skills.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Join Us?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Join our innovative team and lead the technology vision of a company dedicated to excellence. We value creativity, collaboration, and continuous learning. You will have the opportunity to work with cutting-edge technologies and make a significant impact on our products and services.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors">
          Apply Now
        </button>
      </section>
    </div>
  );
}

export default Cto;
