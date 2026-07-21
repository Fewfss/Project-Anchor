# Site de Aniversário — 50 Anos

Um site elegante e sofisticado para celebrar os 50 anos de uma pessoa especial. Tema inspirado em Bridgerton com cores imperiais (azul realeza, dourado, rosa e vinho).

## Características

- **Galeria de fotos** — Timeline visual com legenda personalizável
- **Curiosidades** — Cartões com fatos interessantes
- **Citações e poemas** — Inspirações de autoras famosas (Clarice Lispector, Virginia Woolf)
- **Mensagens** — Homenagens de familiares e amigos
- **Música de fundo** — Player de áudio integrado
- **Convite** — Seção com detalhes da festa e link do WhatsApp
- **Design responsivo** — Funciona em desktop, tablet e mobile
- **Tema elegante** — Cores sofisticadas, tipografia refinada, ornamentos decorativos



### Instalação

```bash
# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

O site abrirá em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Isso gera a pasta `dist/` pronta para deploy.

## Como Editar o Conteúdo

** IMPORTANTE:** Você só precisa editar um arquivo: **`src/data.js`**

Tudo mais se ajusta automaticamente. Aqui está o que você pode mudar:

### Informações Básicas

```javascript
export const homenageada = {
  nome: "Mamãe",           // Nome que aparece em destaque
  primeiroNome: "Mamãe",   // Como é chamada no texto corrido
};

export const chamada = "Cinquenta anos de uma vida que inspira todos...";
```

### Fotos da Galeria

```javascript
export const fotos = [
  { src: "/fotos/foto-1.jpg", legenda: "Anos 90 — sempre com aquele sorriso" },
  { src: "/fotos/foto-2.jpg", legenda: "Com a família, onde ela é mais feliz" },
  // Adicione quantas quiser
];
```

**Como adicionar fotos:**
1. Coloque a imagem na pasta `public/fotos/`
2. Use nomes simples: `foto-1.jpg`, `foto-2.jpg`, etc.
3. Adicione um objeto no array `fotos` com `src` e `legenda`

### Curiosidades

```javascript
export const curiosidades = [
  {
    titulo: "Leitora ávida",
    descricao: "Clarice Lispector é sua autora favorita...",
  },
  {
    titulo: "Viajante incurável",
    descricao: "Já visitou dezenas de cafeterias...",
  },
  // Adicione quantas quiser — aparecerão em grid de 3 colunas
];
```

### Citações e Poemas

```javascript
export const citacoes = [
  {
    texto: "Tudo no mundo começou com um sim.",
    autor: "Clarice Lispector",
  },
  {
    texto: "Para existir é preciso ocupar espaço.",
    autor: "Virginia Woolf",
  },
  // Adicione quantas quiser
];
```

### Mensagens/Homenagens

```javascript
export const mensagens = [
  {
    autor: "Luis",
    relacao: "seu filho",
    texto: "Mãe, cada conquista minha carrega um pouco da sua força...",
  },
  // Adicione mais pessoas
];
```

### Detalhes do Convite

```javascript
export const convite = {
  titulo: "Uma noite para celebrar",
  data: "Sábado, 20 de julho de 2026",
  horario: "19h00",
  local: "Salão Elegante",
  endereco: "Rua Exemplo, 123 - São Paulo, SP",
  observacao: "Traje esporte fino. Confirme presença com a família.",
  rsvpTexto: "Confirmar presença",
  rsvpLink: "https://wa.me/5500000000000", // Link do WhatsApp
};
```

### Música de Fundo

```javascript
export const musica = {
  type: "audio",
  url: "/life-is-a-highway.mp3",  // Coloque o arquivo em public/
  titulo: "Life is a Highway",
  artista: "Tom Cochrane",
  autoplay: false,  // true para tocar automaticamente
};
```

**Como adicionar uma música diferente:**
1. Coloque o arquivo MP3 na pasta `public/`
2. Atualize a propriedade `url` com o nome do arquivo
3. Mude `titulo` e `artista`

## 🎨 Personalizações Avançadas

### Cores

As cores estão definidas em `src/index.css`. Você pode mudar as variáveis CSS:

```css
:root {
  --ink: #1a3a5c;           /* Azul realeza */
  --ink-deep: #0f2544;      /* Azul escuro */
  --paper: #f6f1e7;         /* Bege claro */
  --paper-dim: #ece4d3;     /* Bege acinzentado */
  --gold: #c9a464;          /* Dourado */
  --rose: #d4a5a5;          /* Rosa */
  --wine: #4a1c26;          /* Vinho */
}
```

### Tipografia

As fontes são do Google Fonts e estão em `src/index.css`:
- **Playfair Display** — Títulos e headings
- **EB Garamond** — Corpo do texto
- **Italiana** — Destaques
- **Tangerine** — Assinatura cursiva

## 📦 Estrutura do Projeto

```
Project-Anchor/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Hero.jsx         # Seção inicial com número "50"
│   │   ├── Galeria.jsx      # Galeria de fotos
│   │   ├── Curiosidades.jsx # Cartões de curiosidades
│   │   ├── Citacoes.jsx     # Citações e poemas
│   │   ├── Mensagens.jsx    # Homenagens
│   │   ├── Convite.jsx      # Detalhes da festa
│   │   ├── MusicPlayer.jsx  # Player de áudio
│   │   └── Footer.jsx       # Rodapé
│   ├── App.jsx              # Componente principal
│   ├── data.js              # ⭐ EDITE AQUI — Todos os textos
│   ├── index.css            # Variáveis CSS e imports de fonts
│   ├── site.css             # Estilos do site
│   └── main.jsx             # Entry point
├── public/
│   ├── fotos/               # Coloque as fotos aqui
│   ├── life-is-a-highway.mp3 # Arquivo de áudio
│   └── ...
├── vite.config.js           # Configuração do Vite
├── package.json             # Dependências
└── README.md                # Este arquivo
```

## 🌐 Deploy no GitHub Pages

### 1. Criar um Repositório no GitHub

Se ainda não tem, crie um novo repositório (pode ser privado).

### 2. Configurar o `vite.config.js`

Certifique-se de que o `base` está correto:

```javascript
export default defineConfig({
  base: '/seu-repositorio/',  // Troque pelo nome do seu repo
  // ... resto da config
});
```

### 3. Fazer Push do Código

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages

1. Va para **Settings** do repositório no GitHub
2. Procure por **Pages** (na barra lateral esquerda)
3. Em **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (se usar workflow) ou **main** (se fizer deploy manual)
4. Clique em **Save**

### 5. Deploy Automático com GitHub Actions

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Assim, toda vez que você fizer `git push`, o site é atualizado automaticamente.

### Deploy Manual

Se preferir fazer deploy manual:

```bash
npm run build
npm run deploy  # Isso envia a pasta dist/ para gh-pages
```

## 💡 Dicas Importantes

✅ **Nomes de arquivo simples** — Use `foto-1.jpg` e não `WhatsApp Image 2026-07-20 at 13.59.03.jpg`

✅ **Caminho correto** — As fotos devem estar em `public/fotos/` e referenciadas como `/fotos/foto-1.jpg` no data.js

✅ **Limpar cache** — Ao fazer mudanças, use Ctrl+F5 (hard refresh) para limpar cache do navegador

✅ **Atualizar frequentemente** — Você só precisa editar `data.js`, o resto se ajusta sozinho

✅ **Testar antes de fazer deploy** — Rode `npm run dev` localmente para visualizar antes de publicar

✅ **Repositório privado é possível** — Você pode deixar o código privado no GitHub e o site continua acessível publicamente

## 🆘 Troubleshooting

**A foto não aparece:**
- Verifique se o arquivo está em `public/fotos/`
- Confirm que o nome está exatamente igual em `data.js`
- Limpe o cache do navegador (Ctrl+F5)

**A música não toca:**
- Verifique se o arquivo MP3 está em `public/`
- Confirm que a propriedade `url` em `data.js` está correta
- Alguns navegadores bloqueiam autoplay — deixe `autoplay: false`

**Site não atualiza após push:**
- GitHub Pages pode levar alguns minutos para atualizar
- Limpe o cache ou abra em modo incógnito

**Erro ao adicionar fotos:**
- Certifique-se de que o nome não tem espaços ou caracteres especiais
- Use `.jpg`, `.png` ou `.webp` como extensão

## 📞 Referência Rápida

| Tarefa | Arquivo |
|--------|---------|
| Editar textos, fotos, mensagens | `src/data.js` |
| Mudar cores | `src/index.css` (:root) |
| Mudar tipografia | `src/index.css` e `src/site.css` |
| Adicionar fotos | `public/fotos/` |
| Adicionar música | `public/` |
| Configurar deploy | `vite.config.js` |

---

**Feito com ❤️ para celebrar uma vida especial.**

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
