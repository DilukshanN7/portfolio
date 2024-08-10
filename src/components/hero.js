import React from 'react'
import './hero.css'
import { forwardRef } from 'react'

const Hero = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='hero relative items-center justify-center'>
      <svg className='absolute' width="100%" height="100%">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="grey" strokeWidth="0.75"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>
      <div className="absolute pointer-events-none inset-0 flex bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_60%)]"></div>
      <div className='gridtext font-bold relative text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-700 flex flex-col items-center justify-center'>
        <p className='text-6xl sm:text-8xl pb-5'>Reimagining Frontend</p>
        <p className='text-2xl sm:text-3xl pt-5 font-bold px-5'>Internet is Boring, Let's spice things up</p>
      </div>
    </div>
)
})

export default Hero