# 🛍️ Digital Store

Projeto final do módulo de Front-end da formação **Desenvolvedor Full Stack** do programa **Geração Tech** (IEL-CE e ADECE/Governo do Ceará): uma loja virtual desenvolvida com **React**, baseada na documentação do Digital Store e no design disponível no Figma.

🔗 **Deploy:**https://digital-store-ochre.vercel.app/

## 👥 Equipe

- Maria Érica Alves de Oliveira

## 📌 Sobre o projeto

A Digital Store é uma aplicação web de e-commerce com três páginas principais, header e footer compartilhados e componentes reutilizáveis.

### Páginas

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Slide de imagens, coleções em destaque e produtos em alta |
| Listagem de produtos | `/products` | Lista de produtos com busca, ordenação e filtros |
| Visualização do produto | `/product/:id` | Galeria, informações, opções de tamanho e cor, botão de compra e produtos relacionados |

## ✨ Funcionalidades

- Navegação entre páginas com React Router, com destaque no link da página ativa
- Campo de busca no header que redireciona para `/products?filter=termo`
- Galeria de imagens com setas de navegação, miniaturas e borda na imagem selecionada
- Ordenação de produtos por menor e maior preço
- Filtros laterais com checkbox e radio (visuais)
- Cards de produto com preço original riscado e selo de desconto
- Seleção de tamanho e cor na página do produto
- Layout com Header e Footer reutilizados em todas as páginas

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- CSS puro

## 🧩 Componentes

| Componente | Função |
|---|---|
| `Layout` | Estrutura com Header e Footer ao redor do conteúdo |
| `Header` | Logo, busca, links de acesso, carrinho e menu |
| `Footer` | Logo, descrição, redes sociais e colunas de links |
| `Logo` | Logomarca da loja |
| `InfoLinks` | Coluna de links do rodapé (props `title` e `informations`) |
| `Section` | Seção com título, alinhamento e link opcionais |
| `ProductCard` | Cartão de produto com preço e desconto |
| `ProductListing` | Lista de `ProductCard` |
| `Gallery` | Galeria de imagens com setas e miniaturas |
| `FilterGroup` | Grupo de filtros (checkbox ou radio) |
| `ProductOptions` | Opções de tamanho e cor |
| `BuyBox` | Bloco de compra com nome, preço, avaliação e botão |

## 📁 Estrutura de pastas

```
src/
├── assets/        # ícones e logo
├── components/    # componentes reutilizáveis
├── data/          # dados dos produtos
├── pages/         # Layout e páginas
├── App.jsx        # rotas
├── main.jsx
└── index.css      # estilos globais e variáveis de cor
```

## 🚀 Como rodar o projeto

**Pré-requisito:** [Node.js](https://nodejs.org/) (versão LTS).

```bash
# 1. Clone o repositório
git clone COLOQUE_AQUI_O_LINK_DO_REPOSITORIO

# 2. Entre na pasta do projeto
cd digital-store

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (geralmente `http://localhost:5173`).

## 🎨 Design

O visual segue o protótipo do Figma **DRIP STORE - DIGITAL COLLEGE** e a paleta de cores da documentação, definida como variáveis CSS (`--primary: #C92071`, `--warning: #F6AA1C`, entre outras).

## 📚 Referências

- [Geração Tech](https://geracaotech.iel-ce.org.br/)
- [Documentação do React](https://react.dev/)
- [Repositório base do projeto (Digital College)](https://github.com/digitalcollegebr/projeto-digital-store)

---

Projeto desenvolvido para fins educacionais no programa Geração Tech, formação Desenvolvedor Full Stack (IEL-CE e ADECE/Governo do Ceará).
