import React from 'react'
import './backdrop.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Backdrop = ({children, close}) => {
  return (
        <motion.div     
            onClick={close}
            className= 'bg'
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 0.4 }}
            exit = {{ opacity: 0 }}
        >
            {children}
        </motion.div>
  )
}

export default Backdrop