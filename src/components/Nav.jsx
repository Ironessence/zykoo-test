import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();

  return (
   <StyledNav>
       <h1><Link id='logo' to='/'>Zykoo</Link></h1>
       <ul>
           <li>
               <Link to="/">About us</Link>
               <Line 
               transition={{duration: 0.75}} 
               initial={{width: '0%'}}
               animate={{width: pathname === '/' ? '37%' : '0%'}}/>
           </li>
           <li>
               <Link to='/work'>Our work</Link>
               <Line 
               transition={{duration: 0.75}} 
               initial={{width: '0%'}}
               animate={{width: pathname === '/work' ? '37%' : '0%'}}/>
               
           </li>
           <li>
               <Link to='/contact'>Contact us</Link>
               <Line 
               transition={{duration: 0.75}} 
               initial={{width: '0%'}}
               animate={{width: pathname === '/contact' ? '37%' : '0%'}}/>
               
           </li>
       </ul>
   </StyledNav>
  )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 99;
    padding: 1rem 10rem;
    background-color: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 2rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 6rem;
        position: relative;
    }
    @media (max-width: 950px) {
        flex-direction: column;
        padding: 1rem 1rem;
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%
            li {
                padding: 0;
            }
        }
    }

`

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
`

export default Nav