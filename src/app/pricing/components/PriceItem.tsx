import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

type PriceItemProps = {
  service: string
  price: string
  benefits: string[]
  link: string
  bold?: boolean
}

export const PriceItem = ({service, price, benefits, link, bold=false }: PriceItemProps) => {

  

  return (
    <section>
      <div className={`flex flex-col  rounded-xl shadow-sm p-4 w-96 ${bold ? "bg-primary/40  shadow-2xl --py-14 border-2" : "bg-card"}`}>
        <header className='font-bold'>
          <h1 className='text-2xl'>{service}</h1>
          <p className='mt-3'> from<br/> <span className={` text-3xl ${bold ? "text-card" : "text-third"}`}>£{price}</span>/ Month</p>
        </header>
        <div className={`flex flex-col pt-4 font-carter `}>
          <h3 className=''>What&apos;s included:</h3>
          <ul className={`flex flex-col  text-extra px-4 font-thin mb-5`}>
            {benefits.map((benefit, i) => <li key={i} className='flex items-center py-2'><CheckBadgeIcon className='w-5 h-5 mr-2'/>{benefit}</li>)}
          </ul>
          <Link href={link} className={cn({[`${bold ? "font-bold" : ""}`]: bold}, buttonVariants({variant: "secondary"}))}>Learn more</Link>
        </div>

      </div>
    </section>
  )
}
