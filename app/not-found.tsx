'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Frown } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <>
    <Header/>
  <main className="flex flex-grow items-center justify-center bg-[#F8FAFC] px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        {/* Ícone */}
        <Frown className="h-20 w-20 text-[#7CA6C7]" />

        {/* Título Principal */}
        <h1 className="mt-8 text-4xl font-extrabold text-[#2A4C68] md:text-5xl">
          Página Não Encontrada
        </h1>

        {/* Mensagem de Apoio */}
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-[#777]">
          Ops! Parece que o caminho que você procurava não existe mais ou foi movido. Mas não se preocupe, vamos te ajudar a voltar para um lugar seguro.
        </p>

        {/* Botão de Ação */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="rounded-full bg-[#4CAF50] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-green-600"
          >
            Voltar para a Página Inicial
          </Link>
        </motion.div>
      </motion.div>
    </main>
    <Footer/>
    </>
  )
}