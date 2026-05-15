import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'

/* ─── Data ──────────────────────────────────────────────────── */

const STYLES = [
  {
    num: '01',
    title: 'Contemporain bleu nuit',
    desc: 'Teintes profondes et matières nobles pour une atmosphère sophistiquée et apaisante.',
    tag: 'Sérénité · Élégance',
    img: '/images/c27381f9-ea14-4d0e-a443-417c7c009dab.jpg',
    position: 'center 35%',
  },
  {
    num: '02',
    title: 'Terracotta chaleureux',
    desc: 'Tons chauds et textures naturelles pour un intérieur vibrant et convivial.',
    tag: 'Chaleur · Authenticité',
    img: '/images/3077da5c-b165-45c2-9caf-4caa21173cf1.jpg',
    position: 'center 40%',
  },
  {
    num: '03',
    title: 'Moderne noir & cuivre',
    desc: 'Contraste affirmé et détails cuivrés pour un intérieur puissant et raffiné.',
    tag: 'Prestige · Caractère',
    img: '/images/d69c5042-f370-4c3a-b698-e3a72da1a651.jpg',
    position: 'center 30%',
  },
  {
    num: '04',
    title: 'Naturel vert olive',
    desc: 'Matières organiques et nuances végétales pour un espace ressourçant et authentique.',
    tag: 'Nature · Bien-être',
    img: '/images/a135062a-c797-4b7c-beed-12a683c9a675.jpg',
    position: 'center 45%',
  },
]

/* ─── Lightbox ──────────────────────────────────────────────── */

function Lightbox({ activeIdx, onClose, onGo }) {
  const touchStartX = useRef(null)
  const style = STYLES[activeIdx]
  const n = STYLES.length

  const goPrev = useCallback(() => onGo((activeIdx - 1 + n) % n), [activeIdx, onGo, n])
  const goNext = useCallback(() => onGo((activeIdx + 1) % n), [activeIdx, onGo, n])

  /* Scroll lock */
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  /* Keyboard */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, goPrev, goNext])

  /* Swipe */
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 48) delta > 0 ? goPrev() : goNext()
    touchStartX.current = null
  }

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(4,6,3,0.95)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* ── Image panel ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 16 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          position: 'relative',
          width: 'min(92vw, 1060px)',
          maxHeight: '88vh',
          borderRadius: 14,
          overflow: 'hidden',
          willChange: 'transform',
          boxShadow: '0 48px 96px rgba(0,0,0,0.65)',
        }}
      >
        {/* Image with fade transition on navigation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', lineHeight: 0 }}
          >
            {/* Blurred ambient background layer */}
            <img
              src={style.img}
              alt=""
              aria-hidden
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'blur(32px) brightness(0.22)',
                transform: 'scale(1.12)',
                pointerEvents: 'none',
              }}
            />

            {/* Main image */}
            <img
              src={style.img}
              alt={style.title}
              style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                maxHeight: '88vh',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />

            {/* Gradient info area */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: 'clamp(1.5rem, 4vw, 2.8rem)',
              background: 'linear-gradient(to top, rgba(4,6,3,0.9) 0%, rgba(4,6,3,0.55) 40%, transparent 100%)',
              pointerEvents: 'none',
            }}>
              {/* Meta row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.57rem',
                  fontWeight: 700, letterSpacing: '0.22em', color: '#C97D16',
                }}>
                  {style.num}
                </span>
                <span style={{ width: 18, height: 1.5, background: '#C97D16', display: 'inline-block', borderRadius: 1 }} />
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.54rem',
                  fontWeight: 600, letterSpacing: '0.14em',
                  color: 'rgba(245,240,232,0.48)', textTransform: 'uppercase',
                }}>
                  {style.tag}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.1rem, 2.4vw, 1.75rem)',
                fontWeight: 700, color: '#fff',
                margin: '0 0 0.45rem', letterSpacing: '-0.02em', lineHeight: 1.2,
              }}>
                {style.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.86rem',
                color: 'rgba(245,240,232,0.62)', margin: 0, lineHeight: 1.65,
                maxWidth: '52ch',
              }}>
                {style.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.22, duration: 0.3 }}
          onClick={onClose}
          whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.15)' }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            width: 38, height: 38, borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 2, transition: 'background 0.2s ease',
          }}
          aria-label="Fermer"
        >
          <X size={15} color="rgba(255,255,255,0.82)" />
        </motion.button>
      </motion.div>

      {/* ── Left arrow ── */}
      <motion.button
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.28, duration: 0.35 }}
        onClick={(e) => { e.stopPropagation(); goPrev() }}
        whileHover={{ scale: 1.12, x: -3, background: 'rgba(255,255,255,0.12)' }}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed',
          left: 'clamp(0.6rem, 2.5vw, 2.5rem)',
          top: '50%', transform: 'translateY(-50%)',
          width: 50, height: 50, borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10000,
          transition: 'background 0.2s ease',
        }}
        aria-label="Image précédente"
      >
        <ChevronLeft size={20} color="rgba(255,255,255,0.82)" />
      </motion.button>

      {/* ── Right arrow ── */}
      <motion.button
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.28, duration: 0.35 }}
        onClick={(e) => { e.stopPropagation(); goNext() }}
        whileHover={{ scale: 1.12, x: 3, background: 'rgba(255,255,255,0.12)' }}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed',
          right: 'clamp(0.6rem, 2.5vw, 2.5rem)',
          top: '50%', transform: 'translateY(-50%)',
          width: 50, height: 50, borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10000,
          transition: 'background 0.2s ease',
        }}
        aria-label="Image suivante"
      >
        <ChevronRight size={20} color="rgba(255,255,255,0.82)" />
      </motion.button>

      {/* ── Dot indicators ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed', bottom: '2rem',
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '0.45rem',
          zIndex: 10000,
        }}
      >
        {STYLES.map((_, i) => (
          <button
            key={i}
            onClick={() => onGo(i)}
            style={{
              width: i === activeIdx ? 26 : 7,
              height: 7,
              borderRadius: 4,
              background: i === activeIdx ? '#C97D16' : 'rgba(255,255,255,0.28)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s ease',
            }}
            aria-label={`Style ${i + 1}`}
          />
        ))}
      </motion.div>
    </motion.div>,
    document.body
  )
}

/* ─── StyleCard ─────────────────────────────────────────────── */

function StyleCard({ num, title, desc, tag, img, position, index, onOpen }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 18,
        aspectRatio: '3 / 4',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 40px 80px rgba(28,31,20,0.24), 0 8px 24px rgba(28,31,20,0.14)'
          : '0 4px 24px rgba(28,31,20,0.07)',
        transform: hovered ? 'scale(1.018) translateY(-4px)' : 'scale(1) translateY(0)',
        transition: 'box-shadow 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Image */}
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: position,
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(8,10,6,0.92) 0%, rgba(8,10,6,0.42) 52%, rgba(8,10,6,0.06) 100%)',
        opacity: hovered ? 0.85 : 1,
        transition: 'opacity 0.6s ease',
      }} />

      {/* Top shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(to right, transparent, #C97D16, transparent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }} />

      {/* Expand hint icon */}
      <div style={{
        position: 'absolute', top: '1.2rem', right: '1.2rem',
        width: 32, height: 32, borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'scale(1)' : 'scale(0.75)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1.5 4.5V1.5H4.5M7.5 1.5H10.5V4.5M10.5 7.5V10.5H7.5M4.5 10.5H1.5V7.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Number */}
      <div style={{
        position: 'absolute', top: '1.4rem', left: '1.5rem',
        fontFamily: 'var(--font-sans)', fontSize: '0.58rem',
        fontWeight: 700, letterSpacing: '0.22em',
        color: hovered ? '#C97D16' : 'rgba(255,255,255,0.35)',
        transition: 'color 0.4s ease',
      }}>
        {num}
      </div>

      {/* Tag chip */}
      <div style={{
        position: 'absolute', bottom: 'calc(clamp(1.5rem, 2.5vw, 2rem) + 3.8rem)', left: 'clamp(1.5rem, 2.5vw, 2rem)',
        padding: '0.22rem 0.6rem',
        borderRadius: 30,
        background: 'rgba(201,125,22,0.15)',
        border: '1px solid rgba(201,125,22,0.3)',
        backdropFilter: 'blur(8px)',
        fontFamily: 'var(--font-sans)', fontSize: '0.5rem',
        fontWeight: 600, letterSpacing: '0.14em',
        color: '#C97D16', textTransform: 'uppercase',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.35s ease 0.04s, transform 0.35s ease 0.04s',
      }}>
        {tag}
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: 'clamp(1.5rem, 2.5vw, 2rem)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          height: 1.5, background: '#C97D16', marginBottom: '0.9rem',
          borderRadius: 2,
          width: hovered ? 44 : 22,
          transition: 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }} />
        <h3 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
          fontWeight: 700, color: '#ffffff',
          margin: '0 0 0.55rem', lineHeight: 1.2, letterSpacing: '-0.01em',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
          lineHeight: 1.65, color: 'rgba(245,240,232,0.7)',
          margin: 0, maxWidth: '26ch',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.4s ease 0.06s, transform 0.4s ease 0.06s',
        }}>
          {desc}
        </p>
      </div>
    </motion.article>
  )
}

/* ─── StylesVizSection ──────────────────────────────────────── */

export default function StylesVizSection() {
  const [activeIdx, setActiveIdx] = useState(null)

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="styles-viz"
      style={{ background: '#f5f3ee', padding: 'clamp(2.5rem, 4vw, 4rem) 0 clamp(5rem, 8vw, 9rem) 0', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3.5rem)' }}>

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div style={{ maxWidth: 560 }}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.6rem' }}
            >
              <span style={{ display: 'inline-block', width: 24, height: 1.5, background: '#C97D16', flexShrink: 0 }} />
              <span style={{
                fontSize: '0.63rem', color: '#C97D16', letterSpacing: '0.16em',
                textTransform: 'uppercase', fontWeight: 700, fontFamily: 'var(--font-sans)',
              }}>
                Propositions visuelles
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: '#1C1F14', margin: 0,
              }}
            >
              Visualisez votre projet
              <br />
              <span style={{ color: '#C97D16' }}>avant travaux.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
              lineHeight: 1.75, color: 'rgba(28,31,20,0.55)', maxWidth: 400, margin: 0,
            }}
            className="lg:text-right"
          >
            Nous vous proposons plusieurs ambiances et finitions pour vous permettre de comparer,
            ajuster et choisir le rendu idéal avant le lancement des travaux.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STYLES.map((s, i) => (
            <StyleCard
              key={s.num}
              {...s}
              index={i}
              onOpen={() => setActiveIdx(i)}
            />
          ))}
        </div>

        {/* ── Bottom block ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: 'clamp(4rem, 7vw, 6rem)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center',
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            marginBottom: '3.5rem', width: '100%', maxWidth: 480,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(28,31,20,0.12))' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C97D16', flexShrink: 0 }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(28,31,20,0.12))' }} />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)',
              fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2,
              color: '#1C1F14', margin: '0 0 1.4rem', maxWidth: '22ch',
            }}
          >
            Une projection réaliste
            <br />
            <span style={{ color: '#C97D16' }}>de votre futur intérieur.</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.96rem',
              lineHeight: 1.78, color: 'rgba(28,31,20,0.56)',
              maxWidth: '58ch', margin: '0 auto 2.8rem',
            }}
          >
            Chez Hpro-Travaux, chaque projet est étudié avec précision afin de vous présenter
            différentes orientations esthétiques et matériaux avant le début du chantier.
            Cette approche vous permet de visualiser le résultat final, d'ajuster les détails
            et de prendre des décisions en toute confiance.
          </motion.p>

          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            whileHover={{ scale: 1.03, y: -2, boxShadow: '0 20px 48px rgba(28,31,20,0.28)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3"
            style={{
              background: '#1C1F14', color: '#F5F0E8', border: 'none',
              borderRadius: 50, padding: '0.9rem 1.4rem 0.9rem 1.9rem',
              fontSize: '0.92rem', fontWeight: 700,
              fontFamily: 'var(--font-sans)', cursor: 'pointer', letterSpacing: '0.01em',
            }}
          >
            Demander une étude personnalisée
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 34, height: 34, borderRadius: '50%', background: '#C97D16', flexShrink: 0,
            }}>
              <ArrowRight size={15} color="#000" />
            </span>
          </motion.button>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <Lightbox
            activeIdx={activeIdx}
            onClose={() => setActiveIdx(null)}
            onGo={setActiveIdx}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
