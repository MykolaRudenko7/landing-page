import logoImage from 'images/navbar/logo.svg'
import socialIconInstagram from 'images/footer/Instagram.png'
import socialIconLinkedIn from 'images/footer/LinkedIn.png'
import socialIconFacebook from 'images/footer/Facebook.png'

export const footerSectionData = {
  logoImage,
  linksForScroll: [
    { id: 'home', title: 'Intro' },
    { id: 'how-we-are', title: 'About Us' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'reviews', title: 'Reviews' },
    { id: 'contact', title: 'Contact' },
  ],
  servicesLinks: {
    mainLink: { id: 'services', title: 'Services' },
    links: [
      { title: '0', href: '#' },
      { title: '1', href: '#' },
      { title: '2', href: '#' },
      { title: '3', href: '#' },
      { title: '4', href: '#' },
      { title: '5', href: '#' },
      { title: '6', href: '#' },
    ],
  },
  getInTouch: {
    title: '0',
    socials: [
      { href: 'https://www.instagram.com', iconSrc: socialIconInstagram, alt: 'instagram' },
      { href: 'https://www.facebook.com', iconSrc: socialIconFacebook, alt: 'facebook' },
      { href: 'https://www.linkedin.com', iconSrc: socialIconLinkedIn, alt: 'linkedin' },
    ],
  },
}
