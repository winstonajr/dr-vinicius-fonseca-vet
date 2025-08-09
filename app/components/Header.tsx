'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { useHideOnScroll } from '../hooks/useHideOnScroll'

// --- DADOS E CONSTANTES ---
const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5513991298550&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'

// --- SUBCOMPONENTES MODULARES ---

function Logo({ onClick }: { onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <motion.a
      href="#inicio"
      onClick={(e) => onClick(e, '#inicio')}
      aria-label="Voltar ao início da página"
      className="rounded-full focus:outline-none focus:ring-2 focus:ring-white/80"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image src="/icon0.svg" width={50} height={50} alt="Logo Dr. Vinícius Andrade" />
    </motion.a>
  )
}

function CtaButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="inline-flex items-center gap-2 rounded-full bg-[#4CAF50] px-3 py-2 text-sm font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-[#2A4C68] md:gap-2.5 md:px-5 md:py-2.5"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={18} />
      <span className="md:hidden">Agendar</span>
      <span className="hidden md:inline">Agendar Consulta</span>
    </motion.a>
  )
}

function DesktopNav({ onClick }: { onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Navegação principal">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => onClick(e, link.href)}
          className="relative text-sm font-medium uppercase tracking-wider text-[#CAD8E1] transition-colors hover:text-white"
        >
          {link.label}
          <motion.div
            className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-white"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0.5 }}
          />
        </a>
      ))}
    </nav>
  )
}

function MobileNavMenu({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute left-0 top-full w-full overflow-hidden border-t border-t-white/10 bg-[#2A4C68] shadow-2xl"
        >
          <nav className="flex flex-col gap-2 p-6" aria-label="Navegação móvel">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => onClick(e, link.href)}
                className="rounded-md px-4 py-3 text-center text-base font-medium text-[#CAD8E1] transition-colors hover:bg-white/10 hover:text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHidden = useHideOnScroll()
  const { handleNavClick } = useSmoothScroll({ onScrollStart: () => setIsMenuOpen(false) })

  // <-- MUDANÇA PRINCIPAL AQUI ---
  // Este useEffect substitui o antigo que bloqueava o scroll.
  useEffect(() => {
    // Handler que será chamado no evento de scroll
    const handleScroll = () => {
      // Se rolou, fecha o menu. Simples assim.
      setIsMenuOpen(false)
    }

    // Só adiciona o "ouvinte" se o menu estiver aberto
    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    // Função de limpeza: remove o "ouvinte" quando o menu fecha ou o componente desmonta.
    // Isso é crucial para a performance e para evitar bugs.
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen]) // A dependência garante que este efeito rode sempre que o menu abrir ou fechar.

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full bg-[#37699e]/80 text-[#cad8e1] shadow-lg backdrop-blur-md"
      animate={{ y: isHidden ? '-100%' : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        <Logo onClick={handleNavClick} />

        <div className="hidden items-center gap-8 md:flex">
          <DesktopNav onClick={handleNavClick} />
          <CtaButton />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <CtaButton />
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="rounded-full p-2 text-white"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      <MobileNavMenu isOpen={isMenuOpen} onClick={handleNavClick} />
    </motion.header>
  )
}