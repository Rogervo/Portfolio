import React from 'react';
import './Skill.css';
import 'aos/dist/aos.css';
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiBootstrap } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

function Skill() {
  return (
    <section className='mainContainer' id='PersonalSkillStack'>
      <div className='skillTitle' data-aos="fade-up" data-aos-duration="800">
        <h1>
          Personal Skill Stack
        </h1>
      </div>
    <section className='skillContainer' id='skill'>
      <div className='technologyContainer'>
      <h1 className='subTitle' data-aos="fade-up" data-aos-duration="800">Technologies I've utilized</h1>
          <div className='skillList'>
            <div className='skill'  data-aos="fade-up" delay="0.2" data-aos-duration="800">
              <figure className='skillWrapper'>
                  <FaReact size={60} color="#61DBFB" className='skillImg' />
              </figure>
              <span className='skillName'><b>React<b/></b></span>
            </div>
            <div className='skill' data-aos="fade-up" delay="0.2" data-aos-duration="800">
              <figure className='skillWrapper'>
                  <FaHtml5 size={60} color="#F06529" className='skillImg' />
              </figure>
              <span className='skillName'><b>HTML<b/></b></span>
            </div>
            <div className='skill' data-aos="fade-up" delay="0.2" data-aos-duration="800">
              <figure className='skillWrapper'>
                  <FaNodeJs size={60} color="#3C873A" className='skillImg' />
              </figure>
              <span className='skillName'><b>Node.Js<b/></b></span>
            </div>
            <div className='skill' data-aos="fade-up" delay="0.4" data-aos-duration="800">
              <figure className='skillWrapper'>
                  <DiCss3 size={60} color="#1572B7" className='skillImg' />
              </figure>
              <span className='skillName'><b>CSS<b/></b></span>
            </div>
            <div className='skill' data-aos="fade-up" delay="0.4" data-aos-duration="800">
              <figure className='skillWrapper'>
                  <DiBootstrap size={60} color="#9932CC" className='skillImg' />
              </figure>
              <span className='skillName'><b>Bootstrap<b/></b></span>
            </div>
          </div>
      </div>
      <div className='languageContainer'>
        
          <h1 className='subTitle' data-aos="fade-up" data-aos-duration="800">Language I've used</h1>
          <div className='skillList'>
            <div className='skill' data-aos="fade-up" delay="0.2" data-aos-duration="800">
              <figure className='skillWrapper'>
                  <SiJavascript size={60} color="#F1D63D" className='skillImg' />
              </figure>
              <span className='skillName'><b>Javascript<b/></b></span>
            </div>
          </div>
      </div>
    </section>
    </section>
  )
}

export default Skill