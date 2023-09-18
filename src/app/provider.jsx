// 'use client';
import { GradientContext, TextColorContext } from 'context/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }) {
  const [textColor, setTextColor] = useState(() => {
    const savedTextColor = typeof window !== 'undefined' && localStorage.getItem('textColor')

    return savedTextColor || '#3a3d60'
  })

  const [startColor, setStartColor] = useState(() => {
    const savedStartColor = typeof window !== 'undefined' && localStorage.getItem('startColor')

    return savedStartColor || '#40ccff'
  })

  const [endColor, setEndColor] = useState(() => {
    const savedEndColor = typeof window !== 'undefined' && localStorage.getItem('endColor')

    return savedEndColor || '#ffcf00'
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
}
