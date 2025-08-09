'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

// --- DADOS E CONSTANTES ---
const metodosContato = [
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    detail: '(13) 99129-8550',
    href: 'https://wa.me/5513991298550?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.',
    ctaText: 'Iniciar Conversa',
    ariaLabel: 'Iniciar conversa no WhatsApp',
    color: 'hover:border-green-500',
  },
  {
    icon: FaPhoneAlt,
    title: 'Telefone',
    detail: '(13) 99129-8550',
    href: 'tel:+5513991298550',
    ctaText: 'Ligar Agora',
    ariaLabel: 'Ligar para o número',
    color: 'hover:border-blue-500',
  },
  {
    icon: FaEnvelope,
    title: 'E-mail',
    detail: 'viniciusafjoao@gmail.com',
    href: 'mailto:viniciusafjoao@gmail.com',
    ctaText: 'Enviar E-mail',
    ariaLabel: 'Enviar um e-mail',
    color: 'hover:border-gray-500',
  },
]

// --- ANIMAÇÕES ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}


// --- SUBCOMPONENTES ---
function ContactCard({ icon: Icon, title, detail, href, ctaText, ariaLabel, color }: (typeof metodosContato)[0]) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg"
      variants={itemVariants}
    >
      <Icon className="mx-auto h-12 w-12 text-[#2A4C68]" />
      <h3 className="mt-6 text-xl font-bold text-[#2A4C68]">{title}</h3>
      <p className="mt-2 flex-grow text-lg text-[#5C86B5]">{detail}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`mt-8 inline-block rounded-lg border-2 border-transparent bg-[#E9F2F9] px-6 py-3 font-semibold text-[#37699E] transition-all duration-300 hover:bg-white ${color} hover:text-[#2A4C68]`}
      >
        {ctaText}
      </a>
    </motion.div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function Contato() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-[#2A4C68] sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#777]">
            Escolha a forma que for mais conveniente para você. Estou à disposição para agendar uma consulta ou esclarecer qualquer dúvida.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {metodosContato.map((metodo) => (
            <ContactCard key={metodo.title} {...metodo} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}