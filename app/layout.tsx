import type { Metadata } from "next";
import { Poppins } from 'next/font/google' // Sugestão: Usar next/font para performance
import "./globals.css";
import Header from "./components/Header"; // Certifique-se que o caminho está correto
import Footer from "./components/Footer"; // Certifique-se que o caminho está correto

// Configuração da fonte (opcional, mas recomendado)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "Dr. Vinícius Andrade | Médico Veterinário",
  description: "Atendimento veterinário profissional e com carinho no conforto do seu lar, na Baixada Santista."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}