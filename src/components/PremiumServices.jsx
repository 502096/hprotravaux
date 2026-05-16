import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GlowCard } from './ui/GlowCard'
import servicesData from '../content/services.json'

/* ─── Data ─────────────────────────────────────────────────────── */

const SERVICES = servicesData.items.map((item, i) => ({ ...item, id: i + 1 }))

/* ─── ServiceCard ───────────────────────────────────────────────── */

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.14,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <GlowCard
        glowColor={service.glowColor}
        customSize
        className="w-full h-[540px] group cursor-pointer"
        style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease' }}
      >
        {/* ── Image (1fr) ── */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />

          {/* Gradient: bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          {/* Decorative number — bottom-left of image */}
          <span
            aria-hidden
            className="absolute bottom-3 left-4 select-none leading-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '4.5rem',
              fontWeight: 900,
              color: 'rgba(201,125,22,0.55)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {service.num}
          </span>
        </div>

        {/* ── Content (auto) ── */}
        <div className="flex flex-col gap-3 pb-1">
          {/* Thin amber rule */}
          <div
            className="h-px w-8 transition-all duration-500 group-hover:w-14"
            style={{ background: '#C97D16' }}
          />

          <h3
            className="text-white leading-snug"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 1.15vw, 1.12rem)',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            {service.title}
          </h3>

          <p
            className="leading-relaxed"
            style={{
              color: 'rgba(245,240,232,0.50)',
              fontSize: '0.8rem',
              fontWeight: 300,
              lineHeight: 1.78,
            }}
          >
            {service.desc}
          </p>

          <div
            className="inline-flex items-center gap-2 mt-auto text-[0.6rem] font-bold tracking-[0.18em] uppercase transition-all duration-300 group-hover:gap-3"
            style={{ color: '#C97D16' }}
          >
            Découvrir
            <ArrowRight size={11} strokeWidth={2.5} />
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}

/* ─── Section header ────────────────────────────────────────────── */

function SectionHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="text-center mb-16 md:mb-20">
      <motion.div
        className="section-tag amber"
        style={{ justifyContent: 'center' }}
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {servicesData.section_tag}
      </motion.div>

      <motion.h2
        className="section-title light mt-3"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {servicesData.title1}
        <span style={{ color: '#C97D16' }}>{servicesData.title2}</span>
      </motion.h2>

      <motion.p
        className="section-lead light mx-auto mt-5 text-center"
        style={{ maxWidth: 520 }}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {servicesData.lead}
      </motion.p>
    </div>
  )
}

/* ─── Main ──────────────────────────────────────────────────────── */

export default function PremiumServices() {
  return (
    <section
      id="services-premium"
      style={{
        background: '#080A06',
        padding: '9rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(245,240,232,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.022) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient glow — top right */}
      <div
        aria-hidden
        style={{
          position: 'absolute', top: '-12%', right: '-6%', width: 640, height: 640,
          background: 'radial-gradient(ellipse, rgba(201,125,22,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow — bottom left */}
      <div
        aria-hidden
        style={{
          position: 'absolute', bottom: '-10%', left: '-5%', width: 520, height: 520,
          background: 'radial-gradient(ellipse, rgba(85,107,47,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader />

        {/* 3-column cards grid */}
        <div className="premium-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="premium-cta-btn inline-flex items-center gap-3 font-bold"
          >
            {servicesData.cta_text}
            <span className="premium-cta-icon">
              <ArrowRight size={13} strokeWidth={2.5} />
            </span>
          </button>
        </motion.div>
      </div>

      <style>{`
        .premium-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .premium-cta-btn {
          background: transparent;
          border: 1px solid rgba(201,125,22,0.4);
          color: #C97D16;
          padding: 0.9rem 2rem;
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 9999px;
          transition: background 0.28s, border-color 0.28s, color 0.28s;
          font-family: var(--font-sans);
        }
        .premium-cta-btn:hover {
          background: #C97D16;
          border-color: #C97D16;
          color: #000;
        }
        .premium-cta-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(201,125,22,0.14);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.28s;
        }
        .premium-cta-btn:hover .premium-cta-icon { background: rgba(0,0,0,0.18); }

        @media (max-width: 1024px) {
          .premium-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .premium-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          #services-premium { padding: 5.5rem 0 !important; }
        }
      `}</style>
    </section>
  )
}
