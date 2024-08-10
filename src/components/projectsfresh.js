import React from 'react'
import './projectsfresh.css'
import { useRef } from 'react'
import { forwardRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProjectFresh = forwardRef((props, refl) => {
    const handleClick = () => {
        window.open('https://github.com/DilukshanN7/EasyRemoveBG', '_blank'); // Replace with your desired URL
      };
    
      const handleClick2 = () => {
        window.open('https://www.canvasogram.com', '_blank'); // Replace with your desired URL
      };

    const { scrollYProgress } = useScroll()

    const card1transform = useTransform(scrollYProgress, [0, 1], [1, 0.9])
    const card2transform = useTransform(scrollYProgress, [0.4, 1], [1, 0.95])
  return (
    <div ref={refl} className='main mb-36'>
    
        <motion.div style={{
            scale: card1transform,
        }} className='cardcontainer ' onClick={handleClick2}>
            <div className='font-bold text-7xl text-center '>
            Spotlight
        </div>
            <div className='card  interactable card-1 border overflow-hidden border-white/[0.2]'>
                <img src='Screenshot 2024-08-08 184317.png'></img>
                <div class="button-container absolute techbutton">
                    <button class="brutalist-button openai button-1 button-2">
                        <div class="openai-logo">
                            <img className='invert' width={50} src='wordpress-icon.svg'></img>
                        </div>
                        <div class="button-text">
                        <span>Powered By</span>
                        <span>WordPress</span>
                        </div>
                    </button>
                </div>
            </div>
            
        </motion.div>
        <motion.div style={{
            scale: card2transform
        }} className='cardcontainer' onClick={handleClick}>
            <div className='card interactable card-2 border overflow-hidden border-white/[0.2]'>
                <div className='absolute easyremovebg font-bold text-5xl'>EasyRemoveBG</div>
                <div className='absolute easyremovebgdesc text-xl'>Tool to remove background of an image/logo right from the context menu</div>
                <div className='overflow-hidden flex justify-center content-center rounded-xl border border-white/[0.3] automate '>
                <div class="code-container">
                    <div class="line"><span class="comment"># Apply K-means clustering</span></div>
                    <div class="line"><span class="function">criteria</span> <span class="keyword">=</span> (<span class="function">cv2.TERM_CRITERIA_EPS</span> <span class="keyword">+</span> <span class="function">cv2.TERM_CRITERIA_MAX_ITER</span>, 100, 0.2)</div>
                    <div class="line"><span class="function">_, labels, centers</span> <span class="keyword">=</span> <span class="function">cv2.kmeans</span>(<span class="function">pixels</span>, <span class="highlight">2</span>, <span class="keyword">None</span>, <span class="function">criteria</span>, <span class="highlight">10</span>, <span class="function">cv2.KMEANS_RANDOM_CENTERS</span>)</div>
                </div>
                </div>
                <div className='overflow-hidden rounded-xl border border-white/[0.3] automatet '>
                <div class="code-containert">
                    <div class="line"><span class="comment"># Create the alpha channel</span></div>
                    <div class="line"><span class="function">alpha</span> <span class="keyword">=</span> <span class="function">mask</span> <span class="keyword">*</span> 255</div>
                    <div class="line"><span class="function">bgra_img</span> <span class="keyword">=</span> <span class="function">cv2.cvtColor</span>(<span class="function">bgr_img</span>, <span class="function">cv2.COLOR_BGR2BGRA</span>)</div>
                    <div class="line"><span class="function">bgra_img[:,:,3]</span> <span class="keyword">=</span> <span class="function">alpha</span></div>
                </div>
                </div>
                <div class="button-container relative techbutton">
                    <button class="brutalist-button openai button-1">
                        <div class="openai-logo">
                            <img width={50} src='python-5 - Copy.svg'></img>
                        </div>
                        <div class="button-text">
                        <span>Powered By</span>
                        <span>Python</span>
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
        {/* <div className='cardcontainer z-50'>
            <div className='card card-3 border border-white/[0.2]'>
                
            </div>   
        </div> */}
    </div>
  )
}
)

export default ProjectFresh