import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Home } from 'lucide-react'

const guarantees = [
  'Visite de site gratuite et sans engagement',
  'Devis détaillé poste par poste',
  "Artisans certifiés RGE — Aides MaPrimeRénov'",
]

const infoStats = [
  { num: '48h',   label: 'Délai de réponse' },
  { num: '100%',  label: 'Gratuit & sans engagement' },
  { num: '250+',  label: 'Chantiers réalisés' },
  { num: '4.9/5', label: 'Satisfaction client' },
]

/* ── Inline success block ─────────────────────────────────── */

function SuccessBlock() {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'clamp(2rem, 6vw, 3rem)',
        minHeight: 360,
        justifyContent: 'center',
      }}
    >
      {/* Animated check circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 80, height: 80,
          borderRadius: '50%',
          background: 'rgba(107,125,58,0.12)',
          border: '2px solid rgba(107,125,58,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
          stroke="#6B7D3A" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </motion.div>

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          background: 'rgba(107,125,58,0.1)',
          border: '1px solid rgba(107,125,58,0.25)',
          borderRadius: 99,
          padding: '0.3rem 0.9rem',
          fontSize: '0.62rem', fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#6B7D3A',
          marginBottom: '1rem',
        }}
      >
        ✔ Envoyé avec succès
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.3rem, 3vw, 1.65rem)',
          fontWeight: 700,
          color: '#1C1F14',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          margin: '0 0 0.85rem',
        }}
      >
        Demande envoyée avec succès
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.5 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.92rem',
          color: '#5A6040',
          lineHeight: 1.7,
          maxWidth: 380,
          margin: '0 0 0.4rem',
        }}
      >
        Votre demande de devis a bien été reçue par notre équipe.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.5 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.92rem',
          fontWeight: 600,
          color: '#F4A300',
          margin: '0 0 2rem',
        }}
      >
        Nous vous recontactons sous 24h ouvrés.
      </motion.p>

      {/* Mini stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        style={{
          display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: '2rem',
        }}
      >
        {[
          { num: '24h',   label: 'Délai de réponse' },
          { num: '100%',  label: 'Gratuit' },
          { num: '4.9/5', label: 'Satisfaction' },
        ].map(({ num, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <span style={{
              display: 'block', fontSize: '1.2rem', fontWeight: 700,
              color: '#F4A300',
            }}>{num}</span>
            <span style={{
              display: 'block', fontSize: '0.62rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(90,96,64,0.6)',
              marginTop: '0.15rem',
            }}>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.a
        href="/"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.52, duration: 0.45 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: '#1C1F14', color: '#F5F0E8',
          fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 700,
          border: 'none', borderRadius: 99,
          padding: '0.8rem 1.6rem',
          textDecoration: 'none', cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#2A3518'}
        onMouseLeave={e => e.currentTarget.style.background = '#1C1F14'}
      >
        <Home size={14} />
        Retour à l'accueil
      </motion.a>
    </motion.div>
  )
}

/* ── ContactForm ──────────────────────────────────────────── */

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = e.target
    const data = new URLSearchParams(new FormData(form)).toString()

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="section-tag">Devis gratuit</div>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
              Parlez-nous<br />de votre projet
            </h2>
            <p className="section-lead">
              Remplissez le formulaire, nous vous recontactons sous 24h ouvrés pour organiser une visite et établir votre devis.
            </p>

            <div className="contact-info-stats">
              {infoStats.map(({ num, label }) => (
                <div key={label} className="ci-stat">
                  <div className="ci-stat-num">{num}</div>
                  <div className="ci-stat-label">{label}</div>
                </div>
              ))}
            </div>

            <div className="contact-guarantees">
              {guarantees.map((g) => (
                <div key={g} className="cg-item">
                  <CheckCircle size={15} strokeWidth={2} style={{ stroke: 'var(--olive)', fill: 'none' }} />
                  {g}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="form-box">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <SuccessBlock key="success" />
                ) : (
                  <motion.form
                    key="form"
                    name="devis"
                    method="POST"
                    action="/success.html"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input type="hidden" name="form-name" value="devis" />
                    <p style={{ display: 'none' }}>
                      <label>Ne pas remplir : <input name="bot-field" /></label>
                    </p>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="prenom">Prénom *</label>
                        <input className="form-input" type="text" id="prenom" name="prenom" required placeholder="Jean" autoComplete="given-name" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="nom">Nom *</label>
                        <input className="form-input" type="text" id="nom" name="nom" required placeholder="Dupont" autoComplete="family-name" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email *</label>
                      <input className="form-input" type="email" id="email" name="email" required placeholder="jean.dupont@email.fr" autoComplete="email" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="tel">Téléphone *</label>
                      <input className="form-input" type="tel" id="tel" name="telephone" required placeholder="06 12 34 56 78" autoComplete="tel" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="type">Type de projet *</label>
                      <select className="form-select" id="type" name="type_projet" required defaultValue="">
                        <option value="" disabled>Sélectionner…</option>
                        <option value="renovation-complete">Rénovation complète</option>
                        <option value="cuisine">Cuisine</option>
                        <option value="salle-de-bain">Salle de bain</option>
                        <option value="chambre-dressing">Chambre / Dressing</option>
                        <option value="peinture">Peinture & Revêtements</option>
                        <option value="isolation">Isolation thermique</option>
                        <option value="local-commercial">Local commercial</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="surface">Surface</label>
                        <select className="form-select" id="surface" name="surface" defaultValue="">
                          <option value="" disabled>m² approx.</option>
                          <option value="moins-30">Moins de 30 m²</option>
                          <option value="30-60">30 à 60 m²</option>
                          <option value="60-100">60 à 100 m²</option>
                          <option value="100-150">100 à 150 m²</option>
                          <option value="plus-150">Plus de 150 m²</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="budget">Budget indicatif</label>
                        <select className="form-select" id="budget" name="budget" defaultValue="">
                          <option value="" disabled>Fourchette</option>
                          <option value="moins-10k">Moins de 10 000 €</option>
                          <option value="10k-30k">10 000 — 30 000 €</option>
                          <option value="30k-60k">30 000 — 60 000 €</option>
                          <option value="60k-plus">60 000 € et plus</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Décrivez votre projet</label>
                      <textarea
                        className="form-textarea"
                        id="message"
                        name="message"
                        placeholder="État actuel, souhaits, contraintes, délais souhaités…"
                      />
                    </div>

                    <label className="form-check">
                      <input type="checkbox" name="rgpd" required />
                      <span className="form-check-label">
                        J'accepte que mes données soient utilisées pour ma demande de devis. Aucun démarchage.
                      </span>
                    </label>

                    {error && (
                      <p style={{
                        color: '#c0392b', fontSize: '0.85rem',
                        margin: '0.5rem 0', fontFamily: 'var(--font-sans)',
                      }}>
                        Une erreur est survenue. Veuillez réessayer ou nous contacter par email.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      className="form-submit"
                      disabled={submitting}
                      whileHover={submitting ? {} : { scale: 1.02 }}
                      whileTap={submitting ? {} : { scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'wait' : 'pointer' }}
                    >
                      {submitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
                      {!submitting && <ArrowRight size={14} />}
                    </motion.button>

                    <p className="form-note">
                      Réponse garantie sous 48h · Visite gratuite · Sans engagement
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
