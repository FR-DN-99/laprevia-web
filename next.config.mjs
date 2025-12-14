/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 25a513c686a2d4c3d6d11be615288adfc0d88a18
  },
}

export default nextConfig
