import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'], // Example: disallow specific paths
      },
    ],
    sitemap: 'https://moneyexchange.com/sitemap.xml',
    host: 'https://moneyexchange.com',
  };
}