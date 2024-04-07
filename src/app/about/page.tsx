import React from 'react'
import { PageBackboard } from '../components/PageBackboard'
import bg from "@/app/assets/bgslant.svg";

const Page = () => {
  return (
    <div className='min-h-screen'>
      <div className=''>
      <PageBackboard colour="bg-violet-950/50" before="About" after="Us" desc="What makes us different." bg={bg} />
    </div>
    </div>
  )
}

export default Page