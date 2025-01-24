import React from 'react';
import '../styles/Projects.css';
const projectData = [
  {
    title: 'Bank Application',
    description: 'A Java-based console application for managing bank accounts and transactions. Features include account creation, deposits, withdrawals, and balance inquiries.',
    link: 'https://github.com/sanjeevithacs/java-dbms-project_leap_2024_BankApplication',
  },
  {
    title: 'Vendor Contract Management',
    description: 'Simplifies vendor registration and contract management using MySQL. Enables CRUD operations for vendor and contract data.',
    link: 'https://github.com/sanjeevithacs/java-dbms-project_leap_2024_Vendor-ContractManagement',
  },
  {
    title: 'Game Scheduler and Score Calculator',
    description: 'Manages sports event schedules and calculates scores. Developed with Java and MySQL.',
    link: 'https://github.com/sanjeevithacs/java-dbms-project_leap_2024_GameSchedular-ScoreCalculator',
  },
  {
    title: 'Cryptocurrency Analysis',
    description: 'Tracks real-time cryptocurrency trends and includes predictive analytics for price forecasting. Features a user-friendly interface.',
    link: 'https://github.com/sanjeevithacs/Cryptocurrency-Analysis',
  },
  {
    title: 'PhoneBook Management',
    description: 'A C program that manages phonebook operations, including adding, deleting, and searching contacts. Includes file handling and error management.',
    link: '#',
  },
  {
    title: 'Clash of Choices',
    description: 'A Rock-Paper-Scissors game with Python backend and HTML/CSS/JavaScript frontend for an interactive gaming experience.',
    link: '#',
  },
  {
    title: 'Website Traffic Forecasting',
    description: 'Python-based tool for analyzing past website traffic trends and predicting future performance with advanced algorithms.',
    link: '#',
  },
  {
    title: 'Sudoku Game',
    description: 'A C++ program for Sudoku, featuring puzzle generation, solution validation, and efficient memory management.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;