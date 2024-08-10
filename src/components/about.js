import React from 'react'
import './about.css'
import SplitType from 'split-type'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

const About = () => {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  const text = new SplitType('#target')
  const container = useRef(null)
  
  useGSAP(() => {gsap.from(text.chars, {
    scrollTrigger: {
      trigger: "#target",
      start: 'top 30%',
      end: 'bottom 30%',
      pin: true,
      pinSpacing: true,
      pinSpacer: true,
      scrub: true
    },
    opacity: 0.1,
    y: 20,
    stagger: 0.01,
  })}, null);

  return (
    <div  className='about content-center items-center text-center overflow-hidden py-12 p-5 lg:px-72'>
        <div ref={container} id='target' className='lg:text-5xl text-3xl font-bold text-neutral-200'> I’m Dilukshan, 
          a fullstack web developer from Sri Lanka with a passion for creating 
          dynamic and engaging digital experiences.
        </div>
    </div>
  )
}

export default About