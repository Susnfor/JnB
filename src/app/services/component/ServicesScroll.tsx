"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

//paralax scrolling effect
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import useScrollSnap from "react-use-scroll-snap";

import CardFlip from "@/app/services/component/CardFlip";
import {  ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

//pics for services
import charts from "@/app/assets/charts.png";
import recruitment from "@/app//assets/recruitment.png";
import podcast from "@/app/assets/podcast.png";
import contracted from "@/app/assets/contracted.png";
// import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
// import bg from "@/app/assets/rawcomp.png";
import bg from "@/app/assets/bgslant.svg";

import s1 from "@/app/assets/services/s1.png";
import s2 from "@/app/assets/services/s2.png";
import s3 from "@/app/assets/services/s3.png";
import s4 from "@/app/assets/services/s4.png";
import { PageBackboard } from "@/app/components/PageBackboard";


export const serviceItems = [
  {
    title: "Digital Marketing & Advertising",
    id: "#marketing",
    description:
      "Our team of experts can help you with digital marketing and advertising. We offer a range of services including SEO, social media, and email marketing.",
    image: charts,
    link: "/services#marketing",
    bg: s1,
    position: "left",
  },
  {
    title: "Recruitment & Contracting",
    id: "#recruitment",
    description:
      "We source talented individuals who are ready to work. Our team of experts can help you with that.",
    image: recruitment,
    link: "/services#recruitment",
    bg: s2,
    position: "right",
  },
  {
    title: "Equipment Leasing",
    id: "#equipment",
    description:
      "We provide professional equipment so you can focus on producing content without worrying about where to get it. ",
    image: podcast,
    link: "/services#equipment",
    bg: s3,
    position: "left",
  },
  {
    title: "Consultations",
    id: "#consultations",
    description:
      "We provide consultations for individuals and businesses looking to start content creation. ",
    image: contracted,
    link: "/services#consultations",
    bg: s4,
    position: "right",
  },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


export const ServicesScroll = () => {
   



  const scrollRef = useRef(null);
  const { goto } = useScrollSnap({ ref: scrollRef, duration: 1 })

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

    

  return (

  <div className="w-full relative"  >



<PageBackboard colour="bg-black/45" func={() => goto(0)} before='Our' after='Services' desc='We offer a range of services including digital marketing, recruitment, and consulting. We also provide equipment leasing and contract work.' bg={bg}/>


<section className="relative w-full min-h-screen h-full " ref={scrollRef}>


{serviceItems.map((item, index) => (
  <section key={index} id={item.id}>
<div key={index} className={`${item.position === 'left' ? 'bg-zinc-300' : 'bg-gray-400'} h-screen w-full relative  }`}>
<CardFlip>
  <div className="flip-card-front  w-full h-full shadow-lg">
<Image src={item.image} alt="service" className="rounded-lg w-full h-full border-4 hover:scale-105 transition duration-200"  style={{objectFit: 'cover'}} />
  </div>
  <div className=" flip-card-back rounded-lg bg-main w-full h-full border-4 border-white flex items-center flex-col justify-center text-center">
    <h2 className="text-3xl font-bold">{item.title}</h2>
    <p>{item.description}</p>
    </div>
</CardFlip>
<div className="  absolute bottom-4 right-0 flex items-end justify-end p-5 z-0">
<button onClick={() => (index === 3 ? goto(0) : goto(index + 1))} >{index === 3 ? <ArrowUpIcon className="w-10 h-10 text-white"/> : <ArrowDownIcon className="w-10 h-10 text-white"/>}</button>
</div>
</div>
</section>

))}
 
</section>




  
  <motion.div className="fixed left-0 right-0 bottom-4 bg-third h-5" style={{ scaleX }} />

 
 

   </div>



  )
};
