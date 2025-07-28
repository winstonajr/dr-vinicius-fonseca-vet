"use client"

import React, { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"
import { Menu, MessageCircleMore, X } from "lucide-react"
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
      <MessageCircleMore size={18} />
      WhatsApp
    </Link>
  );
}

const navLinks = [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre" },
      { href: "#servicos", label: "Serviços" },
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
                    {renderNavLinks("text-[#CAD8E1] hover:text-[#37699E] transition-colors text-base md:text-sm tracking-wide uppercase")}
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <WhatsAppButton className="bg-white text-[#37699e] px-4 py-2 rounded-md font-semibold hover:bg-[#cad8e1] transition"/>
                </div>
                <div className="md:hidden">
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
                        <WhatsAppButton className="mt-4 bg-[#25D366] text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-[#1DA851] transition duration-300 shadow-lg"/>
                    </nav>
                </motion.div>
            )}
            </AnimatePresence>
        </header>
    )
}