'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

// --- DADOS E CONSTANTES ---
const faqList: { pergunta: string; resposta: string }[] = [
  {
    pergunta: 'Quais serviços são oferecidos no atendimento domiciliar?',
    resposta:
      'Realizo consultas clínicas completas, aplicação de vacinas importadas, coleta de exames, curativos, administração de medicamentos, fluidoterapia e orientações sobre nutrição e bem-estar para cães e gatos.',
  },
  {
    pergunta: 'É seguro vacinar meu pet em casa?',
    resposta:
      'Sim, totalmente seguro. As vacinas são armazenadas e transportadas em caixas térmicas com controle de temperatura, garantindo 100% de sua eficácia e segurança, além de evitar o estresse do transporte para o seu pet.',
  },
  {
    pergunta: 'Como funciona o agendamento de uma consulta?',
    resposta:
      'O agendamento é simples e pode ser feito por WhatsApp, ligação ou e-mail. Basta informar o nome do pet, a queixa principal, o endereço e a sua disponibilidade de horário para combinarmos a visita.',
  },
  {
    pergunta: 'Quais animais você atende?',
    resposta: 'No momento, o atendimento é focado em cães e gatos de todas as idades, de filhotes a idosos.',
  },
  {
    pergunta: 'Quais são as formas de pagamento?',
    resposta: 'Aceito Pix, dinheiro e cartões de crédito e débito das principais bandeiras. O pagamento é realizado ao final da consulta.',
  },
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
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

// --- SUBCOMPONENTES ---
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { pergunta: string; resposta: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm" variants={itemVariants}>
      <h3>
        <button
          onClick={onToggle}
          className={`flex w-full items-center justify-between p-5 text-left font-semibold text-[#2A4C68] transition-colors duration-300 ${
            isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'
          }`}
          aria-expanded={isOpen}
        >
          <span>{item.pergunta}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className={`h-6 w-6 text-[#5C86B5] ${isOpen && 'text-[#2A4C68]'}`} />
          </motion.div>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-base leading-relaxed text-[#333]">
              {item.resposta}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function FAQ() {
  // MUDANÇA 1: Primeira pergunta começa aberta
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#E9F2F9] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-[#2A4C68] sm:text-4xl">
            Dúvidas Comuns
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#777]">
            Respostas para as perguntas mais frequentes sobre o atendimento domiciliar.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {faqList.map((item, i) => (
            // MUDANÇA 2: Usando o subcomponente AccordionItem
            <AccordionItem
              key={i}
              item={item}
              isOpen={i === openIndex}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* MUDANÇA 3: Bloco de ação final */}
        <motion.div
          className="mt-16 rounded-xl border border-slate-300 bg-white p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-[#2A4C68]">Ainda com dúvidas?</h3>
          <p className="mx-auto mt-2 max-w-md text-base text-[#777]">
            Se sua pergunta não foi respondida, entre em contato diretamente. Terei prazer em ajudar!
          </p>
          <a
            href="https://wa.me/5513991298550?text=Ol%C3%A1%21+Tenho+uma+d%C3%BAvida+que+n%C3%A3o+encontrei+no+site."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#4CAF50] px-6 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <FaWhatsapp className="h-5 w-5" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}