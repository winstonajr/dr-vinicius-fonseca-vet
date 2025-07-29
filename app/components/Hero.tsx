"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import { Dog, PawPrint, Syringe, TestTube2 } from "lucide-react"

export default function Hero() {
    return (
        <section id="inicio" className="bg-[#F5F9FB] py-12 pt-24 md:py-24">
            <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                    className="text-3xl md:text-5xl font-bold text-[#2A4C68] mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                        Cuidado profissional no conforto do seu lar
                    </motion.h1>
                    <motion.p
                    className="text-[#37699E] text-lg md:text-xl mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                        Veterinário com atendimento domiciliar em São Vicente, Santos, praia Grande e Cubatão.
                    </motion.p>
                    <motion.a
                    className="inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
                    href="https://api.whatsapp.com/send?phone=5513991298550&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                    whileTap={{ scale: 0.95 }}>
                        Agendar Consulta
                    </motion.a>
                    <div className="flex justify-center md:justify-start gap-6 mt-10 text-[#7CA6C7]">
                        <div className="flex flex-col items-center">
                            <PawPrint size={32}/>
                            <span className="mt-2 text-sm">Consulta</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Syringe size={32}/>
                            <span className="mt-2 text-sm">Vacinação</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <TestTube2 size={32}/>
                            <span className="mt-2 text-sm">Exame</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Dog size={32}/>
                            <span className="mt-2 text-sm">Cães & Gatos</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src="/default.jpg"
                        alt="Vinícius Fonseca"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-lg"/>
                </div>
            </div>

        </section>
    )}
