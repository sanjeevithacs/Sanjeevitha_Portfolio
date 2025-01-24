import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul>
        <li>Programming: Java, Python, HTML, CSS, C++</li>
        <li>Core: Data Structures and Algorithms</li>
        <li>Tools: VSCode, Canva, GitHub</li>
      </ul>
      <div className="profiles">
        <h3>Profiles</h3>
        <ul className="profile-links">
          <li>
            <a href="https://leetcode.com/u/Sanjeevitha_cs/" target="_blank" rel="noopener noreferrer" className="profile-link"> LeetCode Profile</a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/profile/sanjeevitha_cs21" target="_blank" rel="noopener noreferrer" className="profile-link">HackerRank Profile</a>
          </li>
          <li>
            <a href="https://www.codechef.com/users/sanjeevithacs" target="_blank" rel="noopener noreferrer" className="profile-link">CodeChef Profile</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
