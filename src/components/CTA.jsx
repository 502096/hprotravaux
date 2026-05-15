import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="cta-inner">
          <motion.div
            className="cta-tag"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ justifyContent: 'center' }}
          >
            Passez à l'action
          </motion.div>

          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Votre projet mérite<br />
            le meilleur.
          </motion.h2>

          <motion.p
            className="cta-sub"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.22 }}
          >
            Contactez-nous dès aujourd'hui pour une visite gratuite et un devis sans engagement sous 48h.
          </motion.p>

          <motion.div
            className="cta-actions"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.34 }}
          >
            <motion.a
              className="btn-cta-white"
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            >
              Demander mon devis
              <ArrowRight size={14} />
            </motion.a>
            <motion.a
              className="btn-cta-ghost"
              href="tel:+33673746670"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={14} />
              Nous appeler
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
