# Portfólio de Davi Guimarães

Portfólio de analista de dados em uma página só. A primeira tela é uma planilha, com barra de fórmulas, letras de coluna e grade, e a abertura é uma citação de George Box sobre modelos. Em seguida vêm Formação, Competências, Experiência, Projetos e Contato, em português e em inglês.

## Como ver

Abra o `index.html` no navegador. É um arquivo único, sem build e sem dependências para instalar.

Para servir localmente:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Detalhes técnicos

- HTML, CSS e JavaScript puros, tudo em um único arquivo.
- Fontes pelo Google Fonts: Archivo, Instrument Serif, JetBrains Mono e Poppins.
- O retrato está embutido no arquivo (base64), por isso o `index.html` tem cerca de 280 KB.
- O calendário de atividade do GitHub parte de um retrato embutido (dados reais até 28/10/2026) e, onde a rede permite, se atualiza sozinho pela API pública `github-contributions-api.jogruber.de`.
- Sem rastreadores e sem cookies. A única coisa guardada no navegador é a escolha do idioma (`localStorage`).
- Versão para celular própria: menu fixo no rodapé e cartões reorganizados.

## Publicar

Para colocar no ar com o GitHub Pages: em Settings, Pages, escolha a branch `main` e a pasta raiz. Em repositório privado, o GitHub Pages depende do plano da conta; sem ele, o repositório precisa ser público.
