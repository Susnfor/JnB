'use client'
import React from 'react'
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { cn } from '@/lib/utils'


export const navItemsDropdown = [

  {
      title: 'Services',
      content: [ {
        title: 'Consultations',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '/services',
      },
      {
        title: 'Contracted',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '#',
      },
      {
        title: 'Equipment',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '#',
      },
      {
        title: 'Recruitment',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '#',
      }
    ],


  },
  {
      title: 'Who We Are',
      content: [ {
        title: 'Our Team',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '/about',
      },
      {
        title: 'Our Clients',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '#',
      }
    ]

  },
 
 

]
export const NavDropdown = () => {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      {
        navItemsDropdown.map((item) => {
          return (
          <NavigationMenuItem key={item.title} >
            <NavigationMenuTrigger className={cn("bg-white/0 hover:bg-white/10")}>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent className="NavigationMenuContent">
              <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item.content.map((item) => (
                <li key={item.title} >
                  <NavigationMenuLink key={item.title} className={`${navigationMenuTriggerStyle()} py-3`}>
                    <h3>{item.title}<br />
                    {/* <span className="text-sm text-muted-foreground leading-snug">
                      {item.desc}
                    </span> */}
                    </h3>
                  </NavigationMenuLink>
                  </li>
              ))}
              </ul>
              
            </NavigationMenuContent>
          </NavigationMenuItem>
        )
    })}
    
      <NavigationMenuItem>
    <Link href="/contact" legacyBehavior passHref>
      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white/0 hover:bg-white/10`}>
        Contact
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuIndicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenuIndicator>
    </NavigationMenuList>
  
    {/* <div className="ViewportPosition">
          <NavigationMenuViewport className="NavigationMenuViewport" />
        </div> */}
  
  </NavigationMenu>
  )
}
