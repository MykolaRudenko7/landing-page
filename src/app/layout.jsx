import { Poppins } from 'next/font/google'
import 'styles/global.scss'

export const metadata = {
  title: 'Home page',
  description: 'Your Trusted Partner for Web Development Excellence',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--mainFont',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className} lang="en">
      <body>{children}</body>
    </html>
  )
}
