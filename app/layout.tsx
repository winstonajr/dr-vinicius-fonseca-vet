import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

// --- SEO AVANÇADO ---
const siteConfig = {
  title: "Dr. Vinícius Fonseca | Veterinário em Domicílio na Baixada Santista",
  description: "Atendimento veterinário profissional para cães e gatos em Santos, São Vicente, Praia Grande e Cubatão. Consultas, vacinas, exames e mais, no conforto do seu lar.",
  url: "https://www.drviniciusfonseca.vet.br", // IMPORTANTE: Troque pela URL final do site
  author: "Dr. Vinícius Andrade da Fonseca João",
  keywords: "veterinário em domicílio, veterinário baixada santista, veterinário santos, veterinário são vicente, veterinário praia grande, veterinário cubatão, consulta veterinária em casa, vacina para pet em casa",
};

export const metadata: Metadata = {
  // Informações básicas
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  
  // Palavras-chave
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,

  // Robôs de busca
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph (para compartilhamento em redes sociais como Facebook, WhatsApp)
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Dr. Vinícius Andrade | Veterinário Domiciliar",
    images: [
      {
        url: '/og-image.png', // Crie uma imagem de 1200x630px e coloque na pasta /public
        width: 1200,
        height: 630,
        alt: 'Dr. Vinícius Andrade atendendo um pet em casa.',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  // Twitter Card (para compartilhamento no Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png'], // A mesma imagem do Open Graph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Dr. Vinícius Andrade - Atendimento Veterinário Domiciliar",
            "description": siteConfig.description,
            "url": siteConfig.url,
            "telephone": "+5513991298550", // Use o formato internacional
            "image": `${siteConfig.url}/og-image.png`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "São Vicente",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "areaServed": [
              { "@type": "City", "name": "Santos" },
              { "@type": "City", "name": "São Vicente" },
              { "@type": "City", "name": "Praia Grande" },
              { "@type": "City", "name": "Cubatão" }
            ]
          }) }}
        />
      </head>
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col bg-white">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}