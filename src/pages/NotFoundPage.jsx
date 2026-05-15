import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TopbarNav } from '@/components/ui/topbar-nav'
import Footer from '@/components/Footer'

const NAV_ITEMS = [
  { id: 'accueil',       label: 'Accueil',      href: '/' },
  { id: 'services',     label: 'Services',     href: '/#services' },
  { id: 'realisations', label: 'Réalisations', href: '/#gallery' },
  { id: 'processus',    label: 'Processus',    href: '/#process' },
  { id: 'a-propos',     label: 'À propos',     href: '/a-propos' },
  { id: 'contact',      label: 'Contact',      href: '/#contact' },
]

const SUGGESTIONS = [
  { label: 'Nos réalisations', href: '/#gallery' },
  { label: 'Nos prestations',  href: '/#process' },
  { label: 'À propos',         href: '/a-propos' },
  { label: 'Devis gratuit',    href: '/#contact' },
]

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page introuvable (404) — H Pro Travaux'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil H Pro Travaux.")
  }, [])

  return (
    <div style={{ background: '#FAF7F2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopbarNav items={NAV_ITEMS} />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(4rem, 10vw, 8rem) 1.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 580 }}>

          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(7rem, 18vw, 14rem)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(201,125,22,0.25)',
              userSelect: 'none',
              marginBottom: '-1rem',
            }}
          >
            404
          </motion.div>

          {/* Amber line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 60, height: 3, background: '#C97D16',
              borderRadius: 99, margin: '0 auto 2rem',
            }}
          />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 700,
              color: '#1C1F14',
              letterSpacing: '-0.02em',
              margin: '0 0 1rem',
            }}
          >
            Page introuvable
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              color: '#5A6040',
              lineHeight: 1.7,
              margin: '0 0 2.5rem',
            }}
          >
            La page que vous recherchez n'existe pas ou a été déplacée.
            <br />
            Pas d'inquiétude — retrouvez votre chemin ci-dessous.
          </motion.p>

          {/* CTA primary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}
          >
            <a
              href="/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 700,
                color: '#000', background: '#C97D16',
                border: 'none', borderRadius: 99,
                padding: '0.75rem 1.6rem',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#b86e10'}
              onMouseLeave={e => e.currentTarget.style.background = '#C97D16'}
            >
              ← Retour à l'accueil
            </a>
            <a
              href="/#contact"
              style={{
                display: 'inline-flex', alignItems: 'center',
                fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600,
                color: '#1C1F14',
                background: 'rgba(28,31,20,0.07)',
                border: '1px solid rgba(28,31,20,0.12)',
                borderRadius: 99, padding: '0.75rem 1.4rem',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,31,20,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(28,31,20,0.07)'}
            >
              Demander un devis
            </a>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(28,31,20,0.35)', marginBottom: '0.9rem',
            }}>
              Pages suggérées
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {SUGGESTIONS.map(({ label, href }) => (
                <a key={label} href={href} style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 500,
                  color: '#C97D16', background: 'rgba(201,125,22,0.07)',
                  border: '1px solid rgba(201,125,22,0.2)',
                  borderRadius: 99, padding: '0.45rem 1rem',
                  textDecoration: 'none',
                  transition: 'background 0.18s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,125,22,0.14)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,125,22,0.07)'}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
