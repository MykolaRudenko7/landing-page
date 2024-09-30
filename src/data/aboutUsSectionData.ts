import { ScrollSectionId } from 'types/types'
import aboutUsSectionImage from 'images/aboutUsSection/aboutUsImage.webp'

export const aboutUsSectionData = {
  imageSrs: {
    height: 675,
    src: aboutUsSectionImage,
    width: 675,
  },
  buttonSrc: {
    duration: 750,
    offset: -60,
    smooth: true,
    tabIndex: 0,
    to: ScrollSectionId.Portfolio,
  },
}
