import Agendamento from "./components/Agendamento";
import AreaDeAtendimento from "./components/AreaDeAtendimento";
import Contato from "./components/Contato";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import FormasDePagamento from "./components/FormasDePagamento";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Sobre/>
      <Servicos/>
      <AreaDeAtendimento/>
      <Depoimentos/>
      <Agendamento/>
      <FormasDePagamento/>
      <FAQ/>
      <Contato/>
    </main>
  );
}
