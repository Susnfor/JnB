import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Team2 from '~/components/widgets/Team2';
import Team from '~/components/widgets/Team';
import Testimonials2 from '~/components/widgets/Testimonials2';
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
  statsAbout,
  stepsAbout,
  testimonials2About,
  featuresAbout,
  teamAbout,
  teamAbout2,
  teamHeader
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero {...hero2About} />
      {/* <Stats {...statsAbout} /> */}
      <Features4 {...featuresFourAbout} />
      {/* <Features4 {...featuresFourAboutTwo} /> */}
      {/* <Steps {...stepsAbout} /> */}
      {/* <Features3 {...features3About} /> */}
      {/* <Features {...featuresAbout} /> */}
      {/* <Team {...teamHeader} /> */}
      <Team {...teamAbout} />
      <Team {...teamAbout2} />
      <Testimonials2 {...testimonials2About} />
      {/* <FAQs {...faqsAbout} /> */}
      <Contact {...contactAbout} />
    </>
  );
};

export default Page;
