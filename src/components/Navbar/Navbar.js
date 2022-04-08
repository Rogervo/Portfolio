import React from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';


function Navbar() {
  return (
    <nav className='navBar'>
      <div className='navContainer'>
          <li className='navLink'>
              <Link to="About" smooth={true} duration={1000}>About Me</Link> 
          </li>
          <li className='navLink'>
              <Link to="PersonalSkillStack" smooth={true} duration={1000}>Skills</Link> 
          </li>
          <li className='navLink'>
              <Link to="Projects" smooth={true} duration={1000}>Projects</Link> 
          </li>
          <li className='navLink'>
              <Link to="Contact" smooth={true} duration={1000}>Contact</Link> 
          </li>
        </div>
    </nav>
  )
}

export default Navbar