# Dr. Vinícius Fonseca - Site de Atendimento Veterinário Domiciliar

## 🚀 Sobre o Projeto

Este é o site e portfólio profissional para o Dr. Vinícius Andrade da Fonseca João, médico veterinário especializado em atendimento domiciliar para cães e gatos na Baixada Santista.

O projeto foi desenvolvido do zero com foco em uma experiência de usuário premium, performance e uma base de SEO robusta para garantir que o site seja uma ferramenta eficaz na captação de novos clientes. A principal feature é a integração com um Headless CMS (Sanity.io), que permite ao cliente final total autonomia para atualizar o conteúdo visual do site, como as fotos do topo, de perfil e da galeria.

**➡️ Acesse o site ao vivo:** [https://www.drviníciusfonseca.vet.br/](https://www.drviníciusfonseca.vet.br/) ---

## ✨ Principais Features

* **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e celulares.
* **Gerenciamento de Conteúdo (CMS):** O cliente pode alterar as imagens do Hero, Sobre e da Galeria através de um painel de controle (`/admin`) seguro e amigável, construído com Sanity.io.
* **Animações Profissionais:** Animações suaves e orquestradas em todas as as seções, utilizando Framer Motion.
* **SEO "Nível Master":**
    * Metadados dinâmicos e estáticos (Open Graph, Twitter Cards).
    * Dados Estruturados (JSON-LD com Schema.org) para SEO Local.
    * Geração automática de `sitemap.xml` e `robots.txt`.
* **Performance Otimizada:** Construído com Next.js para carregamento rápido, com otimização de imagens (`next/image`) e cache inteligente (ISR).
* **Componentes Interativos:** Header inteligente que se oculta ao rolar, galeria de imagens com scroll contínuo e FAQ interativo em formato accordion.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias de ponta:

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Animações:** [Framer Motion](https://www.framer.com/motion/)
* **CMS (Headless):** [Sanity.io](https://www.sanity.io/)
* **Carrossel:** [React Fast Marquee](https://www.react-fast-marquee.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Hospedagem:** [Vercel](https://vercel.com/)

---

## ⚙️ Rodando o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/winstonajr/dr-vinicius-fonseca-vet.git](https://github.com/winstonajr/dr-vinicius-fonseca-vet.git)
    cd dr-vinicius-fonseca-vet
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo `.env.local` na raiz do projeto.
    * Adicione as chaves do seu projeto Sanity:
    ```
    NEXT_PUBLIC_SANITY_PROJECT_ID="SEU_PROJECT_ID"
    NEXT_PUBLIC_SANITY_DATASET="production"
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    * O site estará disponível em `http://localhost:3000`.
    * O painel do Sanity estará disponível em `http://localhost:3000/admin`.

---

## 👨‍💻 Autor

Projeto desenvolvido por **[WinstonAjr]**.

* GitHub: [@winstonajr](https://github.com/winstonajr)
* LinkedIn: [/in/seu-linkedin](https://linkedin.com/in/winstonajr)