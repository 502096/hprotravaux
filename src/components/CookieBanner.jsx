import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Shield, BarChart2, Zap, X } from 'lucide-react'

/* ─── Storage ────────────────────────────────────────────────── */

const KEY = 'hpro-cookie-consent'

function getConsent() {
  try { return JSON.parse(localStorage.getItem(KEY)) } catch { return null }
}

function saveConsent(value) {
  try { localStorage.setItem(KEY, JSON.stringify(value)) } catch {}
}

/* ─── Toggle switch ──────────────────────────────────────────── */

function Toggle({ enabled, onChange, disabled }) {
  return (
    <button
      role="switch"
      aria-checked={enabled}
      disabled={disabled}
      onClick={() => !disabled && onChange(!enabled)}
      style={{
        width: 42, height: 23, borderRadius: 99, flexShrink: 0,
        background: enabled ? '#C97D16' : 'rgba(28,31,20,0.14)',
        border: 'none', padding: '2px 3px', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.22s ease',
        display: 'flex', alignItems: 'center',
        opacity: disabled ? 0.55 : 1,
        outline: 'none',
      }}
      aria-label={enabled ? 'Désactiver' : 'Activer'}
    >
      <motion.span
        animate={{ x: enabled ? 19 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
        style={{
          width: 17, height: 17, borderRadius: '50%',
          background: '#ffffff',
          display: 'block',
          boxShadow: '0 1px 4px rgba(0,0,0,0.22)',
        }}
      />
    </button>
  )
}

/* ─── Preferences modal ──────────────────────────────────────── */

function PreferencesModal({ analytics, onAnalyticsChange, onSave, onClose }) {
  const categories = [
    {
      Icon: Shield,
      color: '#3D7A5A',
      title: 'Cookies essentiels',
      desc: 'Nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.',
      enabled: true,
      disabled: true,
      key: 'essential',
    },
    {
      Icon: BarChart2,
      color: '#4A7C8E',
      title: 'Cookies analytiques',
      desc: "Permettent de mesurer l'audience et d'améliorer les performances du site.",
      enabled: analytics,
      disabled: false,
      key: 'analytics',
    },
    {
      Icon: Zap,
      color: '#C97D16',
      title: 'Cookies fonctionnels',
      desc: "Améliorent certaines fonctionnalités et l'expérience utilisateur.",
      enabled: analytics,
      disabled: false,
      key: 'functional',
    },
  ]

  return createPortal(
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        key="prefs-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 10001,
          background: 'rgba(8,10,6,0.55)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}
      >
        {/* Modal */}
        <motion.div
          key="prefs-modal"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#FAF7F2',
            borderRadius: 20,
            padding: 'clamp(1.5rem, 4vw, 2.2rem)',
            width: '100%',
            maxWidth: 480,
            boxShadow: '0 32px 80px rgba(8,10,6,0.28), 0 4px 16px rgba(8,10,6,0.12)',
            border: '1px solid rgba(28,31,20,0.08)',
            position: 'relative',
          }}
        >
          {/* Top amber line */}
          <div aria-hidden style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, transparent, #C97D16, transparent)',
            borderRadius: '0 0 4px 4px',
          }} />

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Cookie size={14} style={{ color: '#C97D16' }} />
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.16em', color: '#C97D16', textTransform: 'uppercase',
                }}>
                  Préférences
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700,
                color: '#1C1F14', margin: 0, letterSpacing: '-0.01em',
              }}>
                Gérer mes cookies
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(28,31,20,0.07)', border: 'none',
                width: 32, height: 32, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
                transition: 'background 0.18s',
              }}
              aria-label="Fermer"
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,31,20,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(28,31,20,0.07)'}
            >
              <X size={14} style={{ color: '#1C1F14' }} />
            </button>
          </div>

          {/* Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.4rem' }}>
            {categories.map(({ Icon, color, title, desc, enabled, disabled, key }) => (
              <div key={key} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.9rem',
                padding: '0.9rem 1rem',
                background: '#ffffff',
                borderRadius: 12,
                border: '1px solid rgba(28,31,20,0.07)',
              }}>
                <span style={{
                  width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                  background: `${color}14`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={14} style={{ color }} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.84rem', fontWeight: 700,
                    color: '#1C1F14', margin: '0 0 0.2rem',
                  }}>
                    {title}
                    {disabled && (
                      <span style={{
                        marginLeft: '0.5rem', fontSize: '0.6rem', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#3D7A5A', background: 'rgba(61,122,90,0.1)',
                        borderRadius: 99, padding: '0.15rem 0.5rem',
                      }}>
                        Toujours actif
                      </span>
                    )}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.77rem',
                    color: '#5A6040', lineHeight: 1.55, margin: 0,
                  }}>
                    {desc}
                  </p>
                </div>
                <Toggle
                  enabled={enabled}
                  disabled={disabled}
                  onChange={key !== 'essential' ? onAnalyticsChange : undefined}
                />
              </div>
            ))}
          </div>

          {/* Save */}
          <button
            onClick={onSave}
            style={{
              width: '100%', padding: '0.8rem 1.2rem',
              background: '#1C1F14', color: '#F5F0E8',
              border: 'none', borderRadius: 12,
              fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 700,
              cursor: 'pointer', letterSpacing: '0.02em',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#2A3518'}
            onMouseLeave={e => e.currentTarget.style.background = '#1C1F14'}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Enregistrer mes préférences
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

/* ─── CookieBanner ───────────────────────────────────────────── */

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [prefsOpen, setPrefsOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    if (!getConsent()) {
      const t = setTimeout(() => setVisible(true), 900)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = useCallback(() => {
    saveConsent({ choice: 'accepted', analytics: true, functional: true })
    setVisible(false)
  }, [])

  const refuse = useCallback(() => {
    saveConsent({ choice: 'refused', analytics: false, functional: false })
    setVisible(false)
  }, [])

  const openPrefs = useCallback(() => setPrefsOpen(true), [])

  const savePrefs = useCallback(() => {
    saveConsent({ choice: 'custom', analytics, functional: analytics })
    setPrefsOpen(false)
    setVisible(false)
  }, [analytics])

  if (!visible && !prefsOpen) return null

  return createPortal(
    <>
      {/* ── Main banner ── */}
      <AnimatePresence>
        {visible && !prefsOpen && (
          <motion.div
            key="cookie-banner"
            role="dialog"
            aria-modal="false"
            aria-label="Consentement cookies"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: 'clamp(0.75rem, 2vw, 1.5rem)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'calc(100% - clamp(1rem, 4vw, 3rem))',
              maxWidth: 900,
              zIndex: 10000,
              willChange: 'transform',
            }}
          >
            <div style={{
              background: '#FAF7F2',
              borderRadius: 18,
              border: '1px solid rgba(28,31,20,0.08)',
              boxShadow: '0 20px 60px rgba(8,10,6,0.18), 0 4px 16px rgba(8,10,6,0.08)',
              overflow: 'hidden',
            }}>
              {/* Amber top accent */}
              <div aria-hidden style={{
                height: 2,
                background: 'linear-gradient(90deg, transparent 0%, #C97D16 35%, rgba(201,125,22,0.5) 65%, transparent 100%)',
              }} />

              <div style={{
                padding: 'clamp(1.1rem, 3vw, 1.5rem) clamp(1.2rem, 3vw, 1.8rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                {/* Top row: icon + text */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(201,125,22,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Cookie size={16} style={{ color: '#C97D16' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.86rem, 1.8vw, 0.95rem)',
                      fontWeight: 700,
                      color: '#1C1F14',
                      margin: '0 0 0.3rem',
                      letterSpacing: '-0.01em',
                    }}>
                      Respect de votre confidentialité
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.75rem, 1.4vw, 0.82rem)',
                      color: '#5A6040',
                      lineHeight: 1.65,
                      margin: 0,
                    }}>
                      Hpro-Travaux utilise des cookies afin d'améliorer votre expérience, mesurer
                      l'audience et optimiser les performances du site. Vous pouvez accepter, refuser
                      ou personnaliser vos préférences à tout moment.{' '}
                      <a href="/politique-confidentialite" style={{ color: '#C97D16', textDecoration: 'none', fontWeight: 500 }}>
                        Politique de confidentialité
                      </a>
                      {' · '}
                      <a href="/politique-cookies" style={{ color: '#C97D16', textDecoration: 'none', fontWeight: 500 }}>
                        Politique de cookies
                      </a>
                    </p>
                  </div>
                </div>

                {/* Buttons row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                  <button
                    onClick={openPrefs}
                    style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600,
                      color: '#5A6040', background: 'none', border: 'none',
                      cursor: 'pointer', padding: '0.5rem 0.75rem',
                      borderRadius: 8, textDecoration: 'underline',
                      textUnderlineOffset: 3, textDecorationColor: 'rgba(90,96,64,0.4)',
                      transition: 'color 0.18s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#1C1F14'}
                    onMouseLeave={e => e.currentTarget.style.color = '#5A6040'}
                  >
                    Personnaliser
                  </button>
                  <button
                    onClick={refuse}
                    style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600,
                      color: '#1C1F14',
                      background: 'rgba(28,31,20,0.07)',
                      border: '1px solid rgba(28,31,20,0.1)',
                      borderRadius: 99, padding: '0.55rem 1.1rem',
                      cursor: 'pointer',
                      transition: 'background 0.18s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,31,20,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(28,31,20,0.07)'}
                  >
                    Refuser
                  </button>
                  <button
                    onClick={accept}
                    style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 700,
                      color: '#000000',
                      background: '#C97D16',
                      border: 'none',
                      borderRadius: 99, padding: '0.55rem 1.3rem',
                      cursor: 'pointer',
                      transition: 'background 0.18s, transform 0.15s',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#b86e10'}
                    onMouseLeave={e => e.currentTarget.style.background = '#C97D16'}
                    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
                    onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Accepter
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Preferences modal ── */}
      <AnimatePresence>
        {prefsOpen && (
          <PreferencesModal
            analytics={analytics}
            onAnalyticsChange={setAnalytics}
            onSave={savePrefs}
            onClose={() => setPrefsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>,
    document.body
  )
}

/* ─── Hook to reopen preferences ────────────────────────────── */

export function useCookieConsent() {
  const reopen = useCallback(() => {
    localStorage.removeItem(KEY)
    window.location.reload()
  }, [])
  return { reopen, getConsent }
}
