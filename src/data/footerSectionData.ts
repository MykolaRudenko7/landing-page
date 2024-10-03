import logoImage from 'images/navbar/logo.svg'
import socialIconInstagram from 'images/footer/Instagram.png'
import socialIconLinkedIn from 'images/footer/LinkedIn.png'
import socialIconFacebook from 'images/footer/Facebook.png'
import { ScrollSectionId } from 'types/types'

export const footerSectionData = {
  logoImage: {
    height: 100,
    src: logoImage,
    width: 100,
  },
  logoLink: { href: '#', role: 'link' },
  privacyPolicyLink: { href: '#', role: 'link' },
  termsOfServiceLink: { href: '#', role: 'link' },
  linksForScroll: [
    { id: ScrollSectionId.Home, title: 'Intro', role: 'link' },
    { id: ScrollSectionId.HowWeAre, title: 'About Us', role: 'link' },
    { id: ScrollSectionId.Portfolio, title: 'Portfolio', role: 'link' },
    { id: ScrollSectionId.Reviews, title: 'Reviews', role: 'link' },
    { id: ScrollSectionId.Contact, title: 'Contact', role: 'link' },
  ],
  servicesLinks: {
    mainLink: { id: ScrollSectionId.Services, title: 'Services', role: 'link' },
    links: [
      { title: '0', href: '#', role: 'link' },
      { title: '1', href: '#', role: 'link' },
      { title: '2', href: '#', role: 'link' },
      { title: '3', href: '#', role: 'link' },
      { title: '4', href: '#', role: 'link' },
      { title: '5', href: '#', role: 'link' },
      { title: '6', href: '#', role: 'link' },
    ],
  },
  getInTouch: {
    title: '0',
    socials: [
      {
        href: 'https://www.instagram.com',
        iconSrc: { src: socialIconInstagram, height: 42, width: 42 },
        role: 'link',
        target: '_blank',
      },
      {
        href: 'https://www.facebook.com',
        iconSrc: { src: socialIconFacebook, height: 42, width: 42 },
        role: 'link',
        target: '_blank',
      },
      {
        href: 'https://www.linkedin.com',
        iconSrc: { src: socialIconLinkedIn, height: 42, width: 42 },
        role: 'link',
        target: '_blank',
      },
    ],
  },
}
