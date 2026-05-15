import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react'
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
    transition: 'opacity 0.2s',
  },
}

/* ─── Card wrapper ───────────────────────────────────────────── */

function LegalCard({ num, title, children, i = 0 }) {
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
        <a href={href}
          target={isExternal ? '_blank' : undefined}
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
      padding: '0.9rem 1rem',
      borderRadius: 10,
      background: strong ? 'rgba(201,125,22,0.07)' : 'rgba(28,31,20,0.04)',
      borderLeft: `2px solid ${strong ? '#C97D16' : 'rgba(201,125,22,0.35)'}`,
      ...S.body,
    }}>
      {children}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function PolitiqueConfidentialitePage() {
  useEffect(() => {
    document.title = 'Politique de confidentialité — H Pro Travaux'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Politique de confidentialité de H Pro Travaux — Comment nous collectons, utilisons et protégeons vos données personnelles. Conformité RGPD.')
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
              Conformité RGPD
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
            <span style={{ color: '#C97D16' }}>confidentialité.</span>
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
              <ShieldCheck size={11} />
              Conforme RGPD
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Shimmer separator ── */}
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
                La présente politique de confidentialité a pour objectif d'informer les utilisateurs
                du site H PRO TRAVAUX sur la manière dont leurs données personnelles sont collectées,
                utilisées et protégées.
              </p>
              <div style={{ marginTop: '1.2rem' }}>
                <Callout strong>
                  Vos données personnelles ne sont jamais revendues à des tiers ni utilisées à des
                  fins commerciales sans votre consentement explicite.
                </Callout>
              </div>
            </LegalCard>

            {/* 02 — Responsable */}
            <LegalCard num="02" title="Responsable du traitement" i={1}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem', marginBottom: '1rem' }}>
                <InfoRow label="Raison sociale" value="H PRO TRAVAUX" />
                <InfoRow label="Forme juridique" value="SAS au capital de 10 000 €" />
                <InfoRow label="SIRET" value="10436778400014" />
              </div>
              <div style={{ borderTop: '1px solid rgba(28,31,20,0.07)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', ...S.body }}>
                  <MapPin size={13} style={{ color: '#C97D16', flexShrink: 0, marginTop: 3 }} />
                  <span>47 Rue Vivienne · 75002 Paris — France</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', ...S.body }}>
                  <Mail size={13} style={{ color: '#C97D16', flexShrink: 0 }} />
                  <a href="mailto:contact@hprotravaux.fr" style={S.link}>contact@hprotravaux.fr</a>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', ...S.body }}>
                  <Phone size={13} style={{ color: '#C97D16', flexShrink: 0 }} />
                  <a href="tel:+33673746670" style={S.link}>06 73 74 66 70</a>
                </div>
              </div>
            </LegalCard>

            {/* 03 — Données collectées */}
            <LegalCard num="03" title="Données collectées" i={2}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Les données susceptibles d'être collectées via le site sont :
              </p>
              <CheckList items={[
                'Nom et prénom',
                'Adresse email',
                'Numéro de téléphone',
                'Informations transmises dans les formulaires de contact ou de devis',
                'Données techniques de navigation',
              ]} />
            </LegalCard>

            {/* 04 — Finalité */}
            <LegalCard num="04" title="Finalité de la collecte" i={3}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Les données collectées sont utilisées exclusivement pour :
              </p>
              <CheckList items={[
                'Répondre aux demandes de contact',
                'Établir des devis personnalisés',
                'Assurer le suivi client',
                'Améliorer l\'expérience utilisateur',
                'Analyser l\'audience du site',
              ]} />
            </LegalCard>

            {/* 05 — Conservation */}
            <LegalCard num="05" title="Conservation des données" i={4}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Les données personnelles sont conservées uniquement pendant la durée nécessaire
                au traitement des demandes et à la relation commerciale.
              </p>
              <Callout>
                À l'issue de cette période, les données sont supprimées de manière sécurisée
                ou anonymisées.
              </Callout>
            </LegalCard>

            {/* 06 — Protection */}
            <LegalCard num="06" title="Protection des données" i={5}>
              <p style={S.body}>
                H PRO TRAVAUX met en œuvre les mesures techniques et organisationnelles nécessaires
                afin d'assurer la sécurité et la confidentialité des données personnelles contre
                tout accès non autorisé, perte, altération ou divulgation.
              </p>
              <div style={{ marginTop: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(201,125,22,0.08)', border: '1px solid rgba(201,125,22,0.18)', borderRadius: 8, padding: '0.45rem 0.9rem' }}>
                <ShieldCheck size={13} style={{ color: '#C97D16' }} />
                <span style={{ ...S.label, color: '#C97D16' }}>Données sécurisées & chiffrées</span>
              </div>
            </LegalCard>

            {/* 07 — Droits */}
            <LegalCard num="07" title="Droits des utilisateurs" i={6}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Conformément au RGPD, chaque utilisateur dispose des droits suivants :
              </p>
              <CheckList items={[
                "Droit d'accès à ses données",
                "Droit de rectification",
                "Droit de suppression (« droit à l'oubli »)",
                "Droit d'opposition au traitement",
                "Droit à la limitation du traitement",
              ]} />
              <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(28,31,20,0.07)', display: 'flex', alignItems: 'center', gap: '0.6rem', ...S.body }}>
                <Mail size={13} style={{ color: '#C97D16', flexShrink: 0 }} />
                Adressez votre demande à&nbsp;
                <a href="mailto:contact@hprotravaux.fr" style={S.link}>contact@hprotravaux.fr</a>
              </div>
            </LegalCard>

            {/* 08 — Cookies */}
            <LegalCard num="08" title="Cookies" i={7}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                Le site peut utiliser des cookies afin de :
              </p>
              <CheckList items={[
                "Améliorer l'expérience utilisateur",
                "Mesurer l'audience",
                "Optimiser les performances du site",
              ]} />
              <div style={{ marginTop: '1.2rem' }}>
                <Callout>
                  L'utilisateur peut modifier les paramètres de son navigateur afin de désactiver
                  les cookies à tout moment, sans que cela n'affecte l'accès au contenu du site.
                </Callout>
              </div>
            </LegalCard>

            {/* 09 — Hébergement */}
            <LegalCard num="09" title="Hébergement" i={8}>
              <p style={{ ...S.body, marginBottom: '1.2rem' }}>
                Le site est hébergé par :
              </p>
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                <InfoRow label="Prestataire" value="Netlify, Inc." />
                <InfoRow label="Adresse" value="44 Montgomery Street, Suite 300 · San Francisco, CA 94104 · États-Unis" />
                <InfoRow label="Site web" value="netlify.com" href="https://www.netlify.com/" isExternal />
              </div>
            </LegalCard>

            {/* 10 — Modifications */}
            <LegalCard num="10" title="Modification de la politique" i={9}>
              <p style={{ ...S.body, marginBottom: '1rem' }}>
                H PRO TRAVAUX se réserve le droit de modifier la présente politique de confidentialité
                à tout moment afin d'assurer sa conformité avec la législation en vigueur.
              </p>
              <Callout strong>
                Toute modification sera publiée sur cette page avec la date de mise à jour. Nous
                vous invitons à consulter régulièrement cette politique.
              </Callout>
            </LegalCard>

          </div>

          {/* ── Navigation links ── */}
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
            <a href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.84rem', fontFamily: 'var(--font-sans)',
              color: '#C97D16', textDecoration: 'none', fontWeight: 500,
              padding: '0.7rem 1.4rem', borderRadius: 99,
              border: '1px solid rgba(201,125,22,0.3)',
              background: 'rgba(201,125,22,0.06)',
              transition: 'background 0.2s',
            }}>
              ← Retour à l'accueil
            </a>
            <a href="/mentions-legales" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.84rem', fontFamily: 'var(--font-sans)',
              color: '#5A6040', textDecoration: 'none', fontWeight: 500,
              padding: '0.7rem 1.4rem', borderRadius: 99,
              border: '1px solid rgba(28,31,20,0.12)',
              background: 'rgba(28,31,20,0.04)',
              transition: 'background 0.2s',
            }}>
              Mentions légales →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
