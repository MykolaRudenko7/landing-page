export default function robots() {
  const domainURL = process.env.DOMAIN_URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${domainURL}/sitemap.xml`,
  }
}
