import React from 'react';

const Founder = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Founder</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          As the Founder, you will be the visionary behind our company, responsible for setting the strategic direction and driving innovation. Your leadership will inspire our team to build a culture of excellence and creativity, ensuring our long-term success and impact in the industry.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Define the vision, mission, and overall strategy of the company.</li>
          <li>Lead business development efforts and establish key partnerships.</li>
          <li>Oversee operations, financial performance, and resource management.</li>
          <li>Foster a culture of innovation, collaboration, and accountability.</li>
          <li>Represent the company in industry events, conferences, and networking opportunities.</li>
          <li>Mentor and support team members to achieve their potential.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Proven experience in a leadership role, preferably as a founder or co-founder.</li>
          <li>Strong entrepreneurial spirit with a track record of success in building businesses.</li>
          <li>Excellent strategic thinking and decision-making abilities.</li>
          <li>Exceptional communication and interpersonal skills.</li>
          <li>Experience in fundraising and managing investor relationships.</li>
          <li>Ability to inspire and lead a diverse team towards common goals.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Join Us?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Join us at the forefront of innovation and entrepreneurship! As the Founder, you will have the opportunity to shape the future of our company and make a lasting impact on the industry. We value creativity, collaboration, and a commitment to excellence, making it a rewarding experience for you and your team.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors">
          Join Us
        </button>
      </section>
    </div>
  );
}

export default Founder;
