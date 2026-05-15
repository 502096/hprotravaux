import { motion } from 'framer-motion'
import { Search, FileText, HardHat, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    phase: 'Étape 01',
    title: 'Gestion de projet',
    text: 'Nous analysons votre demande et apportons notre expertise en gestion de projet afin d\'en valider la faisabilité.',
  },
  {
    icon: FileText,
    phase: 'Étape 02',
    title: 'Etude et proposition',
    text: 'Nous élaborons une ou deux propositions conformes à vos attentes ; après validation, nous lançons le projet et sélectionnons les artisans à mobiliser.',
  },
  {
    icon: HardHat,
    phase: 'Étape 03',
    title: 'Travaux',
    text: 'Les travaux sont réalisés par des artisans qualifiés, selon le calendrier convenu, avec un suivi rigoureux tout au long du chantier afin d\'anticiper tout imprévu.',
  },
  {
    icon: CheckCircle,
    phase: 'Étape 04',
    title: 'Réception des travaux',
    text: 'En fin de travaux et après nettoyage, notre service de suivi vous invite à valider ensemble le résultat et recueillir vos éventuels besoins complémentaires afin d\'assurer votre satisfaction.',
  },
]

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="process-header">
          <motion.h2
            className="section-title light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Nos prestations clé en main
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              color: 'rgba(245,240,232,0.62)',
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '52ch',
              margin: '0 auto',
              fontWeight: 400,
            }}
          >
            Nous intervenons sur les prestations suivantes pour réaliser votre projet dans sa globalité et selon votre budget.
          </motion.p>
        </div>

        <div className="process-steps">
          {steps.map(({ icon: Icon, phase, title, text }, i) => (
            <motion.div
              key={title}
              className="process-step"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span className="process-step-num" aria-hidden>0{i + 1}</span>
              <motion.div
                className="process-step-icon"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Icon size={22} strokeWidth={1.5} />
              </motion.div>
              <div className="process-step-phase">{phase}</div>
              <h3 className="process-step-title">{title}</h3>
              <p className="process-step-text">{text}</p>

              {/* Animated line under each step */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: 0, left: '2.5rem', right: '2.5rem',
                  height: '1px',
                  background: 'rgba(201,125,22,0.2)',
                  scaleX: 0,
                  originX: 0,
                }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
