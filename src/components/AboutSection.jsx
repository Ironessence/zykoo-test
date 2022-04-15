import React from 'react';
import home1 from '../img/home1.jpg';
//import styles
import {About, Description, Image, Hide} from "../styles";

//framer motion
import {motion} from 'framer-motion';
import { titleAnimation, fade, photoAnim } from '../animation';
import Wave from './Wave';



const AboutSection = () => {

    const titleAnim = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {duration: 0.5},
        }
    };

    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 0.8, staggerChildren: 0.7,}},
    }

  return (
    <About>
        <Description>
            <motion.div variants={container} initial='hidden' animate='show' className="title">
                <Hide>
                    <motion.h2 
                    variants={titleAnimation}
                    
                    >
                        Turning your ideas
                        </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 
                    variants={titleAnimation}>into <span>amazing</span></motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 
                    variants={titleAnimation}>applications.</motion.h2>
                </Hide>
            </motion.div>
            <motion.p variants={fade}>Contact us and let's work together into turning your ideas to reality.</motion.p>
            <motion.button variants={fade}>Contact us</motion.button>
        </Description>
        <Image>
            <motion.img variants={photoAnim} src={home1} alt="guy with a camera" width='500px' height='700px' />
        </Image>
        <Wave />
    </About>
  )
}


//StyledComponents





export default AboutSection