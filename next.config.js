/** @type {import('next').NextConfig} */

const { MAIN_URL } = "topdev.tools"
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: `/:path*`,
            },
            {
                source: '/fontchroma',
                destination: `${MAIN_URL}/fontchroma`,
            },
            {
                source: '/fontchroma/:path*',
                destination: `${MAIN_URL}/fontchroma/:path*`,
            },
        ]
    },
}

module.exports = nextConfig
