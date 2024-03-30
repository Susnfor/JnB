import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

interface ServiceBoxProps {

    title: string;
    desc: string;
    img: StaticImageData;
    link: string;
}

export const ServiceBox = ({title, desc, img, link}: ServiceBoxProps ) => {
  return (
    <div className='flex flex-col items-center bg-card min-h-96 w-80 rounded-2xl py-3 text-center'>
        <div className='flex flex-col items-center px-10'>
        <Image src={img} className='w-64 h-64 rounded-xl'  alt="hero icon"/>
        </div>
        <div className='flex flex-col items-center px-10'>
          <div className='flex items-center justify-center h-16'>
        <h1 className=' text-xl font-bold text-center font-carter text-accent'>{title}</h1>
        </div>
        <p className='text-accent max-w-xl'>{desc}</p>

        </div>

        
    </div>
  )
}
