import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Adicione esta configuração de imagens aqui dentro
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const, // O 'as const' ajuda na tipagem
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  /* outras config options aqui, se tiver */
};

export default nextConfig;