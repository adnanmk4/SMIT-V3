import { useEffect, useState } from 'react';

const teamMembers = [
  { id: 1, name: 'Adnan Muhammad Sharif', position: 'Lead Developer', description: 'Specializing in frontend development and creating user-friendly interfaces.' },
  { id: 2, name: 'John Doe', position: 'Backend Developer', description: 'Expert in server-side logic and database management.' },
  { id: 3, name: 'Jane Smith', position: 'UI/UX Designer', description: 'Passionate about creating beautiful and intuitive user experiences.' },
  { id: 4, name: 'Emily Johnson', position: 'Project Manager', description: 'Ensuring projects run smoothly and deadlines are met.' },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000); // Change team member every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const displayedMembers = [
    teamMembers[currentIndex],
    teamMembers[(currentIndex + 1) % teamMembers.length],
    teamMembers[(currentIndex + 2) % teamMembers.length],
  ];

  return (
    <section className="bg-gray-100 py-12 mt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">Meet Our Team</h2>
        <div className="flex justify-center">
          {displayedMembers.map((member) => (
            <div
              key={member.id}
              className="w-64 mx-4 bg-white p-6 rounded-lg shadow-lg transition-transform duration-500"
            >
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <h4 className="text-lg text-gray-500 mb-4">{member.position}</h4>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;