'use client'

import 'app/globals.css'
import ThemeProvider from 'app/provider'

export const metadata = {
  title: 'Home page',
  description: 'Your Trusted Partner for Web Development Excellence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
