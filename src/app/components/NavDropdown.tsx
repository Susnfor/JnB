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

//navitems
import { navItemsnoDrop, navItemsDropdown } from './NavItemsList'


export const NavDropdown = () => {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      {
        // map through navitems to get title for navbar/only for navitems with content
        navItemsDropdown.map((item, index) => {
          return (
          <NavigationMenuItem key={index} >
            {/* nagivation title e.g. services */}
            <Link href={item.link}><NavigationMenuTrigger className={cn("bg-white/0 hover:bg-white/10, uppercase ")}>{item.title}</NavigationMenuTrigger></Link>
            <NavigationMenuContent className="NavigationMenuContent" key={index}>
              <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item.content.map((item) => (
                <li key={item.title} >
                  {/* nagivation dropdown   */}
                  <Link href={item.path}>
                  <NavigationMenuLink key={item.title} className={`${navigationMenuTriggerStyle()} py-3 uppercase`}>
                    <h3 >{item.title}<br />
                    </h3>
                  </NavigationMenuLink>
                  </Link>
                  </li>
              ))}
              </ul>
              
            </NavigationMenuContent>
          </NavigationMenuItem>
        )
    })}
{/*     
      <NavigationMenuItem>
    <Link href="/contact" legacyBehavior passHref>
      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white/0 hover:bg-white/10`}>
        Contact
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem> */}

{
  //map through items with no drop down
  navItemsnoDrop.map((item) => {
    return (
      <NavigationMenuItem key={item.title}>
        <Link href={item.link} legacyBehavior passHref>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white/0 hover:bg-white/10`}>
            {item.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
  })
}




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
