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
          background: '#ffffff', display: 'block',
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
      Icon: Shield, color: '#3D7A5A',
      title: 'Cookies essentiels',
      desc: 'Nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.',
      enabled: true, disabled: true, key: 'essential',
    },
    {
      Icon: BarChart2, color: '#4A7C8E',
      title: 'Cookies analytiques',
      desc: "Permettent de mesurer l'audience et d'améliorer les performances du site.",
      enabled: analytics, disabled: false, key: 'analytics',
    },
    {
      Icon: Zap, color: '#C97D16',
      title: 'Cookies fonctionnels',
      desc: "Améliorent certaines fonctionnalités et l'expérience utilisateur.",
      enabled: analytics, disabled: false, key: 'functional',
    },
  ]

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="prefs-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
        style={{ background: 'rgba(8,10,6,0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      >
        <motion.div
          key="prefs-modal"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[480px] rounded-[20px] border border-[rgba(28,31,20,0.08)] p-5 sm:p-9"
          style={{
            background: '#FAF7F2',
            boxShadow: '0 32px 80px rgba(8,10,6,0.28), 0 4px 16px rgba(8,10,6,0.12)',
          }}
        >
          {/* Top amber line */}
          <div aria-hidden className="absolute top-0 left-[10%] right-[10%] h-0.5 rounded-b-[4px]"
            style={{ background: 'linear-gradient(90deg, transparent, #C97D16, transparent)' }}
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Cookie size={14} style={{ color: '#C97D16' }} />
                <span className="text-[0.6rem] font-bold tracking-[0.16em] uppercase" style={{ color: '#C97D16' }}>
                  Préférences
                </span>
              </div>
              <h3 className="text-[1.05rem] font-bold tracking-tight m-0" style={{ color: '#1C1F14' }}>
                Gérer mes cookies
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="flex shrink-0 w-8 h-8 items-center justify-center rounded-full border-none cursor-pointer transition-[background] duration-150"
              style={{ background: 'rgba(28,31,20,0.07)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,31,20,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(28,31,20,0.07)'}
            >
              <X size={14} style={{ color: '#1C1F14' }} />
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-2.5 mb-5">
            {categories.map(({ Icon, color, title, desc, enabled, disabled, key }) => (
              <div
                key={key}
                className="flex items-start gap-3 rounded-xl border border-[rgba(28,31,20,0.07)] bg-white p-3 sm:p-4"
              >
                <span
                  className="flex w-8 h-8 shrink-0 items-center justify-center rounded-[9px]"
                  style={{ background: `${color}14` }}
                >
                  <Icon size={14} style={{ color }} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold m-0 mb-1" style={{ color: '#1C1F14' }}>
                    {title}
                    {disabled && (
                      <span
                        className="ml-2 text-[0.6rem] font-bold tracking-[0.1em] uppercase rounded-full px-2 py-0.5"
                        style={{ color: '#3D7A5A', background: 'rgba(61,122,90,0.1)' }}
                      >
                        Toujours actif
                      </span>
                    )}
                  </p>
                  <p className="text-xs leading-relaxed m-0" style={{ color: '#5A6040' }}>
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
            className="w-full py-3 px-5 rounded-xl text-sm font-bold tracking-[0.02em] cursor-pointer border-none transition-[background,transform] duration-200 active:scale-[0.98]"
            style={{ background: '#1C1F14', color: '#F5F0E8' }}
            onMouseEnter={e => e.currentTarget.style.background = '#2A3518'}
            onMouseLeave={e => e.currentTarget.style.background = '#1C1F14'}
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
            /* Use left-0 right-0 + mx-auto instead of left-50%+translateX(-50%)
               to avoid Framer Motion overriding the transform and breaking centering */
            className="fixed bottom-0 left-0 right-0 z-[10000] px-3 pb-3 sm:px-6 sm:pb-6"
          >
            <div
              className="mx-auto w-full max-w-[900px] overflow-hidden rounded-[18px] border border-[rgba(28,31,20,0.08)]"
              style={{
                background: '#FAF7F2',
                boxShadow: '0 20px 60px rgba(8,10,6,0.18), 0 4px 16px rgba(8,10,6,0.08)',
              }}
            >
              {/* Amber top accent */}
              <div
                aria-hidden
                className="h-0.5"
                style={{ background: 'linear-gradient(90deg, transparent 0%, #C97D16 35%, rgba(201,125,22,0.5) 65%, transparent 100%)' }}
              />

              {/* Content */}
              <div className="flex flex-col gap-4 p-4 sm:p-6">

                {/* Icon + text */}
                <div className="flex items-start gap-3">
                  <div
                    className="flex w-9 h-9 shrink-0 items-center justify-center rounded-[10px]"
                    style={{ background: 'rgba(201,125,22,0.1)' }}
                  >
                    <Cookie size={16} style={{ color: '#C97D16' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="m-0 mb-1 text-sm font-bold tracking-tight sm:text-base" style={{ color: '#1C1F14' }}>
                      Respect de votre confidentialité
                    </p>
                    <p className="m-0 text-xs leading-relaxed sm:text-sm" style={{ color: '#5A6040' }}>
                      Hpro-Travaux utilise des cookies afin d'améliorer votre expérience, mesurer
                      l'audience et optimiser les performances du site. Vous pouvez accepter, refuser
                      ou personnaliser vos préférences à tout moment.{' '}
                      <a href="/politique-confidentialite" className="font-medium no-underline" style={{ color: '#C97D16' }}>
                        Politique de confidentialité
                      </a>
                      {' · '}
                      <a href="/politique-cookies" className="font-medium no-underline" style={{ color: '#C97D16' }}>
                        Politique de cookies
                      </a>
                    </p>
                  </div>
                </div>

                {/* Buttons — column on mobile, row on sm+ */}
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-2">

                  {/* Accept — primary CTA first on mobile */}
                  <button
                    onClick={accept}
                    className="order-1 sm:order-3 w-full sm:w-auto py-3 sm:py-2 px-5 rounded-full border-none text-sm font-bold tracking-[0.01em] cursor-pointer transition-[background,transform] duration-200 active:scale-[0.97]"
                    style={{ background: '#C97D16', color: '#000000' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#b86e10'}
                    onMouseLeave={e => e.currentTarget.style.background = '#C97D16'}
                  >
                    Tout accepter
                  </button>

                  {/* Refuse */}
                  <button
                    onClick={refuse}
                    className="order-2 w-full sm:w-auto py-3 sm:py-2 px-5 rounded-full text-sm font-semibold cursor-pointer transition-[background] duration-200"
                    style={{
                      color: '#1C1F14',
                      background: 'rgba(28,31,20,0.07)',
                      border: '1px solid rgba(28,31,20,0.1)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,31,20,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(28,31,20,0.07)'}
                  >
                    Tout refuser
                  </button>

                  {/* Personalize — tertiary, last on mobile */}
                  <button
                    onClick={openPrefs}
                    className="order-3 sm:order-1 w-full sm:w-auto py-2 px-3 rounded-lg border-none text-sm font-semibold underline underline-offset-[3px] decoration-[rgba(90,96,64,0.4)] cursor-pointer transition-colors duration-150 bg-transparent"
                    style={{ color: '#5A6040' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#1C1F14'}
                    onMouseLeave={e => e.currentTarget.style.color = '#5A6040'}
                  >
                    Personnaliser
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
