import Image from "next/image";
import {Hero, HeroChild, Services, FAQsection} from './components'

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-full h-full">
      <div className="
      "> 

      <Hero/>
      <HeroChild/>
      <Services/>
      <FAQsection/>
      </div>
     
    </main>
  );
}
