import { useState, useRef, useEffect } from "react";
import { musica } from "../data";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(musica.autoplay);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {musica.type === "audio" && (
        <audio 
          ref={audioRef}
          loop
          crossOrigin="anonymous"
          preload="auto"
          style={{ display: "none" }}
        >
          <source src={musica.url} type="audio/mpeg" />
          Seu navegador não suporta áudio.
        </audio>
      )}

      <div className="music-player">
        <button 
          className="music-player-btn" 
          onClick={togglePlay}
          title={isPlaying ? "Pausar música" : "Tocar música"}
        >
          <span className="music-player-icon">
            {isPlaying ? "♪" : "♫"}
          </span>
        </button>

        <div className="music-player-info">
          <p className="music-player-title">{musica.titulo}</p>
          <p className="music-player-artist">{musica.artista}</p>
        </div>
      </div>
    </>
  );
}
