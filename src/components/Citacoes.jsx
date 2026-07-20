import { citacoes } from "../data";
import Flourish from "./Flourish.jsx";

export default function Citacoes() {
  return (
    <section id="citacoes" className="section section-light">
      <div className="section-head">
        <span className="eyebrow">Palavras que ecoam</span>
        <h2 className="section-title">Citações e Poemas</h2>
        <Flourish />
      </div>

      <div className="citacoes-container">
        {citacoes.map((item, idx) => (
          <div key={idx} className="citacao-box">
            <p className="citacao-texto">"{item.texto}"</p>
            <p className="citacao-autor">— {item.autor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
