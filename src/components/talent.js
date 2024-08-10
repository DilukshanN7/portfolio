import Marquee from "react-fast-marquee";
import React from 'react'

const Talent = () => {
  return (
    <div className="lg:px-40 flex flex-col items-center justify-center -translate-y-10">
        <Marquee features={true} gradient={true} gradientColor="black" gradientWidth={300}>
            <img className="md:mx-24 mx-12" src='bootstrap-5-1.svg' width={75} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='framer-motion.svg' width={55} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='gsap-greensock.svg' width={55} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='nodejs-icon.svg' width={60} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='django-community.svg' width={135} alt="bs"></img>
            <img className="md:mx-24 mx-12 invert" src='express-109.svg' width={150} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='git-icon.svg' width={65} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='html-1.svg' width={57} alt="bs"></img>
            <img className="md:mx-24 mx-12 invert" src='nextjs-2.svg' width={150} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='typescript.svg' width={60} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='python-5.svg' width={60} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='tailwind-css-2.svg' width={75} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='svelte-wordmark-1.svg' width={200} alt="bs"></img>
            <img className="md:mx-24 mx-12" src='logo-javascript.svg' width={60} alt="bs"></img>
        </Marquee>
    </div>
  )
}

export default Talent