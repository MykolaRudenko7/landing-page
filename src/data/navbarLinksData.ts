import { LanguagesUrlEndpoints, ScrollSectionId } from 'types/types'
import logoImage from 'images/navbar/logo.svg'

export const navbarData = {
  scrollToContactButton: {
    duration: 750,
    href: '#',
    offset: -60,
    role: 'button',
    smooth: true,
    tabIndex: 0,
    to: ScrollSectionId.Contact,
  },
  buttonEn: {
    locale: LanguagesUrlEndpoints.EN as string,
    scroll: false,
    tabIndex: 0,
    replace: true,
  },
  buttonUk: {
    locale: LanguagesUrlEndpoints.UK as string,
    scroll: false,
    tabIndex: 0,
    replace: true,
  },
  logoLink: { tabIndex: 0 },
  logoImage: {
    height: 80,
    src: logoImage,
    width: 80,
  },
  links: [
    { id: 'home' },
    { id: 'how-we-are' },
    { id: 'services' },
    { id: 'portfolio' },
    { id: 'reviews' },
    { id: 'contact' },
  ],
}
