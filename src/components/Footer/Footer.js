import React from 'react'
import './Footer.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footerWrapper'>
            <div className='footerLeft'>
            <b>Copyright © 2022 Roger Vo</b>
            </div>
            <div className='footerRight'>
                  <a className='footerIcon' href="https://github.com/Rogervo" target="blank">
                    <BsGithub size={30}/>
                  </a>
                  <a className='footerIcon' href="https://www.linkedin.com/in/roger-vo-a8bb5b237/" target="blank">
                    <BsLinkedin size={30}/>
                  </a>
                  <a className='footerIcon' href="mailto:rogervo10@hotmail.com" target="blank">
                    <AiFillMail size={30}/>
                  </a>
            </div>
        </div>
    </div>
  )
}

export default Footer