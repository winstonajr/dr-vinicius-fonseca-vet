import React, { useState } from "react"
import {motion} from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import {useHeader} from "../hooks/useHeader"

export default function Header(){
    const navLinks = [
        {href: "#sobre", label: "Sobre"},
        // Colocar os demais links da página
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const {handleNavClick} = useHeader(setIsMenuOpen)

    return(
        <header>
            <nav>
                <a href="#">
                    <Image
                        src="./iconO.ico"
                        width={50}
                        height={50}
                        alt="logo vinícius fonseca"
                    />
                </a>
                <div>
                    {navLinks.map(Link =>(
                        <a href={Link.href} key={Link.href} onClick={e => handleNavClick(e, Link.href)}>
                            {Link.label}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={()=> setIsMenuOpen(!isMenuOpen)} >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <motion.div>
                    {navLinks.map(Link => (
                        <a href={Link.href} key={Link.href} onClick={e => handleNavClick(e, Link.href)}>
                            {Link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </header>
    )
}

/**
 * cor pra barra #37699e
 * cor para texto #cad8e1
 */