import React from 'react'
import Image from 'next/image'
// import bg from '../assets/bgslant.svg'
import { ServiceBox } from './ServiceBox'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'


import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type BackboardProps = {
  before?: string
  after?: string
  desc?: string
  colour: string
  func?: () => void
  bgposition?: string 
  height?: string
}

export const PageBackboard = ({before, after, desc, func, bg, colour,height = 'min-h-screen', bgposition = 'absolute' }:any) => {
  return (
    <div>

<section className={cn(" w-full flex flex-col justify-center h-full my-0 py-0 relative items-center", height)}  >
   <div className=' relative flex flex-col justify-center items-center w-full h-full py-10'>

<div className='relative flex flex-col items-center font-bold  max-w-xl text-center text-white'>
<h1 className=' text-5xl font-carter mb-6'>{before} <span className='text-third'>{after}</span></h1>
<p className=' max-w-xl'>{desc}</p>
</div>
</div>
<div className="flex justify-end items-end">
<button onClick={func} ><ArrowDownCircleIcon className="w-10 h-10 text-white"/></button>
</div>





<div className={cn("w-full h-full  -z-10 p-0 m-0", colour, bgposition)}></div>
        <div className={cn("w-full h-full bg-main  -z-30 p-0 m-0", bgposition)}>
    <Image src={bg} className={cn("w-full h-full top-0 m-0 p-0 -z-30 absolute opacity-15", bgposition)} style={{objectFit:"cover"}}  alt="hero" />
    </div>
</section>


    </div>
  )
}
