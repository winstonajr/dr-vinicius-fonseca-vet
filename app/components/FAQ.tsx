'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItem = {
  pergunta: string
  resposta: string
}

const faqList: FAQItem[] = [
  {
    pergunta: 'Quais serviços são oferecidos no atendimento domiciliar?',
    resposta:
      'Atendimentos clínicos, aplicação de vacinas, coleta de exames, curativos, administração de medicamentos, fluidoterapia, orientação sobre alimentação e comportamento, entre outros. Se necessário, oriento sobre a necessidade de exames complementares ou internação.',
  },
  {
    pergunta: 'É seguro vacinar meu pet em casa?',
    resposta:
      'Sim! As vacinas são armazenadas e transportadas corretamente, com todo cuidado técnico necessário, garantindo segurança e eficácia. Além disso, seu pet evita o estresse do transporte e contato com outros animais.',
  },
  {
    pergunta: 'Quais animais você atende?',
    resposta:
      'Atualmente, atendo cães e gatos de todas as idades, desde filhotes até idosos.',
  },
  {
    pergunta: 'Como agendo uma consulta?',
    resposta:
      'Você pode agendar pelo WhatsApp, ligação ou email. Basta informar o nome do pet, a queixa principal, endereço completo e o melhor horário para o atendimento.',
  },
  {
    pergunta: 'Quais são as formas de pagamento?',
    resposta:
      'Aceito dinheiro, PIX e cartão (crédito e débito). O pagamento é feito no final da consulta.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      id="faq"
      className="bg-[#F5F9FB] max-w-4xl mx-auto py-16 px-6 rounded-lg"
      aria-label="Perguntas Frequentes"
    >
      <h2 className="text-center text-3xl font-bold mb-12 text-[#37699E]">
        Perguntas Frequentes
      </h2>

      <div className="flex flex-col gap-4">
        {faqList.map((item, i) => {
          const isOpen = i === openIndex
          return (
            <div
              key={i}
              className="bg-white rounded-md shadow-sm border border-[#CAD8E1]"
            >
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-[#2A4C68] hover:text-[#25D366] focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-header-${i}`}
              >
                {item.pergunta}
                {isOpen ? (
                  <ChevronUp size={24} className="text-[#25D366]" />
                ) : (
                  <ChevronDown size={24} className="text-[#37699E]" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-header-${i}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 pb-6 overflow-hidden text-[#1B2E41]"
                  >
                    <p>{item.resposta}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
