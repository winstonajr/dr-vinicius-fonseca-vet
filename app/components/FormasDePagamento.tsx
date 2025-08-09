'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { FaMoneyBillWave, FaCreditCard, FaPix } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'

// --- DADOS E CONSTANTES ---
const metodosPagamento = [
  {
    icon: FaPix,
    title: 'Pix',
    description: 'Pagamento instantâneo e seguro.',
  },
  {
    icon: FaCreditCard,
    title: 'Cartão de Crédito/Débito',
    description: 'Aceitamos as principais bandeiras.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Dinheiro',
    description: 'Pagamento em espécie no local.',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// --- SUBCOMPONENTES ---
function PaymentMethod({ icon: Icon, title, description }: (typeof metodosPagamento)[0]) {
  return (
    <motion.div className="flex items-center gap-4 rounded-xl bg-[#F8FAFC] p-4 shadow-sm" variants={itemVariants}>
      <Icon className="h-8 w-8 flex-shrink-0 text-[#37699E]" />
      <div>
        <h3 className="font-bold text-[#2A4C68]">{title}</h3>
        <p className="text-sm text-[#777]">{description}</p>
      </div>
    </motion.div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function FormasDePagamento() {
  return (
    <section id="formas-pagamento" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Coluna Esquerda: Formas de Pagamento */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-extrabold text-[#2A4C68] sm:text-4xl">
              Pagamento Facilitado
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#777]">
              Para sua total comodidade e segurança, o pagamento pode ser realizado ao final da consulta através das seguintes formas:
            </p>
            <div className="mt-8 space-y-4">
              {metodosPagamento.map((metodo) => (
                <PaymentMethod key={metodo.title} {...metodo} />
              ))}
            </div>
          </motion.div>

          {/* Coluna Direita: Bloco de Ação */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-2xl bg-[#E9F2F9] p-8 text-center shadow-lg lg:p-12" // <-- CORREÇÃO: Adicionado 'items-center'
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-[#2A4C68]">Consulte Valores e Agende</h3>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#5C86B5]">
              O valor final da consulta pode variar com a localização. Entre em contato para receber um orçamento preciso e agendar o melhor horário para seu pet.
            </p>
            <a
              href="https://wa.me/5513991298550?text=Ol%C3%A1%21+Gostaria+de+consultar+o+valor+de+uma+consulta+e+verificar+a+disponibilidade+de+agendamento."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#4CAF50] px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <FaWhatsapp className="h-6 w-6" />
              <span>Consultar / Agendar</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}