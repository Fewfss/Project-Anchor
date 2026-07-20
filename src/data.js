// =========================================================================
// TODO: Edite tudo aqui. Este é o único arquivo que você precisa mexer
// para trocar fotos, textos e mensagens — o resto do site se ajusta sozinho.
// =========================================================================

export const homenageada = {
  nome: "Mamãe",              // Nome dela (aparece em destaque no topo)
  primeiroNome: "Mamãe",      // Como ela é chamada no texto corrido
};

export const primeiroNome = homenageada.primeiroNome;

// Frase curta que aparece logo abaixo do nome, no topo do site.
export const chamada =
  "Cinquenta anos de uma vida que inspira todos que passam por perto.";

// Fotos da galeria/linha da vida dela.
// "src" é o caminho da imagem dentro de /fotos/ (coloque os arquivos lá).
// "legenda" é o texto que aparece embaixo da foto.
export const fotos = [
  { src: "public/foto-1.jpg", legenda: "Família cheia" },
  { src: "public/foto-2.jpg", legenda: "Um tempo passado" },
  { src: "public/foto-3.jpg", legenda: "Beleza pura" },
  { src: "public/foto-4.jpg", legenda: "Vai tomando" },
  { src: "public/foto-5.jpg", legenda: "teste" },
  { src: "public/foto-6.jpg", legenda: "Anos 90 — sempre com aquele sorriso" }
];

// Mensagens/homenagens de quem quiser participar.
// Adicione um objeto para cada pessoa.
export const mensagens = [
  {
    autor: "Luis",
    relacao: "seu filho",
    texto:
      "Mãe, cada conquista minha carrega um pouco da sua força. Feliz 50 anos — que venham muitos mais ao seu lado.",
  },
  {
    autor: "Nome da pessoa",
    relacao: "relação com ela",
    texto: "Escreva aqui a homenagem.",
  },
  {
    autor: "Nome da pessoa",
    relacao: "relação com ela",
    texto: "Escreva aqui a homenagem.",
  },
];

// Detalhes do convite/festa.
export const convite = {
  titulo: "Uma noite para celebrar",
  data: "Sábado, 00 de mês de 2026",
  horario: "19h00",
  local: "Nome do local",
  endereco: "Endereço completo do local",
  observacao: "Traje esporte fino. Confirme presença com a família.",
  rsvpTexto: "Confirmar presença",
  rsvpLink: "https://wa.me/5500000000000", // link de WhatsApp, formulário, etc.
};

// Curiosidades sobre ela.
// Adicione quantas quiser — a seção se ajusta automaticamente.
export const curiosidades = [
  {
    titulo: "Leitora ávida",
    descricao: "Clarice Lispector é sua autora favorita. Tem praticamente todos os livros.",
  },
  {
    titulo: "Fotógrafa de coração",
    descricao: "Tem uma coleção imensurável de fotos e álbuns de família. Sempre com uma câmera na mão.",
  },
  {
    titulo: "Viajante incurável",
    descricao: "Já visitou dezenas de cafeterias, restaurantes, florestas e praias pelo mundo. Sempre em busca da próxima aventura.",
  },
  {
    titulo: "Jardineira apaixonada",
    descricao: "Tem orquídeas em casa. Diz que plantas são como filhos — exigem carinho.",
  },
   {
    titulo: "Jardineira apaixonada",
    descricao: "Tem orquídeas em casa. Diz que plantas são como filhos — exigem carinho.",
  }
];

// Citações e poemas que ela adora.
// Adicione a citação, o autor, e deixe em branco se for dela mesma.
export const citacoes = [
  {
    texto: "Tudo no mundo começou com um sim.",
    autor: "Clarice Lispector",
  },
  {
    texto: "Para existir é preciso ocupar espaço. Você não ocupa espaço — você cria espaço.",
    autor: "Virginia Woolf",
  },
  {
    texto: "A coragem é a única coisa que você realmente possui.",
    autor: "Clarice Lispector",
  },
  {
    texto: "As mulheres têm servido todos esses séculos como espelhos dotados do mágico e delicioso poder de refletir a figura do homem em tamanho duas vezes maior.",
    autor: "Virginia Woolf",
  },
  {
    texto: "Você não pode encontrar a paz evitando a vida.",
    autor: "Virginia Woolf",
  },
];

// Configuração da música de fundo.
// Você pode trocar facilmente — é só mudar a URL ou nome.
// type: "audio" = arquivo de áudio MP3
// Coloque o arquivo MP3 em: public/musicas/
export const musica = {
  type: "audio",
  url: "public/life-is-a-highway.mp3",
  titulo: "Life is a Highway",
  artista: "Tom Cochrane",
  autoplay: false,
};