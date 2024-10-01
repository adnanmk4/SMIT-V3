import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles

const Web = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a 1-second animation
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Web and App Development</h1>
      
      <div data-aos="fade-right">
        <h2>What is Web Development?</h2>
        <p>
          Web development refers to the process of creating websites and web applications. 
          It involves building, maintaining, and optimizing websites using technologies 
          like HTML, CSS, JavaScript, and frameworks such as React or Angular. Web 
          developers focus on both the front-end (what users interact with) and back-end 
          (server-side operations) aspects of development.
        </p>
      </div>

      <div data-aos="fade-left">
        <h2>What is App Development?</h2>
        <p>
          App development refers to creating applications for mobile devices or desktops. 
          These apps can be native (built for a specific platform, like iOS or Android) 
          or cross-platform (using tools like React Native, Flutter). The process includes 
          designing the user interface, writing code, and testing the app for performance.
        </p>
      </div>

      <div data-aos="fade-up">
        <h2>Key Technologies in Web and App Development</h2>
        <ul>
          <li>HTML, CSS, and JavaScript</li>
          <li>React.js, Angular, and Vue.js for web</li>
          <li>React Native, Flutter for app development</li>
          <li>Node.js, Express.js for backend web apps</li>
          <li>Databases: MongoDB, Firebase, MySQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Web;
