'use client'
import { motion } from 'framer-motion'
import {
  Syringe,
  Stethoscope,
  ClipboardList,
  Droplet,
  PawPrint,
  ShieldCheck,
} from 'lucide-react'

const servicos = [
  {
    titulo: 'Consulta Clínica',
    descricao: 'Avaliação completa no conforto do seu lar para cães e gatos.',
    icon: <Stethoscope size={40} aria-label="Ícone de estetoscópio" className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Vacinação Segura',
    descricao: 'Aplicação de vacinas com controle de temperatura e transporte adequado.',
    icon: <Syringe size={40} aria-label="Ícone de seringa" className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Coleta de Exames',
    descricao: 'Coletas laboratoriais realizadas no domicílio com higiene e precisão.',
    icon: <ClipboardList size={40} aria-label="Ícone de lista de clipboard" className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Curativos e Medicações',
    descricao: 'Cuidados com feridas, curativos e aplicação de medicamentos.',
    icon: <ShieldCheck size={40} aria-label="Ícone de escudo com cheque" className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Fluidoterapia',
    descricao: 'Terapia de reidratação e suporte clínico por via intravenosa ou subcutânea.',
    icon: <Droplet size={40} aria-label="Ícone de gota d’água" className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Orientações e Bem-estar',
    descricao: 'Dicas sobre alimentação, comportamento e rotina do seu pet.',
    icon: <PawPrint size={40} aria-label="Ícone de pata" className="text-[#2A4C68]" />,
  },
]

export default function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="bg-white py-16 px-4 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          id="servicos-title"
          className="text-3xl sm:text-4xl font-extrabold text-[#2A4C68] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Serviços oferecidos
        </motion.h2>

        <p className="text-[#37699E] max-w-3xl mx-auto mb-16 text-base sm:text-lg leading-relaxed">
          Atendimento veterinário domiciliar especializado em cães e gatos. Cuidado técnico e humanizado para o bem-estar do seu pet.
        </p>

        <motion.ul
          role="list"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          {servicos.map((servico, index) => (
            <motion.li
              key={index}
              role="listitem"
              className="bg-[#F5F9FB] rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow transform hover:scale-[1.03] cursor-default flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-5">{servico.icon}</div>
              <h3 className="text-xl font-semibold text-[#2A4C68] mb-3">{servico.titulo}</h3>
              <p className="text-[#37699E] text-base leading-relaxed">{servico.descricao}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-16">
          <a
            href="https://wa.me/5513991298550"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar atendimento pelo WhatsApp"
            className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300"
          >
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  )
}
