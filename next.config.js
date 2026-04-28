/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'eduquest.org.in' },
      { protocol: 'https', hostname: 'join.eduquest.org.in' },
      { protocol: 'https', hostname: 'storage.files-vault.com' },
    ],
  },

  async redirects() {
    return [
      {
        source: '/omniquest',
        destination: '/',
        permanent: true,
      },
      {
        source: '/omniquest/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;