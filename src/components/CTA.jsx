import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section id="reservasi" className="relative overflow-hidden bg-ink text-cream">
      {/* bingkai tipis editorial */}
      <div className="pointer-events-none absolute inset-3 border border-cream/15 md:inset-5" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 py-32 text-center md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow text-brass">Reservasi · Satu Musim</p>
        </Reveal>
        <Reveal delay={90}>
          <h2
            className="display mt-8 max-w-[14ch] text-[clamp(2.6rem,7vw,5.6rem)] text-cream"
            style={{ fontVariationSettings: "'SOFT' 60, 'WONK' 1" }}
          >
            Keheningan
            <br />
            <span className="it text-cream/80">menunggu</span> Anda.
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-[44ch] text-[0.9rem] font-light leading-relaxed text-cream/60">
            Edisi No. 01 dibatasi delapan ratus botol — dihitung untuk melayani satu musim, bukan diratapi selamanya.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-14">
            <a href="#" className="btn-ghost btn-ghost--light">
              <span>Reservasi botol Anda</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}