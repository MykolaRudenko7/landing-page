import logoImage from 'images/navbar/logo.svg'
import socialIcon1 from 'images/footer/whatsapp-icon.svg'
import socialIcon2 from 'images/footer/x-icon.svg'
import socialIcon3 from 'images/footer/ln-icon.svg'
import socialIcon4 from 'images/footer/fb-icon.svg'

export const footerSectionData = {
  logoImage: logoImage,
  linksForScroll: [
    { id: 'startHere', title: 'Start Here' },
    { id: 'whoWeAre', title: 'Who we are' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contactUs', title: 'Contact' },
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
