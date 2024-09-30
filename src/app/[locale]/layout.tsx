import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Fira_Code, Poppins } from 'next/font/google'
import { ThemeProvider } from 'components/ThemeProvider'
import { RootLayoutProps } from 'types/types'
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

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages()

  const currentFont = locale === 'uk' ? firaCode.className : poppins.className

  return (
    <html className={currentFont} lang={locale} suppressHydrationWarning>
      <link href="/favicon.ico" rel="icon" type="favicon" />
      <meta content="light dark" name="color-scheme" />

      <body>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
