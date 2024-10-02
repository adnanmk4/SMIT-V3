import React from 'react';
import { Link } from 'react-router-dom';

const JobApplicationPage = () => {
  const jobListings = [
    { name: 'UI Designer', img: 'https://dummyimage.com/80x80', description: 'Designing intuitive user interfaces', id: 1, link: '/uidesigner' },
    { name: 'CTO', img: 'https://dummyimage.com/84x84', description: 'Leading technical teams', id: 2, link: '/cto' },
    { name: 'Founder', img: 'https://dummyimage.com/88x88', description: 'Building the future', id: 3, link: '/founder' },
    { name: 'DevOps Engineer', img: 'https://dummyimage.com/90x90', description: 'Ensuring seamless operations', id: 4, link: '/devops' },
    { name: 'Software Engineer', img: 'https://dummyimage.com/94x94', description: 'Building innovative software', id: 5, link: '/softwareengineer' },
    { name: 'QA Engineer', img: 'https://dummyimage.com/100x90', description: 'Ensuring quality in every release', id: 6, link: '/qaengineer' },
   ];


  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-gray-100 via-blue-100 to-blue-200 py-16">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-blue-900">Join Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            We are always on the lookout for talented individuals who are passionate about their work. Explore our open positions and become a part of our team.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Job Listing */}
          {jobListings.map((job) => (
            <div key={job.id} className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border border-blue-300 bg-white shadow-md p-6 rounded-lg transition-transform hover:scale-105">
                <Link to={job.link} className="flex-grow">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={job.img} />
                  <h2 className="text-blue-900 title-font font-medium text-lg">{job.name}</h2>
                  <p className="text-gray-600">{job.description}</p>
                </Link>
                <Link to={job.link}>
                  <button className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobApplicationPage;
