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
    fotoUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    tutor: 'Carlos Eduardo',
    pet: 'Thor (cachorro)',
    texto: 'Excelente serviço! A coleta de exame em casa foi prática e rápida. Thor ficou super tranquilo.',
    fotoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
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
      }, 400)
    }, 6000) // 6s entre trocas para dar tempo de leitura confortável

    return () => clearInterval(interval)
  }, [])

  const depoimento = depoimentos[index]

  return (
    <section
      id="depoimentos"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Depoimentos dos tutores"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-[#2A4C68] mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Depoimentos
        </motion.h2>
        <p className="text-[#37699E] mb-14 max-w-xl mx-auto">
          Veja o que os tutores estão dizendo sobre o atendimento domiciliar.
        </p>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            {show && (
              <motion.article
                key={index}
                className="bg-[#F5F9FB] rounded-3xl p-8 shadow-lg text-left flex flex-col sm:flex-row items-center gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                aria-live="polite"
              >
                {/* Foto do tutor/pet */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-[#25D366]">
                  {depoimento.fotoUrl ? (
                    <img
                      src={depoimento.fotoUrl}
                      alt={`Foto do tutor ${depoimento.tutor}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-[#CAD8E1] text-[#2A4C68] font-semibold text-lg select-none">
                      ?
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <Quote className="text-[#25D366] mb-4" size={36} aria-hidden="true" />
                  <p className="text-[#1B2E41] italic text-lg leading-relaxed mb-6">
                    “{depoimento.texto}”
                  </p>
                  <p className="font-semibold text-[#2A4C68] text-base sm:text-lg">
                    {depoimento.tutor} —{' '}
                    <span className="font-normal text-[#37699E]">{depoimento.pet}</span>
                  </p>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>

        {/* Controles */}
        <nav
          className="flex justify-center gap-3 mt-8"
          role="tablist"
          aria-label="Controle de depoimentos"
        >
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
              className={`w-5 h-5 rounded-full transition-shadow focus:outline-none focus:ring-2 focus:ring-[#25D366] ${
                i === index ? 'bg-[#2A4C68] shadow-md' : 'bg-[#CAD8E1] hover:bg-[#7CA6C7]'
              }`}
              aria-label={`Selecionar depoimento ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              tabIndex={i === index ? 0 : -1}
            />
          ))}
        </nav>
      </div>
    </section>
  )
}
