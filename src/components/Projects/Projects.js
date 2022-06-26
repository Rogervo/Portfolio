import React from 'react'
import './Projects.css'
import 'aos/dist/aos.css';
import eportpic from '../images/eportpic.png'
import pizzarep from '../images/pizzarep.png'
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

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
                    <p className='projectPara'> My eportfolio, created from my imagination and creativity. The eportfolio has many features that enables 
                    interactivity.
                     </p>
                    <div className='projectIcons'>
                      <a className='projectIcon' href="https://github.com/Rogervo/React-portfolio" target="blank">
                      <BsGithub size={30}/>
                      </a>
                      <a className='projectIcon' href="https://roger-vo.netlify.app/" target="blank">
                      <FaLink size={30}/>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className='project' data-aos="fade-up" data-aos-duration="800">
                <div className='projectWrapper'>
                  <img src={pizzarep} className='projectImg' alt='Ecommerce project'></img>
                  <div className='projectDescription'>
                    <h2 className='projectDescriptionTitle'>E-Commerce Website</h2>
                    <h3 className='projectDescriptionSubTitle'> React.js, HTML, CSS, Javascript, Next.js, </h3>
                    <p className='projectPara'> An ecommerce website made from Next.js and React CSS. The website is a pizza restaurant food app, containing
                    multiple pages. These include the home page, product page, shopping cart and order tracker. There are also interactive features such as 
                    customizing products. </p>
                    <div className='projectIcons'>
                      <a className='projectIcon' href="https://github.com/Rogervo/pizza-ecom" target="blank">
                      <BsGithub size={30}/>
                      </a>
                      <a className='projectIcon' href="https://e-commerce-pizza.netlify.app/" target="blank">
                      <FaLink size={30}/>
                      </a>
                    </div>
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