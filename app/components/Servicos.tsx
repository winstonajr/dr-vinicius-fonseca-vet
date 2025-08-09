'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import {
  Syringe,
  Stethoscope,
  ClipboardList,
  Droplet,
  PawPrint,
  ShieldCheck,
} from 'lucide-react'

// --- DADOS E CONSTANTES ---
// MUDANÇA 1: Passando apenas a referência do componente do ícone, não o JSX.
const servicos: { icon: React.ElementType; titulo: string; descricao: string }[] = [
  {
    icon: Stethoscope,
    titulo: 'Consulta Clínica Completa',
    descricao: 'Avaliação detalhada da saúde do seu pet, tudo no conforto e segurança do seu lar.',
  },
  {
    icon: Syringe,
    titulo: 'Vacinação Segura',
    descricao: 'Protocolos de imunização atualizados com vacinas de alta qualidade e transporte refrigerado.',
  },
  {
    icon: ClipboardList,
    titulo: 'Coleta de Exames',
    descricao: 'Coleta de sangue, urina e outros materiais para análise laboratorial, com o mínimo de estresse.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Curativos e Medicações',
    descricao: 'Tratamento de feridas, troca de curativos e administração precisa de medicamentos prescritos.',
  },
  {
    icon: Droplet,
    titulo: 'Fluidoterapia de Suporte',
    descricao: 'Terapia de reidratação para recuperação e suporte clínico em casos de desidratação.',
  },
  {
    icon: PawPrint,
    titulo: 'Orientações e Bem-estar',
    descricao: 'Aconselhamento sobre nutrição, comportamento e rotinas para uma vida longa e saudável.',
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


// MUDANÇA 2: Criação de um subcomponente para o Card de Serviço
function ServiceCard({ icon: Icon, titulo, descricao }: (typeof servicos)[0]) {
  return (
    <motion.li
      className="flex cursor-default flex-col items-center rounded-2xl bg-[#F8FAFC] p-8 text-center shadow-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2"
      variants={itemVariants}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9F2F9]">
        <Icon className="h-8 w-8 text-[#2A4C68]" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-[#2A4C68]">{titulo}</h3>
      <p className="text-base leading-relaxed text-[#5C86B5]">{descricao}</p>
    </motion.li>
  )
}


// --- COMPONENTE PRINCIPAL ---
export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-extrabold text-[#2A4C68] sm:text-4xl">
            Serviços pensados para o seu melhor amigo
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#777]">
            Ofereço um cuidado completo e humanizado, combinando a precisão técnica com a conveniência do atendimento domiciliar para cães e gatos.
          </p>
        </motion.div>

        <motion.ul
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {servicos.map((servico) => (
            <ServiceCard key={servico.titulo} {...servico} />
          ))}
        </motion.ul>

        {/* MUDANÇA 3: Adicionando contexto ao CTA final */}
        <motion.div className="mt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h3 className="text-2xl font-bold text-[#2A4C68]">Pronto para cuidar do seu pet?</h3>
          <p className="mx-auto mt-2 max-w-xl text-base text-[#777]">
            Clique no botão abaixo para agendar uma consulta ou tirar suas dúvidas diretamente pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5513991298550"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar consulta pelo WhatsApp"
            className="mt-8 inline-block rounded-full bg-[#4CAF50] px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Agendar Consulta
          </a>
        </motion.div>
      </div>
    </section>
  )
}