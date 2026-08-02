import Reveal from './Reveal.jsx'

const QUOTES = [
  {
    q: 'Aku mengenali VESPÉR dari jarak sepuluh langkah — bukan dalam jumlah, tetapi dalam apa yang ia tahan.',
    name: 'A. Kusumaatmadja',
    role: 'Kurator wangi · Jakarta',
    size: 'text-[clamp(1.7rem,3.4vw,2.9rem)]',
  },
  {
    q: 'Ia bukan parfum untuk hadir. Ia parfum untuk diingat.',
    name: 'I. Siregar',
    role: 'Penulis dan editor mode',
    size: 'text-[clamp(1.3rem,2.6vw,2.1rem)]',
  },
]

export default function Testimonial() {
  return (
    <section id="suara" className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-brass-dim">Suara</p>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="display mt-6 text-[clamp(2rem,3.6vw,3rem)] text-ink">
          Dibicarakan dalam <span className="it">bisikan,</span>
        </h2>
      </Reveal>

      {/* dua kutipan — ukuran dan posisi asimetris, no card, no avatar */}
      <div className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-12 md:gap-x-10">
        <Reveal className="md:col-span-7">
          <div className="border-t hairline pt-10">
            <span className="it display block text-7xl leading-none text-brass md:text-8xl">“</span>
            <blockquote
              className={`display mt-2 max-w-[16ch] leading-[1.06] tracking-tight text-ink ${QUOTES[0].size}`}
              style={{ fontVariationSettings: "'SOFT' 80, 'WONK' 1" }}
            >
              {QUOTES[0].q}
            </blockquote>
            <figcaption className="mt-8 text-[0.72rem] tracking-[0.22em] uppercase text-ink/55">
              {QUOTES[0].name} <span className="mx-2 text-ink/30">—</span> {QUOTES[0].role}
            </figcaption>
          </div>
        </Reveal>

        <Reveal delay={140} className="md:col-span-5 md:mt-28">
          <div className="border-t border-b border-ink/20 pt-10">
            <span className="it display block text-6xl leading-none text-burgundy md:text-7xl">“</span>
            <blockquote
              className={`display mt-2 leading-tight text-ink ${QUOTES[1].size}`}
              style={{ fontVariationSettings: "'SOFT' 80, 'WONK' 0" }}
            >
              {QUOTES[1].q}
            </blockquote>
            <figcaption className="mt-8 text-[0.72rem] tracking-[0.22em] text-ink/55">
              {QUOTES[1].name} <span className="mx-2 text-ink/30">—</span> {QUOTES[1].role}
            </figcaption>
          </div>
        </Reveal>
      </div>
    </section>
  )
}