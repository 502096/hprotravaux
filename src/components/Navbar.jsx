import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'À propos', href: '#whyus' },
  { label: 'Services', href: '#services' },
  { label: 'Processus', href: '#process' },
  { label: 'Réalisations', href: '#gallery' },
  { label: 'Avis', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <motion.div
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="nav-logo-diamond" />
          <span className="nav-logo-text">Hpro-travaux</span>
        </motion.div>

        <motion.div
          className="nav-links"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {links.map(({ label, href }) => (
            <a key={href} onClick={() => scrollTo(href)}>{label}</a>
          ))}
          <motion.a
            className="nav-cta"
            onClick={() => scrollTo('#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Devis gratuit
          </motion.a>
        </motion.div>

        <button
          className="nav-mob-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {links.map(({ label, href }) => (
              <a key={href} onClick={() => scrollTo(href)}>{label}</a>
            ))}
            <a onClick={() => scrollTo('#contact')}>Devis gratuit</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
