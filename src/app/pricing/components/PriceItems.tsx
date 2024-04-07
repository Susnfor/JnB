import React from 'react'

import { PriceItem } from './PriceItem'

const items = [
    {
        service: 'Digital Marketing Consultations',
        price: '1000',
        benefits: ['Expert advice on how to grow your business',
        'Advice on how to get started',
        "Will develop a robust brand strategy.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",

        ],
        link: "https://cal.com/susnfor/digital-marketing",
        
    },
    {
        service: "Recruitment",
        price: '1000',
        benefits: ['Lorem ipsum dolor sit amet ipsum dolor.',
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet."],
        link: "https://cal.com/susnfor/recruitment",
        bold: true,

    },
    {
        service: "Equipment Leasing",
        price: '1000',
        benefits: ['Lorem ipsum dolor sit amet ipsum dolor.',
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet."],
        link: "https://cal.com/susnfor/equipment-leasing",
    }
]
const PriceItems = () => {
  return (
    <>
    <div className='flex gap-4 flex-wrap items-center justify-center'>
       {
        items.map((item, i) => <PriceItem key={i} service={item.service} price={item.price} benefits={item.benefits} link={item.link} bold={item.bold} />)
       } 
       </div>
    </>
  )
}

export default PriceItems