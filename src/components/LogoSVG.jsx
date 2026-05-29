export default function LogoSVG({ height = 44 }) {
  return (
    <svg
      viewBox="0 0 440 92"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="sepG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="45%" stopColor="#FF6B00" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="playG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF4D00" />
        </linearGradient>
      </defs>

      {/* Lightbulb outline */}
      <path
        d="M47,9 C27,9 12,24 12,44 C12,57 19,67 30,73 L30,78 C30,82 33,85 37,85 L57,85 C61,85 64,82 64,78 L64,73 C75,67 82,57 82,44 C82,24 67,9 47,9 Z"
        fill="none"
        stroke="#1E3A8A"
        strokeWidth="4.2"
        strokeLinejoin="round"
      />
      {/* Bulb base lines */}
      <line x1="37" y1="85" x2="57" y2="85" stroke="#1E3A8A" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="40" y1="89" x2="54" y2="89" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />

      {/* Play triangle */}
      <polygon points="37,33 37,55 61,44" fill="url(#playG)" />

      {/* Colored rays */}
      <line x1="20" y1="18" x2="9"  y2="8"  stroke="#7C3AED" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="47" y1="7"  x2="47" y2="0"  stroke="#2563EB" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="74" y1="18" x2="85" y2="8"  stroke="#F59E0B" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="10" y1="44" x2="3"  y2="44" stroke="#06B6D4" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="84" y1="44" x2="91" y2="44" stroke="#EC4899" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="76" y1="69" x2="85" y2="78" stroke="#F97316" strokeWidth="3.8" strokeLinecap="round" />

      {/* Vertical separator */}
      <line x1="104" y1="4" x2="104" y2="88" stroke="url(#sepG)" strokeWidth="2.5" />

      {/* BAWRA */}
      <text
        x="118" y="52"
        fontSize="41" fontWeight="900" fill="#1E3A8A" letterSpacing="2.5"
        fontFamily="'Arial Black','Impact',sans-serif"
      >BAWRA</text>

      {/* SKILL + HOUSE */}
      <text
        x="118" y="74"
        fontSize="23" fontWeight="900" fill="#EC4899" letterSpacing="5.5"
        fontFamily="'Arial Black','Impact',sans-serif"
      >SKILL</text>
      <text
        x="238" y="74"
        fontSize="23" fontWeight="900" fill="#F97316" letterSpacing="5.5"
        fontFamily="'Arial Black','Impact',sans-serif"
      >HOUSE</text>

      {/* LEARN • EARN • GROW */}
      <text x="118" y="87" fontSize="8" fontWeight="700" fill="#374151" letterSpacing="3.5"
        fontFamily="'Arial',sans-serif">— LEARN </text>
      <circle cx="197" cy="85" r="2.5" fill="#EC4899" />
      <text x="203" y="87" fontSize="8" fontWeight="700" fill="#374151" letterSpacing="3.5"
        fontFamily="'Arial',sans-serif"> EARN </text>
      <circle cx="249" cy="85" r="2.5" fill="#F97316" />
      <text x="255" y="87" fontSize="8" fontWeight="700" fill="#374151" letterSpacing="3.5"
        fontFamily="'Arial',sans-serif"> GROW —</text>
    </svg>
  )
}
