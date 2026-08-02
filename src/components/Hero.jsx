import { IMG } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-ink text-cream">
      {/* Full-bleed image botol + grade gelap dari kiri */}
      <img
        src={IMG.hero}
        alt="Botol parfum VESPÉR di atas permukaan gelap"
        className="crop absolute inset-0 h-full w-full object-cover object-center opacity-60"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      {/* ---- Teks kecil di pojok ---- */}
      <p className="eyebrow absolute left-6 top-24 text-cream/55 md:left-10">
        Maison de parfum — No. 01
      </p>

      <p className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2" aria-hidden="true">
        <span
          className="eyebrow block text-cream/40"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.5em' }}
        >
          Keheningan, bukan kelebihan
        </span>
      </p>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 hidden items-center gap-3 md:flex">
        <span className="eyebrow text-cream/50">Gulir untuk menjelajahi</span>
        <span className="block h-px w-10 bg-cream/30" />
      </div>

      {/* ---- Headline, overlap dengan gambar ---- */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-14 pt-40 md:px-10 md:pb-16">
        <Reveal>
          <h1
            className="display max-w-[16ch] text-[clamp(3rem,8.5vw,7rem)] text-cream"
            style={{ fontVariationSettings: "'SOFT' 60, 'WONK' 1" }}
          >
            Wangi adalah{' '}
            <span className="it display font-light" style={{ fontVariationSettings: 'normal' }}>
              bahasa
            </span>{' '}
            yang tidak diucapkan.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[46ch] text-[0.95rem] font-light leading-relaxed text-cream/70">
              VESPÉR menyuling keheningan menjadi wangi — satu botol per musim, ditimbang
              perlahan di atelier kami. Bukan untuk hadir; untuk&nbsp;diingat.
            </p>
            <a href="#koleksi" className="btn-ghost btn-ghost--light shrink-0">
              <span>Jelajahi Koleksi</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}