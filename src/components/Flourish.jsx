// Vinheta floral fina — folhas e um pequeno broto central, no espírito
// dos ornamentos de página de romances de época e cartões de convite
// antigos. Usada como um respiro elegante entre o medalhão e o título.
export default function Flourish({ className = "" }) {
  return (
    <svg
      className={`flourish ${className}`.trim()}
      width="120"
      height="20"
      viewBox="0 0 120 20"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M60 10 C 50 2, 38 2, 30 10 C 38 14, 50 14, 60 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.85"
      />
      <path
        d="M60 10 C 70 2, 82 2, 90 10 C 82 14, 70 14, 60 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.85"
      />
      <line x1="2" y1="10" x2="26" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="94" y1="10" x2="118" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="60" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}
