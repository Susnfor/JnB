'use client'
import React, { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"
import { NavDropdown } from "./NavDropdown"
import Image from 'next/image'
import logo from '../assets/JnB.png'

import Link from "next/link"
import { NavDropdownMobile } from './NavDropdownMobile'


export const NavBar = () => {
  const [showBackground, setShowBackground] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setShowBackground(true)
    } else {
      setShowBackground(false)
    }
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <nav className={` transition fixed top-0 z-50 h-16 w-full flex justify-around items-center  uppercase`}>
      <div className={`flex justify-around h-full items-center  rounded-xl px-5 mt-5 ${showBackground ? 'hover:bg-primary/60 bg-primary/20 backdrop-blur-md animate-fading ' : ' w-full'}`}>
      <Link href="/">
      <Image src={logo} className='w-36 h-24' alt='logo'/>
      </Link>
      <div className='hidden md:flex justify-evenly'>
      <NavDropdown />
      <ThemeToggle />
      </div>
      <div className=' md:hidden flex'>
        <NavDropdownMobile />
        <ThemeToggle />
      </div>


      </div>
    </nav>
  
  )
}
