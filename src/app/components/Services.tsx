import React from 'react'
import Image from 'next/image'
import bg from '../assets/bgslant.svg'

//pics for services
import charts from '../assets/charts.png'
import recruitment from '../assets/recruitment.png'
import podcast from '../assets/podcast.png'
import contracted from '../assets/contracted.png'

import { ServiceBox } from './ServiceBox'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'



export const Services = () => {

  const serviceItems = [
    {
      title: 'Digital Marketing & Advertising',
      description: 'Our team of experts can help you with digital marketing and advertising. We offer a range of services including SEO, social media, and email marketing.',
      image: charts,
      link: '/services#marketing'
    },
    {
      title: 'Recruitment & Contracting',
      description: 'We source talented individuals who are ready to work. Our team of experts can help you with that.',
      image: recruitment,
      link: '/services#recruitment'
    },
    {
      title : 'Equipment Leasing',
      description: "We provide professional equipment so you can focus on producing content without worrying about where to get it. ",
      image: podcast,
      link: '/services#equipment'
    },
    {
      title : 'Consultations',
      description: "We provide consultations for individuals and businesses looking to start content creation. ",
      image: contracted,
      link: '/services#consultations'
    }
    
  ]


  return (
    <section id='services' className=' w-full flex flex-col justify-center h-full min-h-screen my-0 py-0 relative'>
    <div className=' flex flex-col  items-center w-full h-full py-10'>

    <div className='flex flex-col items-center font-bold  max-w-xl text-center text-white'>
    <h1 className=' text-5xl font-carter mb-6'>Our <span className='text-third'>Services</span></h1>
    <p className=' max-w-xl'>We offer a range of services including digital marketing, recruitment, and consulting. We also provide equipment leasing and contract work. </p>
</div>
<div className='flex gap-6 lg:gap-3 py-10 flex-wrap justify-center'>
    {
      serviceItems.map((item, index:number) => (
        <ServiceBox key={index} title={item.title} desc={item.description} img={item.image} link={item.link} />
      ))
    }


     </div>
    <Button variant='secondary'>Learn More &rarr;</Button>


    </div>


{/* dark overlay */}
{/* <div className='w-full h-full min-h-screen absolute top-0 m-0 p-0 bg-black/70 -z-20'> </div> */}
        {/* bg image */}
        <div className='w-full h-full min-h-screen bg-black/45 absolute -z-10 p-0 m-0'></div>
        <div className='w-full h-full min-h-screen bg-main absolute -z-30 p-0 m-0'>
    <Image src={bg} className='w-full h-full top-0 m-0 p-0 -z-30 absolute opacity-15'   alt="hero" />
    </div>
    </section>
  )
}
