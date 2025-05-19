import React from 'react';
import './Projects.css';

import proj1 from '../../assets/cwscan.png';
import proj2 from '../../assets/restaurent.png';
import proj3 from '../../assets/portfolio_image.png'
const projects = [
  {
    title: 'CWScan',
    description: 'A web application designed to evaluate resumes against job descriptions using ATS (Applicant Tracking System) criteria. The system helps job seekers optimize their resumes by scoring how well they match a given job description.',
    image: proj1,
    alt: 'CWScan Project Screenshot',
  
  },
  {
    title: 'Restaurant App',
    description: 'A full-featured restaurant web application that allows users to view a dynamic menu and reserve rooms for dine-in or private events. Designed to streamline restaurant operations and enhance customer experience.',
    image: proj2,
    alt: 'Restaurant App Project Screenshot',

  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio website showcasing my technical skills, resume, academic background, and project experience. Designed as a professional platform to present my profile to recruiters and collaborators.',
    image: proj3
  }
];const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title">
        <h1 className="gradient-heading">My Projects</h1>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.alt || 'Project Screenshot'} 
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
