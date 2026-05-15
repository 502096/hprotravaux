import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Marquee from 'react-fast-marquee'
import { TopbarNav } from '@/components/ui/topbar-nav'

/* ─── Kept exports (used by other components) ─────────────── */

export const WordsPullUp = ({ text, className = '', showAsterisk = false, style }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')
  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : '0.25em' }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        )
      })}
    </div>
  )
}

export const WordsPullUpMultiStyle = ({ segments, className = '', style }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = []
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => {
      if (w) words.push({ word: w, className: seg.className })
    })
  })
  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ''}`}
          style={{ marginRight: '0.25em' }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  )
}

/* ─── Config ──────────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: 'accueil',      label: 'Accueil',      href: '#' },
  { id: 'services',    label: 'Services',     href: '#services' },
  { id: 'realisations',label: 'Réalisations', href: '#gallery' },
  { id: 'processus',   label: 'Processus',    href: '#process' },
  { id: 'a-propos',    label: 'À propos',     href: '/a-propos' },
  { id: 'contact',     label: 'Contact',      href: '#contact' },
]

const teamAvatars = [
  { initials: 'HP', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face' },
  { initials: 'ML', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&fit=crop&crop=face' },
  { initials: 'TB', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80&fit=crop&crop=face' },
  { initials: 'KS', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&fit=crop&crop=face' },
  { initials: 'LD', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&fit=crop&crop=face' },
]

const statsItems = [
  { emoji: '🔥', label: 'DEVIS GRATUIT · SANS ENGAGEMENT' },
  { emoji: '🚀', value: '2M€+', label: 'DE TRAVAUX RÉALISÉS' },
  { emoji: '🏠', value: '250+', label: 'CHANTIERS LIVRÉS EN ÎLE-DE-FRANCE' },
  { emoji: '⭐', value: '98%', label: 'DE CLIENTS SATISFAITS' },
]

/* ─── PrismaHero ──────────────────────────────────────────── */

const PrismaHero = () => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="relative h-screen min-h-[640px] overflow-hidden bg-black">

      {/* Background image */}
      <motion.img
        src="/images/modern-interior-design-interior.jpg"
        alt=""
        aria-hidden
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: 'center 42%' }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.82, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Gradient overlays — renforcés pour lisibilité sur fond sombre */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* TopbarNav floats over the photo */}
      <TopbarNav items={NAV_ITEMS} defaultActiveId="accueil" />

      {/* Bottom content block */}
      <div className="absolute inset-x-0 bottom-0 z-10">

        {/* ── Avatar group ── */}
        <motion.div
          className="px-8 md:px-14 lg:px-20 mb-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex -space-x-3">
            {teamAvatars.map((av, i) => (
              <div
                key={i}
                title={av.initials}
                className="size-11 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold select-none"
                style={{
                  background: '#3D2B10',
                  color: '#F5F0E8',
                  border: '2px solid #C97D16',
                  boxShadow: '0 0 0 2px rgba(0,0,0,0.7)',
                  zIndex: 10 - i,
                  position: 'relative',
                }}
              >
                <img
                  src={av.src}
                  alt={av.initials}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-[0.65rem] font-bold pointer-events-none">
                  {av.initials}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Stats marquee bar ── */}
        <div
          className="border-y border-white/10 py-[0.65rem] mb-10"
          style={{ background: 'rgba(0,0,0,0.58)', backdropFilter: 'blur(10px)' }}
        >
          <Marquee speed={48} gradient={false}>
            {statsItems.map((item, i) => (
              <span
                key={i}
                className="mx-10 inline-flex items-center gap-2"
                style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.19em' }}
              >
                <span>{item.emoji}</span>
                {item.value && (
                  <span style={{ color: '#C97D16' }}>{item.value}</span>
                )}
                <span style={{ color: 'rgba(255,255,255,0.52)', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
              </span>
            ))}
          </Marquee>
        </div>

        {/* ── Headline + Description ── */}
        <div className="px-8 md:px-14 lg:px-20 pb-12 md:pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            {/* Left: headline + CTA */}
            <div>
              <motion.h1
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(3rem, 5.8vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  margin: 0,
                }}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ display: 'block' }}>Votre intérieur</span>
                <span style={{ display: 'block', color: '#C97D16' }}>mérite mieux</span>
                <span style={{ display: 'block' }}>qu'un simple rafraîchissement</span>
              </motion.h1>

              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 rounded-full font-bold"
                style={{
                  marginTop: '1.75rem',
                  background: '#C97D16',
                  color: '#000',
                  padding: '0.8rem 1.4rem 0.8rem 1.6rem',
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 14px 36px rgba(201,125,22,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                Devis gratuit
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 32, height: 32, background: 'rgba(0,0,0,0.22)' }}
                >
                  <ArrowRight size={15} color="#000" />
                </span>
              </motion.button>
            </div>

            {/* Right: italic description */}
            <motion.p
              style={{
                color: '#C97D16',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                lineHeight: 1.65,
                maxWidth: 360,
                textAlign: 'right',
              }}
              className="hidden lg:block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hpro Travaux transforme chaque pièce en un espace
              où l'on a vraiment envie de vivre.
            </motion.p>

          </div>
        </div>
      </div>

    </div>
  )
}

export { PrismaHero }
