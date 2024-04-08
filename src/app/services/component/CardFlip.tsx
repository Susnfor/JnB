import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CardFlip = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [isFlip, setisFlip] = useState(false)
    const [isAnimated, setIsAnimated] = useState(false)


    function handleFlip() {
       if (!isAnimated) {
        setisFlip(!isFlip)
        setIsAnimated(true)
       }
    }


  return (
    <div className='flex items-center justify-center cursor-pointer h-[800px]'>
        <div className='flip-card w-[300px] md:w-[600px] h-[360px] rounded-md' onClick={handleFlip}>
            <motion.div className='flip-card-inner w-full h-full'
            initial={false}
            transition={{ duration: 0.4, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimated(false)} 
            animate={{ rotateY: isFlip ? 180 : 360 }}>
                {children}
            </motion.div>
        </div>
    </div>
  )
}

export default CardFlip