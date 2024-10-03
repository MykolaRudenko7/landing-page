// /** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()
const withImages = require('next-images')

const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/_app.scss";`,
  },
  productionBrowserSourceMaps: true,
  images: {
    disableStaticImages: true,
  },
}

const nextIntlConfig = withNextIntl({})

module.exports = async () => {
  const withPWA = (await import('next-pwa')).default
  const pwaConfig = withPWA({
    dest: 'public',
    register: true,
  })

  return withImages({
    ...nextConfig,
    ...nextIntlConfig,
    ...pwaConfig,
  })
}
