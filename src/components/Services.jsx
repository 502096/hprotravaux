import Marquee from 'react-fast-marquee'
import { Building2, ClipboardList, ShieldCheck, HeartHandshake } from 'lucide-react'

/* ─── Marquee data ─────────────────────────────────────────────── */

const marqueeData = [
  'Comment financer ma rénovation ?',
  'Quelles aides MaPrimeRénov\' existent ?',
  'Combien coûte une rénovation complète ?',
  'Comment choisir un bon prestataire ?',
  'Quels travaux nécessitent un permis ?',
  'Comment gérer les imprévus de chantier ?',
  'Dans quel ordre réaliser les travaux ?',
  'Comment isoler correctement mon logement ?',
  'Quelles garanties après les travaux ?',
  'Comment optimiser mon budget rénovation ?',
  'Combien de temps dure une rénovation ?',
  'Comment éviter les mauvaises surprises ?',
]

/* ─── Features ─────────────────────────────────────────────────── */

const features = [
  {
    Icon: Building2,
    title: 'Nous simplifions tout',
    desc: "Un interlocuteur unique pilote vos 10 corps de métier. Plus de coordination stressante.",
  },
  {
    Icon: ClipboardList,
    title: "Focus sur l'essentiel",
    desc: "Nous filtrons le bruit, clarifions vos priorités et optimisons chaque euro de votre budget.",
  },
  {
    Icon: ShieldCheck,
    title: 'Notre expertise, votre sérénité',
    desc: "Des centaines de chantiers réussis en Île-de-France. Nos garanties parlent d'elles-mêmes.",
  },
  {
    Icon: HeartHandshake,
    title: 'À vos côtés à chaque étape',
    desc: "De la conception à la livraison, suivi permanent et communication totalement transparente.",
  },
]

/* ─── QuestionBadge ─────────────────────────────────────────────── */

const QuestionBadge = ({ text }) => (
  <span className="mx-2 inline-flex items-center rounded-full border border-[#C5B99A]/70 bg-[#EDE7D8] px-4 py-1.5 text-sm font-medium text-[#3D4D22] whitespace-nowrap select-none">
    {text}
  </span>
)

/* ─── Component ─────────────────────────────────────────────────── */

export default function Services() {
  return (
    <section className="bg-[#F5F0E8] pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden" id="services">

      {/* ── Header ── */}
      <div className="mx-auto max-w-4xl px-6 text-center mb-14">
        <h2 className="text-3xl font-bold tracking-tight text-[#1C1F14] sm:text-4xl md:text-5xl leading-tight">
          Rénovation sur mesure,{' '}
          <br className="hidden sm:block" />
          finitions soignées
          <br className="hidden md:block" />
          {' '}et un suivi sans surprise
        </h2>
        <p className="mt-6 text-base leading-7 max-w-2xl mx-auto" style={{ color: '#4A7C8E' }}>
          Il est facile de se perdre dans un océan de devis contradictoires et de conseils
          incompréhensibles. Nous filtrons le bruit, nous concentrons sur ce qui compte vraiment
          et vous donnons la clarté pour que votre projet réussisse.
        </p>
      </div>

      {/* ── 3-row marquee ── */}
      <div className="flex flex-col gap-3">
        <Marquee speed={40} gradient={false}>
          {marqueeData.map((q, i) => <QuestionBadge key={i} text={q} />)}
        </Marquee>
        <Marquee speed={35} direction="right" gradient={false}>
          {marqueeData.map((q, i) => <QuestionBadge key={i} text={q} />)}
        </Marquee>
        <Marquee speed={40} gradient={false}>
          {marqueeData.map((q, i) => <QuestionBadge key={i} text={q} />)}
        </Marquee>
      </div>

      {/* ── Dashed separator ── */}
      <div className="mt-14 border-t border-dashed border-[#C5B99A]" />

      {/* ── Features grid ── */}
      <div className="mx-auto max-w-7xl px-0">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{
            borderTop: 'none',
          }}
        >
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="flex flex-col gap-6 p-8 lg:p-12"
              style={{
                borderRight: i < features.length - 1 ? '1px dashed #C5B99A' : 'none',
              }}
            >
              <Icon
                className="text-[#1C1F14]"
                style={{ width: 56, height: 56, strokeWidth: 1 }}
              />
              <div>
                <h3 className="text-xl font-semibold text-[#1C1F14] leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6040]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
