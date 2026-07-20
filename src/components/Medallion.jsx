// Um selo de cera com ramos de louro — meio brasão de família, meio
// medalhão de novela antiga — reaproveitado como divisor entre seções
// no lugar de marcadores numerados. Este é o elemento de assinatura
// do site.
export default function Medallion({ size = 56 }) {
  return (
    <svg
      className="medallion-divider"
      width={size}
      height={size}
      viewBox="0 0 56 56"
      role="presentation"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="20" fill="none" stroke="var(--gold)" strokeWidth="1" />
      <circle cx="28" cy="28" r="15" fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.6" />
      <circle cx="28" cy="28" r="2.5" fill="var(--gold)" />

      {/* ramo esquerdo */}
      <g stroke="var(--gold)" strokeWidth="1" fill="none" opacity="0.9">
        <path d="M6 28 C 10 28, 12 24, 12 20" />
        <path d="M6 28 C 10 28, 12 32, 12 36" />
        <path d="M9 22 C 7 21, 6 19, 6 17" />
        <path d="M9 34 C 7 35, 6 37, 6 39" />
      </g>
      {/* ramo direito */}
      <g stroke="var(--gold)" strokeWidth="1" fill="none" opacity="0.9">
        <path d="M50 28 C 46 28, 44 24, 44 20" />
        <path d="M50 28 C 46 28, 44 32, 44 36" />
        <path d="M47 22 C 49 21, 50 19, 50 17" />
        <path d="M47 34 C 49 35, 50 37, 50 39" />
      </g>
    </svg>
  );
}
