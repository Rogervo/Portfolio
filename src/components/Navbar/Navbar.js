import React from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';


function Navbar() {
  return (
    <nav className='navBar'>
      <div className='navContainer'>
          <li className='navLink' data-aos="fade-right" data-aos-duration="1000">
              <Link to="About" smooth={true} duration={1000}>ABOUT ME</Link> 
          </li>
          <li className='navLink' data-aos="fade-right" data-aos-duration="1000" >
              <Link to="PersonalSkillStack" smooth={true} duration={1000}>SKILLS</Link> 
          </li>
          <li className='navLink' data-aos="fade-right" data-aos-duration="1000" >
              <Link to="Projects" smooth={true} duration={1000}>PROJECTS</Link> 
          </li>
          <li className='navLink' data-aos="fade-right" data-aos-duration="1000" >
              <Link to="Contact" smooth={true} duration={1000}>CONTACT</Link> 
          </li>
        </div>
    </nav>
  )
}

export default Navbar