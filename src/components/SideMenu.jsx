import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SideMenu.css';

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul>
        <li><NavLink to="/" activeClassName="active" end>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default SideMenu;