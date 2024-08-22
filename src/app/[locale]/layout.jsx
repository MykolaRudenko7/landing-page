import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Fira_Code, Poppins } from 'next/font/google'
import 'styles/global.scss'

export const metadata = {
  title: 'Tech Cats',
  description: 'Your Trusted Partner for Web Development Excellence',
  manifest: '/manifest.json',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages()

  const currentFont = locale === 'uk' ? firaCode.className : poppins.className

  return (
    <html className={currentFont} lang={locale}>
      <link href="/favicon.ico" rel="icon" type="favicon" />

      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
