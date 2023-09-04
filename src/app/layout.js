import './globals.css'

export const metadata = {
  title: 'Home page',
  description: 'Your Trusted Partner for Web Development Excellence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
