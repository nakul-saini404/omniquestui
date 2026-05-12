/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'eduquest.org.in' },
      { protocol: 'https', hostname: 'join.eduquest.org.in' },
      { protocol: 'https', hostname: 'storage.files-vault.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
export default nextConfig;
