import React from 'react';
import './Contact.css'
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';
import { Parallax } from 'react-parallax';
import purpleMountain from '../images/purplemountain.webp'
import cloud1 from '../images/cloud1.png'

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'service_xw6yx6a', e.target, 'user_RuRMBOBgLf8NlUP9T')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <Parallax bgImage={purpleMountain} strength={100} className='contactContainer'>
            <div className='contactTitleContainer' id='Contact'>
        <h1 className='contactTitle' data-aos="fade-up" data-aos-duration="1000">Contact Me</h1>
        </div>
            <div className="contactFormSection" data-aos="fade-up" data-aos-duration="800">
            <form onSubmit={sendEmail}>
                    <div className="contactInfo">
                        <div className="contactName" data-aos="fade-up" data-aos-duration="800">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="contactEmail" data-aos="fade-up" data-aos-duration="800">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="contactSubject" data-aos="fade-up" data-aos-duration="800">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="contactMessage" data-aos="fade-up" data-aos-duration="800">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="contactSend" data-aos="fade-in" data-aos-duration="1200">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
            {/* <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ -400, -400 ],
                  x: [ -500, 1500 ],
                  opacity: 1
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  opacity: 1 
                }}
                >
                <img src={cloud1} alt='pictue' className='cloud1'
                style={{width: '500px'}}></img>
            </motion.div> */}
        </Parallax>
        
    )
}


