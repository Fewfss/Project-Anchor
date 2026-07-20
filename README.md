# Site de aniversário — 50 anos 🎉

Site feito em React + Vite, pronto para publicar no GitHub Pages.

## O que editar

Praticamente tudo que você precisa mudar está em **`src/data.js`**:

- Nome dela
- Frase de abertura
- Fotos (legendas e caminhos)
- Mensagens/homenagens
- Detalhes do convite (data, horário, local, link de confirmação)

Coloque as fotos reais dentro de `public/fotos/` com os mesmos nomes
referenciados em `src/data.js` (ex: `foto-1.jpg`).

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `site-aniversario-mae`).
2. No `vite.config.js`, confira se `base` bate com o nome do repositório
   (ex: `/site-aniversario-mae/`).
3. No `package.json`, troque `SEU-USUARIO` em `homepage` pelo seu usuário
   do GitHub.
4. Suba o código:
   ```bash
   git init
   git add .
   git commit -m "primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/site-aniversario-mae.git
   git push -u origin main
   ```
5. Publique:
   ```bash
   npm run deploy
   ```
   Isso builda o site e envia a pasta `dist/` para a branch `gh-pages`.
6. No GitHub, vá em **Settings → Pages** e confirme que a fonte está
   configurada para a branch `gh-pages`. Em alguns minutos o site fica no
   ar em `https://SEU-USUARIO.github.io/site-aniversario-mae`.

## Estrutura

```
src/
  data.js          ← conteúdo editável (fotos, mensagens, convite)
  site.css         ← estilo visual
  components/
    Hero.jsx        seção de abertura, com o "50" em destaque
    Galeria.jsx      fotos e legendas
    Mensagens.jsx    homenagens de família e amigos
    Convite.jsx      detalhes da festa
    Footer.jsx
    Medallion.jsx    elemento decorativo (anel dourado) reutilizado
```

## Dica para manter surpresa

Enquanto estiver no ar antes da festa, o site não aparece em nenhuma
busca a menos que alguém tenha o link — mas não é senha-protegido. Se
quiser mais segurança, publique só perto da data, ou peça para eu
adicionar uma tela de senha simples antes de liberar o conteúdo.
