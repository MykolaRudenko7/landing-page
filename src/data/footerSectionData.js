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
      { title: 'Website Design', href: '#' },
      { title: 'Website Development', href: '#' },
      { title: 'Web APP Development', href: '#' },
      { title: 'E-Commerce', href: '#' },
      { title: 'Software Development', href: '#' },
      { title: 'Search Engine Optimization (SEO)', href: '#' },
      { title: 'Consulting', href: '#' },
    ],
  },
  getInTouch: {
    title: 'Get in touch',
    socials: [
      { href: 'https://web.whatsapp.com', iconSrc: socialIcon1, alt: 'whatsapp' },
      { href: 'https://twitter.com/?lang=uk', iconSrc: socialIcon2, alt: 'twitter' },
      { href: 'https://www.linkedin.com', iconSrc: socialIcon3, alt: 'linkedin' },
      { href: 'https://www.facebook.com', iconSrc: socialIcon4, alt: 'facebook' },
    ],
  },
}
