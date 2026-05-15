import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Cookie, ToggleLeft, BarChart2, Zap, Shield } from 'lucide-react'
import { TopbarNav } from '@/components/ui/topbar-nav'
import Footer from '@/components/Footer'

/* ─── Nav ────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: 'accueil',       label: 'Accueil',      href: '/' },
  { id: 'services',     label: 'Services',     href: '/#services' },
  { id: 'realisations', label: 'Réalisations', href: '/#gallery' },
  { id: 'processus',    label: 'Processus',    href: '/#process' },
  { id: 'a-propos',     label: 'À propos',     href: '/a-propos' },
  { id: 'contact',      label: 'Contact',      href: '/#contact' },
]

/* ─── Animation variants ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
}

/* ─── Shared styles ──────────────────────────────────────────── */

const S = {
  sectionNum: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    color: '#C97D16',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
  },
  sectionTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    fontWeight: 700,
    color: '#1C1F14',
    letterSpacing: '-0.01em',
    margin: '0 0 1.2rem',
    lineHeight: 1.25,
  },
  body: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.88rem',
    lineHeight: 1.85,
    color: '#3D4A28',
  },
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#5A6040',
  },
  value: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.88rem',
    color: '#1C1F14',
    lineHeight: 1.6,
  },
  link: {
    color: '#C97D16',
    textDecoration: 'none',
    fontWeight: 500,
  },
}

/* ─── LegalCard ──────────────────────────────────────────────── */

function LegalCard({ num, title, children, i = 0, fullWidth }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      style={{
        background: '#ffffff',
        borderRadius: 16,
        padding: 'clamp(1.6rem, 3vw, 2.4rem)',
        border: '1px solid rgba(28,31,20,0.07)',
        boxShadow: '0 2px 16px rgba(28,31,20,0.05)',
        position: 'relative',
        overflow: 'hidden',
        gridColumn: fullWidth ? '1 / -1' : undefined,
      }}
    >
      <div aria-hidden style={{
        position: 'absolute', left: 0, top: '1.5rem', bottom: '1.5rem',
        width: 3, borderRadius: 99,
        background: 'linear-gradient(to bottom, #C97D16, rgba(201,125,22,0.25))',
      }} />
      <div style={{ paddingLeft: '1rem' }}>
        <p style={S.sectionNum}>{num}</p>
        <h2 style={S.sectionTitle}>{title}</h2>
        {children}
      </div>
    </motion.div>
  )
}

/* ─── CookieTypeCard ─────────────────────────────────────────── */

function CookieTypeCard({ Icon, label, color, bg, border, title, desc, canDisable }) {
  return (
    <div style={{
      borderRadius: 12,
      border: `1px solid ${border}`,
      background: bg,
      padding: '1.1rem 1.2rem',
      display: 'flex', flexDirection: 'column', gap: '0.65rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: 30, height: 30, borderRadius: 8,
            background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Icon size={14} style={{ color }} />
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 700, color: '#1C1F14' }}>
            {title}
          </span>
        </div>
        <span style={{
          fontSize: '0.65rem', fontFamily: 'var(--font-sans)', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: canDisable ? '#5A6040' : color,
          background: canDisable ? 'rgba(28,31,20,0.05)' : `${color}14`,
          border: `1px solid ${canDisable ? 'rgba(28,31,20,0.1)' : `${color}30`}`,
          borderRadius: 99, padding: '0.25rem 0.65rem',
        }}>
          {canDisable ? 'Désactivable' : 'Requis'}
        </span>
      </div>
      <p style={{ ...S.body, margin: 0, fontSize: '0.84rem' }}>{desc}</p>
    </div>
  )
}

/* ─── CheckList ──────────────────────────────────────────────── */

function CheckList({ items }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', ...S.body }}>
          <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="7" cy="7" r="6" fill="rgba(201,125,22,0.12)" />
            <path d="M4 7l2 2 4-4" stroke="#C97D16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  )
}

/* ─── InfoRow ────────────────────────────────────────────────── */

function InfoRow({ label, value, href, isExternal }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '0.85rem' }}>
      <span style={S.label}>{label}</span>
      {href ? (
        <a href={href} target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          style={{ ...S.link, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
          {value}{isExternal && <ExternalLink size={11} />}
        </a>
      ) : (
        <span style={S.value}>{value}</span>
      )}
    </div>
  )
}

/* ─── Callout ────────────────────────────────────────────────── */

function Callout({ children, strong }) {
  return (
    <div style={{
      padding: '0.9rem 1rem', borderRadius: 10,
      background: strong ? 'rgba(201,125,22,0.07)' : 'rgba(28,31,20,0.04)',
      borderLeft: `2px solid ${strong ? '#C97D16' : 'rgba(201,125,22,0.35)'}`,
      ...S.body,
    }}>
      {children}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function PolitiqueCookiesPage() {
  useEffect(() => {
    document.title = 'Politique de cookies — H Pro Travaux'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Politique de cookies de H Pro Travaux — Comment nous utilisons les cookies sur notre site. Gestion des préférences et conformité RGPD.')
  }, [])

  return (
    <div style={{ background: '#FAF7F2', minHeight: '100vh' }}>
      <TopbarNav items={NAV_ITEMS} />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(160deg, #0A0C08 0%, #1C1F14 60%, #2A3518 100%)',
        padding: '7rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(245,240,232,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.025) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw', height: '40vh',
          background: 'radial-gradient(ellipse, rgba(201,125,22,0.09) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.6rem' }}
          >
            <span style={{ width: 28, height: 1.5, background: '#C97D16', flexShrink: 0, display: 'inline-block' }} />
            <span style={{
              fontSize: '0.62rem', color: '#C97D16', letterSpacing: '0.18em',
              textTransform: 'uppercase', fontWeight: 700, fontFamily: 'var(--font-sans)',
            }}>
              Transparence & conformité
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#F5F0E8',
              margin: '0 0 1.2rem',
            }}
          >
            Politique de
            <br />
            <span style={{ color: '#C97D16' }}>cookies.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}
          >
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.84rem',
              color: 'rgba(245,240,232,0.42)',
              letterSpacing: '0.06em',
            }}>
              H PRO TRAVAUX · Mis à jour en 2025
            </span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 600,
              color: 'rgba(201,125,22,0.9)', letterSpacing: '0.1em', textTransform: 'uppercase',
              background: 'rgba(201,125,22,0.1)', border: '1px solid rgba(201,125,22,0.2)',
              borderRadius: 99, padding: '0.3rem 0.75rem',
            }}>
              <Cookie size={11} />
              Conforme RGPD
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Shimmer ── */}
      <div aria-hidden style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(201,125,22,0.3) 40%, rgba(201,125,22,0.08) 70%, transparent 100%)',
      }} />

      {/* ── Content ── */}
      <section style={{ padding: 'clamp(4rem, 7vw, 7rem) 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 520px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
          }}>

            {/* 01 — Introduction */}
            <LegalCard num="01" title="Introduction" i={0}>
              <p style={S.body}>
                La présente politique de cookies explique comment H PRO TRAVAUX utilise des cookies
                et technologies similaires lors de la navigation sur le site.
              </p>
            </LegalCard>

            {/* 02 — Qu'est-ce qu'un cookie */}
            <LegalCard num="02" title="Qu'est-ce qu'un cookie ?" i={1}>
              <p style={S.body}>
                Un cookie est un petit fichier texte enregistré sur votre appareil lors de la
                consultation d'un site internet. Il permet notamment d'améliorer l'expérience
                utilisateur et de collecter certaines informations de navigation.
              </p>
              <div style={{ marginTop: '1.1rem' }}>
                <Callout>
                  Les cookies ne contiennent aucune information personnelle identifiable directement —
                  ils sont associés à votre navigateur, pas à votre identité.
                </Callout>
              </div>
            </LegalCard>

            {/* 03 — Types de cookies — full width */}
            <LegalCard num="03" title="Types de cookies utilisés" i={2} fullWidth>
              <p style={{ ...S.body, marginBottom: '1.4rem' }}>
                Le site peut utiliser les catégories de cookies suivantes :
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: '0.9rem',
              }}>
                <CookieTypeCard
                  Icon={Shield}
                  color="#3D7A5A"
                  bg="rgba(61,122,90,0.04)"
                  border="rgba(61,122,90,0.15)"
                  title="Cookies essentiels"
                  desc="Nécessaires au bon fonctionnement du site. Ils assurent les fonctions de base et ne peuvent pas être désactivés."
                  canDisable={false}
                />
                <CookieTypeCard
                  Icon={BarChart2}
                  color="#4A7C8E"
                  bg="rgba(74,124,142,0.04)"
                  border="rgba(74,124,142,0.15)"
                  title="Performance & analyse"
                  desc="Permettent de mesurer l'audience, analyser la navigation et améliorer les performances du site."
                  canDisable
                />
                <CookieTypeCard
                  Icon={Zap}
                  color="#C97D16"
                  bg="rgba(201,125,22,0.04)"
                  border="rgba(201,125,22,0.15)"
                  title="Cookies fonctionnels"
                  desc="Améliorent certaines fonctionnalités et personnalisent l'expérience utilisateur."
                  canDisable
                />
              </div>
            </LegalCard>

            {/* 04 — Gestion */}
            <LegalCard num="04" title="Gestion des cookies" i={3}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                L'utilisateur peut à tout moment gérer ses préférences de cookies :
              </p>
              <CheckList items={[
                'Accepter tous les cookies',
                'Refuser les cookies non essentiels',
                'Modifier ses préférences via les paramètres du navigateur',
              ]} />
              <div style={{ marginTop: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(201,125,22,0.08)', border: '1px solid rgba(201,125,22,0.18)', borderRadius: 8, padding: '0.45rem 0.9rem' }}>
                <ToggleLeft size={13} style={{ color: '#C97D16' }} />
                <span style={{ ...S.label, color: '#C97D16' }}>Contrôle total utilisateur</span>
              </div>
            </LegalCard>

            {/* 05 — Désactivation */}
            <LegalCard num="05" title="Désactivation des cookies" i={4}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                La désactivation de certains cookies peut affecter le bon fonctionnement
                de certaines parties du site.
              </p>
              <Callout strong>
                Seuls les cookies essentiels sont indispensables. La désactivation des autres
                cookies n'empêche pas l'accès au site ni à ses fonctionnalités principales.
              </Callout>
            </LegalCard>

            {/* 06 — Données collectées */}
            <LegalCard num="06" title="Données collectées par les cookies" i={5}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Les cookies peuvent collecter certaines informations techniques telles que :
              </p>
              <CheckList items={[
                'Adresse IP (anonymisée)',
                'Type de navigateur et version',
                'Appareil utilisé (mobile, tablette, desktop)',
                'Pages consultées et ordre de navigation',
                'Durée de navigation sur le site',
              ]} />
            </LegalCard>

            {/* 07 — Responsable */}
            <LegalCard num="07" title="Responsable du traitement" i={6}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem', marginBottom: '1rem' }}>
                <InfoRow label="Raison sociale" value="H PRO TRAVAUX" />
                <InfoRow label="Forme juridique" value="SAS au capital de 10 000 €" />
              </div>
              <div style={{ borderTop: '1px solid rgba(28,31,20,0.07)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', ...S.body }}>
                  <MapPin size={13} style={{ color: '#C97D16', flexShrink: 0, marginTop: 3 }} />
                  <span>47 Rue Vivienne · 75002 Paris — France</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', ...S.body }}>
                  <Mail size={13} style={{ color: '#C97D16', flexShrink: 0 }} />
                  <a href="mailto:contact@hpro-travaux.fr" style={S.link}>contact@hpro-travaux.fr</a>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', ...S.body }}>
                  <Phone size={13} style={{ color: '#C97D16', flexShrink: 0 }} />
                  <a href="tel:+33673746670" style={S.link}>06 73 74 66 70</a>
                </div>
              </div>
            </LegalCard>

            {/* 08 — Hébergement */}
            <LegalCard num="08" title="Hébergement" i={7}>
              <p style={{ ...S.body, marginBottom: '1.2rem' }}>Le site est hébergé par :</p>
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                <InfoRow label="Prestataire" value="Netlify, Inc." />
                <InfoRow label="Adresse" value="44 Montgomery Street, Suite 300 · San Francisco, CA 94104 · États-Unis" />
                <InfoRow label="Site web" value="netlify.com" href="https://www.netlify.com/" isExternal />
              </div>
            </LegalCard>

            {/* 09 — Modification */}
            <LegalCard num="09" title="Modification de la politique de cookies" i={8}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                H PRO TRAVAUX se réserve le droit de modifier la présente politique de cookies
                afin d'assurer sa conformité avec la réglementation en vigueur.
              </p>
              <Callout strong>
                Toute modification sera publiée sur cette page avec la date de mise à jour.
                Nous vous invitons à la consulter régulièrement.
              </Callout>
            </LegalCard>

          </div>

          {/* ── Navigation ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              marginTop: 'clamp(3rem, 5vw, 5rem)',
              display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center',
            }}
          >
            {[
              { label: '← Retour à l\'accueil', href: '/', primary: true },
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
            ].map(({ label, href, primary }) => (
              <a key={href} href={href} style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: '0.84rem', fontFamily: 'var(--font-sans)', fontWeight: 500,
                textDecoration: 'none',
                padding: '0.7rem 1.4rem', borderRadius: 99,
                color: primary ? '#C97D16' : '#5A6040',
                border: primary ? '1px solid rgba(201,125,22,0.3)' : '1px solid rgba(28,31,20,0.12)',
                background: primary ? 'rgba(201,125,22,0.06)' : 'rgba(28,31,20,0.04)',
              }}>
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
