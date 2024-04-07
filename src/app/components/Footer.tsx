import React from 'react'
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/twitter'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/youtube'


export const Footer = () => {
    const year = new Date().getFullYear()

    const iconsfooter = [
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/company/jnb-production-studios/",
        },
        {
          title: "Twitter",
          url: "https://twitter.com/",
        },
        {
          title: "Youtube",
          url: "https://www.youtube.com/",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/jnb_productionstudios?igsh=MWw3N3RhbmVlY2gyNQ==",
        },
        
      ]
  return (
    <footer className='w-full bg-primary/30 flex text-secondary py-5 px-10 border-t-[1px] border-white relative shadow-md justify-between'>
    <div className=''>
        <p>Copyright © {year} JnB Production Studios LTD. Registered Company Number 15447811</p>
    </div>
    <div>
    <ul className='flex gap-5 '>
        {
          iconsfooter.map((item, index) => (
            <li key={index} className='hover:bg-secondary rounded-full'>
              <SocialIcon url={item.url} style={{ height: 30, width: 30}} bgColor="#6A758A44" />
            </li>
          ))
        }
      </ul>
    </div>
    
    </footer>
  )
}
