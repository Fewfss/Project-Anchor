import Hero from "./components/Hero.jsx";
import Galeria from "./components/Galeria.jsx";
import Videos from "./components/Videos.jsx";
import Curiosidades from "./components/Curiosidades.jsx";
import Citacoes from "./components/Citacoes.jsx";
import Mensagens from "./components/Mensagens.jsx";
import Convite from "./components/Convite.jsx";
import Footer from "./components/Footer.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import "./site.css";

export default function App() {
  return (
    <>
      <MusicPlayer />
      <Hero />
      <Galeria />
      <Videos />
      <Curiosidades />
      <Citacoes />
      <Mensagens />
      <Convite />
      <Footer />
    </>
  );
}
