import React from 'react'
import { PageBackboard } from '../components/PageBackboard'
import bg from "@/app/assets/bgslant.svg";
import Image from 'next/image'
import PriceItems from './components/PriceItems';
import { ContactForm, FAQsection } from '../components';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';


const page = () => {
  return (
    <div className='w-full relative min-h-screen overflow-hidden'>
      {/* <PageBackboard  bgposition="fixed" colour="bg-red-950/50" before="Our" after="Pricing" desc="We have different pricing plans for our users. You can choose the one that is right for you." bg={bg} /> */}
      <div className='relative '>
      <div className='min-h-screen flex items-center justify-center flex-col bg-primary-foreground pt-20'>
      <h1 className=' text-5xl font-carter  text-white'>Our <span className='text-third'>Pricing</span></h1>
      <p className=' max-w-xl text-center text-white mb-6'>We have different pricing plans for our users. You can choose the one that is right for you.</p>
      <div className='rounded-xl mx-20 py-10 justify-center flex items-center '>
      <PriceItems />
      </div>


      
     
      </div>
      
      <div className=''>
      <FAQsection />
      </div>
      <div>
        <ContactForm />
      </div>
    
      </div>
      
    </div>

  )
}

export default page