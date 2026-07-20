import { mensagens } from "../data.js";
import Medallion from "./Medallion.jsx";
import Flourish from "./Flourish.jsx";

export default function Mensagens() {
  return (
    <section id="mensagens" className="section section-dark">
      <div className="section-head">
        <Medallion />
        <p className="eyebrow">De quem te ama</p>
        <h2 className="section-title section-title-light">Mensagens</h2>
        <Flourish className="flourish-light" />
      </div>

      <div className="mensagens-grid">
        {mensagens.map((m, i) => (
          <article className="mensagem-card" key={i}>
            <span className="mensagem-aspas" aria-hidden="true">&ldquo;</span>
            <p className="mensagem-texto">{m.texto}</p>
            <footer className="mensagem-autor">
              <span className="mensagem-nome">{m.autor}</span>
              <span className="mensagem-relacao">{m.relacao}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
