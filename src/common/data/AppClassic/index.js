/* appClassic dummy data list :-
- Navbar
- Client
- Key Feature section
- App Slider
- Features section
- Design and built
- Feature tab
- Pricing policy
- Testimonial section
- Faq section
- Join slack
- Footer
  - widget
  - logo
  - menu
  - copyright 
*/

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appClassic/logo.png';

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
      label: 'Key Features',
      path: '#keyFeatures',
      offset: '84',
    },
    {
      id: 3,
      label: 'Pricing',
      path: '#pricing',
      offset: '84',
    },
    {
      id: 4,
      label: 'Testimonial',
      path: '#testimonial',
      offset: '80',
    },
    {
      id: 5,
      label: 'Faq',
      path: '#faq',
      offset: '80',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appClassic/client1.svg';
import client2 from 'common/assets/image/appClassic/client2.svg';
import client3 from 'common/assets/image/appClassic/client3.svg';
import client4 from 'common/assets/image/appClassic/client4.svg';

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
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from 'common/assets/image/appClassic/keyFeature-1.svg';
import keyFeature2 from 'common/assets/image/appClassic/keyFeature-2.svg';
import keyFeature3 from 'common/assets/image/appClassic/keyFeature-3.svg';

export const keyFeatures = {
  slogan: 'WHATS THE FUNCTION',
  title: 'Meet the feature of app',
  features: [
    {
      id: 1,
      color: '#F55767',
      icon: keyFeature1,
      title: 'Fast Performance',
      description:
        'Get your blood tests delivered at home collect a sample from the news your blood tests.',
    },
    {
      id: 2,
      color: '#2563FF',
      icon: keyFeature2,
      title: 'Prototyping',
      description:
        'Get your blood tests delivered at home collect a sample from the news your blood tests.',
    },
    {
      id: 3,
      color: '#40975F',
      icon: keyFeature3,
      title: 'Vector Editing',
      description:
        'Get your blood tests delivered at home collect a sample from the news your blood tests.',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/appClassic/appSlider1.png';
import appSlide2 from 'common/assets/image/appClassic/appSlider2.png';
import appSlide3 from 'common/assets/image/appClassic/appSlider3.png';

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
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description:
    "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.",
  features: [
    {
      id: 1,
      icon: 'flaticon-bitcoin',
      title: 'Automatic Payouts',
      description: 'Casinos no longer control the payout process.',
    },
    {
      id: 2,
      icon: 'flaticon-atom',
      title: 'Network Effect',
      description:
        'Big player rewards with the added security and transparency provided by the blockchain.',
    },
    {
      id: 3,
      icon: 'flaticon-money-bag',
      title: 'Bigger Rewards Method',
      description:
        'Casinos contribute 1% of wagers to decentralised prize pool Players are incentivized to play more to win bigger rewards.',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/appClassic/featureIcon-1.svg';
import featureIcon2 from 'common/assets/image/appClassic/featureIcon-2.svg';
import featureIcon3 from 'common/assets/image/appClassic/featureIcon-3.svg';
import featureIcon4 from 'common/assets/image/appClassic/featureIcon-4.svg';
import featureIcon5 from 'common/assets/image/appClassic/featureIcon-5.svg';
import featureIcon6 from 'common/assets/image/appClassic/featureIcon-6.svg';

export const features = {
  slogan: 'SEEMEO GENESIS NFT',
  title: 'UTILITY',
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Drops',
      description:
        'Holding a Genesis NFT will not only get you access to real world utility, but also serve as your key to unlock upcoming opportunities. Starting with SeeCoin which will be claimable by the holders. We have been reaching out to few unique projects for partnership and the response we get is very exciting, we believe the future is very bright for Seemeo NFT community.  Genesis holders will also get a guaranteed spot to mint subsequent NFT drops. The Access card license is for 3 years until we replace or give a drop that requires burn of genesis card. You don’t have anything to worry about. Leave that entire puzzle for us to solve. We will never ask you to buy another card.',
    },
    {
      id: 2,
      color: '#3DABDD',
      icon: featureIcon2,
      title: 'LOTTERY',
      description:
        'Lottery is our periodic rewarding program for the holders of Genesis NFT. We shall be taking a periodic snapshot of top NFT holders’ wallet and winners will be drawn through a raffle. In some conditions, where certain wallets are holding equal number of NFTs, We shall make a decision that favors wallets holding higher type of Assess card. Before taking any snapshot, announcement will be published on our website and social media to inform holders about upcoming event.',
    },
    {
      id: 3,
      color: '#D6AB00',
      icon: featureIcon3,
      title: 'Ambassadors Program',
      description:
      'This is a program designed for holders of SEE Coin. We believe that many people will accumulate more Genesis NFT in the secondary market to be able to claim more SEE coin, so we decided to reward them for holding more than everyone. To qualify for this program, a minimum amount of SEE coin is required. The lock vault will be opened periodically and holders who meet the requirements will be able to stake their SEE coin for a period of 4 - 12 weeks with rewards ranging from $50 - $300 weekly for 4 to 12 weeks, For instance; if you stake 1500 SEE for 12 weeks you will earn $300 for 12 weeks. At the end of 12 weeks you have already earned $3600 and you will be able to unlock your Coin. Please Note, the staking requirement and rewards are flexible. It can be less or more. The flexibility depends on the price of SEE Coin and the number of participants. Hence, there will be a total number of participants allowed per week. Every Friday, new participants will be allowed to join the program as some members decide to unstake.',
    },
    {
      id: 4,
      color: '#40975F',
      icon: featureIcon4,
      title: 'App Features and Events',
      description:
      'SeemeoApp will come with various unique tools and verified badge. To get a verified badge on your Seemeo profile you must meet certain condition which includes KYC and business verification if you are a business owner.  Holding a NFT can help to speed up your verification process, get you access to advertise your business in our marketplace, get you access to other exclusive features and exclusive events.', 
    },
    {
      id: 5,
      color: '#5856D6',
      icon: featureIcon5,
      title: 'Access to Discount and promo',
      description:
        'SeemeoApp will be doing partnership with various real world businesses like hotels, clinics, restaurants, clubs, entertainment industries, artists, institutions and many other service providers. These partnerships will get us discounts on products and services, promo and giveaways. Exclusive access to these benefits will be given to the holders of Genesis Pass. Many benefits like discount on products and services, promos, and flash sales will be exclusively accessible by SeeCoin and NFT holders. Hence, SeeCoin and Genesis NFT will be highly valuable.',
    },
    {
      id: 6,
      color: '#E97325',
      icon: featureIcon6,
      title: 'Access to Seemeo Genesis Club (SGC)',
      description:
        'Holders will be able to access SGC and be able to interact with other holders. SGC is our NFT club on discord where exclusive information sharing and discussion take place.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import builtLogo from 'common/assets/image/appClassic/appAndMap.png';

export const designAndBuilt = {
  image: builtLogo,
  title: 'Designed & Built by the latest code integration',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
};

/* ------------------------------------ */
// Feature tab data section
/* ------------------------------------ */
import appTabIcon1 from 'common/assets/image/appClassic/appTabIcon1.svg';
import appTabIcon2 from 'common/assets/image/appClassic/appTabIcon2.svg';
import appTabIcon3 from 'common/assets/image/appClassic/appTabIcon3.svg';
import appTabIcon4 from 'common/assets/image/appClassic/appTabIcon4.svg';
import appTabIcon5 from 'common/assets/image/appClassic/appTabIcon5.svg';
import appTabIcon6 from 'common/assets/image/appClassic/appTabIcon6.svg';
// image
import appTabImg1 from 'common/assets/image/appClassic/appTabImg1.png';
import appTabImg2 from 'common/assets/image/appClassic/appTabImg2.png';
import appTabImg3 from 'common/assets/image/appClassic/appTabImg3.png';
import appTabImg4 from 'common/assets/image/appClassic/appTabImg4.png';
import appTabImg5 from 'common/assets/image/appClassic/appTabImg5.png';
import appTabImg6 from 'common/assets/image/appClassic/appTabImg6.png';

export const featuresTab = {
  slogan: 'DIFFERENTIATION',
  title: 'Ultimate features that we built',
  tab: [
    {
      id: 1,
      color: '#F55767',
      icon: appTabIcon1,
      title: 'App Development',
      description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg1,
    },
    {
      id: 2,
      color: '#40975F',
      icon: appTabIcon2,
      title: 'Customization',
      description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg2,
    },
    {
      id: 3,
      color: '#5856D6',
      icon: appTabIcon3,
      title: 'UX Planning',
      description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg3,
    },
    {
      id: 4,
      color: '#D6AB00',
      icon: appTabIcon4,
      title: 'Cloud Storage',
      description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg4,
    },
    {
      id: 5,
      color: '#E97325',
      icon: appTabIcon5,
      title: 'Customer Support',
      description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg5,
    },
    {
      id: 6,
      color: '#3DABDD',
      icon: appTabIcon6,
      title: '10 Times Award',
      description: 'Get your proof tests delivered home collect a sample.',
      image: appTabImg6,
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
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
// Faq data section
/* ------------------------------------ */
export const faq = {
  slogan: 'FAQ',
  title: 'Do you have any question?',
  faqs: [
    {
      id: 1,
      question: 'What is Seemeo Genesis NFT?',
      answer:
        'Seemeo Genesis is a collection of 2222 NFT on Ethereum blockchain mintable by early supporters of Seemeo project',
    },
    {
      id: 2,
      question: 'What is the total supply?',
      answer:
        'There will be a total supply of 2222.',
    },
    {
      id: 3,
      question: 'Who will be allowed to mint?',
      answer:
        'There will be 2 minting stages. Guaranteed/whitelisted wallets and public minting.',
    },
    {
      id: 4,
      question: 'What is the minting date and what will be the price?',
      answer:
        'This summer. Each card will cost 0.2 ETH. Actual minting date will be announced on our social media.',
    },
    {
      id: 5,
      question: 'What is the maximum minting per wallet?',
      answer:
        'Maximum of 3 per wallet.',
    },
    {
      id: 6,
      question: 'Will there be a gas war?',
      answer:
        'We will do our best to ensure that gas fee paid during the minting process is minimal. We have also decided to secure a guaranteed minting spot for many pre-registered wallets to ensure that priority is given to our top supporters. To save yourself the minting rush, you can participate in the pre-registration process when it begins.',
    },
    {
      id: 7,
      question: 'What are the funds being used for?',
      answer:
        'Funds will be channeled into the development of Seemeo application, marketing and project’s operation.',
    },
    {
      id: 8,
      question: 'Why should I buy this NFT?',
      answer:
        ' We believe the value of holding this access card will far outweigh the mint price. We are fully ready to deliver an outstanding utility that will be a very useful tool for everyone. Our commitment is to underpromise and overdeliver.',
    },
    {
      id: 9,
      question: 'When can I start enjoying the benefit of holding the access card?',
      answer:
        'You will be able to enjoy the benefits after we get done with the mint. You can find the benefits and the approximate roll out period in the litepaper..',
    },
    {
      id: 10,
      question: 'How long is this access card valid?',
      answer:
        'Each access card qualifies you for the benefits stated above until we roll out a feature that requires you to burn it which comes with some other benefits. You don’t need to worry, this is the genesis (just the beginning) holders of genesis access card will not need to buy upcoming NFT, they will get a chance to mint for free while the public battle to secure a spot if anyone is available.  Upcoming NFT may require Genesis access card burn to mint. Kindly take note and hold your card while we work to deliver mind blowing utilities.',
    },
    {
      id: 11,
      question: 'Why are there 4 types of Cards?',
      answer:
        'To create uniqueness and more exciting benefits. If you are lucky to mint a Ruby card you should not be too quick to list it for sale. Each card is unique but gold and ruby have the highest ranks so are their benefits.',
    },
    {
      id: 12,
      question: 'Will there be secondary royalties and how are they going to be used?',
      answer:
        'There will be 5% of all secondary sales and the proceeds will be used to create more values for holders, fund marketing and operation..',
    },
  ],
};

/* ------------------------------------ */
// Join Slack data section
/* ------------------------------------ */
import slackLogo from 'common/assets/image/appClassic/slack.png';

export const joinSlack = {
  logo: slackLogo,
  title: 'Join our NFT Whitelist Today!',
  description:
    'Seemeo NFT is your access card to seemeo ecosystem with many benefit. Check the Litepaper for more information.',
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appClassic/chat.svg';
import group from 'common/assets/image/appClassic/group.svg';
import github from 'common/assets/image/appClassic/github.svg';
import footerLogo from 'common/assets/image/appClassic/logoWhite.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Chat Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 3,
      text: 'Supports',
      link: '#',
    },
    {
      id: 4,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 5,
      text: 'Contact',
      link: '#',
    },
  ],
};
