import { motion } from 'framer-motion'
import { ZoomParallax } from './ui/zoom-parallax'

const IMAGES = [
  {
    src: '/images/cozy-lively-home-interior-design.jpg',
    alt: 'Salon cosy avec végétation — Réalisation Hpro-travaux',
    objectPosition: 'center 55%',
  },
  {
    src: '/images/94fc8e30-1ccd-4695-bc2c-6005251b132b.jpg',
    alt: 'Cuisine ouverte avec verrière — Le Chesnay',
  },
  {
    src: '/images/9fe1075f-6599-4dea-a0eb-c11958bf3b73.jpg',
    alt: 'Salle de bain double vasque — Livry-Gargan',
  },
  {
    src: '/images/935ca161-7925-4c4d-8428-83cc934d6141.jpg',
    alt: 'Chambre principale avec tête de lit sur-mesure — Paris 16e',
  },
  {
    src: '/images/d6e596fb-fe7a-4334-8d92-8dec7119def1.jpg',
    alt: 'Bureau & espace de travail intégré — Les Pavillons-sous-Bois',
  },
  {
    src: '/images/e5f9a4fb-a3a8-481a-bb07-ee80c3504826.jpg',
    alt: 'Chambre sous combles aménagée — Claye-Souilly',
  },
  {
    src: '/images/ec12a996-ac20-40e8-9021-9b8f6f769770.jpg',
    alt: 'Salle à manger contemporaine — Paris',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#080A06' }}>

      {/* Header */}
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: 'clamp(5rem, 8vw, 9rem) clamp(1.5rem, 5vw, 3.5rem) clamp(3rem, 5vw, 5rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.6rem',
          }}
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
            Nos réalisations
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
          Chaque projet,
          <br />
          <span style={{ color: '#C97D16' }}>une histoire unique.</span>
        </motion.h2>
      </div>

      {/* Zoom parallax */}
      <ZoomParallax images={IMAGES} />

    </section>
  )
}
