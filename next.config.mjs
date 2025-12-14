/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // Desactivar Turbopack correctamente
  experimental: {
    turbopack: false,
  },
}

export default nextConfig
