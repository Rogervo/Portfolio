import React from 'react'
import './Projects.css'
import 'aos/dist/aos.css';
import eportpic from '../images/eportpic.png'
import pizzarep from '../images/pizzarep.png'
import { BsGithub } from "react-icons/bs";

function Projects() {
  return (
    <section id='Projects'>
        <div className='projectContainer'>
          <div className='projectRow'>
            <h1 className='projectTitle' data-aos="fade-up" data-aos-duration="800">Personal Projects</h1>
            <ul className='projectList'>
              <li className='project' data-aos="fade-up" data-aos-duration="800">
                <div className='projectWrapper'>
                  <img src={eportpic} className='projectImg' alt='Eportfolio'></img>
                  <div className='projectDescription'>
                    <h2 className='projectDescriptionTitle'>E-Portfolio</h2>
                    <h3 className='projectDescriptionSubTitle'> React.js, HTML, CSS, Javascript</h3>
                    <p className='projectPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam leo, scelerisque sed odio eget,
                  luctus faucibus augue. Fusce volutpat iaculis dapibus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Maecenas id eleifend libero. In hac habitasse platea dictumst.</p>
                    <a className='aboutIcon' href="https://github.com/Rogervo" target="blank">
                    <BsGithub size={30}/>
                    </a>
                  </div>
                </div>
              </li>
              <li className='project' data-aos="fade-up" data-aos-duration="800">
                <div className='projectWrapper'>
                  <img src={pizzarep} className='projectImg' alt='Ecommerce project'></img>
                  <div className='projectDescription'>
                    <h2 className='projectDescriptionTitle'>E-Commerce Project</h2>
                    <h3 className='projectDescriptionSubTitle'> React.js, HTML, CSS, Javascript, Next.js, </h3>
                    <p className='projectPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam leo, scelerisque sed odio eget,
                  luctus faucibus augue. Fusce volutpat iaculis dapibus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Maecenas id eleifend libero. In hac habitasse platea dictumst.</p>
                    <a className='aboutIcon' href="https://github.com/Rogervo" target="blank">
                    <BsGithub size={30}/>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </section>
    
  )
}
export default Projects