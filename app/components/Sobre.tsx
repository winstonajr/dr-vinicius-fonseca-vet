"use client"
import { motion, Variants } from "framer-motion"
import { BadgeCheck } from "lucide-react"
import { urlFor } from '@/sanity/lib/image'
import { PaginaPrincipalData } from '@/sanity/lib/types'
import Image from "next/image"
import React from "react"

// --- DADOS E CONSTANTES ---
const destaques = [
  "Atendimento clínico domiciliar",
  "Vacinas e coleta de exames",
  "Curativos e aplicações",
  "Experiência em emergências",
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}


// --- COMPONENTE PRINCIPAL ---
export default function Sobre({ data }: { data: PaginaPrincipalData }) {
  return (
    <section id="sobre" className="overflow-x-hidden bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        
        {/* Coluna da Imagem */}
        <motion.div
          className="group relative mx-auto max-w-sm rounded-2xl shadow-xl md:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageVariants}
        >
          <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-br from-[#5C86B5] to-[#2A4C68] opacity-20 blur-xl transition duration-500 group-hover:opacity-40"></div>
          <Image
            src={urlFor(data.imagemSobre).width(500).height(500).url()}
            alt="Foto de perfil do Dr. Vinícius Andrade da Fonseca João"
            width={500}
            height={500}
            className="relative aspect-square w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            // A prop "priority" foi removida, pois esta imagem está abaixo da dobra.
          />
        </motion.div>

        {/* Coluna de Texto */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-[#2A4C68] md:text-4xl">
              Dr. Vinícius Andrade
            </h2>
            <p className="mt-1 font-semibold text-[#5C86B5]">
              Médico Veterinário • CRMV-SP: 73773
            </p>
          </motion.div>

          <motion.div
            className="mt-6 space-y-4 text-base leading-relaxed text-[#333]"
            variants={itemVariants}
          >
            <p>
              Minha paixão é cuidar da saúde e do bem-estar dos animais, oferecendo um atendimento de excelência com a conveniência e a tranquilidade que só o ambiente familiar proporciona.
            </p>
            <p>
              Com mais de três anos de experiência prática em clínicas, internações e emergências, dedico-me hoje ao atendimento domiciliar de cães e gatos, focando em um serviço completo e humanizado para o seu pet.
            </p>
          </motion.div>
          
          <motion.ul
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 text-base sm:grid-cols-2"
            variants={itemVariants}
          >
            {destaques.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 flex-shrink-0 text-[#4CAF50]" />
                <span className="text-[#333]">{item}</span>
              </li>
            ))}
          </motion.ul>

        </motion.div>
      </div>
    </section>
  )
}