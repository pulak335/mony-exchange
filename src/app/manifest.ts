import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Money Exchange',
    short_name: 'MoneyX',
    description: 'Your trusted platform for fast, secure, and reliable money exchange services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#541388',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}