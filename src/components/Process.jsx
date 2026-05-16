import { motion } from 'framer-motion'
import { Search, FileText, HardHat, CheckCircle, Wrench, Settings } from 'lucide-react'
import processData from '../content/process.json'

const ICON_MAP = { Search, FileText, HardHat, CheckCircle, Wrench, Settings, Tool: Wrench }

const steps = processData.steps.map(s => ({
  ...s,
  icon: ICON_MAP[s.iconName] || CheckCircle,
}))

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
            {processData.title}
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
            {processData.lead}
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
