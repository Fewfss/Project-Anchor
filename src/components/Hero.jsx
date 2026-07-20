import { homenageada, chamada } from "../data.js";
import Flourish from "./Flourish.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="eyebrow">Celebrando</p>
        <Flourish className="flourish-light" />

        <div className="hero-medal" aria-hidden="true">
          <svg viewBox="0 0 320 320" className="hero-ring">
            <circle
              cx="160"
              cy="160"
              r="140"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.5"
              pathLength="100"
              className="hero-ring-path"
            />
            <circle
              cx="160"
              cy="160"
              r="124"
              fill="none"
              stroke="var(--gold)"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          </svg>
          <span className="hero-number">50</span>
        </div>

        <h1 className="hero-name hero-name-script">{homenageada.nome}</h1>
        <p className="hero-tagline">{chamada}</p>

        <a href="#historia" className="hero-scroll">
          <span>a história dela</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
