import { NextIntlClientProvider, useMessages } from 'next-intl'
import { notFound } from 'next/navigation'
import { Fira_Code, Poppins } from 'next/font/google'
import 'styles/global.scss'

export const metadata = {
  title: 'Tech Cossacks',
  description: 'Your Trusted Partner for Web Development Excellence',
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

const locales = ['en', 'ua']

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages()

  if (!locales.includes(locale)) {
    return notFound()
  }

  const currenFont = locale === 'ua' ? firaCode.className : poppins.className

  return (
    <html className={currenFont} lang={locale}>
      <link href="/favicon.svg" rel="icon" type="favicon" />

      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
