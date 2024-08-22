/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/_app.scss";`,
  },
  productionBrowserSourceMaps: true,
}

const nextIntlConfig = withNextIntl({})

module.exports = async () => {
  const withPWA = (await import('next-pwa')).default
  const pwaConfig = withPWA({
    dest: 'public',
    register: true,
  })

  return {
    ...nextConfig,
    ...nextIntlConfig,
    ...pwaConfig,
  }
}
