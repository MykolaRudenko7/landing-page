import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from 'components/ThemeCharger/ThemeCharger.module.scss'
import { ThemeNames } from 'types/types'
import { themeChargerData } from 'data/themeChargerData'

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  const { imageSrc } = themeChargerData(theme as ThemeNames)

  const tButton = useTranslations('Buttons')
  const buttonAreaLabel = tButton('buttonReady')

  const toggleTheme = () => {
    setTheme(theme === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light)
  }

  return (
    <button
      aria-label={buttonAreaLabel}
      className={styles.themeChanger}
      onClick={toggleTheme}
      type="button"
    >
      <Image {...imageSrc} />
    </button>
  )
}
