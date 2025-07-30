'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#2A4C68] text-[#CAD8E1] py-8 px-6 sm:px-12 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Logo e Nome */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Image
            src="/icon0.svg"
            alt="Logo Dr. Vinícius Andrade"
            width={80}
            height={80}
            className="mb-2"
            priority
          />
          <span className="text-xl font-bold tracking-wide">Dr. Vinícius Andrade</span>
        </div>

        {/* Menu de navegação */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6 text-sm md:text-base md:gap-10">
          <Link href="#sobre" className="hover:text-white transition-colors" aria-label="Ir para a seção Sobre">
            Sobre
          </Link>
          <Link href="#servicos" className="hover:text-white transition-colors" aria-label="Ir para a seção Serviços">
            Serviços
          </Link>
          <Link href="#area-atendimento" className="hover:text-white transition-colors" aria-label="Ir para a seção Área de Atendimento">
            Área
          </Link>
          <Link href="#depoimentos" className="hover:text-white transition-colors" aria-label="Ir para a seção Depoimentos">
            Depoimentos
          </Link>
          <Link href="#contato" className="hover:text-white transition-colors" aria-label="Ir para a seção Contato">
            Contato
          </Link>
        </nav>

        {/* Ícones redes sociais */}
        <div className="flex gap-8 text-2xl">
          <a
            href="#"
            aria-label="Instagram - Em breve"
            className="opacity-50 cursor-not-allowed"
            title="Instagram - Em breve"
            tabIndex={-1}
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Facebook - Em breve"
            className="opacity-50 cursor-not-allowed"
            title="Facebook - Em breve"
            tabIndex={-1}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/5513991298550"
            aria-label="WhatsApp - Contato"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Créditos de desenvolvimento */}
      <div className="text-center mt-8 text-xs text-[#7CA6C7] space-y-1">
        <p>© {new Date().getFullYear()} Dr. Vinícius Andrade. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{' '}
          <Link
            href="https://instagram.com/win_ajr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-green-700 font-semibold transition-colors"
          >
            Winston
          </Link>
        </p>
      </div>
    </footer>
  )
}
