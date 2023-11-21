import cardImage1 from 'images/portfolioSection/cardImage1.webp'
import cardImage2 from 'images/portfolioSection/cardImage2.webp'
import cardImage3 from 'images/portfolioSection/cardImage3.webp'

export const portfolioSectionData = {
  cards: {
    card0: {
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
    card1: {
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
    card2: {
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
          ],
        },
      ],
    },
  },
}
