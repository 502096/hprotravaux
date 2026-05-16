import { motion } from 'framer-motion'
import { ZoomParallax } from './ui/zoom-parallax'
import galleryData from '../content/gallery.json'

const IMAGES = galleryData.items

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
            {galleryData.section_tag}
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
          {galleryData.title1}
          <br />
          <span style={{ color: '#C97D16' }}>{galleryData.title2}</span>
        </motion.h2>
      </div>

      {/* Zoom parallax */}
      <ZoomParallax images={IMAGES} />

    </section>
  )
}
