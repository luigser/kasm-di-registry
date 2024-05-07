/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DI Kasm Registry',
    description: 'The DI workspaces store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://luigser.github.io/kasm-di-registry/',
    contactUrl: 'https://luigser.github.io/kasm-di-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-di-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
