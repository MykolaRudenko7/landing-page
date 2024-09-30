import { ScrollSectionId } from 'types/types'
import cardImage0 from 'images/portfolioSection/cardImage1.webp'
import cardImage1 from 'images/portfolioSection/cardImage2.webp'
import cardImage2 from 'images/portfolioSection/cardImage3.webp'

export const portfolioSectionData = {
  buttonContact: {
    duration: 750,
    offset: -60,
    smooth: true,
    tabIndex: 0,
    to: ScrollSectionId.Contact,
  },
  cards: {
    card0: {
      title: '0',
      imageSrc: cardImage0,
      text: [
        {
          label: '0',
          list: ['0', '1', '2', '3'],
        },
        {
          label: '1',
          list: ['0', '1', '2', '3', '4'],
        },
        {
          label: '2',
          list: ['0', '1', '2', '3', '4', '5'],
        },
      ],
    },
    card1: {
      title: '1',
      imageSrc: cardImage1,
      text: [
        {
          label: '0',
          list: ['0', '1', '2'],
        },
        {
          label: '1',
          list: ['0', '1', '2', '3', '4', '5'],
        },
        {
          label: '2',
          list: ['0', '1', '2', '3', '4', '5'],
        },
      ],
    },
    card2: {
      title: '2',
      imageSrc: cardImage2,
      text: [
        {
          label: '0',
          list: ['0', '1', '2', '3', '4'],
        },
        {
          label: '1',
          list: ['0', '1', '2', '3', '4', '5'],
        },
        {
          label: '2',
          list: ['0', '1', '2', '3', '4', '5'],
        },
      ],
    },
  },
}