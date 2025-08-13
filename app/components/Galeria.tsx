'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import Marquee from 'react-fast-marquee'
import { urlFor } from '@/sanity/lib/image'
import { FotoGaleria } from '@/sanity/lib/types'

// --- COMPONENTE PRINCIPAL ---
export default function Galeria({ images }: { images: FotoGaleria[] }) {

  if (!images || images.length === 0) {
    return null
  }

  // MUDANÇA: A constante 'displayImages' foi removida. Não precisamos mais dela.

  return (
    <section id="galeria" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-0 text-center md:px-6">
        <motion.div
          className="px-6"
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

        <div className="mt-16 w-full select-none">
          <Marquee
            // MUDANÇA 1: Pausa ao passar o mouse foi desativada.
            pauseOnHover={false}
            speed={40}
            // MUDANÇA 2: 'autoFill' resolve o problema do espaço em branco e da sobreposição.
            autoFill={true}
          >
            {/* Agora mapeamos o array 'images' original */}
            {images.map((image) => (
              <div
                key={image._id}
                className="relative mx-3 h-auto w-64 aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={urlFor(image.imagem).width(960).height(1280).quality(80).url()}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <motion.div
          className="mt-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-[#2A4C68]">Seu pet pode ser o próximo!</h3>
          <p className="mx-auto mt-2 max-w-xl text-base text-[#777]">
            Cada atendimento é realizado com o máximo de cuidado e carinho. Agende uma consulta e proporcione o melhor para o seu companheiro.
          </p>
        </motion.div>
      </div>
    </section>
  )
}