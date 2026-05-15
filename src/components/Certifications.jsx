import { motion } from 'framer-motion'
import { Award, Clock, MapPin, Handshake } from 'lucide-react'

const guarantees = [
  {
    Icon: Award,
    label: 'Artisans qualifiés',
    sub: 'Sélectionnés & certifiés',
  },
  {
    Icon: Clock,
    label: 'Devis sous 48h',
    sub: 'Gratuit & sans engagement',
  },
  {
    Icon: MapPin,
    label: 'Île-de-France',
    sub: '250+ chantiers livrés',
  },
  {
    Icon: Handshake,
    label: 'Suivi personnalisé',
    sub: 'Un chef de projet dédié',
  },
]

export default function Certifications() {
  return (
    <section style={{ background: '#111309', padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container">

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0',
        }}>
          {guarantees.map(({ Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.5rem 2rem',
                flex: '1 1 160px',
                maxWidth: 220,
                position: 'relative',
              }}
            >
              {/* Vertical divider except first */}
              {i > 0 && (
                <div style={{
                  position: 'absolute',
                  left: 0, top: '20%', bottom: '20%',
                  width: 1,
                  background: 'rgba(255,255,255,0.07)',
                }} />
              )}

              <motion.div
                whileHover={{ scale: 1.12, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(201,125,22,0.12)',
                  border: '1px solid rgba(201,125,22,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.85rem',
                }}
              >
                <Icon size={20} color="#C97D16" strokeWidth={1.6} />
              </motion.div>

              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#F5F0E8',
                letterSpacing: '0.02em',
                marginBottom: '0.25rem',
              }}>
                {label}
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'rgba(245,240,232,0.42)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {sub}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
