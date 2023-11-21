/** @type {import('next').NextConfig} */
const path = require('path')
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
