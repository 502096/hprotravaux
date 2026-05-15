import { FC } from 'react'

interface HproLogoProps {
  height?: number
  className?: string
}

const HproLogo: FC<HproLogoProps> = ({ height = 40, className = '' }) => {
  return (
    <svg
      viewBox="80 95 820 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hpro Travaux"
      className={className}
      style={{ height, width: 'auto', display: 'block', flexShrink: 0 }}
    >
      <title>Hpro Travaux</title>

      {/* H — left bar */}
      <rect x="120" y="110" width="95" height="230" rx="18" fill="#E9E9E9" />
      {/* H — right bar */}
      <rect x="330" y="110" width="95" height="230" rx="18" fill="#E9E9E9" />
      {/* H — crossbar */}
      <rect x="190" y="195" width="170" height="55" rx="12" fill="#E9E9E9" />

      {/* Architectural lines — orange */}
      <g stroke="#FF7A1A" strokeWidth="6" strokeLinecap="round">
        <line x1="470" y1="165" x2="640" y2="165" />
        <line x1="530" y1="115" x2="530" y2="265" />
        <line x1="590" y1="135" x2="590" y2="265" />
        <line x1="650" y1="155" x2="650" y2="265" />
        <line x1="710" y1="185" x2="710" y2="265" />
        <line x1="480" y1="150" x2="530" y2="115" />
        <line x1="530" y1="115" x2="650" y2="185" />
        <line x1="650" y1="185" x2="760" y2="245" />
        <line x1="530" y1="210" x2="760" y2="210" />
        <line x1="760" y1="155" x2="760" y2="265" />
      </g>

      {/* Architectural lines — white */}
      <g stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity={0.95}>
        <line x1="700" y1="115" x2="700" y2="260" />
        <line x1="745" y1="135" x2="745" y2="255" />
        <line x1="790" y1="155" x2="790" y2="250" />
        <line x1="700" y1="140" x2="790" y2="195" />
      </g>

      {/* "pro" */}
      <text
        x="430" y="300"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="170"
        fontWeight="700"
        fill="#FF7A1A"
      >
        pro
      </text>

      {/* "Travaux" */}
      <text
        x="575" y="365"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="70"
        fontWeight="700"
        fill="#FF7A1A"
      >
        Travaux
      </text>
    </svg>
  )
}

export default HproLogo
