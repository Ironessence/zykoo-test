import React from 'react';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//styles
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import animation
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim} from '../animation';
import {useScroll} from '../components/useScroll';




const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to='/'>
        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to='/'>
        <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={fade} animate={controls2} initial='hidden'>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to='/'>
        <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
    font-size: 3rem;
  }
`

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

`

export default OurWork