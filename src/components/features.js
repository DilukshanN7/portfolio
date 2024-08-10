import React from 'react'
import './features.css'
import { forwardRef } from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

const Features = forwardRef((props, reft) => {
    const hoverVariants = {
        hover: { y: -15 },
    }
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref} className='pt-5 container m-auto pb-40'>
        <motion.div 
            whileHover="hover" 
            ref={reft} className='box-1 relative overflow-hidden rounded-xl border-white/[0.2] border box box-1 content-end items-end p-8'>          
                <div className='overflow-hidden flex justify-center content-center rounded-xl border border-white/[0.1] genai'>
                    <div style={{
                        top: "20%",
                        width: "45%",
                        left: "3%",
                        backgroundColor: "rgba(78, 78, 78, 0.20)"
                    }} className='p-2 aibutton text-center rounded-md absolute'>ChatGPT</div>
                    <div style={{
                        top: "55%",
                        left: "3%",
                        width: "45%",
                        backgroundColor: "rgba(78, 78, 78, 0.20)"
                    }} className='p-2 aibutton text-center rounded-md absolute'>MidJourney</div>
                    <div style={{
                        top: "4%",
                        width: "45%",
                        left: "53%",
                        backgroundColor: "rgba(78, 78, 78, 0.20)"
                    }} className='p-2 aibutton text-center rounded-md absolute'>Dall-E</div>
                    <div style={{
                        top: "39%",
                        left: "53%",
                        width: "45%",
                        backgroundColor: "rgba(78, 78, 78, 0.20)"
                    }} className='p-2 aibutton text-center rounded-md absolute'>Meta Llama</div>
                    <div style={{
                        top: "73%",
                        left: "53%",
                        width: "45%",
                        backgroundColor: "rgba(78, 78, 78, 0.20)"
                    }} className='p-2 aibutton text-center rounded-md absolute'>Mistral AI</div>
                </div>
                <motion.div className='pointer-events-none' variants={hoverVariants}>
                    <motion.div  variants={{
                      hidden: { opacity: 0, y: 105 },
                      visible: { opacity: 1, y: 0, z:20 },     
                  }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 1 }}
                  >
                      <img className='invert pb-3 pl-2 ' width={50} src='learning-machine-ai-icon.svg' alt='ai'></img>
                      <p className='text-4xl font-bold text-neutral-200 pb-2'>Generative AI</p>
                      <p className='text-xl text-neutral-500'>Hands-on experience in experimenting with Generative AI models & LLMs.</p>    
                </motion.div>
            </motion.div>
        </motion.div>
        <motion.div 
            whileHover="hover" 
            ref={ref} className='relative overflow-hidden rounded-xl border-white/[0.2] border box box-2 sbox content-end items-end p-8'>
            <svg className='absolute circle' height="400" width="400" xmlns="http://www.w3.org/2000/svg">
  <circle r="100" cx="100" cy="00" fill='transparent' stroke='white' transform="scale(4)" stroke-width="0.2" opacity="0.4" />
  </svg>
            <motion.div className='pointer-events-none'  variants={hoverVariants}>
                
                <motion.div variants={{
                    hidden: { opacity: 0, y: 105 },
                    visible: { opacity: 1, y: 0 },
                }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1 }}
                >
                    <img className='invert pb-3 pl-2 ' width={70} src='graphic-designing-icon.svg' alt='ai'></img>
                    <p className='text-4xl font-bold text-neutral-200 pb-2'>Graphic Design</p>
                    <p className='text-xl text-neutral-500'>Creating captivating visuals with Adobe Illustrator and Photoshop.</p>
                </motion.div>
            </motion.div>
        </motion.div>
        <motion.div 
            whileHover="hover" 
            ref={ref} className='overflow-hidden relative rounded-xl border-white/[0.2] border box box-2 tbox content-end items-end p-8'>
            <div className='logos opacity-75 absolute flex justify-center content-center items-center'>
                <img className='logo m-auto' width={100} src='instagram-2.svg'></img>
                <img className='logo' width={100} src='youtube-6.svg'></img>
                <img className='logo' width={100} src='linkedin-logo-2013-1.svg'></img>
                <img className='invert logo m-auto' width={100} src='tiktok-plain-1.svg'></img>
                <img className='logo m-auto' width={90} src='fiverr-2.svg'></img>
                <img className='logo' width={100} src='vimeo.svg'></img>
            </div>
            <motion.div variants={hoverVariants}>            
                <motion.div variants={{
                hidden: { opacity: 0, y: 105 },
                visible: { opacity: 1, y: 0 },
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1 }}
            >
                <img className='invert pb-3 pl-2 ' width={55} src='video-edit-icon.svg' alt='ai'></img>
                <p className='text-4xl font-bold text-neutral-200 pb-2'>Video Editing</p>
                <p className='text-xl text-neutral-500'>Creating compelling visual content using Adobe After Effects and Premiere Pro.</p>
            </motion.div>
            </motion.div>
        </motion.div>
        <motion.div 
            whileHover="hover" 
            ref={ref} className='overflow-hidden relative rounded-xl border-white/[0.2] border box box-4  content-end items-end p-8'>
            <img className='absolute fsbox fullstack opacity-25'  src='website-development-process-full-guide-1-fb.jpg'></img>

            <motion.div className='pointer-events-none z-30' variants={hoverVariants}>            
                <motion.div  variants={{
                hidden: { opacity: 0, y: 105 },
                visible: { opacity: 1, y: 0 },
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1 }}
            >
                <img className='invert pb-3 pl-2 ' width={55} src='web-development-icon.svg' alt='ai'></img>
                <p className='text-4xl font-bold text-neutral-200 pb-2'>Fullstack Web Development</p>
                <p className='text-xl text-neutral-500'>Experienced in creating sleek, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks like React & Next.js.</p>
            </motion.div>    
        </motion.div>
        </motion.div>
        <motion.div 
            whileHover="hover" 
            ref={ref} className='overflow-hidden relative rounded-xl border-white/[0.2] border box box-2 content-end items-end p-8 pyapi'>
            <div className='overflow-hidden flex justify-center content-center rounded-xl border border-white/[0.1] automate '>
            <div class="code-container absolute">
                <div class="linet"><span class="keyword">import</span> <span class="function">os</span></div>
                <div class="linet"><span class="keyword">import</span> <span class="function">sys</span></div>
                <br/>
                <div class="linet"><span class="function">file_path</span> <span class="keyword">=</span> <span class="function">sys.argv</span>[1]</div>
                <br/>
                <div class="linet"><span class="function">folder_path</span> <span class="keyword">=</span> <span class="function">os.path.dirname</span>(<span class="function">file_path</span>)</div>
            </div>
            </div>
            <motion.div variants={hoverVariants}>              
                <motion.div  variants={{
                hidden: { opacity: 0, y: 105 },
                visible: { opacity: 1, y: 0 },
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1 }}
            >
                <img className='invert pb-3 pl-2 ' width={60} src='time-settings-icon.svg' alt='ai'></img>
                <p className='text-4xl font-bold text-neutral-200 pb-2'>Automation & API</p>
                <p className='text-xl text-neutral-500'>Proficient in Python for automation tasks, APIs, and building robust applications.</p>
            </motion.div>    
        </motion.div>
    </motion.div>
    </div>
  )
})

export default Features