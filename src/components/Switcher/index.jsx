'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import FontSwitcher from 'components/Switcher/FontSwitcher'
import ChangeThemeColors from 'components/Switcher/ChangeThemeColors'
import { GradientContext, TextColorContext } from 'context/ThemeContext'
import styles from 'components/Switcher/Switcher.module.scss'

export default React.memo(() => {
  const [selectedFont, setSelectedFont] = useState('Fira Sans Condensed')
  const [fontSize, setFontSize] = useState(10)
  const [isThemePanelVisible, setIsThemePanelVisible] = useState(false)
  const switchPanelRef = useRef(null)
  const { textColor, setTextColor } = useContext(TextColorContext)
  const { startColor, endColor, setStartColor, setEndColor } = useContext(GradientContext)

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

  const handleThemeChange = (themeColor) => {
    setTextColor(themeColor.textColor)
    setStartColor(themeColor.startColor)
    setEndColor(themeColor.endColor)
  }

  const handleReset = () => {
    setTextColor('#3a3d60')
    setStartColor('#40ccff')
    setEndColor('#ffcf00')
    setSelectedFont('Fira Sans Condensed')
    document.documentElement.style.setProperty('--main-font', 'Fira Sans Condensed')
  }

  const resetFontSize = () => {}

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
        <ChangeThemeColors
          endColor={endColor}
          handleThemeChange={handleThemeChange}
          setEndColor={setEndColor}
          setStartColor={setStartColor}
          startColor={startColor}
        />
        <FontSwitcher
          fontSize={fontSize}
          selectedFont={selectedFont}
          setFontSize={setFontSize}
          setSelectedFont={setSelectedFont}
          setTextColor={setTextColor}
          textColor={textColor}
        />
        <button aria-label="reset" className={styles.reset} onClick={handleReset} type="button">
          reset all
        </button>
      </div>
    </div>
  )
})
