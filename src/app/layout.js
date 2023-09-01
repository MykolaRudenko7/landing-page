import { Fira_Sans_Condensed } from 'next/font/google'
import './globals.css'

const firaSansCondensed = Fira_Sans_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Home page',
  description: 'Your Trusted Partner for Web Development Excellence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSansCondensed.className}>{children}</body>
    </html>
  )
}
