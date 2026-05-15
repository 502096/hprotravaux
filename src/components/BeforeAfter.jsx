import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronsLeftRight } from 'lucide-react'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)

  const handleInput = useCallback((e) => {
    setPos(Number(e.target.value))
  }, [])

  return (
    <section className="ba-section" id="before-after">
      <div className="container">
        <div className="ba-header">
          <motion.div
            className="section-tag amber"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ justifyContent: 'center' }}
          >
            La transformation
          </motion.div>
          <motion.h2
            className="section-title light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Avant / Après
          </motion.h2>
          <motion.p
            className="section-lead light"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{ margin: '0.8rem auto 0', textAlign: 'center' }}
          >
            Faites glisser le curseur pour visualiser la transformation complète.
          </motion.p>
        </div>

        <motion.div
          className="ba-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="ba-container"
            role="img"
            aria-label="Comparaison avant/après rénovation d'une cuisine"
          >
            {/* BEFORE — fond visible à droite */}
            <div className="ba-side">
              <img
                src="/images/APRES-1-la-meme-cuisine-lumineuse-et-ouverte.webp"
                alt="Cuisine après rénovation par Hpro-travaux — lumineuse et ouverte"
                aria-hidden
                loading="eager"
                decoding="async"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center 40%',
                  display: 'block',
                }}
              />
            </div>

            {/* AFTER — clipped, visible à gauche */}
            <div
              className="ba-side"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              aria-hidden
            >
              <img
                src="/images/AVANT-1-une-cuisine-sombre-et-fermee.webp"
                alt="Cuisine avant rénovation — sombre et fermée"
                loading="eager"
                decoding="async"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center 40%',
                  display: 'block',
                }}
              />
            </div>

            {/* Labels */}
            <div className="ba-label ba-label-before">Avant</div>
            <div className="ba-label ba-label-after">Après</div>

            {/* Divider */}
            <div
              className="ba-divider"
              style={{ left: `${pos}%` }}
              aria-hidden
            >
              <motion.div
                className="ba-handle"
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <ChevronsLeftRight size={18} color="white" />
              </motion.div>
            </div>

            {/* Invisible range input */}
            <input
              className="ba-input"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={handleInput}
              aria-label="Glisser pour comparer avant et après"
            />
          </div>

          <p className="ba-caption">
            Glissez le curseur · Rénovation cuisine — ouverture & transformation lumineuse
          </p>
        </motion.div>
      </div>
    </section>
  )
}
