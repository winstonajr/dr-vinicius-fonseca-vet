'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

type Depoimento = {
  tutor: string
  pet: string
  texto: string
  fotoUrl?: string
}

const depoimentos: Depoimento[] = [
  {
    tutor: 'Ana Paula',
    pet: 'Luna (gato)',
    texto: 'O Dr. Vinícius foi incrível! Atendeu a Luna com todo cuidado e paciência. Recomendo 100%.',
  },
  {
    tutor: 'Carlos Eduardo',
    pet: 'Thor (cachorro)',
    texto: 'Excelente serviço! A coleta de exame em casa foi prática e rápida. Thor ficou super tranquilo.',
  },
  {
    tutor: 'Mariana Silva',
    pet: 'Mel (gato)',
    texto: 'Atendimento humanizado e profissional. Me senti segura em ter a Mel vacinada em casa.',
  },
]

export default function Depoimentos() {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % depoimentos.length)
        setShow(true)
      }, 400) // tempo da animação de saída
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const depoimento = depoimentos[index]

  return (
    <section id="depoimentos" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#2A4C68] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Depoimentos
        </motion.h2>
        <p className="text-[#37699E] mb-12">
          Veja o que os tutores estão dizendo sobre o atendimento domiciliar.
        </p>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            {show && (
              <motion.div
                key={index}
                className="bg-[#F5F9FB] rounded-2xl p-8 shadow-md text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Quote className="text-[#25D366] mb-4" size={32} />
                <p className="text-[#1B2E41] italic mb-6">“{depoimento.texto}”</p>
                <p className="font-semibold text-[#2A4C68]">
                  {depoimento.tutor} — <span className="font-normal">{depoimento.pet}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="flex justify-center gap-2 mt-6">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setShow(false)
                setTimeout(() => {
                  setIndex(i)
                  setShow(true)
                }, 400)
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? 'bg-[#2A4C68]' : 'bg-[#CAD8E1]'
              }`}
              aria-label={`Selecionar depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
