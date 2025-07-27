import { useCallback } from "react";

export function useHeader(setIsMenuOpen:(value:boolean) => void){
    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href:string)=>{
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement){
            targetElement.scrollIntoView({behavior: "smooth"})
        }
        setIsMenuOpen(false)
    },[setIsMenuOpen])
    return {handleNavClick}
}