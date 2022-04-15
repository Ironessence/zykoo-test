import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();


  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
        <h2>Any questions? <span>FAQ</span></h2>
        <AnimateSharedLayout>
        <Toggle title='+ How do I start?'>
        
            
            <div className="answer">
                <p>The only thing you have to do is message us! We'll take care of the rest</p>
                
            </div>
            
        
        </Toggle>
        <Toggle title='+ How long will it take for my idea to come true?'>
        
            
            <div className="answer">
                <p>Why are you so curious tho? Let us do our job.</p>
            </div>
            
        
        </Toggle>
        <Toggle title='+ How do you accept payment?'>
        
            
            <div className="answer">
                <p>Currently we only accept payments in Chinese Yen. We're not Chinese tho. We just like Yen.</p>
            </div>
            
        
        </Toggle>
        </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }

`


export default FaqSection