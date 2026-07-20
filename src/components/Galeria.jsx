import { fotos } from "../data.js";
import Medallion from "./Medallion.jsx";
import Flourish from "./Flourish.jsx";

export default function Galeria() {
  return (
    <section id="historia" className="section section-light">
      <div className="section-head">
        <Medallion />
        <p className="eyebrow">Recordações</p>
        <h2 className="section-title">Algumas lembranças</h2>
        <Flourish />
      </div>

      <div className="galeria-scroll">
        {fotos.map((foto, i) => (
          <figure className="galeria-item" key={i}>
            <div className="galeria-frame galeria-frame-album">
              <img src={foto.src} alt={foto.legenda} loading="lazy" />
            </div>
            <figcaption>{foto.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
