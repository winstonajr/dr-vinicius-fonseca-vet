import { useCallback } from "react";

export function useHeader(setIsMenuOpen: (value: boolean) => void) {
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setIsMenuOpen(false)
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
        window.history.pushState(null, "", href)
      }, 300)
    },
    [setIsMenuOpen]
  );

  return { handleNavClick }
}
