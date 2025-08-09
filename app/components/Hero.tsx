"use client"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Dog, PawPrint, Syringe, TestTube2 } from "lucide-react"
import React from "react"

// --- DADOS E CONSTANTES ---
const serviceIcons: { icon: React.ElementType; label: string }[] = [
  { icon: PawPrint, label: "Consultas" },
  { icon: Syringe, label: "Vacinas" },
  { icon: TestTube2, label: "Exames" },
  { icon: Dog, label: "Cães e Gatos" },
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// --- SUBCOMPONENTES ---
function ServiceHighlight({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  // A animação deste componente agora é controlada pelo `variants` do seu container pai.
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-[#5C86B5]">
        <Icon className="h-7 w-7" />
      </div>
      <span className="text-sm font-medium text-[#777777]">{label}</span>
    </div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-[#E9F2F9] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        
        {/* Coluna de Texto */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1" // <-- MUDANÇA 1: Ordem alterada
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1
            className="font-bold text-3xl text-[#2A4C68] md:text-4xl lg:text-5xl"
            variants={itemVariants}
          >
            Cuidado profissional no conforto do seu lar
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-lg text-[#777777] md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Atendimento veterinário domiciliar em São Vicente, Santos, Praia Grande e Cubatão, com a dedicação e o carinho que seu pet merece.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <motion.a
              className="inline-block rounded-full bg-[#4CAF50] px-8 py-3.5 font-medium text-white shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2 focus:ring-offset-[#E9F2F9]"
              href="https://api.whatsapp.com/send?phone=5513991298550&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
          
          {/* MUDANÇA 2: Ícones de serviço movidos para cá */}
          <motion.div
            className="mt-12 grid w-full max-w-md grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-4"
            variants={itemVariants}
          >
            {serviceIcons.map((service) => (
              <ServiceHighlight key={service.label} {...service} />
            ))}
          </motion.div>

        </motion.div>

        {/* Coluna da Imagem */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-xl order-1 md:order-2" // <-- MUDANÇA 1: Ordem alterada
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/hero01.jpg"
            alt="Veterinário Vinícius atendendo um adorável pet em casa"
            width={600}
            height={600}
            className="aspect-square object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}