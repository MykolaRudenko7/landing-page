import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { fontsNamesData } from 'data/fonts'
import styles from 'components/Switcher/FontSwitcher/FontSwitcher.module.scss'

export default React.memo(({ textColor, selectedFont, setTextColor, setSelectedFont }) => {
  const [fontSize, setFontSize] = useState(10)
  const defaultFontSize = 10

  const handleFontSizeChange = (event) => {
    const newFontSize = event.target.value
    setFontSize(newFontSize)

    const largeTitleSize = newFontSize * 3.5
    const mediumTitleSize = newFontSize * 3
    const liteTitleSize = newFontSize * 2
    const largeSubtitleSize = newFontSize * 2
    const mediumSubtitleSize = newFontSize * 1.8
    const liteSubtitleSize = newFontSize * 1.5
    const largeTitleCargSize = newFontSize * 2
    const regularTitleCargSize = newFontSize * 1.8
    const smallTitleCardSize = newFontSize * 1.6
    const largeSubtitleCargSize = newFontSize * 1.8
    const regularSubtitleCargSize = newFontSize * 1.6
    const smallSubtitleCardSize = newFontSize * 1.4

    document.documentElement.style.setProperty('--main-font-size', `${event.target.value}px`)
    document.documentElement.style.setProperty('--largeTitleSize', `${largeTitleSize}px`)
    document.documentElement.style.setProperty('--mediumTitleSize', `${mediumTitleSize}px`)
    document.documentElement.style.setProperty('--liteTitleSize', `${liteTitleSize}px`)
    document.documentElement.style.setProperty('--largeSubtitleSize', `${largeSubtitleSize}px`)
    document.documentElement.style.setProperty('--mediumSubtitleSize', `${mediumSubtitleSize}px`)
    document.documentElement.style.setProperty('--liteSubtitleSize', `${liteSubtitleSize}px`)
    document.documentElement.style.setProperty('--largeTitleCargSize', `${largeTitleCargSize}px`)
    document.documentElement.style.setProperty(
      '--regularTitleCargSize',
      `${regularTitleCargSize}px`,
    )
    document.documentElement.style.setProperty('--smallTitleCardSize', `${smallTitleCardSize}px`)
    document.documentElement.style.setProperty(
      '--largeSubtitleCargSize',
      `${largeSubtitleCargSize}px`,
    )
    document.documentElement.style.setProperty(
      '--regularSubtitleCargSize',
      `${regularSubtitleCargSize}px`,
    )
    document.documentElement.style.setProperty(
      '--smallSubtitleCardSize',
      `${smallSubtitleCardSize}px`,
    )
  }

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value)
    document.documentElement.style.setProperty('--main-font', event.target.value)
  }

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value)
  }
  const handleFontSizeReset = () => {
    setFontSize(defaultFontSize)
  }

  return (
    <div className={styles.fontSwitcher}>
      <p className={styles.fontTitle}>Font Changes</p>
      <div className={styles.fontSwitcherWrapper}>
        <label className={styles.colorLabel}>
          Change text color
          <input
            className={styles.colorInput}
            onChange={handleTextColorChange}
            type="color"
            value={textColor}
          />
        </label>
        <p className={styles.subtitle}>Change font</p>
        <select
          className={styles.fontSwitcherSelect}
          id="fontSelect"
          name="fontSelect"
          onChange={handleFontChange}
          value={selectedFont}
        >
          {fontsNamesData.map((font) => (
            <option key={uuidv4()} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.fontSizeBlock}>
        <label className={styles.subtitle} htmlFor="fontSize">
          Change font size: {fontSize}px
        </label>
        <input
          id="fontSize"
          max="25"
          min="5"
          onChange={handleFontSizeChange}
          step="1"
          type="range"
          value={fontSize}
        />
      </div>
    </div>
  )
})
