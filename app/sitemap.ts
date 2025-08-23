import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.drviníciusfonseca.vet.br/";

  const routes = [
    "", // A página inicial (/)
    "#sobre",
    "#servicos",
    "#area-atendimento",
    "#galeria",
    "#agendamento",
    "#formas-pagamento",
    "#faq",
    "#contato",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0], // Data de hoje
    changeFrequency: "monthly", // Frequência que você pretende atualizar o conteúdo
    priority: route === "" ? 1.0 : 0.8, // Prioridade maior para a página inicial
  }));
}
