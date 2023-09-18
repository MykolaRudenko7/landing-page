import { useContext, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import styles from 'components/ThemeSwitcher/ThemeSwitcher.module.scss'
import { GradientContext, TextColorContext } from 'context/ThemeContext'

export default function ThemeSwitcher() {
  const [isThemePanelVisible, setIsThemePanelVisible] = useState(false)
  const switchPanelRef = useRef(null)
  const handleMenuToggle = () => {
    setIsThemePanelVisible(!isThemePanelVisible)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (switchPanelRef.current && !switchPanelRef.current.contains(event.target)) {
        setIsThemePanelVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const { textColor, setTextColor } = useContext(TextColorContext)
  const { startColor, endColor, setStartColor, setEndColor } = useContext(GradientContext)

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value)
  }
  const handleStartColorChange = (event) => {
    setStartColor(event.target.value)
  }
  const handleEndColorChange = (event) => {
    setEndColor(event.target.value)
  }
  const handleResetColors = () => {
    setTextColor('#3a3d60')
    setStartColor('#40ccff')
    setEndColor('#ffcf00')
  }

  return (
    <div className={styles.themeSwitcherWrapper}>
      <p
        className={cn(styles.togglePanelButton, { [styles.closePanelButton]: isThemePanelVisible })}
        onClick={handleMenuToggle}
        role="button"
      >
        theme
      </p>

      <div
        className={cn(styles.switchPanel, { [styles.openPanel]: isThemePanelVisible })}
        ref={switchPanelRef}
      >
        <div className={styles.gradientColor}>
          <label className={styles.colorLabel}>
            Gradient start color
            <input
              className={styles.colorInput}
              onChange={handleStartColorChange}
              type="color"
              value={startColor}
            />
          </label>
          <label className={styles.colorLabel}>
            Gradient end color
            <input
              className={styles.colorInput}
              onChange={handleEndColorChange}
              type="color"
              value={endColor}
            />
          </label>
        </div>
        <div className={styles.textColor}>
          <label className={styles.colorLabel}>
            Change text color
            <input
              className={styles.colorInput}
              onChange={handleTextColorChange}
              type="color"
              value={textColor}
            />
          </label>
        </div>
        <button className={styles.reset} onClick={handleResetColors}>
          reset
        </button>
      </div>
    </div>
  )
}
