<div align="center">

# LEX Advocacia

Site institucional de um escritório de advocacia fictício, com visual editorial escuro, animações com GSAP e transições entre páginas.

[![Ver site](https://img.shields.io/badge/VER_SITE-0D0D0D?style=for-the-badge&logo=vercel&logoColor=FF003C)](https://lexadvogados.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js_16-0D0D0D?style=for-the-badge&logo=next.js&logoColor=FF003C)
![React](https://img.shields.io/badge/React_19-0D0D0D?style=for-the-badge&logo=react&logoColor=FF003C)
![TypeScript](https://img.shields.io/badge/TypeScript-0D0D0D?style=for-the-badge&logo=typescript&logoColor=FF003C)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0D0D0D?style=for-the-badge&logo=tailwindcss&logoColor=FF003C)
![GSAP](https://img.shields.io/badge/GSAP-0D0D0D?style=for-the-badge&logo=greensock&logoColor=FF003C)

</div>

## Sobre

A **LEX Advocacia** é um projeto demonstrativo de site institucional para escritórios de advocacia. O escritório, a equipe e os casos apresentados são fictícios: o objetivo é mostrar um padrão de site sóbrio e sofisticado para o segmento jurídico, com tipografia serifada, paleta escura com detalhes em dourado e animações discretas de entrada e rolagem.

O site tem quatro páginas (início, áreas de atuação, advogados e contato), construídas com o App Router do Next.js e componentes separados por seção.

## Funcionalidades

- **Preloader de abertura** com a marca do escritório e saída em fade.
- **Transição entre páginas**: os links internos disparam um evento próprio (`lex:navigate`) e um painel desliza sobre a tela antes e depois da troca de rota.
- **Animações com GSAP + ScrollTrigger** na página inicial: timeline de entrada do hero, textos e imagens revelados na rolagem (com `clip-path`) e parallax no mapa de fundo.
- **Revelação na rolagem** nas páginas internas via `IntersectionObserver`, sem dependências extras.
- **Navbar fixa** que encolhe ao rolar e destaca a página atual.
- **Áreas de atuação** em grid assimétrico, com imagens em escala de cinza que ganham cor no hover.
- **Página de advogados** com história, lista da equipe, números e chamada para contato.
- **Página de contato** com formulário de labels flutuantes (somente interface, sem envio), escritórios e mapa.
- **Tema escuro com design tokens** definidos no `@theme` do Tailwind CSS 4 (`surface`, `on-surface`, `primary` etc.).

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Hero, filosofia, casos em destaque, atuação global e CTA |
| `/practice-areas` | Áreas de atuação, citação e CTA |
| `/our-attorneys` | História e visão, equipe, números e CTA |
| `/contact` | Formulário, escritórios e mapa |

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- [GSAP](https://gsap.com) com ScrollTrigger
- `next/font` com Noto Serif e Inter, além de Material Symbols para os ícones

## Estrutura

```
app/
├── page.tsx                # página inicial
├── practice-areas/         # áreas de atuação
├── our-attorneys/          # advogados
├── contact/                # contato
├── layout.tsx              # fontes, preloader, navbar, transições e footer
└── globals.css             # tokens de cor e animações
components/
├── layout/                 # Navbar, Footer, Preloader, TransitionLink, TransitionOverlay
├── sections/               # seções de cada página (landing, practice-areas, attorneys, contact)
└── ui/                     # ScrollRevealController
```

## Como rodar localmente

Pré-requisito: Node.js 20 ou superior.

```bash
git clone https://github.com/Lu1sR0/lexadvogados.git
cd lexadvogados
npm install
npm run dev
```

Acesse <http://localhost:3000>.

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint    # ESLint
```

---

<div align="center">

Desenvolvido por <a href="https://github.com/Lu1sR0">Luis Roberto</a> · <a href="https://outframe.dev">Outframe</a>

</div>
