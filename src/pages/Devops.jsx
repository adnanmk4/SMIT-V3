import React from 'react';

const Devops = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">DevOps Engineer</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          As a DevOps Engineer, you will play a critical role in our software development and operational processes. You will work collaboratively with development and operations teams to automate and optimize our deployment processes, ensuring continuous integration and delivery while maintaining high system reliability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Develop and maintain CI/CD pipelines to automate deployment processes.</li>
          <li>Monitor and manage system performance, ensuring reliability and availability.</li>
          <li>Collaborate with development teams to design scalable and efficient systems.</li>
          <li>Implement infrastructure as code using tools like Terraform or CloudFormation.</li>
          <li>Manage cloud environments and on-premises infrastructure.</li>
          <li>Conduct system troubleshooting and resolve issues in production environments.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Bachelor’s degree in Computer Science, Information Technology, or a related field.</li>
          <li>Proven experience in a DevOps role or similar position.</li>
          <li>Strong understanding of containerization technologies (Docker, Kubernetes).</li>
          <li>Experience with CI/CD tools (Jenkins, GitLab CI, CircleCI).</li>
          <li>Familiarity with scripting languages (Python, Bash, etc.).</li>
          <li>Excellent problem-solving and analytical skills.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Join Us?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Join our dynamic team and help shape the future of our technology infrastructure! As a DevOps Engineer, you will work in a fast-paced environment with the latest technologies, collaborating with talented individuals. We offer opportunities for professional growth, a culture of innovation, and the chance to make a real impact on our business.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors">
          Apply Now
        </button>
      </section>
    </div>
  );
}

export default Devops;
