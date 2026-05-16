import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const guarantees = [
  'Visite de site gratuite et sans engagement',
  'Devis détaillé poste par poste',
  'Artisans certifiés RGE — Aides MaPrimeRénov\'',
]

const infoStats = [
  { num: '48h', label: 'Délai de réponse' },
  { num: '100%', label: 'Gratuit & sans engagement' },
  { num: '250+', label: 'Chantiers réalisés' },
  { num: '4.9/5', label: 'Satisfaction client' },
]

export default function ContactForm() {
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
              <form
                name="devis"
                method="POST"
                action="/success.html"
                data-netlify="true"
                netlify-honeypot="bot-field"
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

                <motion.button
                  type="submit"
                  className="form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Envoyer ma demande
                  <ArrowRight size={14} />
                </motion.button>

                <p className="form-note">
                  Réponse garantie sous 48h · Visite gratuite · Sans engagement
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
