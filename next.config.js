/** @type {import('next').NextConfig} */

const { FONTCHROMA_URL, FASTMVP_URL } = process.env

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
        source: '/fastmvp',
        destination: `${FASTMVP_URL}/fastmvp`,
      },
      {
        source: '/fastmvp/:path*',
        destination: `${FASTMVP_URL}/fastmvp/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
