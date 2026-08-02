import { PRODUCTS } from '../data.js'
import Reveal from './Reveal.jsx'

function Card({ p, index, className }) {
  return (
    <Reveal delay={index * 90} className={className}>
      <article className="group relative flex h-full flex-col bg-cream-3 ring-1 ring-ink/10">
        {/* Foto crop dramatis */}
        <div className="relative overflow-hidden">
          <img
            src={p.img}
            alt={`Botol ${p.name}`}
            className="crop aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
            loading="lazy"
          />
          <span className="eyebrow absolute left-4 top-4 bg-cream/85 px-3 py-1.5 text-ink/60 backdrop-blur-sm">
            {p.no}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl tracking-tight text-ink">{p.name}</h3>
            <span className="text-[0.7rem] tracking-wide text-ink/45">{p.size}</span>
          </div>
          <p className="eyebrow text-ink/55">{p.tagline}</p>
          <p className="mt-3 max-w-[40ch] text-[0.85rem] font-light leading-relaxed text-ink/65">
            {p.note}
          </p>
          <div className="mt-auto flex items-center justify-between border-t hairline pt-5">
            <span className="font-display text-lg text-ink">{p.price}</span>
            <a href="#reservasi" className="eyebrow u-line text-ink/70 hover:text-ink">
              Lihat detail
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Showcase() {
  return (
    <section id="koleksi" className="mx-auto w-full max-w-[1400px] px-6 pb-28 md:px-10 md:pb-40">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow text-brass-dim">Koleksi · No. 01</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="display mt-6 text-[clamp(2.4rem,5vw,4rem)] text-ink"
              style={{ fontVariationSettings: "'SOFT' 60, 'WONK' 1" }}
            >
              Tiga wangi,
              <span className="it font-light"> satu musim.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-[42ch] text-[0.88rem] font-light leading-relaxed text-ink/65 md:text-right">
            Tidak ada koleksi abadi. Setiap aroma dihentikan saat musimnya usai —
            yang tersisa hanyalah kenangan yang ia tinggalkan di kulit Anda.
          </p>
        </Reveal>
      </div>

      {/* Grid dipatahkan sengaja — ukuran dan ritme tiap kartu berbeda */}
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-20 md:grid-cols-12">
        <Card p={PRODUCTS[0]} index={0} className="md:col-span-7" />
        <Card p={PRODUCTS[1]} index={1} className="md:col-span-5 md:mt-24" />

        <Card p={PRODUCTS[2]} index={2} className="md:col-span-5" />
        {/* blok manifesto mengisi ruang kanan — bukan kartu produk */}
        <Reveal delay={120}>
          <div className="relative flex h-full flex-col justify-between border border-ink/10 bg-cream p-8 md:col-span-7 md:p-10">
            <p className="eyebrow text-ink/55">Manifesto</p>
            <blockquote
              className="display max-w-[14ch] pt-8 text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.05] text-ink"
              style={{ fontVariationSettings: "'SOFT' 80" }}
            >
              “Wangi yang terlalu keras adalah —{' '}
              <span className="it">kekerasan,</span> bukan keramahan.”
            </blockquote>
            <div className="mt-12 flex items-center gap-4 text-[0.72rem] tracking-[0.2em] uppercase text-ink/50">
              <span className="block h-px w-12 bg-ink/30" />
              Prinsip No. 1 — Vespér
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}