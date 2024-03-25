/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/_app.scss";`,
  },
  env: {
    GOOGLE_SPREADSHEET: process.env.GOOGLE_SPREADSHEET,
  },
}

const nextIntlConfig = withNextIntl({})

module.exports = {
  ...nextConfig,
  ...nextIntlConfig,
}
