import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const domainURL = process.env.DOMAIN_URL

  if (!domainURL) {
    throw new Error('DOMAIN_URL is not defined')
  }

  return [
    {
      url: domainURL,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domainURL}/en`,
          uk: `${domainURL}/uk`,
        },
      },
    },
  ]
}
