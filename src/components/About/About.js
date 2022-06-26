import React, { useEffect } from 'react';
import './About.css';
import { motion } from 'framer-motion'
import Aos from 'aos';
import 'aos/dist/aos.css';
import codingImage from  '../images/codingimage.png';
import resume from '../Documents/Resume.pdf';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const About = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
      <section className='aboutContainer'
        style={{height: '110vh'}}>
    <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                    y: [ 90, 90 ],
                    x: [ -620, 1550 ],
                  opacity: [ 1, 0.5 ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 3.5,
                }}
                >
                  <div className='bar1' id="About"></div>
                </motion.div> 
                <motion.div
                initial={{
                  opacity: 0.8
                }}
                animate= {{
                    y: [ 153, 153 ],
                    x: [ -420, 1550 ],
                  opacity: [ 0.8, 0.4 ]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                >
                  <div className='bar2'></div>
                </motion.div>
                <motion.div
                initial={{
                  opacity: 0.8
                }}
                animate= {{
                    y: [ 600, 600 ],
                    x: [ -820, 1550 ],
                  opacity: [ 0.8, 0.5 ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 4,
                }}
                >
                  <div className='bar3'></div>
                </motion.div>
        <div className='aboutTitle' data-aos="fade-right" data-aos-duration="1000">
            <h1>
                About Me!
            </h1>
        </div>
        <div className='aboutSection' data-aos="fade-up" data-aos-duration="1000">
        <div className='aboutBox'>
            <p className='aboutContext' data-aos="fade-left" data-aos-anchor-placement="center-center">
                <p>Being able to design and create <span style={{fontWeight: 'bold'}}>interactive</span> experiences has always been a pleasure for me.</p>
                <p>I have continuously grown a <span style={{fontWeight: 'bold'}}>strong passion and motivation</span> to develop appealing web applications. I
                am always eager to explore and experience new methods to develop my professionality.</p>
                <p>Learn more about me! <a className='resume' href= {resume} target="blank" style={{ textDecoration: 'none'}} > Resume </a> </p>
                <div className='aboutReference'>
                  <a className='aboutIcon' href="https://github.com/Rogervo" target="blank">
                    <BsGithub size={35}/>
                  </a>
                  <a className='aboutIcon' href="https://www.linkedin.com/in/roger-vo-a8bb5b237/" target="blank">
                    <BsLinkedin size={35}/>
                  </a>
                  <a className='aboutIcon' href="mailto:rogervo10@hotmail.com" target="blank">
                    <AiFillMail size={35}/>
                  </a>
          </div>
            </p>
            <img src={codingImage} alt='pictue' className='codingImage'
                style={{width: '450px'}}
                data-aos="fade-right" data-aos-anchor-placement="center-center">
                </img>
        </div>
        </div>
    </section>
  );
};

export default About