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
      name: 'seoTitle',
      title: 'Título do Site (SEO)',
      description: 'Este é o título que aparecerá na aba do navegador e nos resultados do Google. (Ex: Dr. Vinícius Fonseca | Veterinário em Domicílio)',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descrição do Site (SEO)',
      description: 'Um resumo conciso do site para o Google e para compartilhamento em redes sociais. (Máximo de 160 caracteres)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'imagemHero',
      title: 'Imagem do Topo (Hero)',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagemSobre',
      title: 'Foto de Perfil (Seção Sobre)',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
  ],
})