/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      '99designs-blog.imgix.net',
      's3-figma-hubfile-images-production.figma.com',
      'www.orangesoft.com.my',
      'i0.wp.com',
      's3.amazonaws.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;