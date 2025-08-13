import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import AreaDeAtendimento from './components/AreaDeAtendimento'
import Galeria from './components/Galeria'
import Agendamento from './components/Agendamento'
import FormasDePagamento from './components/FormasDePagamento'
import FAQ from './components/FAQ'
import Contato from './components/Contato'

// Importa nosso cliente de conexão com o Sanity
import { client } from '../sanity/lib/client'
import { PaginaPrincipalData, FotoGaleria } from '../sanity/lib/types'
import Header from './components/Header'
import Footer from './components/Footer'

async function getData(): Promise<{ paginaPrincipalData: PaginaPrincipalData; galeriaData: FotoGaleria[] }> {
  const paginaPrincipalQuery = `*[_type == "paginaPrincipal"][0]`
  const galeriaQuery = `*[_type == "fotoGaleria"]`
  
  const [paginaPrincipalData, galeriaData] = await Promise.all([
    client.fetch(paginaPrincipalQuery),
    client.fetch(galeriaQuery)
  ]);

  return { paginaPrincipalData, galeriaData }
}
// A página agora é um componente de servidor assíncrono
export default async function Home() {
  // Chamamos a função para pegar os dados
  const { paginaPrincipalData, galeriaData } = await getData()

  return (
    <>
    <Header/>

    <main>
      <Hero data={paginaPrincipalData} />
      <Sobre data={paginaPrincipalData} />
      <Servicos />
      <AreaDeAtendimento />
      <Galeria images={galeriaData} />
      <Agendamento />
      <FormasDePagamento />
      <FAQ />
      <Contato />
    </main>

    <Footer/>
    </>
  );
}