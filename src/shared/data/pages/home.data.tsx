import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconListDetails,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/heroJnB.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
// import cameraFrontImg from '~/assets/images/camera-front.jpg';
import multiTaskingImg from '~/assets/images/multi-tasking.jpg'
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      <span className="sm:whitespace-nowrap">Boost Your Social Media</span>{' '}<br/> <span>and Podcast</span>{' '}
      <span>Engagement</span>
    </>
  ),
  subtitle: (
    <>
      Expert consultations to take your online presence to the next level, that’s one less thing to think  about.
    </>
  ),
  callToAction: {
    text: 'Our Services',
    href: '/services',
    icon: IconListDetails,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Contact Us',
    href: '/contact',
  },
  image: {
    src: heroImg,
    alt: 'Hero JnB',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Maximise Your Online <span className="whitespace-nowrap">Presence</span>
      </>
    ),
    subtitle:
      "Unlock the full potential of your online presence with our tailored consultation services. Whether you're looking to amplify your social  media engagement or enhance the quality and  reach of your podcast, our experts provide personalized strategies and actionable insights to help you achieve your goals.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Customised and bespoke social media strategies',
      description:
        '',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Learn More',
        href: '/services',
      },
    },
    {
      title: 'Improved content quality and consistency',
      description:
        '',
      icon: IconComponents,
      callToAction: {
        text: 'Learn More',
        href: '/services',
      },
    },
    {
      title: 'Enhanced podcast production and marketing',
      description:
        '',
      icon: IconListCheck,
      callToAction: {
        text: 'Learn More',
        href: '/services',
      },
    },
    {
      title: 'Increase audience engagement and reach',
      description:
        '',
      icon: IconRocket,
      callToAction: {
        text: 'Learn More',
        href: '/services',
      },
    },
    // {
    //   title: 'Search Engine Optimization (SEO)',
    //   description:
    //     "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
    //   icon: IconArrowsRightLeft,
    //   callToAction: {
    //     text: 'Discover now',
    //     href: '/',
    //   },
    // },
    // {
    //   title: 'Open to new ideas and contributions',
    //   description:
    //     'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
    //   icon: IconBulb,
    //   callToAction: {
    //     text: 'Discover now',
    //     href: '/',
    //   },
    // },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Why Choose Us',
    subtitle: 'We specialize in unlocking the full potential of your brand',
    tagline: 'Why us',
  },
  content:
    'At JnB services we like to tailor make a team suited to your social media goals, by creating a marriage between professional creatives with passionate, aspiring business owners. ',
  items: [
    {
      title: 'Collaborative Partnership',
      description:
        "When you work with us, you're not just another client – youre a partner. We value open communication, transparency, and collaboration every step of the way.",
    },
    {
      title: 'Continuous Innovation',
      description:
        "The digital landscape is always changing, and so are we. We're committed to staying ahead of the curve, constantly refining our strategies to deliver the best possible results for our clients.",
    },
  ],
  image: {
    src: multiTaskingImg,
    alt: 'Multitasking person',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Sed ac magna sit amet risus tristique interdum.',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      job: 'Marketing Manager',
      testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Young',
      job: 'Freelance Developer',
      testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      "Below you'll find answers to some of our most frequently asked questions.",
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What is social media marketing and how can it help me?',
      description: (<>
      <p>
      Social media marketing is a form of digital marketing that involves using social media platforms to promote a business, its products, and services. This type of marketing helps businesses connect with their audience on a global scale, increasing brand awareness, driving website traffic, and boosting sales. Social media marketing strategies typically include content creation, paid advertising, influencer partnerships, and engaging with followers through posts and comments.
      </p>
      <p><br/>Here are some key statistics:</p>
        <ul>
        <li>- As of 2023, there are over 4.9 billion social media users worldwide, representing approximately 62% of the global population.</li>
        <li>- Businesses that leverage social media marketing see an average increase of 25% in their sales.</li>
        <li>- According to a 2023 report, 73% of marketers believe that social media marketing has been  &quot;somewhat effective&quot; or &quot;very effective&quot; for their business.</li>
        </ul>

        <p><br/>Sources:</p>
        <ul>
        <li>- DataReportal - Digital 2023 Global Overview Report.</li>
        <li>- Statista - Number of Social Media Users Worldwide.</li>
        <li>- Hootsuite - The State of Social Media 2023.</li>
        <li>- Social Media Examiner - Social Media Marketing Industry Report 2023.</li>
        </ul>
        
        </>),
    },
    {
      title: 'How long does it take to see results?',
      description: (<>
        <p>
        The time it takes to see results from social media marketing can vary depending on several factors, including your goals, the strategies you implement, the platforms you use, and the consistency of your efforts. Generally, you might start to notice some initial results, such as increased engagement and follower growth, within the first few weeks. However, substantial results, like significant increases in website traffic and sales, typically take 3 to 6 months of consistent effort.
        </p>
        <p><br/>Here are some key statistics:</p>
          <ul>
          <li>- According to a 2023 survey, 63% of marketers reported seeing measurable improvements in social media metrics within the first 6 months of implementing a social media strategy.</li>
          <li>- Research indicates that businesses that consistently post on social media see an average of 126% increase in lead generation after 6 months.</li>
          <li>- A study found that brands with a documented social media strategy are 313% more likely to report success after 12 months of execution.</li>
          </ul>
  
          <p><br/>Sources:</p>
          <ul>
          <li>- Sprout Social - Social Media Benchmarks Report 2023.</li>
          <li>- HubSpot - The Ultimate List of Marketing Statistics for 2023.</li>
          <li>- Content Marketing Institute - Social Media Success Research 2023.</li>
          </ul>
          
          </>),
    },
    {
      title: "What is it like working with us week to week?",
      description: (<>
        <p>
        At first, as we work together the account manager overseeing the contract will be in direct contact with your business to assess the health of your current social media presence. They will analyse your competitors, and have thorough discussions with yourself to better understand what is the direction for your company. This will perhaps be a call once a week.
        </p>
        <p><br/>Next, you will be matched with an ideal social media manager who will come to film content that can be posted on a consistent basis to help hit your target audience. The relationship between yourself and the social media manager will now be your main point of contact, who shall be coming into film content between 1-2x a week.</p>
          
  
          <p><br/>However, the account manager will still be accessible, and will be arranging to meet with yourself and the social media person once a month, to ensure that the work relationship is well.</p>
          <p><br/>By the end of the contract in the final 1-2 weeks, there will be more frequent contact to discuss analytics, results and potentially a renewal of contract. </p>
          </>),
    },
    {
      title: "What makes your company different from other social media marketing agencies?",
      description: (<>
        <p>
        Our company stands out from other social media marketing agencies due to several key differentiators:
        </p>
        <p><br/><strong>Personalized Service: </strong>We provide a dedicated account manager for each client, ensuring personalized attention and tailored strategies that align with your specific business goals and brand voice. This personalized approach helps us create more effective campaigns that resonate with your target audience.</p>
        <p><br/><strong>Comprehensive Strategy: </strong>Our team takes a holistic approach to social media marketing. We conduct in-depth research and analysis of your business, industry trends, and competitors to develop a comprehensive strategy that includes content creation, engagement, advertising, and performance tracking.</p>
        <p><br/><strong>Creative Excellence: </strong>Our creative team excels in producing high-quality, custom content that captures the essence of your brand. We leverage the latest trends and tools to create visually appealing graphics, compelling videos, and engaging posts that drive results.</p>
        <p><br/><strong>Data-Driven Approach: </strong>We utilize advanced analytics and performance metrics to continuously monitor and optimize your campaigns. Our data-driven approach ensures that we make informed decisions and adjustments to maximize your ROI.</p>
        <p><br/><strong>Transparent Reporting: </strong>We believe in transparency and keep you informed with regular, detailed performance reports. These reports include key metrics, insights, and recommendations to help you understand the impact of our efforts and the progress towards your goals.</p>
        <p><br/>Here are some key statistics: </p>
          <ul>
          <li>- Clients with personalized service report a 40% higher satisfaction rate.</li>
          <li>- Businesses using data-driven strategies see up to 23% better results in their marketing campaigns.</li>
          <li>- Companies that focus on high-quality content creation experience a 78% higher engagement rate.</li>
          </ul>
  
          <p><br/>Sources:</p>
          <ul>
          <li>- Salesforce - State of Marketing Report 2023.</li>
          <li>- HubSpot - The Ultimate List of Marketing Statistics for 2023.</li>
          <li>- Content Marketing Institute - The Impact of Quality Content.</li>
          </ul>
          
          </>),
    },
    {
      title: 'What social media platforms do you manage?',
      description: (<>
        <p>
        Our agency manages a variety of social media platforms to ensure your business reaches its target audience effectively. We specialize in the following platforms:
        </p>
        <p><br/><strong>Facebook: </strong>With over 2.9 billion monthly active users, Facebook is ideal for reaching a broad audience and offers powerful advertising tools. A lot better at targeting an older demographic, as well as an international audience, where its popularity is still evident across the world today.</p>
        <p><br/><strong>Instagram: </strong>Popular among younger demographics, Instagram is perfect for visually-driven brands. It has over 1.3 billion users, making it a key platform for engagement and brand building.</p>
        <p><br/><strong>Twitter: </strong>Known for real-time updates and customer interactions, Twitter has approximately 330 million active users. It&apos;s great for brands that want to engage in trending conversations.</p>
        <p><br/><strong>LinkedIn: </strong>The premier platform for B2B marketing, LinkedIn has over 930 million users. It&apos;s essential for networking and sharing professional content.</p>
        <p><br/><strong>Pinterest: </strong>With around 450 million users, Pinterest is excellent for brands in the lifestyle, fashion, and DIY sectors, offering a highly visual experience.</p>
        <p><br/><strong>TikTok: </strong>One of the fastest-growing platforms with over 1 billion active users, TikTok is ideal for reaching a younger audience through short, engaging videos.</p>
        <p><br/><strong>YouTube: </strong>As the second-largest search engine, YouTube has over 2 billion logged-in monthly users. It&apos;s crucial for video marketing and reaching a global audience.</p>
          <p><br/>Sources:</p>
          <ul>
          <li>- Statista - Facebook Users 2023.</li>
          <li>- DataReportal - Digital 2023: Global Overview Report.</li>
          <li>- Statista - Instagram Users 2023.</li>
          <li>- Statista - Twitter Users 2023.</li>
          <li>- LinkedIn - About LinkedIn.</li>
          <li>- Statista - Pinterest Users 2023.</li>
          <li>- Statista - Tiktok Users 2023.</li>
          <li>- Statista - Youtube Users 2023.</li>
          </ul>
          
          </>),
    },
    {
      title: 'Do you create custom content and social media strategies for my business?',
      description: (<>
        <p>
        Yes, we do! Our team specialises in creating custom content tailored specifically for your business. We start by thoroughly analysing your business, understanding your unique brand identity, and assessing your target audience. We also take the time to get to know you as an individual, ensuring that the content we create aligns with your vision and voice. Additionally, we conduct a detailed analysis of your competitors to identify opportunities and develop content that stands out. This comprehensive approach allows us to produce high-quality, engaging content that effectively promotes your business and resonates with your audience.</p>
        <p><br/>Here are some key statistics:</p>
          <ul>
          <li>- Custom content can increase engagement rates by up to 50% compared to non-personalized content.</li>
          <li>- Businesses that invest in content marketing see an average of 6 times higher conversion rates than those that do not.</li>
          <li>- A survey revealed that 78% of consumers perceive a relationship between themselves and a company using custom content.</li>
          </ul>
  
          <p><br/>Sources:</p>
          <ul>
          <li>- Demand Metric - The Impact of Content Marketing.</li>
          <li>- HubSpot - The Ultimate List of Marketing Statistics for 2023.</li>
          <li>- OneSpot - The Content Engagement Report.</li>
          </ul>
          
          </>),
    },
    {
      title: 'Will I have a dedicated account manager?',
      description: (<>
        <p>
        Yes, you will have a dedicated account manager. We believe that personalized service is crucial for the success of your social media marketing campaigns. Your dedicated account manager will serve as your main point of contact and will work closely with you to understand your business goals, brand voice, and target audience. They will oversee all aspects of your social media strategy, coordinate with our creative team to ensure your content aligns with your objectives, and provide regular updates and performance reports.</p>
        <p><br/>Here are some key statistics:</p>
          <ul>
          <li>- Businesses with dedicated account managers experience a 40% higher client satisfaction rate compared to those without.</li>
          <li>- According to a survey, 78% of clients prefer having a single point of contact for managing their social media accounts.</li>
          <li>- Companies that provide dedicated account management see a 25% increase in client retention .</li>
          </ul>
  
          <p><br/>Sources:</p>
          <ul>
          <li>- Forrester - The Role of Account Managers in Customer Success.</li>
          <li>- Salesforce - State of Marketing Report 2023.</li>
          <li>- HubSpot - The Ultimate List of Marketing Statistics for 2023.</li>
          </ul>
          
          </>),
    },
    {
      title: 'Can you handle my social media advertising campaigns?',
      description:  (<>
        <p>
        Absolutely! Our agency excels in managing social media advertising campaigns across various platforms. We offer comprehensive services that include strategy development, ad creation, targeting, and performance analysis. Our team will work closely with you to understand your business goals and create tailored ad campaigns that reach your target audience effectively. We utilize advanced targeting options to ensure your ads are seen by the right people, and we continuously monitor and optimize your campaigns to maximize ROI. Whether you&apos;re looking to increase brand awareness, drive website traffic, or boost sales, we&apos;ve got you covered.</p>
        <p><br/>Here are some key statistics:</p>
          <ul>
          <li>- Businesses that use social media advertising see an average return on investment (ROI) of 95%.</li>
          <li>- 72% of consumers who interact with a brand on social media are more likely to make a purchase from that brand.</li>
          <li>- Companies that run optimized social media ad campaigns experience an average 45% increase in engagement.</li>
          </ul>
  
          <p><br/>Sources:</p>
          <ul>
          <li>- Hootsuite - Social Media Advertising Statistics.</li>
          <li>- Sprout Social - Social Media Advertising Benchmarks.</li>
          <li>- Marketing Dive - The Impact of Social Media Advertising.</li>
          </ul>
          
          </>),
    },
    {
      title: 'How do you measure the success of a social media campaign?',
      description: (<>
        <p>
        We measure the success of a social media campaign using a variety of key performance indicators (KPIs) that align with your specific business goals. Here are the primary metrics we focus on:</p>
        <p><br/><strong>Engagement Metrics:</strong></p>
        <ul>
          <li>Likes, Comments, and Shares: These indicate how well your content is resonating with your audience.</li>
          <li>Engagement Rate: Calculated as the total engagement divided by the total number of followers, this shows the level of interaction from your audience.</li>
        </ul>


        <p><br/><strong>Reach and Impressions:</strong></p>
        <ul>
          <li>Reach: The number of unique users who have seen your content.</li>
          <li>Impressions: The total number of times your content has been displayed, regardless of whether it was clicked or not.</li>
        </ul>


        <p><br/><strong>Website Traffic:</strong></p>
        <ul>
          <li>Click-Through Rate (CTR): The percentage of people who click on your ad or post to visit your website.</li>
          <li>Website Visits: The number of users who visit your website from social media.</li>
        </ul>


        <p><br/><strong>Engagement Metrics:</strong></p>
        <ul>
          <li>Likes, Comments, and Shares: These indicate how well your content is resonating with your audience.</li>
          <li>Engagement Rate: Calculated as the total engagement divided by the total number of followers, this shows the level of interaction from your audience.</li>
        </ul>


        <p><br/><strong>Conversions:</strong></p>
        <ul>
          <li>Conversion Rate: The percentage of users who take a desired action, such as making a purchase or signing up for a newsletter.</li>
          <li>Sales and Leads: The number of sales or leads generated from your social media campaigns.</li>
        </ul>

        <p><br/><strong>Audience Growth:</strong></p>
        <ul>
          <li>Follower Count: The number of new followers gained during the campaign period.</li>
        </ul>

        <p><br/><strong>Return on Investment (ROI):</strong></p>
        <ul>
          <li>ROI Calculation: Comparing the revenue generated from the campaign to the total cost spent on the campaign.</li>
        </ul>
       
       




        <p><br/>Here are some key statistics: </p>
          <ul>
          <li>- According to a 2023 report, 75% of marketers consider engagement metrics as the most important indicators of social media campaign success.</li>
          <li>- A study found that 68% of businesses use website traffic as a primary metric to measure the effectiveness of their social media marketing.</li>
          <li>- Research shows that businesses that track conversions report a 27% higher ROI from their social media campaigns.</li>
          </ul>
  
          <p><br/>Sources:</p>
          <ul>
          <li>- Sprout Social - Social Media Metrics That Really Matter.</li>
          <li>- HubSpot - Marketing Statistics 2023.</li>
          <li>- Content Marketing Institute - Measuring ROI in Social Media.</li>
          </ul>
          
          </>),
    },
    {
      title: 'What are your pricing plans for social media management?',
      description: `You can check out the page on our website which discusses pricing for our services, however do know that this is a minimum starting point, and the true price will be dependent on an assessment for what your tailored goals and targets are for your specific company.`,
    },
    {
      title: 'How do I get started?',
      description: `Just scroll down, and send us a message. We will be sure to get back to you as soon as possible. We look forward to working with you!.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: '',
    tagline: 'Contact',
  },
  content:
    'Feel free to get in touch with us for any enquiries regarding pricing, or if you need more clarity on any aspect not covered in our FAQ section.',
  items: [
    // {
    //   title: 'Our Address',
    //   description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
    //   icon: IconMapPin,
    // },
    {
      title: 'Contact',
      description: ['Mail: JnB_ProductionStudios@outlook.com'],
      icon: IconMail,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
