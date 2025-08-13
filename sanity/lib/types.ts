// Define a estrutura básica de uma imagem do Sanity
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

// Define a estrutura dos dados para Hero e Sobre
export interface PaginaPrincipalData {
  _id: string;
  _type: 'paginaPrincipal';
  imagemHero: SanityImage;
  imagemSobre: SanityImage;
}

// Define a estrutura para cada item da galeria
export interface FotoGaleria {
  _id: string;
  _type: 'fotoGaleria';
  imagem: SanityImage;
  alt: string;
}