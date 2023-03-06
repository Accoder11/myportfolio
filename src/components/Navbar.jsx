import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="Logo" width="50" height="40" className="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/education" className="nav-link" >Education and Trainings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experience" className="nav-link">Work Experience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">Skills and Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contac Me</NavLink>
            </li>
          </ul>
          <button className="btn btn-outline-light btn-lg resume" type="submit">
            <a href="https://drive.google.com/file/d/1jVGsE-9fmbMDOmSM6arFqmQdZVTOi6EI/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
