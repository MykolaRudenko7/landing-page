/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
const path = require('path')
module.exports = {
  sassOptions: {
    additionalData: `@import "src/styles/_app.scss";`,
  },
  env: {
    GOOGLE_SPREADSHEET: process.env.GOOGLE_SPREADSHEET,
  },
}
