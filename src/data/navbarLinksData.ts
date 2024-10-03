import { LanguagesUrlEndpoints, ScrollSectionId } from 'types/types'
import logoImage from 'images/navbar/logo.svg'

export const navbarData = {
  scrollToContactButton: {
    role: 'button',
    id: ScrollSectionId.Contact,
  },
  buttonEn: {
    locale: LanguagesUrlEndpoints.EN,
    href: LanguagesUrlEndpoints.EN,
    scroll: false,
    replace: true,
    role: 'button',
  },
  buttonUk: {
    locale: LanguagesUrlEndpoints.UK,
    href: LanguagesUrlEndpoints.UK,
    scroll: false,
    replace: true,
    role: 'button',
  },
  logoLink: { href: '#', role: 'link' },
  logoImage: {
    height: 80,
    src: logoImage,
    width: 80,
  },
  links: [
    { id: ScrollSectionId.Home, role: 'link' },
    { id: ScrollSectionId.HowWeAre, role: 'link' },
    { id: ScrollSectionId.Services, role: 'link' },
    { id: ScrollSectionId.Portfolio, role: 'link' },
    { id: ScrollSectionId.Reviews, role: 'link' },
    { id: ScrollSectionId.Contact, role: 'link' },
  ],
}
