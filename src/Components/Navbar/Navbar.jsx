import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import PortfolioLogo from '../../assets/PortfolioLogo';
const Navbar = () => {
  return (
    <div className='navbar'>
      <PortfolioLogo size={150} /> 
        
        <ul className='nav-menu'>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About me</Link></li>
  <li><Link to="/projects">Projects</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/resume">Resume</Link></li>
</ul>
        
        </div>

  )
}

export default Navbar