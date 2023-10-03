import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { fontsNamesData } from 'data/fonts'
import styles from 'components/Switcher/FontSwitcher/FontSwitcher.module.scss'

export default React.memo(
  ({ textColor, selectedFont, setTextColor, setSelectedFont, fontSize, setFontSize }) => {
    const handleFontSizeChange = (event) => {
      setFontSize(event.target.value)

      const largeTitleSize = fontSize * 3.5
      const mediumTitleSize = fontSize * 3
      const liteTitleSize = fontSize * 2
      const largeSubtitleSize = fontSize * 2
      const mediumSubtitleSize = fontSize * 1.8
      const liteSubtitleSize = fontSize * 1.5
      const largeTitleCargSize = fontSize * 2
      const regularTitleCargSize = fontSize * 1.8
      const smallTitleCardSize = fontSize * 1.6
      const largeSubtitleCargSize = fontSize * 1.8
      const regularSubtitleCargSize = fontSize * 1.6
      const smallSubtitleCardSize = fontSize * 1.4

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
  },
)
