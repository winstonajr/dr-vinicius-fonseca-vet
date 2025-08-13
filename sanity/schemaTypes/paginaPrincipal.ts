import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'paginaPrincipal',
  title: 'Página Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título (Apenas para identificação)',
      type: 'string',
      initialValue: 'Configurações da Página Principal',
      readOnly: true,
    }),
    defineField({
      name: 'imagemHero',
      title: 'Imagem do Topo (Hero)',
      description: 'A primeira imagem que aparece no site. Recomendação: foto de um atendimento.',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagemSobre',
      title: 'Foto de Perfil (Seção Sobre)',
      description:
        'Sua foto de perfil que aparece na seção "Sobre". Recomendação: um retrato profissional e amigável.',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
  ],
})