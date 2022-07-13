/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Features',
      path: '#features',
      offset: '81',
    },
    {
      id: 3,
      label: 'NFT',
      path: '#pricing',
      offset: '81',
    },
    {
      id: 4,
      label: 'Roadmap',
      path: '#pricing',
      offset: '81',
    },
    {
      id: 5,
      label: 'Team',
      path: '#team',
      offset: '81',
    },
    {
      id: 6,
      label: 'FAQs',
      path: '#faq',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appModern/company1.png';
import client2 from 'common/assets/image/appModern/company2.png';
import client3 from 'common/assets/image/appModern/company3.png';
import client4 from 'common/assets/image/appModern/company4.png';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/appModern/icon1.svg';
import featureIcon2 from 'common/assets/image/appModern/icon2.svg';
import featureIcon3 from 'common/assets/image/appModern/icon3.svg';
import featureIcon4 from 'common/assets/image/appModern/icon4.svg';

export const features = {
  slogan: 'KEY FEATURES',
  title: 'Seemeo Over Others',
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Discovery',
      description:
        'Use Seemeo to discover and search for services.',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'Honesty',
      description:
        'We gather recommendations shared in public conversations by real people.',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'Trust',
      description:
        'We create listings for recommended pros inn a specific inndustry, quickly see reviews from different users from one hand interface before making a decision.',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Fit',
      description:
        'All the search results that pop up are sorted by best fit for you.',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/appModern/appSlider1.png';
import appSlide2 from 'common/assets/image/appModern/appSlider2.png';
import appSlide3 from 'common/assets/image/appModern/appSlider3.png';
import appIcon from 'common/assets/image/appModern/icon1.svg';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'Voice Search Features',
  features: [
    {
      id: 1,
      icon: appIcon,
      title: 'ONE',
      description: 'Automated speech recognition when you issue the commmand.',
    },
    {
      id: 2,
      icon: appIcon,
      title: 'TWO',
      description:
        'Determines the purpose and entity based on the content in the command.',
    },
    {
      id: 3,
      icon: appIcon,
      title: 'THREE',
      description: 'Voice search intergrates technology that uses current text based search Capacity.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/assets/image/appModern/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'NFT SECTION AND BENEFITS',
  title: 'Introducing Seemeo NFT',
  description:
    'Seemeo Genesis is a collection of 2222 NFT on Ethereum blockchain mintable by early supporters of the ecosystem. As a Seemeo Genesis holder, you will get access to an evolving services and features that keep you on top priority. 1. Seemeo genesis holders are guaranteed a spot to free mint in the upcoming NFT drops. 2. Holders get a chance to participate in our lottery. 3. Holders will be given right to stake their NFTs to qualify to be our ambassadors. Ambassadors are our VIPs and Seemeo project’s flag bearers. 4. You will get access to an evolving services, features and exclusive events. 5. Over time, card holder benefits will expand to real-world items. 6. Holders will get access to partners’ physical locations including hotels, restaurants, clinics, supermarkets and more.',
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/assets/image/appModern/page1.png';
import slide2 from 'common/assets/image/appModern/page2.png';
import slide3 from 'common/assets/image/appModern/page3.png';
import slide4 from 'common/assets/image/appModern/page4.png';
import slide5 from 'common/assets/image/appModern/page5.png';
import slide6 from 'common/assets/image/appModern/page6.png';
import slide7 from 'common/assets/image/appModern/page7.png';
import slide8 from 'common/assets/image/appModern/page8.png';
export const productData = {
  slogan: 'SEEMEO APP SHOWCASE',
  title: 'Connecting people and places locally',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide4,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide5,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide6,
      link: '#1',
      title: 'slide 6',
    },
    {
      id: 7,
      thumb_url: slide7,
      link: '#1',
      title: 'slide 7',
    },
    {
      id: 8,
      thumb_url: slide8,
      link: '#1',
      title: 'slide 8',
    },
    {
      id: 9,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },

    {
      id: 10,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },

    {
      id: 11,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },
    {
      id: 12,
      thumb_url: slide4,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'ROADMAP',
  title: 'OUR INTENSIVE ROADMAP',
  monthly: [
    {
      id: 1,
      title: 'Q2 2022',
      description: 'The beginning',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Project planning & preparation',
        },
        {
          id: 2,
          text: "Team formation",
        },
        {
          id: 3,
          text: 'App and Web UI/UX design',
        },
        {
          id: 4,
          text: 'Strategic Meetings',
        },
      ],
    },
    {
      id: 2,
      title: 'Q3 2022',
      description: 'Setting Out',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Website Development',
        },
        {
          id: 2,
          text: "Community Building",
        },
        {
          id: 3,
          text: 'Partnership',
        },
        {
          id: 4,
          text: 'Genesis NFT Mint',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Q4 2022',
      description: 'Product Launch',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Mobile App Development',
        },
        {
          id: 2,
          text: "First Contest & Lottery",
        },
        {
          id: 3,
          text: 'Branded physical item launch',
        },
        {
          id: 4,
          text: 'Strategic Partnership',
        },
        {
          id: 4,
          text: 'More roadmap we be announced...',
        },
      ],
    },
    // {
    //   id: 2,
    //   title: 'Enterprise',
    //   description: 'For Best opportunities',
    //   suggested: false,
    //   price: 1299,
    //   trail: 30,
    //   trailLink: '#',
    //   features: [
    //     {
    //       id: 1,
    //       text: 'Drag & Drop Builder',
    //     },
    //     {
    //       id: 2,
    //       text: "1,000's of Templates",
    //     },
    //     {
    //       id: 3,
    //       text: 'Blog Support Tools',
    //     },
    //     {
    //       id: 4,
    //       text: 'eCommerce Store ',
    //     },
    //   ],
    // },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/appModern/1.png';
import member2 from 'common/assets/image/appModern/2.png';
import member3 from 'common/assets/image/appModern/3.png';
import member4 from 'common/assets/image/appModern/4.png';
import member5 from 'common/assets/image/appModern/5.png';
import member6 from 'common/assets/image/appModern/6.png';
import member7 from 'common/assets/image/appModern/7.png';

export const teamportfolio = {
  title: 'Meet our awesome team members.',
  description:
    'We are the initiators of Seemeo Genesis. The team consists of few experienced and passionate supporters of eprincy’s work and who want to join forces to ensure that we deliver a great project. We are also expecting more people to join us as work get more intense to build a stronger work force.',

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'ePrincy (Founder)',
    },
    {
      id: 2,
      img: member2,
      text: 'Thinkmedia (Moderator)',
    },
    {
      id: 3,
      img: member3,
      text: 'NuvieGhaga (Designer/Artist)',
    },
    {
      id: 4,
      img: member4,
      text: 'Web3King (Developer)',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'NFT Minting',
  title: 'Meet Client Satisfaction by using product',
  reviews: [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      name: 'Jon Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appModern/chat.svg';
import group from 'common/assets/image/appModern/group.svg';
import github from 'common/assets/image/appModern/github.svg';
import footerLogo from 'common/assets/image/appModern/logoWhite.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Join the Twitter Community',
      description:
        '@Seemeo_app.',
    },
    {
      id: 2,
      icon: group,
      title: 'Subcribe to the Youtube Channel',
      description:
        'Seemeo',
    },
    {
      id: 3,
      icon: github,
      title: 'Join the Discord Server',
      description:
        '@Seemeo.',
    },
  ],
  logo: footerLogo,
  menu: [
    // {
    //   id: 1,
    //   text: 'Home',
    //   link: '#',
    // },
    // {
    //   id: 2,
    //   text: 'Adversite',
    //   link: '#',
    // },
    // {
    //   id: 3,
    //   text: 'Supports',
    //   link: '#',
    // },
    // {
    //   id: 4,
    //   text: 'Marketing',
    //   link: '#',
    // },
    // {
    //   id: 5,
    //   text: 'Contact',
    //   link: '#',
    // },
  ],
};
