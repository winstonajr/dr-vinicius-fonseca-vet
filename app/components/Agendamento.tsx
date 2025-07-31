'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function Agendamento() {
  return (
    <section
      id="agendamento"
      className="bg-[#37699E] py-16 px-6 sm:px-12 max-w-5xl mx-auto rounded-lg text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Agende a Consulta do Seu Pet</h2>

      <p className="text-lg max-w-xl mx-auto mb-8 leading-relaxed">
        É fácil e rápido agendar uma consulta domiciliar com o Dr. Vinícius. <br />
        Envie uma mensagem pelo WhatsApp ou envie um e-mail informando:
      </p>

      <ul className="list-disc list-inside max-w-md mx-auto mb-8 text-left space-y-2">
        <li>Nome do seu pet</li>
        <li>Queixa principal ou motivo da consulta</li>
        <li>Endereço completo para atendimento</li>
        <li>Melhor horário para a visita (horários geralmente flexíveis)</li>
      </ul>

      <p className="mb-8 italic">
        Após o contato, você receberá a confirmação do agendamento.
      </p>

      <motion.a
        href="https://wa.me/5513991298550?text=Olá%20Dr.%20Vinícius,%20gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-700 transition font-semibold py-4 px-10 rounded-full shadow-lg text-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <FaWhatsapp className="text-2xl" />
        Agendar Consulta pelo WhatsApp
      </motion.a>

      <p className="mt-6 text-sm max-w-md mx-auto">
        Ou envie um e-mail para{' '}
        <a
          href="mailto:viniciusafjoao@gmail.com"
          className="underline hover:text-green-300"
        >
          viniciusafjoao@gmail.com
        </a>
      </p>

      <p className="mt-6 text-sm italic">
        Cuidar do seu pet com carinho e profissionalismo é minha missão 🐾
      </p>
    </section>
  )
}
