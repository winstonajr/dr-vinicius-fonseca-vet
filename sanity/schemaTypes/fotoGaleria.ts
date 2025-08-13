import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'fotoGaleria',
  title: 'Fotos da Galeria',
  type: 'document',
  fields: [
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Descrição da Imagem (Texto Alternativo)',
      type: 'string',
      description:
        'Muito importante para acessibilidade e SEO. Descreva a foto. Ex: Dr. Vinícius cuidando de um gato.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})