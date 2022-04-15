import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.jpg';
//styles
import {About, Description, Image} from "../styles";
import styled from 'styled-components';


import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';


const ServicesSection = () => {
    const [element, controls] = useScroll();
    
  return (
    <Services 
    variants={scrollReveal} 
    animate={controls} 
    initial="hidden" 
    ref={element}
    >
        <Description>
            <h2>High <span>quality</span> development.</h2>
            <Cards>
                <Card>
                    <div className="icon">
                    <img src={clock} alt="clock" />
                    <h3>Efficient</h3>
                    </div>
                    <p>Because isn't efficiency the key?</p>
                </Card>
                <Card>
                    <div className="icon">
                    <img src={diaphragm} alt="ingeniosity" />
                    <h3>Ingeniosity</h3>
                    </div>
                    <p>We're creative like that.</p>
                </Card>
                <Card>
                    <div className="icon">
                    <img src={money} alt="money" />
                    <h3>Affordable</h3>
                    </div>
                    <p>Quality work doesn't have to mean 'expensive'</p>
                </Card>
                <Card>
                    <div className="icon">
                    <img src={teamwork} alt="teamwork" />
                    <h3>Teamwork</h3>
                    </div>
                    <p>Our team of developers works together to bring your ideas to life</p>
                </Card>
            </Cards>
        </Description>
        <Image>
            <img src={home2} alt="home2" width='500px' height='750px' />
        </Image>
    </Services>
  )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 950px) {
       justify-content: center;
    }
`

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
                       
            padding: 1rem;
        }
    }
`

export default ServicesSection