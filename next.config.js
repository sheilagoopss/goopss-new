/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: '/about-goopss',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig; 