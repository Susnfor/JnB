import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import megaphone from '../assets/megaphone.png'
import bg from '../assets/bg1.png'
import bgblur from '../assets/bgslant.svg'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import computer from '../assets/compicon.svg'
import compbg from '../assets/mainbg.png'

export const Hero = () => {
  return (
    <>
    <div className='px-2 md:px-20 min-h-screen w-full flex justify-center pt-20 md:pt-0 relative'>
        <header className='flex flex-col justify-center items-center md:flex-row relative'>
        {/* left side text */}
        <div className='flex flex-col items-center text-white max-w-2xl relative'>
        <h1 className=' text-5xl font-bold text-center font-carter mb-6'>Consultations, <span className='text-third'>Equipment</span>, Recruitment & Contracted <br></br><span className={cn(" font-bungee font-bold text-third")}>Services</span></h1>
        {/* <p className='text-slate-200 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel cumque, nobis ipsa porro similique veritatis illo cupiditate. Pariatur dolorum modi a molestiae dicta architecto aliquid corrupti itaque! Facere, optio.</p> */}
        <div className='flex mb-6'>
        <Link href="#services" className={`${buttonVariants({ variant: 'secondary'})}, mr-2`}>What We Do</Link>
        <Link href={'/contact'}><Button variant='ghost'>Contact Us &rarr;</Button></Link>
        </div>
        </div>
        {/* right side image */}
        {/* <Image src={megaphone} className='w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full' 	placeholder="blur" alt="hero"/> */}
        <Image src={computer} className='w-[500px] rounded-lg' priority={true}  alt="hero icon"/>
        </header>


        

        </div>
     
       
       


        {/* bg image + tint */}
        <div className='w-full h-full top-0 m-0 p-0 bg-black/30 -z-10 fixed'> </div>
        <div className='w-full h-full min-h-screen bg-main -z-30 p-0 m-0 fixed'>
    <Image src={bgblur} className='w-full h-full top-0 m-0 p-0 -z-30 fixed opacity-15' priority={true} style={{objectFit:"cover"}} alt="hero" />
    </div>

        </>
  )
}
