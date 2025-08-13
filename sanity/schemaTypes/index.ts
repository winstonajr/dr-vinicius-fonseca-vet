import {type SchemaTypeDefinition} from 'sanity'
import paginaPrincipal from './paginaPrincipal'
import fotoGaleria from './fotoGaleria'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [paginaPrincipal, fotoGaleria],
}