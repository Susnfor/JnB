import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/FAQs3';
import CallToAction from '~/components/widgets/CallToAction';
import { heroPricing, comparisonPricing, faqs3Pricing, pricingPricing, callToActionPricing } from '~/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Pricing',
};

const Page = () => {
  return (
    <>
      <Hero {...heroPricing} />
      <Pricing {...pricingPricing} />
      {/* <Comparison {...comparisonPricing} /> */}
      {/* <FAQs3 {...faqs3Pricing} /> */}
      <CallToAction {...callToActionPricing} />

    </>
  );
};

export default Page;
