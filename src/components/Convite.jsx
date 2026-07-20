import { convite } from "../data.js";
import Medallion from "./Medallion.jsx";
import Flourish from "./Flourish.jsx";

export default function Convite() {
  return (
    <section id="convite" className="section section-dark">
      <div className="section-head">
        <Medallion />
        <p className="eyebrow">A celebração</p>
        <h2 className="section-title section-title-light">{convite.titulo}</h2>
        <Flourish className="flourish-light" />
      </div>

      <div className="convite-card">
        <span className="convite-corner convite-corner-tl" aria-hidden="true" />
        <span className="convite-corner convite-corner-tr" aria-hidden="true" />
        <span className="convite-corner convite-corner-bl" aria-hidden="true" />
        <span className="convite-corner convite-corner-br" aria-hidden="true" />
        <dl className="convite-detalhes">
          <div className="convite-linha">
            <dt>Data</dt>
            <dd>{convite.data}</dd>
          </div>
          <div className="convite-linha">
            <dt>Horário</dt>
            <dd>{convite.horario}</dd>
          </div>
          <div className="convite-linha">
            <dt>Local</dt>
            <dd>
              {convite.local}
              <br />
              <span className="convite-endereco">{convite.endereco}</span>
            </dd>
          </div>
        </dl>

        {convite.observacao && (
          <p className="convite-observacao">{convite.observacao}</p>
        )}

        <a
          className="convite-rsvp"
          href={convite.rsvpLink}
          target="_blank"
          rel="noreferrer"
        >
          {convite.rsvpTexto}
        </a>
      </div>
    </section>
  );
}
