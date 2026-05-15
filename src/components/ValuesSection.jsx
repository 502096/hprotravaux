import { useState } from 'react'
import { motion } from 'framer-motion'

const VALUES = [
  {
    num: '01',
    title: 'Transparence totale',
    text: 'Des devis clairs, un suivi précis et aucune mauvaise surprise tout au long du chantier.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop',
    position: 'center 30%',
  },
  {
    num: '02',
    title: 'Qualité des finitions',
    text: 'Chaque détail compte. Nous accordons une attention particulière aux finitions pour un résultat durable et élégant.',
    img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80&fit=crop',
    position: 'center 40%',
  },
  {
    num: '03',
    title: 'Respect des délais',
    text: 'Nous organisons chaque étape avec rigueur afin de respecter les délais annoncés et votre tranquillité.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
    position: 'center 45%',
  },
  {
    num: '04',
    title: 'Accompagnement personnalisé',
    text: "Chaque projet est unique. Nous vous conseillons et vous accompagnons du premier échange jusqu'à la livraison finale.",
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop',
    position: 'center 25%',
  },
  {
    num: '05',
    title: 'Savoir-faire & expertise',
    text: 'Notre expérience nous permet de proposer des solutions fiables, modernes et adaptées à chaque besoin.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&fit=crop',
    position: 'center center',
  },
  {
    num: '06',
    title: 'Confiance & proximité',
    text: "Nous construisons une relation basée sur l'écoute, la disponibilité et la confiance durable avec nos clients.",
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop',
    position: 'center 35%',
  },
]

function ValueCard({ num, title, text, img, position, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ borderRadius: 16, aspectRatio: '4 / 3', position: 'relative', overflow: 'hidden', cursor: 'default' }}
    >
      {/* Background image */}
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: position,
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(8,10,6,0.95) 0%, rgba(8,10,6,0.58) 45%, rgba(8,10,6,0.14) 100%)',
      }} />

      {/* Amber shimmer — top edge on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1.5,
        background: 'linear-gradient(to right, transparent, #C97D16, transparent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
        {/* Number */}
        <span style={{
          display: 'block',
          marginBottom: '0.8rem',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: '#C97D16',
        }}>
          {num}
        </span>

        {/* Amber rule */}
        <div style={{
          height: 1.5,
          background: '#C97D16',
          marginBottom: '0.9rem',
          width: hovered ? 48 : 24,
          transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }} />

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.05rem, 1.6vw, 1.22rem)',
          fontWeight: 700,
          lineHeight: 1.25,
          color: '#ffffff',
          margin: '0 0 0.7rem',
          letterSpacing: '-0.01em',
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.83rem',
          lineHeight: 1.65,
          color: 'rgba(245,240,232,0.75)',
          margin: 0,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}>
          {text}
        </p>
      </div>
    </motion.article>
  )
}

export default function ValuesSection() {
  return (
    <section id="valeurs" style={{ background: '#0A0C08', padding: 'clamp(5rem, 8vw, 9rem) 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3.5rem)' }}>

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.6rem' }}
            >
              <span style={{ display: 'inline-block', width: 24, height: 1.5, background: '#C97D16', flexShrink: 0 }} />
              <span style={{
                fontSize: '0.64rem',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
              }}>
                Nos valeurs
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                color: '#E8DFC8',
                margin: 0,
              }}
            >
              Ce qui guide<br />
              <span style={{ color: '#C97D16' }}>chacun de nos chantiers.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'rgba(245,240,232,0.52)',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              maxWidth: 360,
              margin: 0,
            }}
            className="lg:text-right"
          >
            Depuis notre création, ces six engagements guident chaque décision, chaque geste et chaque relation que nous construisons avec nos clients.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {VALUES.map((v, i) => (
            <ValueCard key={v.num} {...v} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
