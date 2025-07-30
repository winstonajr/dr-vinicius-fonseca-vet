import AreaDeAtendimento from "./components/AreaDeAtendimento";
import Depoimentos from "./components/Depoimentos";
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
    </main>
  );
}
