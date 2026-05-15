import { motion } from 'framer-motion'

const clients = [
  {
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=85&fit=crop',
    title: 'Propriétaires &\nLocataires particuliers',
    desc: "Qu'il s'agisse de résidences principales, secondaires ou d'investissements locatifs, nous vous accompagnons dans la gestion de votre projet de travaux pour un résultat sans mauvaise surprise.",
  },
  {
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=85&fit=crop&crop=top',
    title: 'Investisseurs\nimmobiliers',
    desc: "Nous proposons une gestion professionnelle et clé en main pour les investisseurs possédant plusieurs biens à rénover pour un résultat durable et sublimant vos biens.",
  },
  {
    img: '/images/commercants.webp',
    title: 'Commerçants',
    desc: "Nous prenons également en charge la gestion de vos travaux de rénovation commerciale, que ce soit dans le cadre d'une nouvelle acquisition ou d'un projet de modernisation.",
  },
]

export default function Testimonials() {
  return (
    <section className="testi-section" id="testimonials">
      <div className="container">

        {/* ── Header ── */}
        <div className="testi-header" style={{ marginBottom: '3.5rem' }}>
          <motion.div
            className="section-tag amber"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ justifyContent: 'center' }}
          >
            Notre clientèle
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ textAlign: 'center', marginTop: '1.1rem' }}
          >
            <h2 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: '#ffffff',
              margin: 0,
              display: 'inline',
            }}>
              NOS CLIENTS&nbsp;
            </h2>
            <span style={{
              fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#556B2F',
              letterSpacing: '0.01em',
            }}>
              types
            </span>
          </motion.div>
        </div>

        {/* ── Three-column cards ── */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {clients.map(({ img, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                delay: i * 0.14,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ textAlign: 'center' }}
            >
              {/* Circular photo */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                style={{
                  width: 'clamp(170px, 20vw, 220px)',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 2rem',
                  border: '3px solid rgba(201,125,22,0.28)',
                  boxShadow: '0 0 0 6px rgba(201,125,22,0.07)',
                }}
              >
                <img
                  src={img}
                  alt={title.replace('\n', ' ')}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>

              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
                fontWeight: 700,
                color: '#F5F0E8',
                lineHeight: 1.3,
                marginBottom: '1rem',
                whiteSpace: 'pre-line',
              }}>
                {title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(245,240,232,0.58)',
                lineHeight: 1.78,
                maxWidth: 320,
                margin: '0 auto',
              }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
