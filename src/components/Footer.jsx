import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import HproLogo from '@/components/ui/HproLogo'
import settingsData from '../content/settings.json'

/* ─── Data ───────────────────────────────────────────────────── */

const scrollTo = (href) => {
  if (!href || href === '#') return
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const socialLinks = [
  { Icon: Instagram, label: 'Instagram', href: settingsData.instagram },
  { Icon: Facebook,  label: 'Facebook',  href: settingsData.facebook },
  { Icon: Linkedin,  label: 'LinkedIn',  href: settingsData.linkedin },
]

const serviceLinks = [
  { text: 'Plomberie',           href: '#services' },
  { text: 'Électricité',         href: '#services' },
  { text: 'Peinture & Enduits',  href: '#services' },
  { text: 'Carrelage & Parquet', href: '#services' },
  { text: 'Menuiserie',          href: '#services' },
  { text: 'Isolation thermique', href: '#services' },
]

const companyLinks = [
  { text: 'Notre histoire',   href: '#whyus' },
  { text: 'Notre processus',  href: '#process' },
  { text: 'Nos réalisations', href: '#gallery' },
  { text: 'Avis clients',     href: '#testimonials' },
  { text: 'Certifications RGE', href: '#whyus' },
]

const usefulLinks = [
  { text: 'Devis gratuit',   href: '#contact', hasIndicator: true },
  { text: 'Mentions légales', href: '/mentions-legales', isPage: true },
  { text: 'Confidentialité', href: '/politique-confidentialite', isPage: true },
  { text: 'Politique de cookies', href: '/politique-cookies', isPage: true },
  { text: 'CGU', href: '/cgu', isPage: true },
]

const contactInfo = [
  { Icon: Mail,   text: settingsData.email,        href: `mailto:${settingsData.email}` },
  { Icon: Phone,  text: settingsData.phone_display, href: settingsData.phone_href },
  { Icon: MapPin, text: settingsData.address,       href: '#', isAddress: true },
]


/* ─── Footer ─────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #080A06 0%, #060807 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: 0,
        width: '100%',
        borderRadius: '1.25rem 1.25rem 0 0',
      }}
    >
      <div
        className="mx-auto max-w-screen-xl px-6 pt-16 pb-8 sm:px-8 lg:px-10 lg:pt-24"
      >
        {/* Top shimmer */}
        <div style={{
          height: 1,
          marginBottom: '4rem',
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,125,22,0.25) 40%, rgba(255,255,255,0.08) 60%, transparent 100%)',
        }} aria-hidden />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* ── Brand column ── */}
          <div>
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ opacity: 0.82, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center cursor-pointer"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <HproLogo height={36} />
            </motion.button>

            {/* Description */}
            <p style={{
              marginTop: '1.5rem',
              maxWidth: '22rem',
              fontSize: '0.82rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.42)',
              fontFamily: 'var(--font-sans)',
            }}>
              {settingsData.description}
            </p>

            {/* Social */}
            <ul className="mt-8 flex gap-4" role="list" aria-label="Réseaux sociaux">
              {socialLinks.map(({ Icon, label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12, color: '#C97D16' }}
                    whileTap={{ scale: 0.94 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36, height: 36,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'rgba(255,255,255,0.45)',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <Icon size={15} strokeWidth={1.7} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Link columns ── */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">

            {/* Services */}
            <div className="text-center sm:text-left">
              <p style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#E1E0CC',
                fontFamily: 'var(--font-sans)',
              }}>
                Services
              </p>
              <ul className="mt-6 space-y-3">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                      style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.48)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        fontFamily: 'var(--font-sans)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#E1E0CC'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div className="text-center sm:text-left">
              <p style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#E1E0CC',
                fontFamily: 'var(--font-sans)',
              }}>
                Entreprise
              </p>
              <ul className="mt-6 space-y-3">
                {companyLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                      style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.48)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        fontFamily: 'var(--font-sans)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#E1E0CC'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liens utiles */}
            <div className="text-center sm:text-left">
              <p style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#E1E0CC',
                fontFamily: 'var(--font-sans)',
              }}>
                Liens utiles
              </p>
              <ul className="mt-6 space-y-3">
                {usefulLinks.map(({ text, href, hasIndicator, isPage }) => (
                  <li key={text}>
                    <a
                      href={href}
                      onClick={isPage ? undefined : (e) => { e.preventDefault(); scrollTo(href) }}
                      className={hasIndicator ? 'flex items-center justify-center sm:justify-start gap-1.5' : ''}
                      style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.48)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        fontFamily: 'var(--font-sans)',
                        display: hasIndicator ? 'flex' : 'block',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#E1E0CC'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
                    >
                      <span>{text}</span>
                      {hasIndicator && (
                        <span className="relative flex" style={{ width: 7, height: 7, marginLeft: 4 }}>
                          <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ background: '#C97D16' }}
                          />
                          <span
                            className="relative inline-flex rounded-full"
                            style={{ width: 7, height: 7, background: '#C97D16' }}
                          />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <p style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#E1E0CC',
                fontFamily: 'var(--font-sans)',
              }}>
                Contact
              </p>
              <ul className="mt-6 space-y-3">
                {contactInfo.map(({ Icon, text, href, isAddress }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="flex items-start justify-center sm:justify-start gap-2"
                      style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.48)', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#E1E0CC'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
                    >
                      <Icon size={14} style={{ color: '#C97D16', flexShrink: 0, marginTop: 1 }} strokeWidth={1.8} />
                      {isAddress ? (
                        <address style={{ fontStyle: 'normal', fontSize: '0.8rem', lineHeight: 1.55, fontFamily: 'var(--font-sans)' }}>
                          {text}
                        </address>
                      ) : (
                        <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-sans)' }}>{text}</span>
                      )}
                    </a>
                  </li>
                ))}
                <li style={{
                  marginTop: '0.75rem',
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.28)',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.03em',
                }}>
                  {settingsData.hours}
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-sans)' }}>
            © {new Date().getFullYear()} Hpro-travaux. Tous droits réservés.
          </p>
          <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.22)', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>
            {settingsData.zones}
          </p>
          <p style={{ fontSize: '0.74rem', fontFamily: 'var(--font-sans)', display: 'flex', gap: '1rem' }}>
            <a href="/mentions-legales" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E1E0CC'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >Mentions légales</a>
            <a href="/politique-confidentialite" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E1E0CC'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >Confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
