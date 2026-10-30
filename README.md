# Portfólio de Davi Guimarães

Portfólio de analista de dados em uma página só. A primeira tela é uma planilha, com barra de fórmulas, letras de coluna e grade, e a abertura é uma citação de George Box sobre modelos. Em seguida vêm Formação, Competências, Experiência, Projetos e Contato, em português e em inglês, com versão própria para celular.

## Estrutura

- `index.html`: marcação da página (textos em português).
- `css/base.css`: reset, cores, tipografia e abertura em formato de planilha.
- `css/sections.css`: Formação, Competências, Experiência, Projetos e Contato.
- `css/mobile.css`: ajustes do celular (até 599 px).
- `js/main.js`: interações, tradução para o inglês e calendário do GitHub.
- `assets/portrait.jpg`: retrato (880 x 1100 px).
- `assets/favicon.svg`: ícone da aba.

## Como ver

Abra o `index.html` no navegador. Não há build nem dependências para instalar.

Para servir localmente:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como editar

- Textos em português: `index.html`. Textos em inglês: objeto `EN` no começo de `js/main.js`.
- Cores e fontes: variáveis do bloco `:root` no começo de `css/base.css`.
- Retrato: substitua `assets/portrait.jpg` por outra imagem na proporção 4:5.
- Calendário de atividade do GitHub: o `js/main.js` guarda um retrato dos dados (constante `GHS`, até 28/10/2026) e, onde a rede permite, busca a versão atual na API pública `github-contributions-api.jogruber.de`.

## Publicar

Não há etapa de build: a raiz do repositório já é o site. Serve para qualquer hospedagem estática, como GitHub Pages (Settings, Pages, branch `main`, pasta raiz), Netlify, Vercel ou Cloudflare Pages. Em repositório privado, o GitHub Pages depende do plano da conta.

## Detalhes técnicos

- HTML, CSS e JavaScript puros, sem frameworks.
- Fontes pelo Google Fonts: Archivo, Instrument Serif, JetBrains Mono e Poppins.
- Sem rastreadores e sem cookies. A única coisa guardada no navegador é a escolha do idioma (`localStorage`).
