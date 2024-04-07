import React from 'react'
import { PageBackboard } from '../components/PageBackboard'
import bg from "@/app/assets/bgslant.svg";
import Image from 'next/image'
import PriceItems from './components/PriceItems';
import { FAQsection } from '../components';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';


const page = () => {
  return (
    <div className='w-full relative min-h-screen pt-10 overflow-hidden'>
      <PageBackboard height="h-full" bgposition="fixed" colour="bg-red-950/50" before="Our" after="Pricing" desc="We have different pricing plans for our users. You can choose the one that is right for you." bg={bg} />
      <div className='relative '>
      <div className='min-h-screen flex items-center justify-center flex-col '>
      <div className='rounded-xl mx-20 py-10 justify-center flex items-center'>
      <PriceItems />
      </div>


      
     
      </div>
      
      <div className=''>
      <FAQsection />
      </div>
    
      </div>
      
    </div>

  )
}

export default page