import { useTheme } from 'next-themes'
import styles from 'components/ThemeCharger/ThemeCharger.module.scss'
import Image from 'next/image'
import sunIcon from 'images/navbar/sun.svg'
import moonIcon from 'images/navbar/moon.svg'

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className={styles.themeChanger}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Image
        alt="change theme icon"
        height={20}
        src={theme === 'light' ? moonIcon : sunIcon}
        width={20}
      />
    </button>
  )
}
