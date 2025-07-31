"use client";
import { motion } from "framer-motion"
import { BadgeCheck } from "lucide-react";
import Image from "next/image"

const destaques = [
    "Atendimento clínico domiciliar",
    "Vacinas e coleta de exames",
    "Curativos e aplicações",
    "+3 anos de experiência clínica",
]

export default function Sobre() {
    function renderDestaques() {
        return destaques.map((item, index) => (
            <motion.li
                key={index}
                className="flex items-center gap-2 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
            >
                <BadgeCheck className="text-[#37699e]" size={20} />
                {item}
            </motion.li>
        ));
    }

    return (
        <section id="sobre" className="bg-[#F5F9FB] py-16 px-4 md:px-8 text-[#1B2E41] overflow-x-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="flex-1 group overflow-hidden rounded-2xl shadow-md"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src="/perfil.jpg"
                        alt="Foto do Dr. Vinícius Fonseca com um pet"
                        priority
                        width={500}
                        height={500}
                        className="rounded-2xl object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </motion.div>

                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-[#2A4C68] mb-1"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        Dr. Vinícius Andrade da Fonseca João
                    </motion.h2>

                    <p className="text-[#37699E] font-medium mb-4">
                        CRMV 73773
                    </p>

                    <p className="mb-6 leading-relaxed">
                        Médico Veterinário formado no final de 2024, com mais de 3 anos de experiência em clínicas, internação, emergências e cirurgias. Atualmente, atendo cães e gatos com foco em consultas domiciliares, vacinação, coleta de exames, curativos, aplicações e fluidoterapia — sempre com dedicação ao bem-estar do pet e à tranquilidade dos tutores.
                    </p>

                    <motion.ul
                        className="grid gap-3 text-sm md:text-base md:grid-cols-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        {renderDestaques()}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
}
