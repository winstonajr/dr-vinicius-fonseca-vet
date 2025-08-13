import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  // O '|| ""' é um truque de segurança para evitar que o site quebre
  // caso as variáveis de ambiente não sejam encontradas.
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlFor = (source: SanityImageSource) => {
  // Adicionamos as otimizações aqui
  return imageBuilder.image(source).auto('format').fit('max')
}