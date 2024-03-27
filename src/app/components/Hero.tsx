import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import megaphone from '../assets/megaphone.png'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export const Hero = () => {
  return (
    
    <div className='bg-primary-foreground px-2 md:px-20 min-h-screen w-full flex justify-center pt-4 md:pt-0 '>
        <header className='flex flex-col justify-center items-center md:flex-row'>
        {/*Light Brown Bg, white text, highlighted span text, black with white outline or no fill outlined */}
        <div className='flex flex-col items-center text-white max-w-2xl '>
        <h1 className=' text-4xl font-bold text-center font-carter mb-6'>Consultations, Equipment, Recruitment & Contracted <br></br><span className={cn("text-primary font-bungee font-bold")}>Services</span></h1>
        {/* <p className='text-slate-200 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel cumque, nobis ipsa porro similique veritatis illo cupiditate. Pariatur dolorum modi a molestiae dicta architecto aliquid corrupti itaque! Facere, optio.</p> */}
        <div className='flex mb-6'>
        <Link href="#" className={`${buttonVariants({ variant: 'secondary'})}, mr-2`}>What We Do</Link>
        <Button variant='ghost'>Our Services &rarr;</Button>
        </div>
        </div>
        <Image src={megaphone} className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full' 	placeholder="blur" alt="hero"/>
        </header>
        
        </div>
  )
}
