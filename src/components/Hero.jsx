import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const words1 = ['Votre', 'intérieur,']
const words2 = ['notre', "chef-d'œuvre."]

function WordReveal({ words, delay = 0, accent = false }) {
  return (
    <span style={{ display: 'block' }}>
      {words.map((w, i) => (
        <motion.span
          key={w + i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.3em',
            color: accent ? 'var(--amber)' : undefined,
          }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, -120])
  const contentY = useTransform(scrollY, [0, 600], [0, -60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="hero" ref={ref} id="hero">
      {/* Parallax background */}
      <motion.div className="hero-bg" style={{ y: bgY }} />
      <div className="hero-grid" aria-hidden />

      {/* Decorative rings */}
      <motion.div
        className="hero-deco-ring"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-hidden
      />

      <motion.div
        className="hero-content"
        style={{ y: contentY, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Rénovation &amp; Décoration — Île-de-France
        </motion.div>

        {/* Title */}
        <h1 className="hero-title" style={{ overflow: 'hidden' }}>
          <WordReveal words={words1} delay={0.3} />
          <WordReveal words={words2} delay={0.55} accent />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Entreprise tous corps d'état. De la conception à la livraison, nous gérons chaque étape avec exigence et passion.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.a
            className="btn-primary"
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            Devis gratuit
            <ArrowRight size={14} />
          </motion.a>
          <motion.a
            className="btn-outline-dark"
            href="#gallery"
            onClick={e => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Voir nos réalisations
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        className="hero-stats-bar"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {[
          { num: '15+', label: "Années d'expérience" },
          { num: '250+', label: 'Chantiers réalisés' },
          { num: '10', label: 'Corps d\'état maîtrisés' },
          { num: '4.9/5', label: 'Satisfaction client' },
        ].map(({ num, label }) => (
          <div className="hero-stat" key={label}>
            <span className="hero-stat-num">{num}</span>
            <span className="hero-stat-label">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} color="rgba(245,240,232,0.3)" />
        </motion.div>
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>
    </section>
  )
}
