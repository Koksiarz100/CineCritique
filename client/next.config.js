/** @type {import('next').NextConfig} */
const path = require('path')

// Testing
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/images/**',
      },
    ],
  },
}

// Production
/*
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cine-critique-site.cyclic.app'],
  },
}
*/