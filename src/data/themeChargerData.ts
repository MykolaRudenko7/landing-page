import sunIcon from 'images/navbar/sun.svg'
import moonIcon from 'images/navbar/moon.svg'
import { ThemeNames } from 'types/types'

export const themeChargerData = (theme: ThemeNames) => ({
  imageSrc: {
    alt: `change to ${theme === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light} theme`,
    src: theme === ThemeNames.Light ? moonIcon : sunIcon,
    height: 20,
    width: 20,
  },
})
