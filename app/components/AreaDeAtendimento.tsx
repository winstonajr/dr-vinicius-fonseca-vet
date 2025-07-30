'use client'
import { MapPin, Clock4, DollarSign, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AreaDeAtendimento() {
  return (
    <section id="atendimento" className="bg-[#F5F9FB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#2A4C68] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Área de Atendimento
        </motion.h2>
        <p className="text-[#37699E] max-w-2xl mx-auto mb-12">
          Consultas domiciliares em diversas cidades da Baixada Santista, com horários flexíveis e deslocamento incluso.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <MapPin className="text-[#2A4C68]" size={36} />
            <h3 className="font-semibold text-[#2A4C68] mt-4 mb-1">Cidades Atendidas</h3>
            <p className="text-[#37699E] text-sm text-center">
              São Vicente, Santos, Praia Grande e Cubatão.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DollarSign className="text-[#2A4C68]" size={36} />
            <h3 className="font-semibold text-[#2A4C68] mt-4 mb-1">Taxa de Deslocamento</h3>
            <p className="text-[#37699E] text-sm text-center">
              Calculada com base na localização e custo de transporte (Uber ou combustível).
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Clock4 className="text-[#2A4C68]" size={36} />
            <h3 className="font-semibold text-[#2A4C68] mt-4 mb-1">Horários Flexíveis</h3>
            <p className="text-[#37699E] text-sm text-center">
              Atendimentos das 8h às 20h, de domingo a domingo, conforme disponibilidade.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Globe2 className="text-[#2A4C68]" size={36} />
            <h3 className="font-semibold text-[#2A4C68] mt-4 mb-1">Forma de Agendamento</h3>
            <p className="text-[#37699E] text-sm text-center">
              WhatsApp, ligação ou e-mail — com confirmação do atendimento após combinado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
