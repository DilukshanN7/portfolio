import React from 'react'
import './header.css'

const Header = ({scrollToHome, scrollToTalents, scrollToSpotlight, scrollToContact }) => {
  return (
    <div className='headerwrapper'>
          <div className='mainst text-center absolute border border-white/[0.2]' >
              <div className='flex font-bold text-2xl text-center m-auto'>
                  <img width={140} src='Black and White Modern Streetwear Logo.svg'></img>
              </div>
              <div className='flex text-center m-auto'>
                  <button onClick={scrollToHome} className='headerlink'>Home</button>
                  <button onClick={scrollToTalents} className='headerlink'>Talents</button>
                  <button onClick={scrollToSpotlight} className='headerlink'>Spotlight</button>
                  <button onClick={scrollToContact} className='headerlink'>Contact</button>
              </div>
              <div className='flex text-center m-auto socials'>
                <a href='https://www.instagram.com/dilukshann7/' target='blank'>
                    <img className='logos' width={25} src='instagram-2016-5.svg'></img>
                </a>
                <a href='https://www.linkedin.com/in/dilukshann7/' target='blank'>
                    <img className='logos invert' width={25} src='linkedin-icon-1.svg'></img>
                </a>
                <a href='https://github.com/dilukshanN7/' target='blank'>
                    <img className='logos invert' width={25} src='github-icon-1.svg'></img>
                </a>
              </div>
          </div>
    </div>
  )
}

export default Header