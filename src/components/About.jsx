import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>B.Tech in Artificial Intelligence & Data Science from Sri Eshwar College of Engineering (CGPA: 8.4).</p>
      <p>Passionate about solving problems through programming and exploring new technologies.</p>
      <ul>
        <li><strong>Education:</strong> HSC (94%), SSLC (92%)</li>
        <li><strong>Email:</strong> sanjeevitha.cs2023ai-ds@sece.ac.in</li>
      </ul>
      <h3>Certifications</h3>
      <ul>
        <li>Certified in Web Development (Udemy, 2023)</li>
        <li>Certified in Programming with JavaScript (Coursera, 2024)</li>
        <li>Certified in C for Everyone: Programming Fundamentals (Coursera, 2024)</li>
        <li>Certified in Data Structures and Algorithms using C & C++ (Udemy, 2024)</li>
        <li>Certified in Database Management Systems (NPTEL, 2024)</li>
      </ul>

      <h3>Achievements</h3>
      <ul>
        <li>Solved 100+ problems on LeetCode</li>
        <li>Solved 70+ problems on CodeChef</li>
        <li>Earned Bronze badges in SQL and Python on HackerRank</li>
      </ul>

      <div className="resume-download">
        <a href="/resume.pdf" download="Sanjeevitha_Resume.pdf" className="resume-button">
          <span role="img" aria-label="download">📄</span> Download My Resume
        </a>
      </div>
    </section>
  );
};

export default About;
