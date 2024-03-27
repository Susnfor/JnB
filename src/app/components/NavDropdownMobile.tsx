// 'use client'
import React from 'react'
import Link from "next/link"
import { ChartBarIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from '@/lib/utils'


export const navItemsDropdown = [

  {
      title: 'Services',
      content: [ {
        title: 'Consultations',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '#',
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
        path:   '#',
      },
      {
        title: 'Our Clients',
        desc:   'We offer a full spectrum of services for individuals and businesses. ',
        path:   '#',
      }
    ]

  },
 
 

]
export const NavDropdownMobile = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger><Bars3BottomRightIcon className="h-6 w-6"/></DropdownMenuTrigger>
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
      <Link href="#">
      <DropdownMenuItem className='font-bold'>Contact</DropdownMenuItem>
      </Link>
      {/* <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
