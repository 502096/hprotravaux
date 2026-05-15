import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TopbarNav } from '@/components/ui/topbar-nav'
import Footer from '@/components/Footer'
import ValuesSection from '@/components/ValuesSection'

const ABOUT_NAV_ITEMS = [
  { id: 'accueil',       label: 'Accueil',      href: '/' },
  { id: 'services',     label: 'Services',     href: '/#services' },
  { id: 'realisations', label: 'Réalisations', href: '/#gallery' },
  { id: 'processus',    label: 'Processus',    href: '/#process' },
  { id: 'a-propos',     label: 'À propos',     href: '/a-propos' },
  { id: 'contact',      label: 'Contact',      href: '/#contact' },
]

const stats = [
  { value: '2018',   label: 'Année de fondation' },
  { value: '18 ans', label: "D'expérience terrain" },
  { value: '10',     label: 'Corps de métier coordonnés' },
  { value: '98%',    label: 'Clients satisfaits' },
]

export default function AboutPage() {
  const goToContact = () => { window.location.href = '/#contact' }

  return (
    <div style={{ background: '#0A0C08', minHeight: '100vh', color: '#F5F0E8' }}>
      <TopbarNav items={ABOUT_NAV_ITEMS} defaultActiveId="a-propos" />

      {/* ── Hero intro ── */}
      <section style={{ padding: '5rem 0 4rem' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: text */}
            <div>
              <motion.div
                className="section-tag amber"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Notre histoire
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                <h1 style={{
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  margin: '1rem 0 0',
                }}>
                  À PROPOS
                </h1>
                <p style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.8rem)',
                  fontStyle: 'italic',
                  color: '#556B2F',
                  margin: '0.15rem 0 2rem',
                  lineHeight: 1.1,
                }}>
                  de nous
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
              >
                <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.78, fontSize: '0.96rem' }}>
                  Fondée en 2018, H Pro Travaux est une entreprise d'accompagnement, d'étude, de
                  coordination et suivi de vos projets de travaux de rénovation intérieure. De la
                  réflexion à la conception de votre projet, nous nous occupons de toutes les démarches
                  (plan et modélisation 3D, appel à des artisans qualifiés, suivi et réception des
                  travaux).
                </p>
                <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.78, fontSize: '0.96rem' }}>
                  Nous mettons notre expertise à votre service pour optimiser la gestion de vos travaux
                  afin de vous obtenir le meilleur rapport qualité prix, que ce soit pour votre
                  logement principal ou pour votre résidence secondaire.
                </p>
                <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.78, fontSize: '0.96rem' }}>
                  Grâce à une équipe qualifiée et dédiée, nous vous garantissons une prestation de
                  qualité avec des finitions soignées, un résultat durable et conforme à vos besoins
                  et un coût des travaux sans surprise.
                </p>
              </motion.div>

              <motion.button
                onClick={goToContact}
                className="inline-flex items-center gap-3 rounded-full font-bold"
                style={{
                  marginTop: '2.25rem',
                  background: '#C97D16',
                  color: '#000',
                  padding: '0.8rem 1.4rem 0.8rem 1.6rem',
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 14px 36px rgba(201,125,22,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                Demander un devis
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 32, height: 32, background: 'rgba(0,0,0,0.22)' }}
                >
                  <ArrowRight size={15} color="#000" />
                </span>
              </motion.button>
            </div>

            {/* Right: photo */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '4/5' }}
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85&fit=crop"
                alt="Rénovation intérieure par H Pro Travaux"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)',
              }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Founder quote ── */}
      <section style={{ background: '#111309', padding: '6rem 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-center">

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '3/4' }}
            >
              <img
                src="/images/HZ.jpg"
                alt="Hicham Zerouali, fondateur de H Pro Travaux"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 65%)',
              }} />
              <div style={{ position: 'absolute', bottom: '1.4rem', left: '1.4rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F5F0E8' }}>
                  Fondateur Hpro-travaux
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{
                width: 48, height: 3, background: '#C97D16',
                marginBottom: '2rem', borderRadius: 2,
              }} />
              <blockquote style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontWeight: 700,
                lineHeight: 1.65,
                letterSpacing: '0.035em',
                color: '#F5F0E8',
                textTransform: 'uppercase',
                margin: 0,
              }}>
                «&nbsp;J'AI PASSÉ 18 ANS À PILOTER DES CHANTIERS POUR DES COLLECTIVITÉS.
                AUJOURD'HUI JE METS CETTE EXPERTISE AU SERVICE DES PARTICULIERS ET
                INVESTISSEURS QUI VEULENT UNE RÉNOVATION BIEN GÉRÉE, SANS MAUVAISE
                SURPRISE.&nbsp;»
              </blockquote>
              <p style={{
                marginTop: '1.75rem',
                fontSize: '0.97rem',
                fontStyle: 'italic',
                color: '#C97D16',
              }}>
                — Fondateur Hpro-travaux
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Nos valeurs ── */}
      <ValuesSection />

      {/* ── Chiffres clés ── */}
      <section style={{ background: '#111309', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
                  fontWeight: 700,
                  color: '#C97D16',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  {value}
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'rgba(245,240,232,0.48)',
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  marginTop: '0.65rem',
                  lineHeight: 1.4,
                }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{
        background: 'linear-gradient(135deg, #3D4D22 0%, #2A3518 100%)',
        padding: '6rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)',
              fontWeight: 700,
              color: '#F5F0E8',
              marginBottom: '1.2rem',
            }}
          >
            Commençons votre projet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              color: 'rgba(245,240,232,0.68)',
              fontSize: '1.05rem',
              maxWidth: 460,
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}
          >
            Devis gratuit et sans engagement. Réponse sous 48h.
          </motion.p>
          <motion.button
            onClick={goToContact}
            className="inline-flex items-center gap-3 rounded-full font-bold"
            style={{
              background: '#C97D16',
              color: '#000',
              padding: '0.9rem 1.5rem 0.9rem 1.8rem',
              fontSize: '0.97rem',
              border: 'none',
              cursor: 'pointer',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 14px 36px rgba(201,125,22,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            Demander un devis gratuit
            <span
              className="flex items-center justify-center rounded-full"
              style={{ width: 34, height: 34, background: 'rgba(0,0,0,0.22)' }}
            >
              <ArrowRight size={15} color="#000" />
            </span>
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
