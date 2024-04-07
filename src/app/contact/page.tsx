import React from 'react'
import bg from "@/app/assets/bgslant.svg";
import { BookingForm, ContactForm, PageBackboard } from '../components';


const Page = () => {
  return (
    <div className='min-h-screen'>
      <div className=''>
      <PageBackboard colour="bg-blue-950/50" before="Contact" after="Us" desc="Get in touch with us." bg={bg} />
      <div className='bg-primary-foreground'>
      <BookingForm />
      </div>
      <div className='bg-main'>
      <ContactForm />
      </div>
    </div>
    </div>
  )
}

export default Page