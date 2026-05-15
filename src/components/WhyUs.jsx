import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { UserCheck, Clock, Receipt } from 'lucide-react'

const features = [
  {
    icon: UserCheck,
    title: 'Interlocuteur unique',
    text: 'Un chef de projet dédié prend en charge votre dossier de A à Z, coordonne tous les corps d\'état et reste disponible pour vous.',
  },
  {
    icon: Clock,
    title: 'Délais maîtrisés',
    text: 'Nous établissons un planning précis dès le départ et le tenons, grâce à une coordination rigoureuse de nos équipes.',
  },
  {
    icon: Receipt,
    title: 'Devis 100% transparent',
    text: 'Chaque poste est détaillé, expliqué et justifié. Aucune surprise en cours de chantier, jamais.',
  },
]

function ParallaxImage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        borderRadius: '2px',
        overflow: 'hidden',
        height: 480,
        marginBottom: '2.5rem',
        boxShadow: '0 24px 60px rgba(28,31,20,0.18)',
      }}
    >
      <motion.img
        src="/images/2.jpg"
        alt="Entrée rénovée avec papier peint botanique et agencement sur-mesure"
        style={{
          width: '100%',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center top',
          y,
          display: 'block',
        }}
      />
      {/* Amber bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '35%',
        background: 'linear-gradient(to top, rgba(201,125,22,0.18), transparent)',
        pointerEvents: 'none',
      }} />
      {/* Caption pill */}
      <div style={{
        position: 'absolute', bottom: '1.2rem', left: '1.2rem',
        background: 'rgba(28,31,20,0.78)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(201,125,22,0.25)',
        borderRadius: 2,
        padding: '0.45rem 0.9rem',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C97D16', flexShrink: 0 }} />
        <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(245,240,232,0.8)', textTransform: 'uppercase' }}>
          Réalisation Hpro-travaux
        </span>
      </div>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section className="whyus-section" id="whyus">
      <div className="container">
        <div className="whyus-grid">
          {/* Left: intro */}
          <div>
            <motion.div
              className="section-tag"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Pourquoi nous choisir
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{ marginBottom: '1.2rem' }}
            >
              Rénovation sur-mesure
            </motion.h2>
            <motion.p
              className="section-lead"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              finitions soignées et un suivi sans surprise —{' '}
              <em style={{ color: 'var(--amber)' }}>«&nbsp;On ne refait pas juste vos murs. On réveille votre intérieur.&nbsp;»</em>
            </motion.p>

            {/* Project image */}
            <ParallaxImage />

          </div>

          {/* Right: features + image showcase */}
          <div className="whyus-features">
            {features.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                className="whyus-feature"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  className="whyus-feature-icon"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.div>
                <div>
                  <div className="whyus-feature-title">{title}</div>
                  <p className="whyus-feature-text">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
