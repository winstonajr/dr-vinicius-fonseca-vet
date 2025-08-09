import AreaDeAtendimento from "./components/AreaDeAtendimento";
import FormasDePagamento from "./components/FormasDePagamento";
import Agendamento from "./components/Agendamento";
//import Depoimentos from "./components/Depoimentos";
import Servicos from "./components/Servicos";
import Galeria from "./components/Galeria";
import Contato from "./components/Contato";
import Sobre from "./components/Sobre";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Sobre/>
      <Servicos/>
      <AreaDeAtendimento/>
      {/*<Depoimentos/>*/}
      <Galeria/>
      <Agendamento/>
      <FormasDePagamento/>
      <FAQ/>
      <Contato/>
    </main>
  );
}
