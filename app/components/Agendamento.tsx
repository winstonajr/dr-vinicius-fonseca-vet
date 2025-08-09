'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { CheckCircle2 } from 'lucide-react'

// --- DADOS E CONSTANTES ---
const agendamentoPassos = [
  'Nome completo do seu pet',
  'Principal queixa ou motivo da consulta',
  'Endereço completo para o atendimento',
  'Sugestão de melhor dia e horário para a visita',
]

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
export default function Agendamento() {
  return (
    // MUDANÇA: Estilo de fundo aplicado diretamente na seção para largura total
    <section
      id="agendamento"
      className="bg-gradient-to-br from-[#37699E] to-[#2A4C68] py-20 text-white md:py-28"
    >
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl font-bold md:text-4xl" variants={itemVariants}>
          Agende a Consulta do Seu Pet
        </motion.h2>

        <motion.p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/90" variants={itemVariants}>
          Agendar uma consulta domiciliar é simples. Para agilizar, por favor, envie uma mensagem pelo WhatsApp ou e-mail informando:
        </motion.p>

        {/* MUDANÇA: Lista agora é centralizada como um bloco, mas com texto à esquerda para legibilidade */}
        <motion.ul
          className="mx-auto mt-8 mb-8 inline-block max-w-md space-y-3 text-left"
          variants={itemVariants}
        >
          {agendamentoPassos.map((passo) => (
            <li key={passo} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-300" />
              <span>{passo}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p className="text-sm italic text-white/80" variants={itemVariants}>
          Após o contato, você receberá a confirmação e os detalhes do agendamento.
        </motion.p>
        
        <motion.div className="mt-8" variants={itemVariants}>
          <motion.a
            href="https://wa.me/5513991298550?text=Olá%20Dr.%20Vinícius,%20gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar consulta pelo WhatsApp"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-2xl" />
            Agendar via WhatsApp
          </motion.a>
        </motion.div>

        <motion.p className="mt-6 text-sm text-white/80" variants={itemVariants}>
          Ou, se preferir, envie um e-mail para{' '}
          <a
            href="mailto:viniciusafjoao@gmail.com"
            className="font-semibold underline hover:text-green-200"
          >
            viniciusafjoao@gmail.com
          </a>
        </motion.p>
      </motion.div>
    </section>
  )
}