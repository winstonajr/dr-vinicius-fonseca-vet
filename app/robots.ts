import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // IMPORTANTE: Troque pela URL final do site
  const siteUrl = 'https://www.seusite.com.br';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}