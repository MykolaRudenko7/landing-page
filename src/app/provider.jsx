import React, { useEffect, useState } from 'react'
import { GradientContext, TextColorContext } from 'context/ThemeContext'

export default React.memo(({ children }) => {
  const [textColor, setTextColor] = useState(() => {
    const savedTextColor = typeof window !== 'undefined' && localStorage.getItem('textColor')

    return savedTextColor || '#ffffff'
  })

  const [startColor, setStartColor] = useState(() => {
    const savedStartColor = typeof window !== 'undefined' && localStorage.getItem('startColor')

    return savedStartColor || '#001d3d'
  })

  const [endColor, setEndColor] = useState(() => {
    const savedEndColor = typeof window !== 'undefined' && localStorage.getItem('endColor')

    return savedEndColor || '#003566'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('textColor', textColor)
      localStorage.setItem('startColor', startColor)
      localStorage.setItem('endColor', endColor)

      document.documentElement.style.setProperty('--text-color', textColor)
      document.documentElement.style.setProperty('--start-color', startColor)
      document.documentElement.style.setProperty('--end-color', endColor)
    }
  }, [textColor, startColor, endColor])

  return (
    <TextColorContext.Provider value={{ textColor, setTextColor }}>
      <GradientContext.Provider value={{ startColor, endColor, setStartColor, setEndColor }}>
        {children}
      </GradientContext.Provider>
    </TextColorContext.Provider>
  )
})
