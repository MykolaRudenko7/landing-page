import logoImage from 'images/navbar/logo.svg'
import socialIcon1 from 'images/footer/whatsapp.png'
import socialIcon2 from 'images/footer/x-icon.png'
import socialIcon3 from 'images/footer/in-icon.png'
import socialIcon4 from 'images/footer/fb-icon.png'

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
      { href: 'https://web.whatsapp.com', iconSrc: socialIcon1, alt: 'whatsapp' },
      { href: 'https://twitter.com/?lang=uk', iconSrc: socialIcon2, alt: 'twitter' },
      { href: 'https://www.linkedin.com', iconSrc: socialIcon3, alt: 'linkedin' },
      { href: 'https://www.facebook.com', iconSrc: socialIcon4, alt: 'facebook' },
    ],
  },
}
