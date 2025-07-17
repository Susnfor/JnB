import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero2.jpg';
import JnBhero from  '~/assets/images/JnBcircles.png';
import IrfanImg from '~/assets/images/irfan.jpeg';
import JeromeImg from '~/assets/images/jerome.jpg';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'But Who Are We?',
  subtitle:
    'Behind every great business is a powerful narrative, but most of the world will never hear the tale.',
  tagline: 'About Us',
  // callToAction: {
  //   text: 'Our Services',
  //   href: '/services',
  //   targetBlank: true,
  // },
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: JnBhero,
    alt: 'Hero About',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our mission',
    subtitle:
      'Behind every great business is a powerful narrative, but most of the world will never hear the tale. All small businesses struggle with three main issues - they don’t have the time, the team or the confidence to spread their message. As a result, this leads to missed opportunities and competitor success. Your story from creating the concept of your business, to securing your first client, to where you are today was meant to be heard. Through establishing an online presence, you will match with an audience who hear your calling and see the value in what your company provides. This is why we are here to guide businesses into enhancing brand awareness and driving sales through developing a strategic social media identity. By expanding brand visibility, we create income streams and foster growth opportunities, ultimately increasing sales and revenue for your company.',
    tagline: 'Mission and Values',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our values',
    subtitle: 'Etiam tellus tortor, mattis id mauris et, lobortis ullamcorper nunc.',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Customer-centricity',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconUser,
    },
    {
      title: 'Innovation and adaptability',
      description:
        'Etiam ornare, purus nec venenatis porttitor, velit leo convallis dui, at porttitor nibh tortor quis velit.',
      icon: IconBulb,
    },
    {
      title: 'Quality assurance',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconThumbUp,
    },
    {
      title: 'Accessibility and customization',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconAdjustments,
    },
    {
      title: 'Collaboration and partnership',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Ethical and responsible design',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconHomeEco,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'History of TailNext',
    subtitle:
      'Duis sit amet magna et sapien cursus fermentum. Curabitur ac mauris non magna condimentum scelerisque. Aliquam nunc ipsum, semper ac scelerisque sit amet, pulvinar vitae libero.',
    tagline: 'Company History',
  },
  items: [
    {
      title: 'Our foundation',
      description:
        'Donec pharetra, justo a rutrum venenatis, augue erat porta leo, non eleifend dui lectus ut turpis. Fusce tincidunt mattis magna eu commodo. Proin non facilisis enim, ut luctus dolor.',
      icon: IconNumber1,
    },
    {
      title: 'The early years',
      description:
        'Nunc scelerisque dui non nulla faucibus, sed elementum urna congue. Donec varius nisi sit amet massa malesuada euismod. Donec auctor interdum leo eget ultricies.',
      icon: IconNumber2,
    },
    {
      title: 'Growth',
      description:
        'Vestibulum euismod dolor vel magna consectetur, vitae ornare metus finibus. Nam nec magna lacinia, cursus purus ut, pellentesque ex. Aliquam nec porta sapien, nec iaculis odio. Donec sed lacus arcu.',
      icon: IconNumber3,
    },
    {
      title: 'Expanding horizons',
      description:
        'Aenean mollis est ac quam viverra, eget dictum justo iaculis. Morbi venenatis neque sed blandit faucibus. Pellentesque sit amet justo at ligula eleifend lacinia. Etiam nec orci quam.',
      icon: IconNumber4,
    },
    {
      title: 'Our ongoing commitment',
      description:
        'Sed vel purus a odio tincidunt mollis. Nam et tortor est. Aliquam sodales interdum tortor ac condimentum. Suspendisse laoreet nulla est, ac luctus est tempus ut.',
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our culture',
    subtitle:
      'Nullam maximus ante eros, ac eleifend mi condimentum ut. Donec volutpat felis ac purus pretium, vitae mollis quam scelerisque.',
    tagline: 'culture',
  },
  items: [
    {
      title: 'Customer engagement',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Creativity and design excellence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconPalette,
    },
    {
      title: 'Continuous learning',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconBook,
    },
    {
      title: 'Collaboration and cross-functionality',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconPuzzle2,
    },
    {
      title: 'Entrepreneurial spirit',
      description: 'Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus.',
      icon: IconFlame,
    },
    {
      title: 'Employee well-being and balance',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconScale,
    },
  ],
};

// Features data on About page *******************


export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Our record of excellence',
    subtitle:
      'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: 'Global recognition',
      description:
        'Nullam porttitor lacus elit, sed pellentesque eros aliquam eget. Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus, lectus ante dignissim neque, imperdiet sodales enim augue a quam.',
      icon: IconAward,
    },
    {
      title: 'Innovator of the year award',
      description:
        'Cras mollis elit massa, vel interdum libero molestie a. Nulla facilisi. Suspendisse cursus non sapien ut tincidunt. Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      icon: IconAward,
    },
    {
      title: 'Sustainability award',
      description:
        'Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in tempor orci. Vestibulum velit justo, dignissim quis nisl nec, scelerisque ultrices mi sapien diam quis elit.',
      icon: IconAward,
    },
  ],
};

// Team data on About page *******************
export const teamHeader: TeamProps = {
  id: 'team-on-about',
  hasBackground: true,
  header: {
    title: 'Meet our team',
    // subtitle:
    //   'Meet us',
    tagline: 'team',
  },
};

export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: true,
  ifDesc: true,
  header: {
    title: 'Meet our team',
    subtitle:
      'Hi! My name is Jerome Jermaine and I am a co-founder of JnB Production Studios. I have been passionate about content creation and performing from a young age, finding immense joy in sharing my views and ideas through YouTube videos, musicals, and debates. Throughout the years, I became fascinated with how content creators have found ways to encapsulate our attention and build a loyal following. Similarly, I have found enjoyment in researching how businesses are able to create such brilliant advertisement campaigns to sell literally anything! I love the challenge of producing content which is both professional and captivating as it allows me to use my creative skills help businesses find their voice, similarly to how content creation allowed me to find my own.',
    tagline: 'team',
  },
  teams: [
    {
      name: 'Jerome Nyako Jermaine',
      occupation: 'Co-founder',
      image: {
        src: JeromeImg,
        alt: 'Jerome Nyako Jermaine',
      },
      items: [
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/jerome-jermaine-1a1925227/',
        },
      ],
    },
  ],
};

export const teamAbout2: TeamProps = {
  id: 'team-on-about',
  hasBackground: true,
  ifDesc: true,
  header: {
    // title: 'Irfan Raja',
    subtitle:
      'Hey, I am one of the co-founders of JnB Production Studios. I have always been a lover of the arts and theatre and have always found this as a great way to explore my creativity. Until, I picked up a camera and realised the beauty behind combining one’s talent in their specialty and being able to capture those few fleeting moments. I have always been intrigued by the world of business and wanted to help merge individuals to showcase their skills and talent with the art of film, and creating a business which I can take pride in expressing myself to the utmost. That is when I realised that through my energetic and talkative nature, inherent curiosity in business and creative desires that starting up a marketing and advertisement business with my good friend and business partner Jerome, seemed like the perfect idea! I love making connections and being able to bridge the gap between passionate, professional creatives and small-medium enterprises with untapped potential to create the perfect recipe for a healthy business relationship!',
    // tagline: 'team',
  },
  teams: [

    {
      name: 'Irfan Raja',
      occupation: 'Co-founder',
      image: {
        src: IrfanImg,
        alt: 'Irfan Raja',
      },
      items: [
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/irfan-raja-6282151a1/',
        },
      ],
    },
  ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Your stories',
    tagline: 'Testimonials',
  },
  testimonials: [
    {
      name: 'Jane Smith',
      job: 'Youtuber',
      testimonial: `Amazing Packages, would recommend.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Jane Smith',
      },
      href: '/',
    },
    {
      name: 'John Doe',
      job: 'Tiktok Content Creator',
      testimonial: `Their tailored plans have really helped me grow, I am really impressed and would 100% recommend.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'John Doe',
      },
      href: '/',
    },
    {
      name: 'Emily Turner',
      job: 'Podcast Host',
      testimonial: `Amazing! So professional, I felt supported especially with the regular one-to-one sessions. If you're thinking of working with them, just do it!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Emily Turner',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
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
