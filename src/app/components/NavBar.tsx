// 'use client'
import React from 'react'
import { ThemeToggle } from "./ThemeToggle"
import { NavDropdown } from "./NavDropdown"
import Image from 'next/image'
import logo from '../assets/JnB.png'

import Link from "next/link"
import { NavDropdownMobile } from './NavDropdownMobile'


export const NavBar = () => {
  return (
    <nav className='fixed bg-primary/40 top-0 z-50 h-16 w-full flex justify-around items-center backdrop-blur-md uppercase'>
      <Link href="/">
      <Image src={logo} className='w-36 h-24' alt='logo'/>
      </Link>
      <div className=' md:gap-8 hidden md:flex'>
      <NavDropdown />
      {/* <ThemeToggle /> */}
      </div>
      <div className=' md:hidden flex'>
        <NavDropdownMobile />
        <ThemeToggle />
      </div>


    
    </nav>
  
  )
}
