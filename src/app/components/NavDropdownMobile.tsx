
import React from 'react'
import Link from "next/link"
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"



import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from '@/lib/utils'

//navitems import 
import { navItemsnoDrop, navItemsDropdown } from './NavItemsList'


export const NavDropdownMobile = () => {


  return (
    <DropdownMenu>
    <DropdownMenuTrigger >

  
      <Bars3BottomRightIcon className="h-6 w-6"/>
      <span className="sr-only">Open main menu</span>



    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {navItemsDropdown.map((item, index) => {
        return (
          <>
        <DropdownMenuLabel key={index}>{item.title}</DropdownMenuLabel>
        {
          item.content.map((content, index) => {
            return (
              <Link href={content.path} key={index}>
              <DropdownMenuItem key={index}>
                {content.title}
              </DropdownMenuItem>
              </Link>
            )
          })
        }
        </>
        

        )
      }
        
      )}
      {
        navItemsnoDrop.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
            <DropdownMenuItem key={index} className='font-bold'>
              {item.title}
            </DropdownMenuItem>
            </Link>
          )
        })
      }
      {/* <Link href="#">
      <DropdownMenuItem className='font-bold'>Contact</DropdownMenuItem>
      </Link> */}
      {/* <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
