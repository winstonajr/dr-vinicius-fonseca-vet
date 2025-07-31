'use client'
import { MapPin, Clock4, DollarSign, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AreaDeAtendimento() {
  return (
    <section
      id="atendimento"
      aria-labelledby="atendimento-title"
      className="bg-[#F5F9FB] py-24 px-4 sm:px-6 lg:px-8"
      role="region"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          id="atendimento-title"
          className="text-3xl sm:text-4xl font-bold text-[#2A4C68] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Área de Atendimento
        </motion.h2>
        <motion.p
          className="text-[#37699E] max-w-2xl mx-auto mb-12 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Consultas domiciliares em diversas cidades da Baixada Santista, com horários flexíveis e deslocamento incluso.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {[
            {
              Icon: MapPin,
              title: 'Cidades Atendidas',
              description: 'São Vicente, Santos, Praia Grande e Cubatão.',
              delay: 0.1,
            },
            {
              Icon: DollarSign,
              title: 'Taxa de Deslocamento',
              description:
                'Calculada com base na localização e custo de transporte (Uber ou combustível).',
              delay: 0.2,
            },
            {
              Icon: Clock4,
              title: 'Horários Flexíveis',
              description:
                'Atendimentos das 8h às 20h, de domingo a domingo, conforme disponibilidade.',
              delay: 0.3,
            },
            {
              Icon: Globe2,
              title: 'Forma de Agendamento',
              description:
                'WhatsApp, ligação ou e-mail — com confirmação do atendimento após combinado.',
              delay: 0.4,
            },
          ].map(({ Icon, title, description, delay }) => (
            <motion.article
              key={title}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay }}
              role="group"
              tabIndex={0}
              aria-label={`${title}: ${description}`}
            >
              <Icon className="text-[#2A4C68]" size={40} aria-hidden="true" />
              <h3 className="font-semibold text-[#2A4C68] mt-4 mb-1 text-lg">{title}</h3>
              <p className="text-[#37699E] text-sm text-center">{description}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA sutil para engajamento */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="#agendamento"
            className="inline-block bg-[#25D366] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-400"
            aria-label="Ir para seção de agendamento"
          >
            Saiba como agendar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
