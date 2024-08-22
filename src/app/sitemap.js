export default function sitemap() {
  const domainURL = process.env.DOMAIN_URL

  return [
    {
      url: `${domainURL}`,
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
