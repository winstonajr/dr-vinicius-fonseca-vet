'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { MapPin, Clock4, DollarSign, Globe2 } from 'lucide-react'

// --- DADOS E CONSTANTES ---
const infoItems: { icon: React.ElementType; title: string; description: string }[] = [
  {
    icon: MapPin,
    title: 'Cidades Atendidas',
    description: 'São Vicente, Santos, Praia Grande e Cubatão.',
  },
  {
    icon: Clock4,
    title: 'Horários Flexíveis',
    description: 'Atendimento 7 dias por semana, das 8h às 20h, sujeito à disponibilidade.',
  },
  {
    icon: DollarSign,
    title: 'Taxa de Deslocamento',
    description: 'Uma taxa transparente é adicionada, calculada com base na sua localização.',
  },
  {
    icon: Globe2,
    title: 'Agendamento Simples',
    description: 'Entre em contato por WhatsApp, ligação ou e-mail para agendar sua consulta.',
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// --- SUBCOMPONENTES ---
function InfoCard({ icon: Icon, title, description }: (typeof infoItems)[0]) {
  return (
    <motion.div
      className="flex flex-col items-center rounded-2xl bg-[#F8FAFC] p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
      variants={itemVariants}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-inner">
        <Icon className="h-8 w-8 text-[#2A4C68]" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#2A4C68]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#5C86B5]">{description}</p>
    </motion.div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function AreaDeAtendimento() {
  return (
    <section id="area-atendimento" className="bg-[#E9F2F9] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-[#2A4C68] sm:text-4xl">
            Levando o cuidado veterinário até você
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#777]">
            Atendo em diversas cidades da Baixada Santista, oferecendo flexibilidade para se adaptar à sua rotina e à necessidade do seu pet.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {infoItems.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#agendamento"
            className="inline-block rounded-full bg-[#4CAF50] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Ver opções de agendamento
          </a>
        </motion.div>
      </div>
    </section>
  )
}