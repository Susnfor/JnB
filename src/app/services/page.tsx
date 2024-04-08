
import React from "react";


import { ServicesScroll } from "./component/ServicesScroll";
import Image from 'next/image'
import bg from '../assets/bgslant.svg'
import PriceItems from "../pricing/components/PriceItems";
import { ContactForm } from "../components";




const Page = () => {

  return (
    <div className="min-h-screen w-full relative">
<div className="relative">
      <ServicesScroll  />
      </div>
      <div className="h-screen flex justify-center bg-main">
        {/* <ContactForm /> */}
      </div>


  
















    </div>
  );
};

export default Page;
