import { ScrollSectionId } from 'types/types'
import introSectionCard0 from 'images/introSection/cards/introSectionCard1.png'
import introSectionCard1 from 'images/introSection/cards/introSectionCard2.svg'
import introSectionCard2 from 'images/introSection/cards/introSectionCard3.svg'
import introSectionCard3 from 'images/introSection/cards/introSectionCard4.svg'
import introSectionCard4 from 'images/introSection/cards/introSectionCard5.svg'
import introSectionCard5 from 'images/introSection/cards/introSectionCard6.svg'
import introSectionImage from 'images/introSection/textBlock/introTextBlockImage.jpeg'

export const introSectionData = {
  imageSrc: { src: introSectionImage, height: 675, width: 675 },
  buttonSchedule: {
    role: 'button',
    id: ScrollSectionId.Contact,
  },
  buttonServices: {
    role: 'button',
    id: ScrollSectionId.Services,
  },
  cards: [
    {
      imageSrc: introSectionCard0,
    },
    {
      imageSrc: introSectionCard1,
    },
    {
      imageSrc: introSectionCard2,
    },
    {
      imageSrc: introSectionCard3,
    },
    {
      imageSrc: introSectionCard4,
    },
    {
      imageSrc: introSectionCard5,
    },
  ],
}
