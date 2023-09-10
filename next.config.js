/** @type {import('next').NextConfig} */

const { PERMANENT_REDIRECT_STATUS } = require('next/dist/shared/lib/constants')

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
    ]
  },
}

module.exports = nextConfig
