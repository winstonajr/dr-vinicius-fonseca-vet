'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

// --- DADOS E CONSTANTES ---
// MUDANÇA 1: Lista de links expandida para ser um mapa do site completo
const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#area-atendimento', label: 'Área de Atendimento' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#agendamento', label: 'Agendamento' },
  { href: '#faq', label: 'Dúvidas Frequentes' },
]

const socialLinks = [
  { name: 'Instagram', href: '#', icon: FaInstagram, disabled: true },
  { name: 'Facebook', href: '#', icon: FaFacebookF, disabled: true },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5513991298550',
    icon: FaWhatsapp,
    disabled: false,
  },
]

const developerInfo = {
  name: 'Winston',
  link: 'https://instagram.com/win_ajr',
}

// --- ANIMAÇÕES ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// --- COMPONENTE PRINCIPAL ---
export default function Footer() {
  const { handleNavClick } = useSmoothScroll({})
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2A4C68] text-[#CAD8E1]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Coluna 1: Logo e Descrição */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="inline-block">
              <Image src="/logo.png" alt="Logo Dr. Vinícius Andrade" width={100} height={100} />
            </a>
            <h3 className="text-xl font-bold text-white">Dr. Vinícius Andrade</h3>
            <p className="max-w-xs text-sm leading-relaxed text-[#A0B8C7]">
              Cuidado veterinário domiciliar com profissionalismo e carinho, na Baixada Santista.
            </p>
          </motion.div>

          {/* Coluna 2: Navegação */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-1 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3: Contato e Redes Sociais */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold uppercase tracking-wider text-white">Contato</h4>
            <div className="mt-4 flex gap-6 text-2xl">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.disabled ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`${social.name}${social.disabled ? ' (em breve)' : ''}`}
                  onClick={(e) => social.disabled && e.preventDefault()}
                  className={`transition-transform hover:scale-110 ${
                    social.disabled ? 'cursor-not-allowed opacity-50' : 'hover:text-white'
                  }`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Linha de Créditos */}
        <motion.div
          className="mt-16 border-t border-[#4A6C88] pt-8 text-center text-xs text-[#A0B8C7]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} Dr. Vinícius Andrade. Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido por{' '}
            <a
              href={developerInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition-colors hover:underline"
            >
              {developerInfo.name}
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}