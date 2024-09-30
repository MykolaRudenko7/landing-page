import logoImage from 'images/navbar/logo.svg'
import socialIconInstagram from 'images/footer/Instagram.png'
import socialIconLinkedIn from 'images/footer/LinkedIn.png'
import socialIconFacebook from 'images/footer/Facebook.png'

export const footerSectionData = {
  logoImage: {
    height: 100,
    src: logoImage,
    width: 100,
  },
  privacyPolicyLink: { tabIndex: 0 },
  termsOfServiceLink: { tabIndex: 0 },
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
      { title: '0', tabIndex: 0 },
      { title: '1', tabIndex: 0 },
      { title: '2', tabIndex: 0 },
      { title: '3', tabIndex: 0 },
      { title: '4', tabIndex: 0 },
      { title: '5', tabIndex: 0 },
      { title: '6', tabIndex: 0 },
    ],
  },
  getInTouch: {
    title: '0',
    socials: [
      {
        href: 'https://www.instagram.com',
        iconSrc: { src: socialIconInstagram, height: 42, width: 42 },
        tabIndex: 0,
        target: '_blank',
      },
      {
        href: 'https://www.facebook.com',
        iconSrc: { src: socialIconFacebook, height: 42, width: 42 },
        tabIndex: 0,
        target: '_blank',
      },
      {
        href: 'https://www.linkedin.com',
        iconSrc: { src: socialIconLinkedIn, height: 42, width: 42 },
        tabIndex: 0,
        target: '_blank',
      },
    ],
  },
}
