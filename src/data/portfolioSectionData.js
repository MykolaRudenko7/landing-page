import cardImage1 from 'images/portfolioSection/portfolioBlock/cardImage1.svg'
import cardImage2 from 'images/portfolioSection/portfolioBlock/cardImage2.svg'
import cardImage3 from 'images/portfolioSection/portfolioBlock/cardImage3.svg'
import avatarImage1 from 'images/portfolioSection/testimonialsBlock/avatar1.svg'
import avatarImage2 from 'images/portfolioSection/testimonialsBlock/avatar2.svg'

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
      },
      cardB2B: {
        title: 'B2B Video Communication Platform',
        imageSrc: cardImage2,
      },
      cardFloraNow: {
        title: 'FloraNow -Online Marketplace for Floriculture',
        imageSrc: cardImage3,
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
        title: 'Tech You Can Trust',
        text: "Beyond being developers, we're partners committed to your tech success, aiding in the development of scalable products.",
      },
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
    ],
  },
  testimonialsBlockData: {
    textBlock: {
      title: 'What Our Clients Say',
      text: "At TECH COSSACKS, we believe in building relationships that go beyond projects. Our clients' success is our success, and their words inspire us to strive for excellence. Here's what some of them have to say:",
    },
    cards: [
      {
        imageSrc: avatarImage1,
        name: 'John Wallace',
        vacancy: 'CTO',
        content:
          'I had the pleasure of working with the TechCossacks team. I was thoroughly impressed by their professionalism and their commitment to their craft. They have an incredible understanding of web development and can turn an idea into a reality quickly and efficiently. Highly recommended!',
      },
      {
        imageSrc: avatarImage2,
        name: 'Eric Manring',
        vacancy: 'Senior Lead Architect',
        content:
          'I am extremely grateful for their work on my web project. They proved to be an excellent team of professionals who conscientiously worked on every detail. The result was impressive - the website they created is not only aesthetically appealing but also functionally meets all my needs.',
      },
      {
        imageSrc: avatarImage1,
        name: 'John Wallace',
        vacancy: 'CTO',
        content:
          'I had the pleasure of working with the TechCossacks team. I was thoroughly impressed by their professionalism and their commitment to their craft. They have an incredible understanding of web development and can turn an idea into a reality quickly and efficiently. Highly recommended!',
      },
      {
        imageSrc: avatarImage2,
        name: 'Eric Manring',
        vacancy: 'Senior Lead Architect',
        content:
          'I am extremely grateful for their work on my web project. They proved to be an excellent team of professionals who conscientiously worked on every detail. The result was impressive - the website they created is not only aesthetically appealing but also functionally meets all my needs.',
      },
    ],
  },
}
