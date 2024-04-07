'use client'
import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";



export const BookingForm = () => {



    useEffect(()=>{

        (async function () {
          const cal = await getCalApi();
          cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"c7af9c"}},
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#c7af9c",
              "cal-text": "#c7af9c",
              "cal-text-emphasis": "#ad774d",
              "cal-border-emphasis": "#ad774d",
              "cal-text-error": "pink",
              "cal-border": "#e1d7cf",
              "cal-border-default": "#e1d7cf",
              "cal-border-subtle": "#e1d7cf",
              "cal-border-booker": "#e1d7cf",
              "cal-text-muted": "#666666",
              "cal-bg-emphasis": "#e1d7cf", 
              "cal-bg-default": "#f9f5f0",
              // More CSS variables are defined here
              // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
            },
            dark: {
              "cal-bg": "#c7af9c",
              "cal-text-muted": "#fff",
              "cal-brand": "#c7af9c",
             
            }
          },
          "hideEventTypeDetails":false,"layout":"month_view"});
        }
        )
        ();
      }, [])

  return (
    <div className='py-10 w-full h-full flex justify-center items-center flex-col relative'>

<header className='text-center pb-10 font-carter text-white font-bold flex flex-col items-center'>
        <h1 className='text-5xl pb-2'><span className='text-third'>Book</span> a Call</h1>
        <p className=' pb-10 max-w-xl'>Book a call with us, to discuss how we can you help you grow.</p>
        </header>


        <div className='md:h-full md:w-full w-9/12'>
<Cal 
	  calLink="susnfor/30min"
	  style={{width:"100%",height:"100%",overflow:"scroll",}}
	  config={{layout: 'month_view'}}
    
	  
	/>
    </div>
    {/* bg tint */}
    <div className='w-full h-full min-h-screen dark:bg-black/80 absolute -z-10 p-0 m-0'></div>
  </div>
  )
}
