"use client"

import React, { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { Menu, X } from "lucide-react"
import {useHeader} from "../hooks/useHeader"
import Image from "next/image"
import Link from "next/link"

function WhatsAppButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href="https://wa.me/5513991298550"
      className={`flex items-center gap-2 text-sm duration-300 hover:scale-105 focus:ring-2 ring-[#25D366] shadow-md transition-transform
 ${className}`}
      aria-label="Abrir conversa no WhatsApp"
      target="_blank"
      rel="noopener noreferrer">
      <FaWhatsapp size={18} />
      Agendar agora!
    </Link>
  );
}

const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#agendamento", label: "Agendar" },
    { href: "#contato", label: "Contato" },
]

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const {handleNavClick} = useHeader(setIsMenuOpen)

    function renderNavLinks(className: string) {
        return navLinks.map(link => {
            return (
                <a 
                href={link.href} 
                className={className} 
                key={link.href} 
                onClick={e => handleNavClick(e, link.href)}>
                    {link.label}
                </a>
            )
        })}

    return(
        <header className="bg-[#37699e]/80 backdrop-blur-md shadow-lg text-[#cad8e1] fixed top-0 left-0 w-full z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a 
                href="#" 
                className="flex items-center gap-2"
                tabIndex={0}>
                    <Image
                        src="./icon0.svg"
                        width={40}
                        height={40}
                        alt="logo vinícius fonseca"
                    />
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {renderNavLinks("text-[#CAD8E1] hover:text-white transition-colors text-base md:text-sm tracking-wide uppercase")}
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <WhatsAppButton className="bg-[#25D366] text-white px-3 py-1.5 rounded-md font-medium text-sm hover:bg-[#1DA851] transition shadow-md"/>
                </div>
                <div className="md:hidden flex items-center gap-3">
                    <WhatsAppButton className="bg-[#25D366] text-white px-3 py-1.5 rounded-md font-medium text-sm hover:bg-[#1DA851] transition shadow-md" />
                    <motion.button
                    whileTap={{ scale: 0.95 }}
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    className="text-white focus:outline-none" >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </motion.button>
                </div>
            </nav>
            <AnimatePresence>
            {isMenuOpen && (
                <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-[#2A4C68] overflow-hidden">
                    <nav className="flex flex-col gap-4 px-6 py-4 border-t border-[#37699E]">
                        {renderNavLinks("text-[#cad8e1] hover:text-white text-base text-base md:text-sm tracking-wide uppercase transition-colors")}
                    </nav>
                </motion.div>
            )}
            </AnimatePresence>
        </header>
    )
}