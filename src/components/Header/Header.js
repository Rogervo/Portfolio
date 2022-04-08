import React from 'react';
import { motion } from 'framer-motion'
import './Header.css';
import { Parallax } from 'react-parallax';
import Space from '../images/space.jpg'

function Header() {
  return (
    <Parallax bgImage={Space} strength={500} className='home' >
        <div className='name'>
            <h1 className='letter'>
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ 20, -20, 20 ],
                  opacity: 1
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  opacity: 1 
                }}
                >
                R  
                </motion.div>
            </h1>
            <h1 className='letter'>
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ 20, -20, 20 ],
                  opacity: 1
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.2,
                  opacity: 1
                }}
                >
                O  
                </motion.div>
            </h1>
            <h1 className='letter'>
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ 20, -20, 20 ],
                  opacity: 1
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.4,
                  opacity: 1
                }}
                >
                G  
                </motion.div>
            </h1>
            <h1 className='letter'>
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ 20, -20, 20 ],
                  opacity: 1
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.6,
                  opacity: 1
                }}
                >
                E  
                </motion.div>
            </h1>
            <h1 className='letter'>
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ 20, -20, 20 ],
                  opacity: 1
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.8,
                  opacity: 1
                }}
                >
                R  
                </motion.div>
            </h1>
        </div>
        
          <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ -600, 600 ],
                  x: [ -600, 600 ],
                  opacity: [ 1, 0 ]
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.2,
                }}
                >
                  <div className='smallRock2'></div>
                </motion.div> 
                 
            <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ -800, 800 ],
                  x: [ -800, 800 ],
                  opacity: [ 1, 0 ]
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.4,
                }}
                >
                  <div className='smallRock'></div>
                </motion.div> 
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ -800, 800 ],
                  x: [ -800, 800 ],
                  scale: [ 1, 3 ],
                  opacity: [ 1, 0 ]
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.3,
                }}
                >
                  <div className='smallRock3'></div>
                </motion.div> 
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate= {{
                  y: [ -900, 900 ],
                  x: [ -900, 900 ],
                  opacity: [ 1, 0 ]
                }}
                transition={{
                  duration: 7,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.5,
                }}
                >
                  <div className='smallRock4'></div>
                </motion.div> 
                 
    </Parallax>
  )
}

export default Header