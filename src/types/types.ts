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

export interface ScrollIdLinkProps {
  title: string
  id: string
  clickOnLink?: () => void
  about: string
}

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
