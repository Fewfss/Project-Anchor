import { curiosidades } from "../data";
import Flourish from "./Flourish.jsx";

export default function Curiosidades() {
  return (
    <section id="curiosidades" className="section section-dark">
      <div className="section-head">
        <span className="eyebrow">Quem é ela</span>
        <h2 className="section-title section-title-light">Curiosidades</h2>
        <Flourish className="flourish-light" />
      </div>

      <div className="curiosidades-grid">
        {curiosidades.map((item, idx) => (
          <div key={idx} className="curiosidade-card">
            <h3 className="curiosidade-titulo">{item.titulo}</h3>
            <p className="curiosidade-descricao">{item.descricao}</p>
            <div className="curiosidade-ornament">✦</div>
          </div>
        ))}
      </div>
    </section>
  );
}
