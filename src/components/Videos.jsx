import { videos } from "../data.js";
import Medallion from "./Medallion.jsx";
import Flourish from "./Flourish.jsx";

export default function Videos() {
  // Se não houver vídeos, não renderiza a seção
  if (!videos || videos.length === 0) return null;

  return (
    <section id="videos" className="section section-dark">
      <div className="section-head">
        <Medallion />
        <p className="eyebrow">Momentos especiais</p>
        <h2 className="section-title">Vídeos de parabéns</h2>
        <Flourish />
      </div>

      <div className="videos-grid">
        {videos.map((video, i) => (
          <div className="video-container" key={i}>
            <video
              className="video-player"
              controls
              poster={video.poster}
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
            {video.titulo && <p className="video-titulo">{video.titulo}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
