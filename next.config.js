/** @type {import('next').NextConfig} */

const { FONTCHROMA_URL, PROJMANAGER_URL } = process.env

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/fontchroma',
        destination: `${FONTCHROMA_URL}/fontchroma`,
      },
      {
        source: '/fontchroma/:path*',
        destination: `${FONTCHROMA_URL}/fontchroma/:path*`,
      },
      {
        source: '/projmanager',
        destination: `${PROJMANAGER_URL}`
      }
    ]
  },
}

module.exports = nextConfig
