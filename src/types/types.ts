import { VariantProps } from 'class-variance-authority'
import { linkItemVariants } from 'shared/Link/linkItemVariants'
import { scrollLinkVariants } from 'shared/ScrollIdLink/scrollLinkVariants'

export enum ScrollSectionId {
  Home = 'home',
  HowWeAre = 'how-we-are',
  Portfolio = 'portfolio',
  Reviews = 'reviews',
  Services = 'services',
  Contact = 'contact',
}

export enum LanguagesUrlEndpoints {
  EN = '/en',
  UK = '/uk',
}

export enum InputFieldsNames {
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  Country = 'country',
  Phone = 'phone',
  MessageArea = 'messageArea',
}

export enum ThemeNames {
  Light = 'light',
  Dark = 'dark',
}

export interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export interface ScrollLinkDefaultProps {
  id: string
  href?: string
  role: string
  about: string
  clickOnLink?: () => void
  tabIndex?: number
  children?: React.ReactNode
  className?: string
  smooth?: boolean
  duration?: number
  offset?: number
}

export interface ScrollLinkProps
  extends ScrollLinkDefaultProps,
    VariantProps<typeof scrollLinkVariants> {}

export interface LinkDefaultProps {
  href: string
  about: string
  role: string
  tabIndex?: number
  children: React.ReactNode
  className?: string
  target?: string
  scroll?: boolean
}

export interface LinkAllProps extends LinkDefaultProps, VariantProps<typeof linkItemVariants> {}

export interface IntroCardItemProps {
  imageSrc: string
  cardId: number
  isHoverCard: number | null
  setIsHoverCard: (isHoverCard: number | null) => void
}

export interface PortfolioBlockCardItemProps {
  imageSrc: string
  text: IPortfolioBlockCardText[]
  cardId: number
}

export interface IPortfolioBlockCardText {
  label: string
  list: string[]
}

export interface ReviewsSectionCardItemProps {
  imageSrc: string
  cardId: number
}

export interface ServiceSectionCardItemProps {
  listOptions: string[]
  index: number
}

export interface WhyChooseCardItemProps {
  cardId: number
}

export interface AppearTextCardContentItemProps {
  list: string[]
  cardId: number
  labelId: number
}

export interface IFormValues {
  name: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: ICountryOptions
  messageArea: string
}

export interface ICountryOptions {
  value: string
  label: string
  code: string
}
