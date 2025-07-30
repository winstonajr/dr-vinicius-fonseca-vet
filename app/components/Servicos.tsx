'use client'
import { motion } from 'framer-motion'
import { Syringe, Stethoscope, ClipboardList, Droplet, PawPrint, ShieldCheck } from 'lucide-react'

const servicos = [
  {
    titulo: 'Consulta Clínica',
    descricao: 'Avaliação completa no conforto do seu lar para cães e gatos.',
    icon: <Stethoscope size={40} className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Vacinação Segura',
    descricao: 'Aplicação de vacinas com controle de temperatura e transporte adequado.',
    icon: <Syringe size={40} className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Coleta de Exames',
    descricao: 'Coletas laboratoriais realizadas no domicílio com higiene e precisão.',
    icon: <ClipboardList size={40} className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Curativos e Medicações',
    descricao: 'Cuidados com feridas, curativos e aplicação de medicamentos.',
    icon: <ShieldCheck size={40} className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Fluidoterapia',
    descricao: 'Terapia de reidratação e suporte clínico por via intravenosa ou subcutânea.',
    icon: <Droplet size={40} className="text-[#2A4C68]" />,
  },
  {
    titulo: 'Orientações e Bem-estar',
    descricao: 'Dicas sobre alimentação, comportamento e rotina do seu pet.',
    icon: <PawPrint size={40} className="text-[#2A4C68]" />,
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#2A4C68] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Serviços oferecidos
        </motion.h2>

        <p className="text-[#37699E] max-w-2xl mx-auto mb-12">
          Atendimento veterinário domiciliar especializado em cães e gatos. Cuidado técnico e humanizado para o bem-estar do seu pet.
        </p>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              className="bg-[#F5F9FB] rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-4">{servico.icon}</div>
              <h3 className="text-xl font-semibold text-[#2A4C68] mb-2">
                {servico.titulo}
              </h3>
              <p className="text-[#37699E] text-sm">{servico.descricao}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <a
            href="https://wa.me/5513991298550"
            target="_blank"
            className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
          >
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  )
}
