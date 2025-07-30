import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Vinícius Fonseca | Médico Veterinário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
