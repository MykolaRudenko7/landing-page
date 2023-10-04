import React, { useState } from 'react'
import cn from 'classnames'
import styles from 'components/Switcher/ChangeThemeColors/ChangeThemeColors.module.scss'

export default React.memo(
  ({ startColor, endColor, setStartColor, setEndColor, handleThemeChange }) => {
    const [activeTheme, setActiveTheme] = useState(null)

    const handleStartColorChange = (event) => {
      setStartColor(event.target.value)
    }
    const handleEndColorChange = (event) => {
      setEndColor(event.target.value)
    }

    const handleChangeTheme = (themeColor, themeName) => {
      handleThemeChange(themeColor)
      setActiveTheme(themeName)
    }

    return (
      <div className={styles.colorSwitcher}>
        <p className={styles.colorSwitcherTitle}>Change Gradient Colors</p>
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
        <p className={styles.themesTitle}>Change Theme</p>
        <div className={styles.themesButtons}>
          <button
            aria-label="set theme"
            className={cn(styles.setBlackTheme, { [styles.activeTheme]: activeTheme === 'black' })}
            onClick={() =>
              handleChangeTheme(
                {
                  textColor: '#ffffff',
                  startColor: '#000000',
                  endColor: '#000000',
                },
                'black',
            )
            }
            type="button"
          />
          <button
            aria-label="set theme"
            className={cn(styles.setSecondaryBlackTheme, {
              [styles.activeTheme]: activeTheme === 'secondaryBlack',
            })}
            onClick={() =>
              handleChangeTheme(
                {
                  textColor: '#ffffff',
                  startColor: '#000814',
                  endColor: '#000814',
                },
                'secondaryBlack',
            )
            }
            type="button"
          />
          <button
            aria-label="set theme"
            className={cn(styles.setBlueTheme, { [styles.activeTheme]: activeTheme === 'blue' })}
            onClick={() =>
              handleChangeTheme(
                {
                  textColor: '#d1faff',
                  startColor: '#001d3d',
                  endColor: '#003566',
                },
                'blue',
            )
            }
            type="button"
          />
          <button
            aria-label="set theme"
            className={cn(styles.setBlueTheme, { [styles.activeTheme]: activeTheme === 'blue' })}
            onClick={() =>
              handleChangeTheme(
                {
                  textColor: '#d1faff',
                  startColor: '#001d3d',
                  endColor: '#003566',
                },
                'blue',
            )
            }
            type="button"
          />
        </div>
      </div>
    )
  },
)
