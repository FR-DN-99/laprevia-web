/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export", // genera HTML estático para Netlify
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopack: false, // Desactiva Turbopack para que el dev compile rápido
  },
  turbopack: {
    root: './', // Forzar que Next use la raíz del proyecto
  },
}

export default nextConfig
