'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react'
import Image from 'next/image'
import React, { useState, MutableRefObject } from 'react'
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import { FotoGaleria } from '@/sanity/lib/types'

// --- PLUGINS E ANIMAÇÕES ---

// Plugin para pausar o autoplay quando o mouse está sobre o carrossel
const AutoplayPlugin: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false
  function clearNextTimeout() {
    clearTimeout(timeout)
  }
  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 4000) // Muda de slide a cada 4 segundos
  }
  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on('dragStarted', clearNextTimeout)
  slider.on('animationEnded', nextTimeout)
  slider.on('updated', nextTimeout)
}

// Variantes de animação para os elementos
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// --- SUBCOMPONENTES ---

// Componente para as setas de navegação
function Arrow(props: {
  disabled?: boolean
  left?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
  const disabledClass = props.disabled ? ' opacity-50 cursor-not-allowed' : ''
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.left ? 'Slide anterior' : 'Próximo slide'}
      className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#2A4C68] shadow-md transition hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] ${
        props.left ? 'left-4' : 'right-4'
      } ${disabledClass}`}
    >
      {props.left ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
    </button>
  )
}

// Componente para os pontos de navegação (dots)
function Dots({
  instanceRef,
  currentSlide,
}: {
  instanceRef: MutableRefObject<KeenSliderInstance | null>
  currentSlide: number
}) {
  // Acessa os detalhes dos slides da instância do KeenSlider
  const slides = instanceRef.current?.track.details.slides || []
  return (
    <div className="mt-6 flex justify-center gap-2.5">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => instanceRef.current?.moveToIdx(idx)}
          aria-label={`Ir para o slide ${idx + 1}`}
          className={`h-3 w-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#E9F2F9] focus:ring-[#4CAF50] ${
            currentSlide === idx ? 'bg-[#2A4C68]' : 'bg-[#CAD8E1]'
          }`}
        />
      ))}
    </div>
  )
}


// --- COMPONENTE PRINCIPAL ---

// O componente agora recebe um array de 'images' vindo da Home (que buscou do Sanity)
export default function Galeria({ images }: { images: FotoGaleria[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged: (s) => setCurrentSlide(s.track.details.rel),
      created: () => setLoaded(true),
      breakpoints: {
        '(min-width: 768px)': { slides: { perView: 2, spacing: 16 } },
        '(min-width: 1024px)': { slides: { perView: 3, spacing: 20 } },
      },
      slides: { perView: 1.2, spacing: 12 }, // Mostra um pedaço do próximo slide no mobile
    },
    [AutoplayPlugin] // Adiciona o plugin de autoplay inteligente
  )

  // Se não houver imagens vindas do Sanity, o componente não é renderizado
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section id="galeria" className="bg-[#E9F2F9] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-3 rounded-full px-4 py-2">
            <Camera className="h-6 w-6 text-[#2A4C68]" />
            <h2 className="text-2xl font-bold text-[#2A4C68] sm:text-3xl">Nossos Pacientes</h2>
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#777]">
            Alguns momentos que capturam a essência do nosso trabalho: cuidado, profissionalismo e muito carinho.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div ref={sliderRef} className="keen-slider">
            {images.map((image) => (
              <div key={image._id} className="keen-slider__slide overflow-hidden rounded-2xl">
                <Image
                  // Usa a função urlFor para gerar a URL otimizada da imagem do Sanity
                  src={urlFor(image.imagem).width(800).height(600).url()}
                  alt={image.alt} // Usa a descrição vinda do Sanity
                  width={800}
                  height={600}
                  className="h-full w-full object-cover shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* As setas e os dots só aparecem depois que o slider for carregado */}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                onClick={(e) => {
                  e.stopPropagation()
                  instanceRef.current?.prev()
                }}
                left
              />
              <Arrow
                onClick={(e) => {
                  e.stopPropagation()
                  instanceRef.current?.next()
                }}
              />
            </>
          )}
        </motion.div>

        {loaded && instanceRef.current && <Dots instanceRef={instanceRef} currentSlide={currentSlide} />}
      </div>
    </section>
  )
}