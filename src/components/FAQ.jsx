import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import faqData from '../content/faq.json'

const { section_tag, title, items: faqs } = faqData

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section style={{ background: '#0D0F0B', padding: '6rem 0' }} id="faq">
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.div
            className="section-tag amber"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ justifyContent: 'center' }}
          >
            {section_tag}
          </motion.div>
          <motion.h2
            className="section-title light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                style={{
                  borderRadius: 12,
                  border: isOpen
                    ? '1px solid rgba(201,125,22,0.35)'
                    : '1px solid rgba(255,255,255,0.07)',
                  background: isOpen ? 'rgba(201,125,22,0.06)' : 'rgba(255,255,255,0.03)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, background 0.25s',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                    fontWeight: 600,
                    color: isOpen ? '#C97D16' : '#F5F0E8',
                    lineHeight: 1.45,
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 0 : 0 }}
                    style={{
                      flexShrink: 0,
                      width: 28, height: 28,
                      borderRadius: 7,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isOpen ? 'rgba(201,125,22,0.2)' : 'rgba(255,255,255,0.07)',
                      transition: 'background 0.2s',
                    }}
                  >
                    {isOpen
                      ? <Minus size={14} color="#C97D16" strokeWidth={2.5} />
                      : <Plus size={14} color="rgba(245,240,232,0.6)" strokeWidth={2.5} />
                    }
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 1.5rem 1.4rem',
                        borderTop: '1px solid rgba(201,125,22,0.15)',
                        paddingTop: '1rem',
                      }}>
                        <p style={{
                          fontSize: '0.88rem',
                          color: 'rgba(245,240,232,0.62)',
                          lineHeight: 1.8,
                          margin: 0,
                          fontFamily: 'var(--font-sans)',
                        }}>
                          {a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
