import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SuccessPage() {
  useEffect(() => {
    document.title = 'Demande envoyée — Hpro Travaux'
  }, [])

  return (
    <div style={{
      background: '#111309',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.25rem',
      fontFamily: 'var(--font-sans)',
    }}>

      {/* Logo */}
      <div style={{
        marginBottom: '2.5rem',
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: 'rgba(245,240,232,0.45)',
      }}>
        HPRO <span style={{ color: '#C97D16' }}>TRAVAUX</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: '#1C1F14',
          border: '1px solid rgba(201,125,22,0.2)',
          borderRadius: 24,
          padding: 'clamp(2rem, 6vw, 3.5rem) clamp(1.5rem, 6vw, 3.5rem)',
          maxWidth: 520,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        }}
      >
        {/* Top amber line */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
          background: 'linear-gradient(90deg, transparent, #C97D16, transparent)',
          borderRadius: '0 0 4px 4px',
        }} />

        {/* Checkmark icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 72, height: 72,
            borderRadius: '50%',
            background: 'rgba(201,125,22,0.12)',
            border: '2px solid rgba(201,125,22,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.75rem',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="#C97D16" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </motion.div>

        {/* Tag */}
        <div style={{
          fontSize: '0.62rem', fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#C97D16', marginBottom: '0.75rem',
        }}>
          Demande reçue
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          color: '#ffffff',
          margin: '0 0 1rem',
        }}>
          Merci pour votre<br />demande de devis&nbsp;!
        </h1>

        <p style={{ color: 'rgba(245,240,232,0.55)', lineHeight: 1.7, fontSize: '0.92rem', margin: '0 0 0.4rem' }}>
          Votre message a bien été transmis à notre équipe.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontWeight: 600, fontSize: '0.92rem', marginBottom: 0 }}>
          Nous vous recontacterons sous 24h ouvrés.
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '1.75rem 0' }} />

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem',
        }}>
          {[
            { num: '24h', label: 'Délai de réponse' },
            { num: 'Gratuit', label: 'Sans engagement' },
            { num: '250+', label: 'Chantiers livrés' },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '1.3rem', fontWeight: 700, color: '#C97D16' }}>{num}</span>
              <span style={{
                display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginTop: '0.2rem',
              }}>{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#C97D16', color: '#000',
            fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 700,
            border: 'none', borderRadius: 99,
            padding: '0.85rem 1.8rem',
            textDecoration: 'none', cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#b86e10'}
          onMouseLeave={e => e.currentTarget.style.background = '#C97D16'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Retour à l'accueil
        </motion.a>
      </motion.div>
    </div>
  )
}
