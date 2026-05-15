import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Scale } from 'lucide-react'
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
    fontSize: '0.6rem', fontWeight: 700,
    letterSpacing: '0.18em', color: '#C97D16',
    textTransform: 'uppercase', marginBottom: '0.6rem',
  },
  sectionTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 700,
    color: '#1C1F14', letterSpacing: '-0.01em',
    margin: '0 0 1.2rem', lineHeight: 1.25,
  },
  body: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.88rem', lineHeight: 1.85, color: '#3D4A28',
  },
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.72rem', fontWeight: 700,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A6040',
  },
  value: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.88rem', color: '#1C1F14', lineHeight: 1.6,
  },
  link: { color: '#C97D16', textDecoration: 'none', fontWeight: 500 },
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
        background: '#ffffff', borderRadius: 16,
        padding: 'clamp(1.6rem, 3vw, 2.4rem)',
        border: '1px solid rgba(28,31,20,0.07)',
        boxShadow: '0 2px 16px rgba(28,31,20,0.05)',
        position: 'relative', overflow: 'hidden',
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

/* ─── InternalLink ───────────────────────────────────────────── */

function InternalLink({ href, children }) {
  return (
    <a href={href} style={{
      ...S.link, display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
      fontSize: '0.85rem',
    }}>
      {children}
    </a>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function CguPage() {
  useEffect(() => {
    document.title = "Conditions Générales d'Utilisation — H Pro Travaux"
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', "Conditions Générales d'Utilisation du site H Pro Travaux — Modalités d'accès, utilisation, propriété intellectuelle, responsabilité et droit applicable.")
  }, [])

  return (
    <div style={{ background: '#FAF7F2', minHeight: '100vh' }}>
      <TopbarNav items={NAV_ITEMS} />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(160deg, #0A0C08 0%, #1C1F14 60%, #2A3518 100%)',
        padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(245,240,232,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.025) 1px, transparent 1px)',
          backgroundSize: '52px 52px', pointerEvents: 'none',
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
              Document contractuel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', fontWeight: 700,
              letterSpacing: '-0.03em', lineHeight: 1.05,
              color: '#F5F0E8', margin: '0 0 1.2rem',
            }}
          >
            Conditions générales
            <br />
            <span style={{ color: '#C97D16' }}>d'utilisation.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}
          >
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.84rem',
              color: 'rgba(245,240,232,0.42)', letterSpacing: '0.06em',
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
              <Scale size={11} />
              Droit français
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

            {/* 01 — Objet */}
            <LegalCard num="01" title="Objet" i={0}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Les présentes Conditions Générales d'Utilisation ont pour objet de définir les
                modalités d'accès et d'utilisation du site H PRO TRAVAUX.
              </p>
              <Callout strong>
                En naviguant sur le site, l'utilisateur accepte pleinement et entièrement les
                présentes conditions d'utilisation.
              </Callout>
            </LegalCard>

            {/* 02 — Informations */}
            <LegalCard num="02" title="Informations sur l'entreprise" i={1}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem', marginBottom: '1rem' }}>
                <InfoRow label="Raison sociale" value="H PRO TRAVAUX" />
                <InfoRow label="Forme juridique" value="SAS au capital de 10 000 €" />
                <InfoRow label="SIRET" value="10436778400014" />
                <InfoRow label="TVA intracommunautaire" value="FR71104367784" />
              </div>
              <div style={{ borderTop: '1px solid rgba(28,31,20,0.07)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', ...S.body }}>
                  <MapPin size={13} style={{ color: '#C97D16', flexShrink: 0, marginTop: 3 }} />
                  <span>47 Rue Vivienne · 75002 Paris — France</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', ...S.body }}>
                  <Phone size={13} style={{ color: '#C97D16', flexShrink: 0 }} />
                  <a href="tel:+33673746670" style={S.link}>06 73 74 66 70</a>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', ...S.body }}>
                  <Mail size={13} style={{ color: '#C97D16', flexShrink: 0 }} />
                  <a href="mailto:contact@hpro-travaux.fr" style={S.link}>contact@hpro-travaux.fr</a>
                </div>
              </div>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(28,31,20,0.07)', marginTop: '0.5rem' }}>
                <InfoRow label="Directeur de publication" value="Hicham Zerouali" />
              </div>
            </LegalCard>

            {/* 03 — Accès */}
            <LegalCard num="03" title="Accès au site" i={2}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Le site est accessible <strong>24h/24 et 7j/7</strong> sauf interruption pour
                maintenance, mise à jour ou cas de force majeure.
              </p>
              <Callout>
                H PRO TRAVAUX ne saurait être tenu responsable d'une interruption temporaire
                du site, quelle qu'en soit la cause.
              </Callout>
            </LegalCard>

            {/* 04 — Utilisation */}
            <LegalCard num="04" title="Utilisation du site" i={3}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                L'utilisateur s'engage à utiliser le site :
              </p>
              <CheckList items={[
                'Dans le respect des lois et règlements en vigueur',
                'Sans porter atteinte au bon fonctionnement du site',
                "Sans tenter d'accéder frauduleusement aux systèmes",
                'Sans diffuser de contenus illicites ou préjudiciables',
              ]} />
              <div style={{ marginTop: '1.2rem' }}>
                <Callout strong>
                  Toute utilisation abusive ou frauduleuse du site pourra entraîner des
                  poursuites judiciaires.
                </Callout>
              </div>
            </LegalCard>

            {/* 05 — Propriété intellectuelle */}
            <LegalCard num="05" title="Propriété intellectuelle" i={4}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Tous les contenus présents sur le site sont protégés par le droit de la
                propriété intellectuelle :
              </p>
              <CheckList items={[
                'Textes et rédactionnels',
                'Images et photographies',
                'Logos et identité visuelle',
                'Graphismes et illustrations',
                'Vidéos et animations',
                'Éléments visuels et mise en page',
              ]} />
              <div style={{ marginTop: '1.2rem' }}>
                <Callout strong>
                  Toute reproduction totale ou partielle sans autorisation écrite préalable
                  de H PRO TRAVAUX est strictement interdite.
                </Callout>
              </div>
            </LegalCard>

            {/* 06 — Responsabilité */}
            <LegalCard num="06" title="Responsabilité" i={5}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                H PRO TRAVAUX s'efforce de fournir des informations fiables et à jour.
                Toutefois, l'entreprise ne peut garantir l'exactitude, l'exhaustivité ou
                l'absence d'erreurs sur l'ensemble du site.
              </p>
              <Callout>
                L'utilisateur reste seul responsable de l'utilisation des informations
                présentes sur le site et des décisions qu'il en tire.
              </Callout>
            </LegalCard>

            {/* 07 — Liens externes */}
            <LegalCard num="07" title="Liens externes" i={6}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Le site peut contenir des liens hypertextes vers des sites externes.
              </p>
              <Callout>
                H PRO TRAVAUX ne peut être tenu responsable du contenu, du fonctionnement
                ou des pratiques en matière de confidentialité de ces sites tiers.
              </Callout>
            </LegalCard>

            {/* 08 — Données personnelles */}
            <LegalCard num="08" title="Données personnelles" i={7}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Les données personnelles collectées via le site sont traitées conformément
                à notre politique de confidentialité.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ ...S.body }}>Consulter&nbsp;</span>
                <InternalLink href="/politique-confidentialite">
                  la Politique de confidentialité →
                </InternalLink>
              </div>
            </LegalCard>

            {/* 09 — Cookies */}
            <LegalCard num="09" title="Cookies" i={8}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Le site peut utiliser des cookies afin d'améliorer l'expérience utilisateur
                et mesurer l'audience.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ ...S.body }}>Consulter&nbsp;</span>
                <InternalLink href="/politique-cookies">
                  la Politique de cookies →
                </InternalLink>
              </div>
            </LegalCard>

            {/* 10 — Modification */}
            <LegalCard num="10" title="Modification des CGU" i={9}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                H PRO TRAVAUX se réserve le droit de modifier les présentes Conditions
                Générales d'Utilisation à tout moment, afin d'assurer leur conformité avec
                la réglementation en vigueur.
              </p>
              <Callout strong>
                La poursuite de la navigation après modification vaut acceptation des nouvelles
                conditions. Nous vous invitons à consulter cette page régulièrement.
              </Callout>
            </LegalCard>

            {/* 11 — Droit applicable — full width */}
            <LegalCard num="11" title="Droit applicable" i={10} fullWidth>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                gap: '0.9rem',
              }}>
                {[
                  {
                    icon: '🇫🇷',
                    title: 'Droit français',
                    desc: 'Les présentes CGU sont régies et interprétées conformément au droit français.',
                  },
                  {
                    icon: '⚖️',
                    title: 'Juridictions compétentes',
                    desc: "Tout litige relatif à l'utilisation du site relève de la compétence exclusive des juridictions françaises.",
                  },
                  {
                    icon: '🤝',
                    title: 'Résolution amiable',
                    desc: "En cas de litige, une résolution amiable sera privilégiée avant toute action judiciaire.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{
                    padding: '1rem 1.1rem', borderRadius: 12,
                    background: 'rgba(28,31,20,0.03)',
                    border: '1px solid rgba(28,31,20,0.07)',
                  }}>
                    <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{icon}</div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 700, color: '#1C1F14', margin: '0 0 0.35rem' }}>
                      {title}
                    </p>
                    <p style={{ ...S.body, margin: 0, fontSize: '0.82rem', color: '#5A6040' }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
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
              { label: "← Retour à l'accueil", href: '/', primary: true },
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'Confidentialité', href: '/politique-confidentialite' },
              { label: 'Cookies', href: '/politique-cookies' },
            ].map(({ label, href, primary }) => (
              <a key={href} href={href} style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: '0.84rem', fontFamily: 'var(--font-sans)', fontWeight: 500,
                textDecoration: 'none', padding: '0.7rem 1.4rem', borderRadius: 99,
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
