import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const domainURL = process.env.DOMAIN_URL

  if (!domainURL) {
    throw new Error('DOMAIN_URL is not defined')
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${domainURL}/sitemap.xml`,
  }
}
