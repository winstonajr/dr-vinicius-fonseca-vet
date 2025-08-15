import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"
import { siteConfig } from "@/config/site"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Veterinário em Domicílio na Baixada Santista`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Evite o estresse de levar seu pet à clínica. Dr. Vinícius oferece consultas, vacinas, exames e todo o cuidado veterinário necessário na segurança e conforto da sua casa na Baixada Santista.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: `${siteConfig.name} | Veterinário em Domicílio`,
    description: "Atendimento veterinário profissional para cães e gatos, no conforto e segurança do seu lar.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Imagem de apresentação de ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Veterinário em Domicílio`,
    description: "Atendimento veterinário profissional para cães e gatos, no conforto e segurança do seu lar.",
    images: [siteConfig.ogImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Dr. Vinícius Fonseca - Atendimento Veterinário Domiciliar",
            "description": "Atendimento veterinário profissional para cães e gatos em Santos, São Vicente, Praia Grande e Cubatão.",
            "url": siteConfig.url,
            "telephone": "+5513991298550",
            "image": `${siteConfig.url}${siteConfig.ogImage}`,
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
  )
}