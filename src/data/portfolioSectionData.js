import cardImage1 from 'images/portfolioSection/cardImage1.svg'
import cardImage2 from 'images/portfolioSection/cardImage2.svg'
import cardImage3 from 'images/portfolioSection/cardImage3.svg'

export const portfolioSectionData = {
  portfolioBlockData: {
    textBlock: {
      title: 'From Vision to Victory: Stories of Our Tech Transformations',
      text: "We've helped businesses in various sectors achieve their goals through our tailored tech solutions. Here are some of our success stories",
    },
    cards: {
      cardBarossa: {
        title: 'Barossa - Crafting a Digital Wine Experience',
        imageSrc: cardImage1,
        text: [
          {
            label: 'goals',
            list: [
              'Seamlessly convert the Figma design into a React-based site.',
              'Embed SEO strategies for optimal online presence.',
              'Enrich user interaction with fluid animations.',
              'Ensure adaptability and consistency across all device types.',
            ],
          },
          {
            label: 'features',
            list: [
              'Design Evolution',
              'SEO Integration',
              'User-Vendor Registration',
              'Interactive Animations',
              'Universal Compatibility',
            ],
          },
          {
            label: 'technology',
            list: ['React', 'Figma', 'SEO', 'CSS', 'Animations', 'Responsive Design'],
          },
        ],
      },
      cardB2B: {
        title: 'B2B Video Communication Platform',
        imageSrc: cardImage2,
        text: [
          {
            label: 'goals',
            list: [
              'Ensure dependable peer-to-peer video communication.',
              'Achieve mobile-responsiveness for broad device compatibility.',
              'Integrate a comprehensive admin panel for content oversight.',
            ],
          },
          {
            label: 'features',
            list: [
              'Real-time Conversation',
              ' State Management',
              'API Integration',
              'Design',
              'Admin Panel',
              'Deployment',
            ],
          },
          {
            label: 'technology',
            list: [
              'React',
              'Node.js',
              'Socket.io',
              'Agora.io',
              'SDK',
              'Redux',
              'Axios',
              'React-query',
              'GraphQL',
              'Sass',
              'Less',
              'CSS',
              'Modules',
              'Netlify',
              'AWS',
              'Heroku',
            ],
          },
        ],
      },
      cardFloraNow: {
        title: 'FloraNow -Online Marketplace for Floriculture',
        imageSrc: cardImage3,
        text: [
          {
            label: 'goals',
            list: [
              'Develop a multi-vendor platform with individual registration and management capabilities.',
              'Integrate a secure payment gateway.',
              'Ensure efficient inventory management for all vendors.',
              'Implement multilingual support to cater to a global audience.',
              'Develop a user-friendly content management system using WordPress.',
            ],
          },
          {
            label: 'features',
            list: [
              'Multi-Vendor Marketplace',
              'Secure Payment Gateway',
              'User-Vendor Registration',
              'Inventory Management',
              'Multilingual Support',
              'Content Management System',
            ],
          },
          {
            label: 'technology',
            list: [
              'HTML5/CSS3/JS',
              'Bootstrap',
              'PHP',
              'MySQL',
              'Secure Payment API Integration',
              'Multilingual Support Libraries',
              'WordPress',
            ],
          },
        ],
      },
    },
  },
  whyChooseBlockData: {
    mainCard: {
      title: 'Elevate Your Business with TECH COSSACKS!',
      text: 'Immerse yourself in the world of technology and see firsthand why our team is your reliable partner. Together, we will create a secure digital future for your business in the civilized world, harnessing the latest technologies and innovative solutions.',
    },
    cards: [
      {
        title: 'One-Stop Development',
        text: 'We offer comprehensive solutions, eliminating the need for multiple vendors.',
      },
      {
        title: 'Innovation-Driven',
        text: "Inspired by Ukraine's forward-thinking initiatives, we're always on the lookout for the next tech frontier.",
      },
      {
        title: 'Cost-Savings',
        text: 'Superior tech talent, no overhead costs',
      },
      {
        title: 'Global Impact',
        text: 'Our work with industry leaders worldwide reflects our adaptability and global tech understanding.',
      },
      {
        title: 'Tech You Can Trust',
        text: "Beyond being developers, we're partners committed to your tech success, aiding in the development of scalable products.",
      },
    ],
  },
}
