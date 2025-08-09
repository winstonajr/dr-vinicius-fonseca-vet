import { useCallback } from 'react'

interface UseSmoothScrollOptions {
  onScrollStart?: () => void
}

/**
 * Hook customizado para lidar com navegação de rolagem suave (smooth scroll) em uma página.
 * @param {UseSmoothScrollOptions} options - Opções de configuração para o hook.
 */
export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { onScrollStart } = options

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()

      // Executa a ação de callback inicial (ex: fechar o menu)
      if (onScrollStart) {
        onScrollStart()
      }

      // A CORREÇÃO: Garante que o body possa rolar ANTES de tentar o scroll.
      // Isso resolve o problema de `overflow: hidden` em dispositivos móveis.
      document.body.style.overflow = 'auto'

      // Validação do seletor para evitar erros.
      if (!href || href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      try {
        const targetElement = document.querySelector(href)
        if (targetElement) {
          // Usamos um pequeno timeout para dar ao browser um instante para processar a mudança de estilo
          // antes de tentar rolar. Isso aumenta a robustez em todos os cenários.
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }, 0)
        } else {
          console.warn(`[useSmoothScroll] Elemento com o seletor "${href}" não foi encontrado.`)
        }
      } catch (error) {
        console.error(`[useSmoothScroll] Seletor de href inválido: "${href}"`, error)
      }
    },
    [onScrollStart]
  )

  return { handleNavClick }
}