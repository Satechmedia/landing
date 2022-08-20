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
      path: '#content',
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
import featureIcon5 from 'common/assets/image/appModern/icon1.svg';
import featureIcon6 from 'common/assets/image/appModern/icon2.svg';
import featureIcon7 from 'common/assets/image/appModern/icon3.svg';
import featureIcon8 from 'common/assets/image/appModern/icon4.svg';

export const features = {
  slogan: 'KEY FEATURES',
  title: 'Seemeo Over Others',
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Find nearby people and places',
      description:
      'Finding important places and services within your neighborhood may not be as easy as you think. Many times you find it difficult to find many important services especially when you move to another environment. Seemeo can help you quickly find exactly what you are looking for in your vicinity.',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'Review and recommendation',
      description:
      'Because it provides reviews and suggestions to its users, you can learn everything you need to know about a company or location when you first visit it. You will never again be duped into thinking you are getting something you are not because people have actually been there, checked it, and told you what you do get.',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'As you use it, it learns what you like',
      description:
        'The more you use the app, the more precise its recommendations become. In other words, it assists you in discovering new places to visit depending on spots you already enjoy! This is especially useful when touring a new city, as it can recommend places to visit depending on the ones you like back at home!',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Connecting With New People',
      description:
        'When you download the app to your phone or tablet, anywhere you go, you can easily search for people you will like to meet for business or other important purposes.',
    },
    {
      id: 5,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Schedule your time',
      description:
        'If you are unsure where you want to purchase products, Fix cars, eat, or explore, use it to find those nearby places. Tap "Search" and use different categories or a keyword to find exactly what you are looking for. If you find a place but you are not ready to visit yet, book or schedule your visiting time. You can also add it to your "To Do" list, so you remember to go there later.',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'Feedback',
      description:
        `After visiting a place, leave a comment about it. Your neighbors and other people visiting can read it to decide whether going there is worthwhile. Similarly, you can read other people's reviews to ascertain whether unfamiliar locations are worth your time.`,
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'Location-planning',
      description:
        `Users can search or browse nearby shops, diners, and other businesses using location planning or social mapping. Users' venues are assigned profiles, and they can rate them, share their thoughts, and upload photos.

        These networks connect users by using the location of their mobile phones and may also provide clear directions to and from the facility by connecting to a GPS service.
        `,
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Statistics',
      description:
        'There are several statistics, such as likes, recommendations, numbered rating and community tips from feedback section, and a list of keywords that describe the enterprise, all of which are meant to help you get a sense of the people or places.',
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
  title: 'Why should you choose Seemeo?',
  features: [
    {
      id: 1,
      icon: appIcon,
      title: 'Discovery',
      description: 'Use Seemeo to discover and search for services, write or read reviews about different people and places or businesses.',
    },
    {
      id: 2,
      icon: appIcon,
      title: 'Honesty',
      description:
        'We gather recommendations shared in public conversations by real people. No need to worry about fake or bogus review posts. They are all genuine.',
    },
    {
      id: 3,
      icon: appIcon,
      title: 'Trust',
      description: 'We create listings for recommended pros in a specific industry. Quickly see reviews from different users from one handy interface before making a decision.',
    },
    {
      id: 4,
      icon: appIcon,
      title: 'Fit',
      description: 'All the search results that pop up are sorted by best fit for you!',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/assets/image/appModern/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'SEEMEO GENESIS NFT',
  title: 'Introduction to Seemeo Genesis.',
  description:
    'Seemeo Genesis Pass is a collection of 2222 unique NFT that will grant holders access to unlock great utility and numerous benefits provided by Seemeo Ecosystem. Early supporters will be able to mint in our Genesis Access Pass release. Your pass is your key for accessing the benefits, exciting features and events.',
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
      title: 'PHASE 1',
      description: 'THE GENESIS',
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
          text: 'Web Development',
        },
        {
          id: 5,
          text: 'Twitter & Discord comm. building',
        },
        {
          id: 2,
          text: "Collaborations and AMAs",
        },
        {
          id: 2,
          text: "Wallet Whitelisting",
        },
        {
          id: 2,
          text: "Genesis NFT Mint",
        },
      ],
    },
    {
      id: 2,
      title: 'PHASE 2',
      description: 'SETTING OUT',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'SeeCoin launch',
        },
        {
          id: 2,
          text: "Merch drop I",
        },
        {
          id: 3,
          text: 'Partnership',
        },
        {
          id: 4,
          text: 'Ambassadors/Staking launch',
        },
        {
          id: 4,
          text: 'Lottery Time',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'PHASE 3',
      description: 'PRODUCT LAUNCH',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Seemeo App launch',
        },
        {
          id: 2,
          text: "First Contest & Lottery",
        },
        {
          id: 3,
          text: 'Branded items launch',
        },
        {
          id: 4,
          text: 'Strategic Partnership',
        },
        {
          id: 4,
          text: 'Merch drop 2',
        },
      ],
    },
    {
      id: 2,
      title: 'PHASE 4',
      description: 'THE JOURNEY BEGINS',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'To be announced in upcomming roadmap v2.0',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/appModern/1.png';
import member2 from 'common/assets/image/appModern/2.png';
import member3 from 'common/assets/image/appModern/3.png';
import member4 from 'common/assets/image/appModern/4.png';
import member7 from 'common/assets/image/appModern/5.png';
import member6 from 'common/assets/image/appModern/6.png';
import member5 from 'common/assets/image/appModern/7.png';

export const teamportfolio = {
  title: 'Meet our awesome team members.',
  description:
    'We are the initiators of Seemeo Genesis. The team consists of few experienced and passionate supporters of eprincy’s work and who want to join forces to ensure that we deliver a great project. We are also expecting more people to join us as work get more intense to build a stronger work force.',

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'ePrincy (Founder/CEO)',
    },
    {
      id: 2,
      img: member2,
      text: 'Thinkmedia (Moderator)',
    },
    {
      id: 3,
      img: member3,
      text: 'Web3King (Developer)', 
    },
    {
      id: 4,
      img: member4,
      text: 'NuvieGhaga (Designer/Artist)',
    },
    {
      id: 5,
      img: member7,
      text: 'Emmanuel Ewere (Legal Advisor)', 
    },
    {
      id: 6,
      img: member6,
      text: 'SH Sunjid (community support)',
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
import chat from 'common/assets/image/appModern/chat.png';
import group from 'common/assets/image/appModern/group.png';
import github from 'common/assets/image/appModern/github.svg';
import footerLogo from 'common/assets/image/appModern/logoWhite.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
    },
    {
      id: 2,
      icon: group,
    },
  ],
  logo: footerLogo,
  twitter: chat,
  youtube: group,
  discord: github,
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
