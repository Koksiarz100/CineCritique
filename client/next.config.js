/** @type {import('next').NextConfig} */
const path = require('path')

// Testing

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['localhost'],
  },
}

/*
// Production
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cine-critique-site.cyclic.app'],
  },
}
*/