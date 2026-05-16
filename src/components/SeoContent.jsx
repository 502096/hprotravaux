/*
 * SeoContent — bloc de contenu textuel optimisé pour l'indexation Google.
 * Design sobre, couleurs neutres, intégré avant le footer.
 */

const services = [
  { name: 'Plomberie', desc: 'Installation, remplacement de canalisations, sanitaires, robinetterie.' },
  { name: 'Électricité', desc: 'Mise aux normes, tableau électrique, prises, éclairage, domotique.' },
  { name: 'Peinture & Enduits', desc: 'Préparation des supports, peinture intérieure, enduits décoratifs.' },
  { name: 'Carrelage & Parquet', desc: 'Pose de carrelage, parquet massif, stratifié, jonc de mer.' },
  { name: 'Menuiserie', desc: 'Portes, fenêtres, placards sur mesure, dressing, aménagement intérieur.' },
  { name: 'Isolation thermique', desc: 'Isolation des murs, combles, planchers — éligible MaPrimeRénov\'.' },
  { name: 'Faux-plafonds', desc: 'Pose de faux-plafonds, spots encastrés, isolation phonique.' },
  { name: 'Rénovation complète', desc: 'Coordination de tous les corps de métier de A à Z.' },
]

const zones = [
  'Paris (75)', 'Seine-Saint-Denis (93)', 'Seine-et-Marne (77)',
  'Livry-Gargan', 'Les Pavillons-sous-Bois', 'Claye-Souilly',
  'Bondy', 'Aulnay-sous-Bois', 'Noisy-le-Grand',
  'Montreuil', 'Villemomble', 'Gagny', 'Vaujours', 'Coubron',
]

const faq = [
  {
    q: 'Intervenez-vous à Paris et en petite couronne ?',
    a: 'Oui, Hpro Travaux intervient à Paris et dans toute l\'Île-de-France, notamment en Seine-Saint-Denis (93) et en Seine-et-Marne (77). Nos équipes se déplacent sur l\'ensemble de la région.',
  },
  {
    q: 'Quels types de logements rénovez-vous ?',
    a: 'Nous prenons en charge la rénovation d\'appartements, de maisons individuelles, de studios, de bureaux et de locaux commerciaux. Chaque projet est étudié sur mesure selon vos besoins et votre budget.',
  },
  {
    q: 'Proposez-vous des aides pour financer les travaux ?',
    a: 'Nos artisans sont certifiés RGE (Reconnu Garant de l\'Environnement), ce qui vous permet de bénéficier des aides MaPrimeRénov\', de l\'éco-PTZ et des CEE. Nous vous accompagnons dans vos démarches.',
  },
  {
    q: 'Quel est le délai pour obtenir un devis ?',
    a: 'Nous vous répondons sous 48h et planifions une visite gratuite sur site. Le devis détaillé poste par poste vous est remis sans engagement, avec un chiffrage transparent.',
  },
  {
    q: 'Assurez-vous un suivi de chantier ?',
    a: 'Un chef de projet dédié coordonne l\'ensemble des artisans, vous tient informé à chaque étape et assure la réception finale. Vous avez un interlocuteur unique du début à la fin.',
  },
]

const S = {
  section: {
    background: '#F7F5F1',
    borderTop: '1px solid rgba(28,31,20,0.07)',
    padding: 'clamp(3rem, 6vw, 5rem) 0',
  },
  container: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
  },
  tag: {
    display: 'inline-block',
    fontSize: '0.6rem', fontWeight: 700,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#C97D16', marginBottom: '0.6rem',
  },
  h2: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
    fontWeight: 700, letterSpacing: '-0.02em',
    color: '#1C1F14', margin: '0 0 1rem',
    lineHeight: 1.2,
  },
  lead: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem', color: '#5A6040',
    lineHeight: 1.75, maxWidth: 720,
    margin: '0 0 2.5rem',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem',
    marginBottom: '3rem',
  },
  h3: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem', fontWeight: 700,
    color: '#1C1F14', margin: '0 0 0.85rem',
    letterSpacing: '-0.01em',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '0.75rem',
    marginBottom: '3rem',
  },
  serviceCard: {
    background: '#ffffff',
    border: '1px solid rgba(28,31,20,0.07)',
    borderRadius: 12,
    padding: '0.9rem 1rem',
  },
  serviceName: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.82rem', fontWeight: 700,
    color: '#1C1F14', marginBottom: '0.25rem',
  },
  serviceDesc: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem', color: '#5A6040',
    lineHeight: 1.6, margin: 0,
  },
  zoneWrap: {
    display: 'flex', flexWrap: 'wrap',
    gap: '0.5rem', marginBottom: '3rem',
  },
  zone: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.76rem', fontWeight: 600,
    color: '#5A6040',
    background: 'rgba(28,31,20,0.05)',
    border: '1px solid rgba(28,31,20,0.09)',
    borderRadius: 99, padding: '0.3rem 0.85rem',
  },
  divider: {
    height: 1,
    background: 'rgba(28,31,20,0.07)',
    margin: '2.5rem 0',
  },
  faqItem: {
    borderBottom: '1px solid rgba(28,31,20,0.07)',
    paddingBottom: '1.1rem',
    marginBottom: '1.1rem',
  },
  faqQ: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem', fontWeight: 700,
    color: '#1C1F14', margin: '0 0 0.4rem',
    display: 'flex', gap: '0.5rem', alignItems: 'flex-start',
  },
  faqA: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.84rem', color: '#5A6040',
    lineHeight: 1.7, margin: 0, paddingLeft: '1.25rem',
  },
}

export default function SeoContent() {
  return (
    <section aria-label="Informations sur l'entreprise" style={S.section}>
      <div style={S.container}>

        {/* ── Présentation ── */}
        <div style={S.grid2}>
          <div>
            <span style={S.tag}>Qui sommes-nous</span>
            <h2 style={S.h2}>
              Votre entreprise de rénovation<br />intérieure en Île-de-France
            </h2>
            <p style={S.lead}>
              Fondée en 2018 par Hicham Zerouali, fort de 18 ans d'expérience sur les chantiers,
              <strong style={{ color: '#1C1F14' }}> Hpro Travaux</strong> est une entreprise de coordination
              et de réalisation de travaux de rénovation intérieure à Paris et en Île-de-France.
              Nous pilotons l'ensemble des corps de métier — plomberie, électricité, peinture,
              carrelage, menuiserie, isolation — pour vous offrir un résultat soigné sans mauvaise surprise.
            </p>
            <p style={{ ...S.lead, marginBottom: 0 }}>
              Avec plus de <strong style={{ color: '#1C1F14' }}>250 chantiers livrés</strong> et
              un taux de satisfaction de 98 %, nous sommes le partenaire de confiance des particuliers
              et investisseurs qui souhaitent rénover leur appartement, leur maison ou leurs locaux commerciaux.
            </p>
          </div>

          <div>
            <span style={S.tag}>Notre engagement</span>
            <h3 style={{ ...S.h3, fontSize: '1.1rem', marginBottom: '1rem' }}>
              Un interlocuteur unique, du devis à la réception
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Devis gratuit et détaillé poste par poste sous 48h',
                'Artisans certifiés RGE — éligibles MaPrimeRénov\'',
                'Chef de projet dédié sur chaque chantier',
                'Garantie décennale, biennale et RC professionnelle',
                'Transparence totale sur les coûts, zéro frais cachés',
                'Réponse rapide et visite de site gratuite',
              ].map((item) => (
                <li key={item} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                  marginBottom: '0.65rem',
                  fontFamily: 'var(--font-sans)', fontSize: '0.84rem',
                  color: '#5A6040', lineHeight: 1.5,
                }}>
                  <span style={{
                    color: '#C97D16', fontWeight: 700,
                    flexShrink: 0, marginTop: '0.05rem',
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Services ── */}
        <span style={S.tag}>Nos prestations</span>
        <h2 style={{ ...S.h2, marginTop: '0.4rem' }}>
          Tous les corps de métier coordonnés pour votre rénovation
        </h2>
        <div style={S.serviceGrid}>
          {services.map(({ name, desc }) => (
            <div key={name} style={S.serviceCard}>
              <p style={S.serviceName}>{name}</p>
              <p style={S.serviceDesc}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={S.divider} />

        {/* ── Zones d'intervention ── */}
        <span style={S.tag}>Zones d'intervention</span>
        <h2 style={{ ...S.h2, marginTop: '0.4rem' }}>
          Rénovation à Paris et dans toute l'Île-de-France
        </h2>
        <p style={{ ...S.lead, marginBottom: '1.25rem' }}>
          Nos équipes interviennent à Paris et dans les départements de la petite et grande couronne :
          Seine-Saint-Denis (93), Seine-et-Marne (77), Val-de-Marne (94), Hauts-de-Seine (92) et au-delà.
        </p>
        <div style={S.zoneWrap}>
          {zones.map((z) => (
            <span key={z} style={S.zone}>{z}</span>
          ))}
        </div>

        <div style={S.divider} />

        {/* ── FAQ SEO ── */}
        <span style={S.tag}>Questions fréquentes</span>
        <h2 style={{ ...S.h2, marginTop: '0.4rem', marginBottom: '1.5rem' }}>
          Tout savoir sur votre projet de rénovation
        </h2>
        <div style={{ maxWidth: 820 }}>
          {faq.map(({ q, a }, i) => (
            <div key={i} style={i === faq.length - 1 ? { ...S.faqItem, borderBottom: 'none', marginBottom: 0 } : S.faqItem}>
              <p style={S.faqQ}>
                <span style={{ color: '#C97D16', flexShrink: 0 }}>Q.</span>
                {q}
              </p>
              <p style={S.faqA}>{a}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
